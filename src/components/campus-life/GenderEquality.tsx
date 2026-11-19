import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import { FileText, Hourglass, ChevronRight } from "lucide-react";

interface ProgrammeItem {
  id: number;
  title: string;
  pdfUrl: string;
  pending?: boolean;
}

const programmeData: ProgrammeItem[] = [
  {
    id: 1,
    title: "Gender Equality Activities",
    pdfUrl:
      "/pdf/campus-life/gender_equality/Gender_Equality_Activities_2025-26.pdf",
  },
  {
    id: 2,
    title: "ISR Activities Varsity Care",
    pdfUrl:
      "/pdf/campus-life/gender_equality/ISR_Activities_VarsityCare_25-26_Report.pdf",
  },
];

const GenderEquality = () => {
  const handleOpenPDF = (url?: string) => {
    if (!url) return;

    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="main_content">
      <div className="programme-wrapper">
        <div className="heading innerpageheading">Gender Equality / ISR Activities</div>
        <div className="row">
          <div className="col-md-12">
            <div className="programme-list">
              {programmeData.map((item) => (
                <div
                  key={item.id}
                  className="programme-card"
                  onClick={() => handleOpenPDF(item.pdfUrl)}
                  style={{ cursor: "pointer" }}
                >
                  <Row className="align-items-center">
                    {/* Left */}
                    <Col xs={10} md={11}>
                      <div className="d-flex align-items-center gap-3">
                        <div className="small-icon-box">
                          {item.pending ? (
                            <Hourglass size={28} strokeWidth={2} />
                          ) : (
                            <FileText size={28} strokeWidth={2} />
                          )}
                        </div>

                        <div className="flex-grow-1">
                          <div className="d-flex flex-wrap flex-column flex-md-row align-items-md-center gap-2">
                            <h5 className="programme-title mb-0">
                              {item.title}
                            </h5>

                            {item.pending && (
                              <Badge className="pending-badge">
                                <Hourglass size={14} className="me-1" />
                                Approval is pending
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </Col>
                    {/* Right */}
                    <Col xs={2} md={1} className="text-end p-0">
                      <ChevronRight size={30} className="arrow-icon" />
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderEquality;
