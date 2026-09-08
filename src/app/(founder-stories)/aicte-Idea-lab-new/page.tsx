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
            <div className="aicte_inner">
              <div className="zigzag_main">
                <div className="zigzag_row">
                  <div className="zigzag_image">
                    <Image
                      src="/images/innerpages/founder-stories/career_opportunities1.webp"
                      alt="Students"
                      width={400}
                      height={300}
                      className="img-fluid"
                    />
                  </div>
                  <div className="zigzag_content">
                    The AICTE IDEA (Idea Development, Evaluation and
                    Application) Lab at Symbiosis Institute of Technology (SIT),
                    Pune is a state-of-the-art multidisciplinary innovation and
                    prototyping facility established under the All India Council
                    for Technical Education (AICTE). The lab provides an
                    environment where students, aspirants and faculty can
                    transform innovative ideas into functional prototypes
                    through hands-on learning, experimentation, and product
                    development.
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
