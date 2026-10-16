"use client";

import { useState } from "react";
import Image from "next/image";
import InnerpageBanner from "@/components/InnerpageBanner";
import "@/app/css/admission.css";

interface LeadershipMessageProps {
  image: string;
  name: string;
  designation: string;
  message: string[];
}

export default function LeadershipMessage({
  image,
  name,
  designation,
}: LeadershipMessageProps) {
  const [activeLeader, setActiveLeader] = useState("chancellor");

  return (
    <div className="div">
      <InnerpageBanner
        title="Leadership"
        breadcrumbs={[{ label: "About" }, { label: "Leadership" }]}
      />
      <div className="leadership_inner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="leadership_tabbing">
                <div className="admission-tabs">
                  <div className="leader-sticky">
                    <div className="row">
                      <div className="col-md-4"></div>
                      <div className="col-md-8">
                        <ul
                          className="nav nav-tabs"
                          role="tablist"
                          aria-label="Symbiosis"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className={`nav-link${activeLeader === "founder" ? " active" : ""}`}
                              id="leadership-founder-tab"
                              type="button"
                              role="tab"
                              aria-controls="leadership-founder-panel"
                              aria-selected={activeLeader === "founder"}
                              onClick={() => setActiveLeader("founder")}
                            >
                              Founder
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className={`nav-link${activeLeader === "chancellor" ? " active" : ""}`}
                              id="leadership-chancellor-tab"
                              type="button"
                              role="tab"
                              aria-controls="leadership-chancellor-panel"
                              aria-selected={activeLeader === "chancellor"}
                              onClick={() => setActiveLeader("chancellor")}
                            >
                              Chancellor
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className={`nav-link${activeLeader === "vice-chancellor" ? " active" : ""}`}
                              id="leadership-vice-chancellor-tab"
                              type="button"
                              role="tab"
                              aria-controls="leadership-vice-chancellor-panel"
                              aria-selected={activeLeader === "vice-chancellor"}
                              onClick={() => setActiveLeader("vice-chancellor")}
                            >
                              Vice Chancellor
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content admission-tabs-content">
                    <div
                      className={`tab-pane fade${activeLeader === "founder" ? " show active" : ""}`}
                      id="leadership-founder-panel"
                      role="tabpanel"
                      aria-labelledby="leadership-founder-tab"
                      hidden={activeLeader !== "founder"}
                      tabIndex={0}
                    >
                      <div className="row g-5">
                        <div className="col-lg-4 text-center">
                          <div className="leader-sticky">
                            <div className="leader-image-wrapper">
                              <Image
                                src={image}
                                alt="Dr. S.B. Mujumdar"
                                width={500}
                                height={650}
                                className="img-fluid leader-image"
                                priority
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-8 leadershipContent">
                          <div className="leader-header">
                            <h2 className="heading innerpageheading mb-2">
                              Dr. S.B. Mujumdar
                            </h2>
                            <h5 className="subheading18 mb-0">
                              Founder, Symbiosis International (Deemed
                              University)
                            </h5>
                          </div>
                          <div className="leader-content mt-4">
                            {/* Paragraph  */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`tab-pane fade${activeLeader === "chancellor" ? " show active" : ""}`}
                      id="leadership-chancellor-panel"
                      role="tabpanel"
                      aria-labelledby="leadership-chancellor-tab"
                      hidden={activeLeader !== "chancellor"}
                      tabIndex={0}
                    >
                      <div className="row g-5">
                        <div className="col-lg-4 text-center">
                          <div className="leader-sticky">
                            <div className="leader-image-wrapper">
                              <Image
                                src={image}
                                alt={name}
                                width={500}
                                height={650}
                                className="img-fluid leader-image"
                                priority
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-8 leadershipContent">
                          <div className="leader-header">
                            <h2 className="heading innerpageheading mb-2">
                              {name}
                            </h2>
                            <h5 className="subheading18 mb-0">{designation}</h5>
                          </div>
                          <div className="leader-content mt-4">
                           {/* Paragraph  */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`tab-pane fade${activeLeader === "vice-chancellor" ? " show active" : ""}`}
                      id="leadership-vice-chancellor-panel"
                      role="tabpanel"
                      aria-labelledby="leadership-vice-chancellor-tab"
                      hidden={activeLeader !== "vice-chancellor"}
                      tabIndex={0}
                    >
                      <div className="row g-5">
                        <div className="col-lg-4 text-center">
                          <div className="leader-sticky">
                            <div className="leader-image-wrapper">
                              <Image
                                src={image}
                                alt={name}
                                width={500}
                                height={650}
                                className="img-fluid leader-image"
                                priority
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-8 leadershipContent">
                          <div className="leader-header">
                            <h2 className="heading innerpageheading mb-2">
                              {name}
                            </h2>
                            <h5 className="subheading18 mb-0">{designation}</h5>
                          </div>
                          <div className="leader-content mt-4">
                            {/* Paragraph  */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
