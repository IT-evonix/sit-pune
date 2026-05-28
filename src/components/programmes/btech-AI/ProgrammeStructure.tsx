'use client';

import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FileText, Hourglass, ChevronRight } from 'lucide-react';

interface ProgrammeItem {
  id: number;
  title: string;
  batch: string;
  pending?: boolean;
}

const programmeData: ProgrammeItem[] = [
  {
    id: 1,
    title: 'Provisional Programme Structure',
    batch: '2026-30',
    pending: true,
  },
  {
    id: 2,
    title: 'Programme structure',
    batch: '2025-2029',
  },
  {
    id: 3,
    title: 'Programme structure',
    batch: '2024-2028',
  },
  {
    id: 4,
    title: 'Programme structure',
    batch: '2023-2027',
  },
  {
    id: 5,
    title: 'Programme structure',
    batch: '2022-2026',
  },
  {
    id: 6,
    title: 'Programme structure',
    batch: '2021-2025',
  },
];

export default function ProgrammeStructurePage() {
  return (
    <>
      <Container fluid className="">
        <Container>
          <div className="programme-wrapper">
            
           <div className="heading innerpageheading">
              Provisional Programme Structure
            </div>

            {/* List */}
            <div className="programme-list">
              {programmeData.map((item, index) => (
                <div
                  className={`programme-card ${
                    index === 0 ? 'active-card' : ''
                  }`}
                  key={item.id}
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
                              {item.title} (Batch : {item.batch})
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
                      <ChevronRight
                        size={30}
                        className="arrow-icon"
                      />
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}