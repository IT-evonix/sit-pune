import React from "react";
import InnerpageBanner from "@/components/InnerpageBanner";
import Image from "next/image";

const page = () => {
  return (
    <div className="">
      <InnerpageBanner
        title={`SIT Epic`}
        breadcrumbs={[
          // { label: "Programmes", href: "/programmes" },
          { label: "Founder Stories" },

          { label: "SIT Epic" },
        ]}
      />
      <div className="Innerpage_main">
        <div className="aicte_main">
          <div className="container">
            {/* <div className="heading innerpageheading text-center">SIT Epic</div> */}
            <div className="sitepic_main">
              <div className="sitepic_inner">
                <div className="sitepic_left">
                  <div className="sitepic_image">
                    <Image
                      src="/images/innerpages/founder-stories/sit-epic.webp"
                      alt="Students"
                      width={800}
                      height={674}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="sitepic_right">
                  <div className="heading innerpageheading">
                    Welcome to EPIC – Where Ideas Become Impact
                  </div>
                  <p>
                    The{" "}
                    <span
                      style={{
                        color: "#c4161c",
                        fontFamily: "Metropolis-SemiBold",
                      }}
                    >
                      Entrepreneurship Promotion and Innovation Cell (EPIC)
                    </span>{" "}
                    is the innovation and pre-incubation hub of Symbiosis
                    Institute of Technology, Pune, dedicated to nurturing the
                    next generation of innovators, entrepreneurs, and
                    changemakers. Since its inception in 2014, EPIC has been
                    fostering a vibrant entrepreneurial ecosystem that empowers
                    students, faculty, alumni, and aspiring innovators to
                    transform ideas into impactful ventures.
                  </p>
                  <p>
                    At EPIC, we believe that innovation begins with curiosity
                    and grows through collaboration, mentorship, and meaningful
                    opportunities. Our mission is to cultivate an
                    entrepreneurial mindset by creating awareness, encouraging
                    creative problem-solving, and equipping aspiring
                    entrepreneurs with the knowledge, skills, and resources
                    needed to succeed.
                  </p>
                  <p>
                    Through a diverse range of workshops, expert talks,
                    hackathons, innovation challenges, startup competitions,
                    mentoring sessions, industry interactions, and networking
                    opportunities, EPIC provides a platform for innovators to
                    learn, experiment, collaborate, lead, and build. As a
                    pre-incubation centre, we support innovators at the earliest
                    stages of their entrepreneurial journey by offering
                    guidance, mentorship, and access to a thriving innovation
                    ecosystem.
                  </p>
                </div>
              </div>

              <div className="sitepic_lastbox">
                EPIC serves as a catalyst for innovation by connecting academia
                with industry, government, investors, incubators, and the
                startup community. Whether you aspire to solve real-world
                problems, launch a startup, commercialize research, or simply
                explore your entrepreneurial potential, EPIC is the place where
                your journey begins.
                <div className="subheading">
                  Dream. Innovate. Build. Lead.{" "}
                  <span style={{ color: "#000" }}>That's the EPIC way.</span>
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
