"use client";

import { useState } from "react";
import "@/app/css/admission.css";
import Image from "next/image";
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
    pdfUrl: "/pdf/campus-life/mentor/Merged_Mentoring_Policy.pdf",
  },
];

const programmeDataList: ProgrammeItem[] = [
  {
    id: 1,
    title: "Artificial Intelligence and Machine Learning",
    pdfUrl: "/pdf/campus-life/mentor/AIML.pdf",
  },
  {
    id: 2,
    title: "Civil Engineering",
    pdfUrl: "/pdf/campus-life/mentor/Civil.pdf",
  },
  {
    id: 3,
    title: "Computer Science and Engineering",
    pdfUrl: "/pdf/campus-life/mentor/CSE.pdf",
  },
  {
    id: 4,
    title: "Electronics and Telecommunication Engineering",
    pdfUrl: "/pdf/campus-life/mentor/ENTC.pdf",
  },
  {
    id: 5,
    title: "Mechanical Engineering",
    pdfUrl: "/pdf/campus-life/mentor/Mechanical.pdf",
  },
  {
    id: 6,
    title: "Robotics and Automation",
    pdfUrl: "/pdf/campus-life/mentor/RA.pdf",
  },
  {
    id: 7,
    title: "First Year Engg.(Applied Science Dept.)",
    pdfUrl: "/pdf/campus-life/mentor/Applied-Science.pdf",
  },
];

const Mentoring = () => {
  const [activeTab, setActiveTab] = useState("siteee");
  const handleOpenPDF = (url?: string) => {
    if (!url) return;

    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="main_content">
      <div className="admission-tabs monitoring_main">
        <ul
          className="nav nav-tabs"
          role="tablist"
          aria-label="Admission routes"
        >
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link${activeTab === "siteee" ? " active" : ""}`}
              id="mentoring-chief-mentor-tab"
              type="button"
              role="tab"
              aria-controls="mentoring-chief-mentor-panel"
              aria-selected={activeTab === "siteee"}
              onClick={() => setActiveTab("siteee")}
            >
              Chief Mentor
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link${activeTab === "MentoringPolicy" ? " active" : ""}`}
              id="mentoring-policy-tab"
              type="button"
              role="tab"
              aria-controls="mentoring-policy-panel"
              aria-selected={activeTab === "MentoringPolicy"}
              onClick={() => setActiveTab("MentoringPolicy")}
            >
              Mentoring Policy
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link${activeTab === "mentorList" ? " active" : ""}`}
              id="mentor-list-tab"
              type="button"
              role="tab"
              aria-controls="mentor-list-panel"
              aria-selected={activeTab === "mentorList"}
              onClick={() => setActiveTab("mentorList")}
            >
              Mentor List
            </button>
          </li>
        </ul>

        <div className="tab-content admission-tabs-content">
          <div
            className={`tab-pane fade${activeTab === "siteee" ? " show active" : ""}`}
            id="mentoring-chief-mentor-panel"
            role="tabpanel"
            aria-labelledby="mentoring-chief-mentor-tab"
            hidden={activeTab !== "siteee"}
            tabIndex={0}
          >
            <div className="profilemain">
              <div className="profilecontent">
                <div className="heading innerpageheading">Chief Mentor,</div>
                <p className="m-0 p-0">
                  The Department of Artificial Intelligence & Machine Learning
                  at Symbiosis Institute of Technology, Pune, stands at the
                  forefront of AI education, empowering students to shape the
                  future through intelligent technologies. Established in 2021,
                  the department combines a strong Computer Science foundation
                  with emerging domains including Generative AI, Agentic AI,
                  Large Language Models, Computer Vision, Data Science,
                  Intelligent Systems, Quantum Computing, and Responsible AI.
                  Supported by advanced laboratories, global academic
                  collaborations, industry-integrated learning, and flexible
                  Majors & Minors, the department cultivates innovation,
                  research excellence, and leadership—preparing graduates to
                  excel as AI professionals, researchers, entrepreneurs, and
                  changemakers in an increasingly AI-driven world.
                </p>
              </div>
              <div className="profileImage">
                <Image
                  src="/images/campus-life/mentor/Bhavna-Ambudkar.webp"
                  alt="Sumit Kumar"
                  width={320}
                  height={380}
                />
                <div className="profileDescription">
                  <div className="profileName">Dr. Bhavna Ambudkar</div>
                  <div className="profileDepartment">
                    <b>Chief Mentor,</b>
                    <div>
                      <span>
                        Symbiosis Institute of Technology, Symbiosis
                        International (Deemed) University,
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`tab-pane fade${activeTab === "MentoringPolicy" ? " show active" : ""}`}
            id="mentoring-policy-panel"
            role="tabpanel"
            aria-labelledby="mentoring-policy-tab"
            hidden={activeTab !== "MentoringPolicy"}
            tabIndex={0}
          >
            <div className="monitoring_list">
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
          <div
            className={`tab-pane fade${activeTab === "mentorList" ? " show active" : ""}`}
            id="mentor-list-panel"
            role="tabpanel"
            aria-labelledby="mentor-list-tab"
            hidden={activeTab !== "mentorList"}
            tabIndex={0}
          >
            <div className="div">
              <div className="programme-list">
                {programmeDataList.map((item) => (
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
    </div>
  );
};

export default Mentoring;
