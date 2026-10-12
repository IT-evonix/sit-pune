"use client";

import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import { FileText, Hourglass, ChevronRight } from "lucide-react";

interface ProgrammeItem {
  id: number;
  title: string;
  batch: string;
  pdfUrl: string;
  pending?: boolean;
}

const programmeData: ProgrammeItem[] = [
  {
    id: 1,
    title: "B.Tech AIML Program Structure (Provisional)",
    batch: "2026-30",
    pdfUrl:
      "/pdf/programmes/btech-AI/program-structure/B.Tech-AIML-2026-30-Program-Structure-Provisional.pdf",
  },
  {
    id: 2,
    title: "B.Tech AIML Program Structure.pdf",
    batch: "2025-2029",
    pdfUrl:
      "/pdf/programmes/btech-AI/program-structure/B.Tech-AIML-2025-29-Program-Structure.pdf",
  },
  {
    id: 3,
    title: "B.Tech AIML Program Structure.pdf",
    batch: "2024-2028",
    pdfUrl:
      "/pdf/programmes/btech-AI/program-structure/B.Tech-AIML-2024-28-Program-Structure.pdf",
  },
  {
    id: 4,
    title: "B.Tech AIML Program Structure",
    batch: "2023-2027",
    pdfUrl:
      "/pdf/programmes/btech-AI/program-structure/B.Tech-AIML-2023-27-Program-Structure.pdf",
  },
  {
    id: 5,
    title: "B.Tech AIML Program Structure",
    batch: "2022-2026",
    pdfUrl:
      "/pdf/programmes/btech-AI/program-structure/B.Tech-AIML-2022-26-Program-Structure.pdf",
  },
];

export default function ProgrammeStructurePage() {
  const handleOpenPDF = (url?: string) => {
    if (!url) return;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <div className="main_content">
        <div className="programme-wrapper">
          <div className="heading innerpageheading">Curriculum</div>

          {/* List */}
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
                            {item.title} {item.batch}
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
                  <Col xs={2} md={1} className="text-end">
                    <ChevronRight size={30} className="arrow-icon" />
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
