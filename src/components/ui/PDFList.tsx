"use client";

import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import { FileText, Hourglass, ChevronRight } from "lucide-react";

import { PDFItem } from "@/data/pdfData";

interface PDFListProps {
  data: PDFItem[];
  heading?: string;
}

const PDFList: React.FC<PDFListProps> = ({ data, heading }) => {
  const handleOpenPDF = (url?: string) => {
    if (!url) return;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      {heading && <h3 className="pdf-heading">{heading}</h3>}

      <div className="programme-list">
        {data.map((item) => (
          <div
            key={item.id}
            className="programme-card"
            onClick={() => handleOpenPDF(item.pdfUrl)}
            style={{
              cursor: item.pdfUrl ? "pointer" : "default",
            }}
          >
            <Row className="align-items-center">
              {/* LEFT */}

              <Col xs={10} md={11}>
                <div className="d-flex align-items-center gap-3">
                  <div className="small-icon-box">
                    {item.pending ? (
                      <Hourglass size={28} />
                    ) : (
                      <FileText size={28} />
                    )}
                  </div>

                  <div className="flex-grow-1">
                    <div className="d-flex flex-wrap flex-column flex-md-row align-items-md-center gap-2">
                      <h5 className="programme-title mb-0">
                        {item.title} {item.batch}
                      </h5>

                      {item.pending && (
                        <Badge className="pending-badge">
                          <Hourglass size={14} />
                          Approval is pending
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </Col>

              {/* RIGHT */}

              <Col xs={2} md={1} className="text-end">
                <ChevronRight size={30} className="arrow-icon" />
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PDFList;
