"use client";

import { Badge, Col, Row } from "react-bootstrap";
import { ChevronRight, FileText, Hourglass } from "lucide-react";
import type { AllPDFItem } from "@/data/allPDF";

type PDFCardProps = {
  item: AllPDFItem;
};

export default function PDFCard({ item }: PDFCardProps) {
  const handleOpenPDF = () => {
    if (!item.pdfUrl) return;

    window.open(item.pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="programme-wrapper">
      <div className="programme-list">
        <div
          className="programme-card"
          onClick={handleOpenPDF}
          style={{ cursor: item.pdfUrl ? "pointer" : "default" }}
        >
          <Row className="align-items-center">
            <Col xs={10} md={11}>
              <div className="d-flex align-items-center gap-3">
                <div className="small-icon-box">
                  {item.pending ? (
                    <Hourglass size={28} strokeWidth={2} />
                  ) : (
                    <FileText size={28} strokeWidth={2} />
                  )}
                </div>

                <div className="grow">
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

            <Col xs={2} md={1} className="text-end">
              <ChevronRight size={30} className="arrow-icon" />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
