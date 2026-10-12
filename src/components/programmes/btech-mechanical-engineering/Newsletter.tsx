'use client';

import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FileText, Hourglass, ChevronRight } from 'lucide-react';

interface ProgrammeItem {
  id: number;
  title: string;
  pdfUrl: string;
  pending?: boolean;
}
const programmeData: ProgrammeItem[] = [
  {
    id: 1,
    title: 'Newsletter (July to Dec 2025)',
    pdfUrl:
      '/pdf/programmes/btech-AI/newsletter/SIT_Pune_AIML_JULY_DEC_2025_NEWSLETTER.pdf',
  },
  {
    id: 2,
    title: 'Newsletter (Jan-May 2025)',
    pdfUrl:
      '/pdf/programmes/btech-AI/newsletter/Jan-May-25-AIML-Newsletter.pdf',
  },
  {
    id: 3,
    title: 'Newsletter (Jul-Dec 2024)',
    pdfUrl:
      '/pdf/programmes/btech-AI/newsletter/AIML-Newsletter.pdf',
  },
];

export default function ProgrammeStructurePage() {
  const handleOpenPDF = (url?: string) => {
    if (!url) return;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <div className="main_content">
        <div className="programme-wrapper">
          <div className="heading innerpageheading">
            Newsletter
          </div>

          <div className="programme-list">
            {programmeData.map((item) => (
              <div
                key={item.id}
                className="programme-card"
                onClick={() => handleOpenPDF(item.pdfUrl)}
                style={{ cursor: 'pointer' }}
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