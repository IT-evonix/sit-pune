"use client";

import { useState } from "react";
import "@/app/css/admission.css";
import Image from "next/image";

const Mentoring = () => {
  const [activeTab, setActiveTab] = useState("siteee");

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
              Annual Sports
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
              Achievements
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
            <div className="row">
              <div className="col-md-7">
                <p>
                  PROTATHLITIS, our esteemed annual sports fest, is more than
                  just a competition; it's a celebration of sportsmanship,
                  unity, and the vibrant spirit of our college community. With
                  teams representing each branch - Computer Science (CS),
                  IT/AIML, Robotics & Civil, Electronics and Telecommunication
                  (ENTC), and Mechanical Engineering - the event fosters
                  friendly rivalry and camaraderie among students.
                </p>
                <p className="m-0">
                  Dressed in their distinctive branch-specific jerseys,
                  participants engage in an array of sports, ranging from
                  traditional favorites like football, cricket, and volleyball
                  to newer additions such as lawn tennis, badminton, and
                  dodgeball. As our commitment to fostering a dynamic sporting
                  environment grows, so does the list of sports, ensuring
                  there's something for everyone to enjoy. Join us at
                  PROTATHLITIS as we embrace the thrill of competition,
                  celebrate athletic prowess, and strengthen the bonds that
                  unite us as a sports promoting college community.
                </p>
              </div>
              <div className="col-md-5">
                <Image
                  src="/images/campus-life/sports/sports-topimg.png"
                  alt="Sports images"
                  width={600}
                  height={1068}
                  className="img-fluid leader-image"
                  priority
                />
              </div>
            </div>
            <div className="row mt-4 mt-sm-5">
              <div className="col-md-12">
                <div className="AnnualSports">
                  <div className="AnnualSportsinner">
                    <div className="AnnualSportContent">
                      <div className="heading AnnualSportheading">
                        Annual <br />
                        Sports Events <br />
                        <span> 2026</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="achievementsGallery">
                  <div className="achievementimgbox">
                    <Image
                      src="/images/campus-life/sports/achievements1.webp"
                      alt="Sports images"
                      width={600}
                      height={1068}
                      className="img-fluid"
                      priority
                    />
                  </div>
                  <div className="achievementimgbox">
                    <Image
                      src="/images/campus-life/sports/achievements1.webp"
                      alt="Sports images"
                      width={600}
                      height={1068}
                      className="img-fluid"
                      priority
                    />
                  </div>
                  <div className="achievementimgbox">
                    <Image
                      src="/images/campus-life/sports/achievements1.webp"
                      alt="Sports images"
                      width={600}
                      height={1068}
                      className="img-fluid"
                      priority
                    />
                  </div>
                  <div className="achievementimgbox">
                    <Image
                      src="/images/campus-life/sports/achievements1.webp"
                      alt="Sports images"
                      width={600}
                      height={1068}
                      className="img-fluid"
                      priority
                    />
                  </div>
                  <div className="achievementimgbox">
                    <Image
                      src="/images/campus-life/sports/achievements1.webp"
                      alt="Sports images"
                      width={600}
                      height={1068}
                      className="img-fluid"
                      priority
                    />
                  </div>
                  <div className="achievementimgbox">
                    <Image
                      src="/images/campus-life/sports/achievements1.webp"
                      alt="Sports images"
                      width={600}
                      height={1068}
                      className="img-fluid"
                      priority
                    />
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
            <div className="achievementsmain_Image">
              <div className="achievements_Image">
                <Image
                  src="/images/campus-life/sports/achievements1.webp"
                  alt="Sports images"
                  width={600}
                  height={1068}
                  className="img-fluid"
                  priority
                />
              </div>
              <div className="achievements_Content">
                <div className="heading innerpageheading mb-1">
                  Student's Sports Achievements
                </div>
                <div className="subheading18">
                  Students’ Co-Curricular Achievement
                </div>
                <p className="m-0">
                  Symbiosis Institute of Technology, Pune has once again
                  clinched the Overall Championship Trophy in the
                  Inter-Institute Sports Tournament conducted by DSRW
                  (Department of Sports, Recreation, and Wellness).
                </p>
              </div>
            </div>
            <div className="achievementsGallery">
              <div className="achievementimgbox">
                <Image
                  src="/images/campus-life/sports/achievements1.webp"
                  alt="Sports images"
                  width={600}
                  height={1068}
                  className="img-fluid"
                  priority
                />
              </div>
              <div className="achievementimgbox">
                <Image
                  src="/images/campus-life/sports/achievements1.webp"
                  alt="Sports images"
                  width={600}
                  height={1068}
                  className="img-fluid"
                  priority
                />
              </div>
              <div className="achievementimgbox">
                <Image
                  src="/images/campus-life/sports/achievements1.webp"
                  alt="Sports images"
                  width={600}
                  height={1068}
                  className="img-fluid"
                  priority
                />
              </div>
              <div className="achievementimgbox">
                <Image
                  src="/images/campus-life/sports/achievements1.webp"
                  alt="Sports images"
                  width={600}
                  height={1068}
                  className="img-fluid"
                  priority
                />
              </div>
              <div className="achievementimgbox">
                <Image
                  src="/images/campus-life/sports/achievements1.webp"
                  alt="Sports images"
                  width={600}
                  height={1068}
                  className="img-fluid"
                  priority
                />
              </div>
              <div className="achievementimgbox">
                <Image
                  src="/images/campus-life/sports/achievements1.webp"
                  alt="Sports images"
                  width={600}
                  height={1068}
                  className="img-fluid"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentoring;
