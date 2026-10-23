"use client";

import InnerpageBanner from "@/components/InnerpageBanner";
import { Row, Col } from "react-bootstrap";
import { ChevronRight, FileText } from "lucide-react";

interface AdmissionItem {
  id: number;
  title: string;
  pdf: string;
}

const admissionData: AdmissionItem[] = [
  {
    id: 1,
    title: "ATKT Rules",
    pdf: "/pdf/academics/notice-board/ATKT-rule.pdf",
  },
  {
    id: 2,
    title: "CNG Rule",
    pdf: "/pdf/academics/notice-board/CNG-rule.pdf",
  },
  {
    id: 3,
    title: "Examination Rulebook",
    pdf: "/pdf/academics/notice-board/examination-rulebook.pdf",
  },
  
];

const UndergraduateAdmissionsPage = () => {
  return (
    <div className="mainpage-wrapper academic_calendar_main">
      <InnerpageBanner
        title="Examination"
        breadcrumbs={[{ label: "Academics" }, { label: "Examination" }]}
      />

      <div className="Innerpage_main notice-attendance-main">
        <div className="container-fluid">
          <div className="programme-wrapper">
            <div className="row align-items-center">
              
              <div className="col-lg-8 col-md-10">
                <div className="heading innerpageheading">Notice Board</div>
                <div className="programme-list">
                  {admissionData.map((item) => (
                    <a
                      key={item.id}
                      className="programme-card"
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <Row className="align-items-center">
                        <Col xs={10} md={11}>
                          <div className="d-flex align-items-center gap-2 gap-sm-3">
                            <div className="small-icon-box">
                              <FileText size={28} strokeWidth={2} />
                            </div>
                            <div className="grow">
                              <div className="d-flex flex-wrap flex-column flex-md-row align-items-md-center gap-2">
                                <h5 className="programme-title mb-0">
                                  {item.title}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </Col>

                        <Col xs={2} md={1} className="text-end">
                          <ChevronRight size={30} className="arrow-icon" />
                        </Col>
                      </Row>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UndergraduateAdmissionsPage;
