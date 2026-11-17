import InnerpageBanner from "@/components/InnerpageBanner";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="placementmain">
      <InnerpageBanner
        title={`Placement Overview`}
        breadcrumbs={[
          // { label: "Programmes", href: "/programmes" },
          { label: "Placements" },

          { label: "Placement Overview" },
        ]}
      />
      <div className="Innerpage_main mt-0 p-0">
          <div className="placement_overview_main">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="placement_image_box">
                    <div className="placement_image_left">
                      <Image
                        src="/images/innerpages/placement/placement-overview/placement-img-1.webp"
                        alt=""
                        width={600}
                        height={590}
                        className="img-fluid"
                      />
                    </div>
                    <div className="placement_image_center">
                      <Image
                        src="/images/innerpages/placement/placement-overview/logoicon.webp"
                        alt=""
                        width={150}
                        height={150}
                        className="img-fluid"
                      />
                    </div>
                    <div className="placement_image_right">
                      <Image
                        src="/images/innerpages/placement/placement-overview/placement-img-2.webp"
                        alt=""
                        width={300}
                        height={300}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="placement_right_content">
                    <p>
                      The Career Development & Outcomes Cell at Symbiosis
                      Institute of Technology (SIT) is committed to preparing
                      students for successful and rewarding careers through a
                      strong ecosystem of industry engagement, career
                      development, and placement support. The institute provides
                      dedicated infrastructure, including seminar halls,
                      interview rooms, discussion spaces, and modern facilities
                      to ensure the smooth conduct of campus recruitment
                      activities.
                    </p>
                    <p>
                      SIT has established enduring relationships with leading
                      national and global organizations across diverse industry
                      sectors. Students are equipped for campus recruitment
                      through structured training in technical competencies,
                      aptitude, communication, interview skills, and
                      professional development, enabling them to confidently
                      meet evolving industry expectations.
                    </p>
                    <p className="m-0">
                      The placement season for the B.Tech 2022–26 and M.Tech
                      2024-26 batch witnessed strong participation from
                      multinational corporations, global technology companies,
                      product-based organizations, consulting firms, financial
                      institutions, manufacturing and automotive enterprises,
                      engineering organizations, healthcare companies, logistics
                      providers, and high-growth start-ups. Recruiters offered
                      opportunities across a wide spectrum of domains, including
                      Software Development, Product Engineering, Artificial
                      Intelligence, Data Science, Cloud Computing,
                      Cybersecurity, Financial Services, Business Consulting,
                      Manufacturing, Automotive Engineering, Industrial
                      Automation, Core Engineering, Supply Chain, Healthcare
                      Technology, Banking, and Digital Business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="coe-section centreofexcellences">
            <div className="container">
              <div className="coe-inner">
                <div className="coe-left">
                  {/* <div className="heading ">Placement Overview</div> */}
                  <p>
                    Many students also secured Pre-Placement Offers (PPOs) based
                    on their outstanding internship performance and achievements
                    in corporate competitions, reflecting the industry's
                    confidence in SIT talent.
                  </p>
                  <p>
                    The placement and internship process for the 2023–27 batch
                    is already underway, with organizations from multiple
                    industry sectors actively participating in campus
                    recruitment, reaffirming the institute's strong corporate
                    connect and sustained recruiter engagement.
                  </p>
                </div>
                <div className="coe-right">
                  <div className="coe-bg"></div>
                  <div className="placement-last-img">
                    <Image
                        src="/images/innerpages/placement/placement-overview/placement-image-3.webp"
                        alt=""
                        width={800}
                        height={533}
                        className="img-fluid"
                      />
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
