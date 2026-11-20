// import InnerpageBanner from "@/components/InnerpageBanner";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <InnerpageBanner
        title={`SIT EPIC Vision, Mission`}
        breadcrumbs={[
          // { label: "Programmes", href: "/programmes" },
          { label: "Founder Stories" },

          { label: "SIT EPIC Vision, Mission" },
        ]}
      /> */}
      <div className="main_content">
        <div className="epicvisionMission">
          <div className="epicvision">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="heading innerpageheading">Our Vision</div>
                  <p>
                    Creating innovative and entrepreneurial mind set ecosystem
                    at SIT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="missionGolas">
        <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="VisionMissionBox">
                  <div className="heading innerpageheading">Our Mission</div>
                  <ul>
                    <li>
                      To foster a vibrant culture of innovation and
                      entrepreneurship within the SIT community.
                    </li>
                    <li>
                      To cultivate mindset that thrives on creativity,
                      problem-solving, and a passion for transformative ideas.
                    </li>
                    <li>
                      To build ecosystem where students, faculty, and staff are
                      empowered to explore their entrepreneurial potential,
                      turning their innovative concepts into real-world
                      solutions.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="VisionMissionBox">
                  <div className="heading innerpageheading">Our Goals</div>
                  <ul>
                    <li>
                      To create awareness among students, faculty, and alumni.
                    </li>
                    <li>To motivate students, faculty, and alumni.</li>
                    <li>To organize idea tanks at SIT.</li>
                    <li>
                      To support students, faculty, and alumni to explore the
                      entrepreneurial ecosystem.
                    </li>
                    <li>To ideate, think, and design products.</li>
                    <li>To file patents.</li>
                    <li>To plan for startups.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default page;
