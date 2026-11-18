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
    title: "ACM Student Chapter",
    pdfUrl:
      "/pdf/campus-life/student-clubs/ACM-Student-Chapter.pdf",
  },
  {
    id: 2,
    title: "AI Club",
    pdfUrl:
      "/pdf/campus-life/student-clubs/AI-Club.pdf",
  },
  {
    id: 3,
    title: "AR-VR Club",
    pdfUrl:
      "/pdf/campus-life/student-clubs/AR-VRClub.pdf",
  },
  {
    id: 4,
    title: "ASCE Students Chapter",
    pdfUrl:
      "/pdf/campus-life/student-clubs/ASCE-Student-Chapter.pdf",
  },  
  {
    id: 5,
    title: "Brushes and Pixels",
    pdfUrl:
      "/pdf/campus-life/student-clubs/Brushes-and-Pixels.pdf",
  },
    {
    id: 6,
    title: "CESS",
    pdfUrl:
      "/pdf/campus-life/student-clubs/CESS.pdf",
  },
  // {
  //   id: 6,
  //   title: "Codex SIT",
  //   pdfUrl:
  //     "/pdf/campus-life/student-clubs/CodeX-SIT.pdf",
  // },
];

const StudentClubs = () => {
  const handleOpenPDF = (url?: string) => {
    if (!url) return;

    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="main_content programme-wrapper">
      <div className="heading innerpageheading">Student Clubs</div>
      <div className="studentclubs_main">
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
                        <h5 className="programme-title mb-0">{item.title}</h5>

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
  );
};

export default StudentClubs;
