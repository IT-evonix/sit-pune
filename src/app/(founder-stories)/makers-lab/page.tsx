import React from "react";
import Image from "next/image";
import InnerpageBanner from "@/components/InnerpageBanner";

const page = () => {
  return (
    <div className="">
      <InnerpageBanner
        title={`Makers Lab`}
        breadcrumbs={[
          // { label: "Programmes", href: "/programmes" },
          { label: "Founder Stories" },

          { label: "Makers Lab" },
        ]}
      />
      <div className="Innerpage_main p-0">
        <div className="makersLab_main">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="heading innerpageheading">Makers Lab</div>
                <p>
                  <span
                    style={{
                      color: "#c4161c",
                      fontFamily: "Metropolis-SemiBold",
                    }}
                  >
                    {" "}
                    The Maker Lab at Symbiosis Institute of Technology (SIT),
                    Pune,{" "}
                  </span>{" "}
                  established with the generous support of Infosys, is a
                  cutting-edge innovation and experiential learning facility
                  that empowers students to transform ideas into tangible
                  solutions. Designed to foster creativity, hands-on learning,
                  and interdisciplinary collaboration, the lab provides an
                  ecosystem where students can innovate, experiment, prototype,
                  and build products using advanced technologies.
                </p>
                <p>
                  The Maker Lab is equipped with state-of-the-art facilities for
                  rapid prototyping, electronics design, embedded systems,
                  Internet of Things (IoT), robotics, additive manufacturing (3D
                  printing), laser cutting, CNC machining, PCB fabrication, and
                  product development. It enables students from diverse
                  engineering disciplines to apply theoretical knowledge in
                  solving real-world challenges through project-based learning.
                </p>
              </div>
              <div className="col-md-5">
                <div className="program_highlights_right">
                  <div className="verticalScroll redscroll">
                    <div className="headingbg">
                      The lab serves as a hub for innovation by supporting
                    </div>
                    <ul className="listingbox">
                      <li>Hands-on experiential learning</li>
                      <li>Product design and rapid prototyping</li>
                      <li>
                        Robotics, IoT, AI, and embedded systems development
                      </li>
                      <li>Design and fabrication of functional prototypes</li>
                      <li>
                        Industry-driven projects and collaborative research
                      </li>
                      <li>
                        Skill development, workshops, hackathons, and technical
                        competitions
                      </li>
                      <li>
                        Student innovation and multidisciplinary engineering
                        projects
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="maker_lab_box">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="aicte_leadership">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="profile_card">
                        <div className="profile_photo">
                          <Image
                            src="/images/innerpages/founder-stories/Bhavna-Ambudkar.webp"
                            alt="Students"
                            width={200}
                            height={200}
                            className="img-fluid"
                          />
                        </div>
                        <div className="profile_details">
                          <div className="profiletag">Faculty Coordinator</div>
                          <div className="subheading">Dr. Bhavna Ambudkar</div>
                          <div className="profiledesignation mb-1">
                            <b>Innovation Officer</b>
                          </div>
                          <p>
                            With its focus on experiential education,
                            innovation, and technological excellence, the Maker
                            Lab at SIT continues to inspire students to learn by
                            making, innovate by experimenting, and create
                            solutions that address the needs of industry and
                            society.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="bluebg_box">
                  <p>
                    The Maker Lab also plays a significant role in nurturing
                    future-ready engineers by providing access to advanced
                    tools, expert mentorship, and opportunities to develop
                    industry-relevant skills. It has become a vibrant space
                    where students explore emerging technologies, collaborate
                    across disciplines, and transform innovative concepts into
                    impactful engineering solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
