import InnerpageBanner from "@/components/InnerpageBanner";
import React from "react";

const page = () => {
  const missionData = [
    {
      title: "1",
      desc: "To empower students with technical and leadership skills across multidisciplinary domains.",
    },
    {
      title: "2",
      desc: "To foster technology and innovation through collaborative partnerships with academia, industries, and government organizations.",
    },
    {
      title: "3",
      desc: "To nurture socially responsible engineers to create sustainable and inclusive solutions.",
    },
    {
      title: "4",
      desc: "To promote internationalization by fostering collaborations and enabling success in a globalized landscape",
    },
  ];
  return (
    <div className="mainpage-wrapper">
      <InnerpageBanner
        title={`Institute Vision & Mission`}
        breadcrumbs={[
          { label: "About" },

          { label: "Institute Vision & Mission" },
        ]}
      />
      <div className="about_vision_mision">
        <div className="container-fluid">
          <div className="visionandmision main_content">
            <div className="card provisionbox">
              <div className="d-flex align-items-start gap-3">
                <div className="visiontextleft">
                  <div className="subheading">Vision</div>
                  <p className="section-text">
                    To be a premier institute that nurtures multidisciplinary technical excellence, drives innovation, cultivates a global perspective and contributes to societal enrichment.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="subheading">Mission</div>
              </div>
              <div className="row g-4">
                {missionData.map((item, index) => (
                  <div className="col-lg-3 col-md-6" key={index}>
                    <div className="mission-card h-100">
                      <span className="badge mission-badge">{item.title}</span>

                      <p className="mt-3 mb-0">{item.desc}</p>
                    </div>
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

export default page;
