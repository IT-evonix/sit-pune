"use client";

import InnerpageBanner from "@/components/InnerpageBanner";
import { Row, Col } from "react-bootstrap";
import { ChevronRight, FileText } from "lucide-react";
import Image from "next/image";

interface AdmissionItem {
  id: number;
  title: string;
  pdf: string;
}

const admissionData: AdmissionItem[] = [
  {
    id: 1,
    title: "B.Tech First Year Odd & Even A.Y. 2026-27",
    pdf: "/pdf/academics/academic-calendar/1-B-Tech-first-year-ODD&EVEN-2026-27.pdf",
  },
  {
    id: 2,
    title: "B.Tech Higher Semester Odd & Even A.Y. 2026-27",
    pdf: "/pdf/academics/academic-calendar/2-B-Tech-Higher-sem-ODD&EVEN-2026-27.pdf",
  },
  {
    id: 3,
    title: "M.Tech First Year Odd & Even A.Y. 2026-27",
    pdf: "/pdf/academics/academic-calendar/3-M-Tech-First-year-ODD&EVEN-2026-27.pdf",
  },
  {
    id: 4,
    title: "M.Tech Higher Semester Odd & Even A.Y. 2026-27",
    pdf: "/pdf/academics/academic-calendar/4-M-Tech-Higher-sem-ODD&EVEN-2026-27.pdf",
  },
  
];

const UndergraduateAdmissionsPage = () => {
  return (
    <div className="mainpage-wrapper academic_calendar_main">
      <InnerpageBanner
        title="Academic Calendar"
        breadcrumbs={[{ label: "Academics" }, { label: "Academic Calendar" }]}
      />

      <div className="Innerpage_main">
        <div className="container-fluid">
          <div className="programme-wrapper">
            <div className="row align-items-center">
              <div className="col-md-4">
                <div className="academic_calender_img">
                  <Image
                    src="/images/innerpages/academics/academic_calender_image.webp"
                    width={700}
                    height={584}
                    alt="academic_calender_img"
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="heading innerpageheading">Academic Calendar</div>
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
