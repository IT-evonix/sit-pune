"use client";

import InnerpageBanner from "@/components/InnerpageBanner";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { ChevronRight, FileText, Link } from "lucide-react";
import { useRouter } from "next/navigation";

interface AdmissionItem {
  id: number;
  title: string;
  pageUrl: string;
}

const admissionData: AdmissionItem[] = [
  {
    id: 1,
    title: "Artificial Intelligence and Machine Learning",
    pageUrl: "/programmes/btech/artificial-intelligence-machine-learning",
  },
  {
    id: 2,
    title: "Civil Engineering",
    pageUrl: "/",
  },
  {
    id: 3,
    title: "Computer Science and Engineering",
    pageUrl: "/",
  },
  {
    id: 4,
    title: "Electronics and Telecommunication Engineering",
    pageUrl: "/programmes/btech/btech-electronic-telecommunications",
  },
  {
    id: 5,
    title: "Mechanical Engineering",
    pageUrl: "/",
  },
  {
    id: 6,
    title: "Robotics and Automation",
    pageUrl: "/programmes/btech/btech-robotics-automation",
  },
  {
    id: 7,
    title: "Robotics and Artificial Intelligence",
    pageUrl: "/programmes/btech/btech-robotics-artificial-intelligence",
  },
];

const UndergraduateAdmissionsPage = () => {
  const router = useRouter();

  const handleRedirect = (url: string) => {
    router.push(url);
  };

  return (
    <div className="mainpage-wrapper">
      <InnerpageBanner
        title="Undergraduate Admissions"
        breadcrumbs={[
          { label: "Admissions" },
          { label: "Undergraduate Admissions" },
        ]}
      />

      <div className="Innerpage_main undergraduate_admissions_page">
        <div className="container-fluid">
          <div className="programme-wrapper ">
            <div className="heading innerpageheading">
              Undergraduate Admissions
            </div>

            <div className="programme-list">
              {admissionData.map((item) => (
                <div
                  key={item.id}
                  className="programme-card"
                  onClick={() => handleRedirect(item.pageUrl)}
                  style={{ cursor: "pointer" }}
                >
                  <Row className="align-items-center">
                    <Col xs={10} md={11}>
                      <div className="d-flex align-items-center gap-3">
                        <div className="small-icon-box">
                          <Link size={28} strokeWidth={2} />
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UndergraduateAdmissionsPage;
