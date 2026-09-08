import React from "react";
import Image from "next/image";
import InnerpageBanner from "@/components/InnerpageBanner";

const page = () => {
  return (
    <div className="">
      <InnerpageBanner
        title={`Founder Stories`}
        breadcrumbs={[
          // { label: "Programmes", href: "/programmes" },
          { label: "About" },

          { label: "AICTE Idea Lab" },
        ]}
      />
      <div className="Innerpage_main">
        <div className="aicte_main">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="heading innerpageheading">AICTE Idea Lab</div>
                <p>
                  <span
                    style={{
                      color: "#c4161c",
                      fontFamily: "Metropolis-SemiBold",
                    }}
                  >
                    {" "}
                    The AICTE IDEA (Idea Development, Evaluation and
                    Application) Lab at Symbiosis Institute of Technology (SIT),
                    Pune{" "}
                  </span>{" "}
                  is a state-of-the-art multidisciplinary innovation and
                  prototyping facility established under the All India Council
                  for Technical Education (AICTE). The lab provides an
                  environment where students, aspirants and faculty can
                  transform innovative ideas into functional prototypes through
                  hands-on learning, experimentation, and product development.
                </p>
                <p>
                  Equipped with advanced tools and fabrication facilities, the
                  IDEA Lab promotes experiential learning, interdisciplinary
                  collaboration, and problem-solving across various engineering
                  domains. It enables learners to design, develop, test, and
                  refine innovative solutions while fostering creativity,
                  technical competence, and research-oriented thinking.
                </p>
                <p>
                  The lab supports a wide range of activities including rapid
                  prototyping, electronics and embedded systems development,
                  mechanical fabrication, additive manufacturing, IoT, robotics,
                  and product innovation. It serves as a platform for academic
                  projects, research initiatives, industry collaborations, and
                  skill enhancement, encouraging students to bridge the gap
                  between classroom learning and real-world applications.
                </p>
                <div className="subheading mt-5">Leadership</div>
                <div className="aicte_leadership">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="profile_card">
                        <div className="profile_photo">
                          <Image
                            src="/images/innerpages/programe/aiml/faculty/Dr-Ketan-Kotecha.webp"
                            alt="Students"
                            width={200}
                            height={200}
                            className="img-fluid"
                          />
                        </div>
                        <div className="profile_details">
                          <div className="profiletag">Chief Coordinator</div>
                          <div className="subheading">Dr. Ketan Kotecha</div>
                          <div className="profiledesignation">
                            Director, Symbiosis Institute of Technology
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
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
                          <div className="profiledesignation">
                            Innovation Officer
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 mt-5">
                    <p>
                      The{" "}
                      <span
                        style={{
                          color: "#c4161c",
                          fontFamily: "Metropolis-SemiBold",
                        }}
                      >
                        AICTE IDEA Lab at SIT
                      </span>{" "}
                      is committed to nurturing a culture of innovation,
                      creativity, and technological excellence by empowering
                      students to convert ideas into impactful engineering
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="careerimages_sticky">
                  <div className="career_opportunities_images">
                    <div className="career_opportunities_img ">
                      <Image
                        src="/images/innerpages/founder-stories/career_opportunities1.webp"
                        alt="Students"
                        width={400}
                        height={250}
                        className="img-fluid"
                      />
                    </div>
                    <div className="logobox_img ">
                      <Image
                        src="/images/common/Logo.webp"
                        alt="Students"
                        width={200}
                        height={150}
                        className="img-fluid"
                      />
                    </div>
                    <div className="career_opportunities_img ">
                      <Image
                        src="/images/innerpages/founder-stories/career_opportunities1.webp"
                        alt="Students"
                        width={400}
                        height={250}
                        className="img-fluid"
                      />
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
};

export default page;
