"use client";

import { useState } from "react";
import "@/app/css/admission.css";
import Image from "next/image";
import Rounded_CTA from "../ui/Rounded_CTA";
import LabsAndSpaces from "@/components/ui/LabsAndSpaces";
import { labsData } from "@/data/labsData";

const sportsGallery = labsData.filter(
  (department) => department.id === "campus-life-sports",
);

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
                  teams representing each branch – Computer Science (CS),
                  IT/AIML, Robotics & Civil, Electronics and Telecommunication
                  (ENTC), and Mechanical Engineering – the event fosters
                  friendly rivalry and camaraderie among students. Dressed in
                  their distinctive branch-specific jerseys, participants engage
                  in an array of sports, ranging from traditional favorites like
                  football, cricket, and volleyball to newer additions such as
                  lawn tennis, badminton, and dodgeball. As our commitment to
                  fostering a dynamic sporting environment grows, so does the
                  list of sports, ensuring there's something for everyone to
                  enjoy. Join us at PROTATHLITIS as we embrace the thrill of
                  competition, celebrate athletic prowess, and strengthen the
                  bonds that unite us as a sports promoting college community.
                </p>
              </div>
              <div className="col-md-5">
                <Image
                  src="/images/campus-life/sports/sports.webp"
                  alt="Dr. S.B. Mujumdar"
                  width={600}
                  height={1068}
                  className="img-fluid leader-image"
                  priority
                />
              </div>
            </div>
            <div className="row mt-4 mt-sm-5">
              <div className="col-md-12">
                <LabsAndSpaces departments={sportsGallery} />
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
            <div className="sit-experience">
              <div className="heading innerpageheading">
                Student's Sports Achievements
              </div>
              <div className="subheading18">Students’ Co-Curricular Achievement</div>
              <div className="sit-experience-stories">
                <article className="sit-experience-story">
                  <div className="sit-experience-media">
                    <Image
                      src="/images/campus-life/sports/achievements1.webp"
                      alt="Campus at Symbiosis Institute of Technology, Pune"
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="sit-experience-image"
                      priority
                    />
                  </div>
                  <div className="sit-experience-copy">
                    <p>
                      Symbiosis Institute of Technology, Pune has once again
                      clinched the Overall Championship Trophy in the
                      Inter-Institute Sports Tournament conducted by DSRW
                      (Department of Sports, Recreation, and Wellness).
                    </p>
                  </div>
                </article>

                <article className="sit-experience-story">
                  <div className="sit-experience-media">
                    <Image
                      src="/images/campus-life/sports/achievements2.webp"
                      alt="Students and campus facilities at SIT Pune"
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="sit-experience-image"
                    />
                  </div>
                  <div className="sit-experience-copy">
                    <p>
                      Civil Engineering Department and Computer Science
                      Engineering bags the overall Protathilitis (Annual Sports
                      Event of SIT) Winner Trophy 2022! Congratulations to team
                      Civil@SIT and team CSE@SIT.
                    </p>

                  </div>
                </article>

                <article className="sit-experience-story">
                  <div className="sit-experience-media">
                    <Image
                      src="/images/campus-life/sports/achievements3.webp"
                      alt="A view of the SIT Pune campus"
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="sit-experience-image"
                    />
                  </div>
                  <div className="sit-experience-copy">
                    <div className="mt-3">
                      <p>
                        Mr. Raj Waswand, Final year, CIvil Engineering
                        Department, for his Outstanding Achievement at the
                        National Kickboxing Championship held at Goa from 25-29
                        November 2021.Mr. Raj participated in weight Category of
                        -89 and played district, zonal, state level and got
                        selected for the Nationals in 2 events Point fight and
                        Light contact fight. He bagged Gold medal in both!
                      </p>
                      <p>
                        With this accomplishment, his total count of National
                        medals has crossed 16!
                      </p>
                     
                    </div>
                  </div>
                </article>

                <article className="sit-experience-story">
                  <div className="sit-experience-media">
                    <Image
                      src="/images/campus-life/sports/achievements4.jpg"
                      alt="A view of the SIT Pune campus"
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="sit-experience-image"
                    />
                  </div>
                  <div className="sit-experience-copy">
                    <p>
                      Yash Verma (19-23 batch) of Second Year Student of
                      Computer Science Engineering bagged 6 Gold , 1 Silver and
                      3 Bronze medals in different 50m Rifle 3 Position
                      Championship , 50m Rifle Prone Championship in 31st Bihar
                      State Shooting Championship held at Siwan ,Bihar from 17th
                      to 21st February.
                    </p>
                  </div>
                </article>
                <article className="sit-experience-story">
                  <div className="sit-experience-media">
                    <Image
                      src="/images/campus-life/sports/achievements5.jpg"
                      alt="A view of the SIT Pune campus"
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="sit-experience-image"
                    />
                  </div>
                  <div className="sit-experience-copy">
                    <p>
                      First Year Mechanical Engineering student secured a position at the 62nd National Shooting Championship held at Thiruvananthapuram, Kerala, and got further selected for the Khelo India Youth Games.


                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentoring;
