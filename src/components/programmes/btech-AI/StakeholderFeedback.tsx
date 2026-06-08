'use client';

import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FileText, Hourglass, ChevronRight } from 'lucide-react';

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
    title: 'Stakeholder Feedback A.Y',
    batch: '2026-30',
    pdfUrl: '/pdf/programmes/btech-AI/stakeholder-feedback/SITB.TechAIML23-24.pdf',
  },
  {
    id: 2,
    title: 'Stakeholder Feedback A.Y',
    batch: '2025-2029',
    pdfUrl: '/pdf/programmes/btech-AI/stakeholder-feedback/1.4.2_SIT_070126_B.Tech_AIML_2022-23.pdf',
  },
  {
    id: 3,
    title: 'Stakeholder Feedback A.Y',
    batch: '2024-2028',
    pdfUrl: '',
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
              Stakeholder Feedback
            </div>

            {/* List */}
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