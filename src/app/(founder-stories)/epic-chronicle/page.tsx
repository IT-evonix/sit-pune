import React from "react";
import InnerpageBanner from "@/components/InnerpageBanner";
import Image from "next/image";

const page = () => {
  return (
    <div className="">
      <InnerpageBanner
        title={`Epic Chronicle`}
        breadcrumbs={[
          { label: "Founder Stories" },
          { label: "Epic Chronicle" },
        ]}
      />
      <div className="Innerpage_main">
        <div className="aicte_main">
          <div className="container">
            <div className="epicchronicle_main">
              <div className="epicchronicle_box">
                <div className="epicchronicle_boxleft">
                  {/* <Image
                    src="/images/innerpages/programe/aiml/faculty/DrKetan-Kotecha.webp"
                    alt="Students"
                    width={200}
                    height={200}
                    className="img-fluid"
                  /> */}
                  <div className="heading innerpageheading">
                    Physiomize Private Limited
                  </div>
                  <div className="subheading">
                    Transforming Rehabilitation through Intelligent Healthcare
                  </div>
                  <p>
                    Every recovery journey deserves personalized care. Founded
                    by Yash Parkhi, a final-year Computer Science Engineering
                    student at Symbiosis Institute of Technology, PHYSIOMIZE is
                    redefining rehabilitation with technology.
                  </p>

                  <p>
                    The startup has developed a patient-centric remote
                    rehabilitation platform that combines immersive 3D exercise
                    simulations with real-time corrective feedback. Patients can
                    perform prescribed exercises independently from anywhere,
                    while therapists remotely monitor progress, assign
                    customized therapy plans, and track recovery without
                    requiring simultaneous availability.
                  </p>
                  <p>
                    With innovation at its core, PHYSIOMIZE has earned
                    recognition through more than 10 national and international
                    awards, establishing itself as one of the promising MedTech
                    startups emerging from the EPIC ecosystem.
                  </p>
                </div>
                <div className="epicchronicle_boxright">
                  <div className="credential_achievements_main">
                    <div className="credential_achievements_box">
                      <div className="achievements_heading">Founder</div>
                      <div className="achievements_details">
                        Yash Parkhi <span>(Computer Science Engineering)</span>
                      </div>
                    </div>
                    <div className="credential_achievements_box">
                      <div className="achievements_heading">Domain</div>
                      <div className="achievements_details">
                        Wellness | MedTech | Rehabilitation
                      </div>
                    </div>
                    <div className="credential_achievements_box">
                      <div className="achievements_heading">Achievements</div>
                      <ul className="listingbox">
                        <li>10+ National & International Awards</li>
                        <li>AI-enabled remote rehabilitation platform</li>
                        <li>
                          Improving accessibility to quality physiotherapy
                          services
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="epicchronicle_box">
                <div className="epicchronicle_boxleft">
                  <div className="heading innerpageheading">
                    PSY Technologies
                  </div>
                  <div className="subheading">
                    Building Smarter Surveillance for Safer Missions
                  </div>
                  <p>
                    Innovation meets national security at PSY Technologies,
                    founded by Tanisha Vyas, a final-year Computer Science
                    Engineering student.
                  </p>

                  <p>
                    The company has developed HoloScout, a holonomic
                    omnidirectional unmanned ground vehicle (UGV) designed for
                    defence surveillance and rescue operations. The intelligent
                    robot creates indoor layouts while identifying humans and
                    objects in real time, eliminating the dependence on
                    expensive stereo vision systems or computationally intensive
                    LiDAR processing.
                  </p>
                  <p>
                    Recognized among the Top 50 teams in the National 5G
                    Innovation Hackathon, the startup also secured a ₹1 lakh
                    innovation grant, demonstrating its potential to contribute
                    to next-generation defence technologies.
                  </p>
                </div>
                <div className="epicchronicle_boxright">
                  <div className="credential_achievements_main">
                    <div className="credential_achievements_box">
                      <div className="achievements_heading">Founder</div>
                      <div className="achievements_details">
                        Tanisha Vyas <span>(Computer Science Engineering)</span>
                      </div>
                    </div>
                    <div className="credential_achievements_box">
                      <div className="achievements_heading">Domain</div>
                      <div className="achievements_details">
                        Defence Technology | Surveillance | Robotics
                      </div>
                    </div>
                    <div className="credential_achievements_box">
                      <div className="achievements_heading">Achievements</div>
                      <ul className="listingbox">
                        <li>Top 50 – National 5G Innovation Hackathon</li>
                        <li>₹1 Lakh Innovation Grant</li>
                        <li>Advanced AI-based surveillance solution</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="epicchronicle_box">
                <div className="epicchronicle_boxleft">
                  <div className="heading innerpageheading">Jugnu</div>
                  <div className="subheading">
                    Flying Innovation into the Future
                  </div>
                  <p>
                    What began as a student vision has grown into an ambitious
                    drone enterprise. Founded by Sairaj Pisal, a final-year
                    Robotics & Automation student, Jugnu is focused on drone
                    manufacturing with innovative advertising applications.
                  </p>

                  <p>
                    By leveraging drone technology for commercial visibility and
                    outreach, Jugnu is creating new possibilities in aerial
                    advertising while strengthening India's growing drone
                    ecosystem. The startup has already demonstrated remarkable
                    investor confidence by securing ₹2 crore in investment,
                    reflecting the market's belief in its innovation and
                    scalability.
                  </p>
                </div>
                <div className="epicchronicle_boxright">
                  <div className="credential_achievements_main">
                    <div className="credential_achievements_box">
                      <div className="achievements_heading">Founder</div>
                      <div className="achievements_details">
                        Sairaj Pisal <span>(Robotics & Automation)</span>
                      </div>
                    </div>
                    <div className="credential_achievements_box">
                      <div className="achievements_heading">Domain</div>
                      <div className="achievements_details">
                        Drone Technology | Advanced Manufacturing
                      </div>
                    </div>
                    <div className="credential_achievements_box">
                      <div className="achievements_heading">Achievements</div>
                      <ul className="listingbox">
                        <li>₹2 Crore Investment</li>
                        <li>Drone manufacturing startup</li>
                        <li>Innovative aerial advertising solutions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="epicchronicle_box">
                <div className="epicchronicle_boxleft">
                  <div className="heading innerpageheading">Cyronix</div>
                  <div className="subheading">
                    Making Intelligent Trading Accessible through AI
                  </div>
                  <p>
                    Financial markets generate enormous amounts of data every
                    second. Cyronix, founded by Ayush Singh and Ayush Kumar,
                    both final-year Computer Science Engineering students, is
                    harnessing Artificial Intelligence to simplify complex
                    investment decisions.
                  </p>

                  <p>
                    The startup is developing an AI-powered automated trading
                    platform capable of analyzing market trends, executing
                    cryptocurrency trades autonomously, and managing investment
                    risks using machine learning. The long-term vision extends
                    beyond cryptocurrencies to include stocks, futures, options,
                    and multiple financial markets through a unified intelligent
                    platform. Cyronix represents how student innovation can
                    address real-world financial challenges using cutting-edge
                    AI technologies.
                  </p>
                </div>
                <div className="epicchronicle_boxright">
                  <div className="credential_achievements_main">
                    <div className="credential_achievements_box">
                      <div className="achievements_heading">Founder</div>
                      <div className="achievements_details">
                        Ayush Kumar <span></span>
                      </div>
                    </div>
                    <div className="credential_achievements_box">
                      <div className="achievements_heading">Domain</div>
                      <div className="achievements_details">
                        FinTech | Artificial Intelligence
                      </div>
                    </div>
                    <div className="credential_achievements_box">
                      <div className="achievements_heading">Focus Areas</div>
                      <ul className="listingbox">
                        <li>AI-powered automated trading</li>
                        <li>Machine learning-driven investment strategies</li>
                        <li>
                          Future expansion into multi-asset trading platforms
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="epicchronicle_box">
                <div className="epicchronicle_boxleft">
                  <div className="heading innerpageheading">
                    Oxobot Robotics
                  </div>
                  <div className="subheading">
                    Engineering the Future of Smart Agriculture
                  </div>
                  <p>
                    Agriculture is evolving through intelligent automation, and
                    Oxobot Robotics, founded by Chaitanya Yenge, is contributing
                    to that transformation.
                  </p>

                  <p>
                    The startup develops fully autonomous AI-powered robotic
                    solutions designed to automate farming operations, enhance
                    productivity, and support precision agriculture. By
                    integrating robotics with artificial intelligence, Oxobot
                    aims to make farming smarter, more efficient, and
                    sustainable.
                  </p>
                  <p>
                    The startup's innovation has been widely appreciated across
                    the ecosystem, securing multiple grants and prestigious
                    recognitions, including funding from MAGIC (MeitY),
                    ARAI-AMTIF, and the RKVY-RAFTAAR programme.
                  </p>
                </div>
                <div className="epicchronicle_boxright">
                  <div className="credential_achievements_main">
                    <div className="credential_achievements_box">
                      <div className="achievements_heading">Founder</div>
                      <div className="achievements_details">
                        Chaitanya Yenge <span>(Robotics & Automation)</span>
                      </div>
                    </div>
                    <div className="credential_achievements_box">
                      <div className="achievements_heading">Domain</div>
                      <div className="achievements_details">
                        AgriTech | Robotics | Artificial Intelligence
                      </div>
                    </div>
                    <div className="credential_achievements_box">
                      <div className="achievements_heading">Achievements</div>
                      <ul className="listingbox">
                        <li>₹10 Lakh Grant - MAGIC (MeitY)</li>
                        <li>₹1 Lakh Award - ARAI-AMTIF (1st Prize)</li>
                        <li>₹4 Lakh Support - RKVY-RAFTAAR Programme</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="epicchronicle_box">
                <div className="epicchronicle_boxleft">
                  <div className="heading innerpageheading">
                    MonkEco Tech
                  </div>
                  <div className="subheading">
                    Innovating for India's Farmers

                  </div>
                  <p>
                    Innovation does not wait for graduation. MonkEco Tech, founded by Om Sonone, a second-year Mechanical Engineering student, demonstrates how young innovators can solve real agricultural problems.
                  </p>

                  <p>
                    The startup has developed a simple yet impactful cotton harvesting solution that reduces labour dependency, minimizes physical strain, and improves harvesting efficiency. Its practical approach to agricultural mechanisation addresses one of the major challenges faced by cotton farmers.
                  </p>
                  <p>
                    The innovation received national recognition by winning First Prize and a ₹10 lakh grant at NEST, organized by Titan in collaboration with IIM Calcutta Innovation Park.
                  </p>
                </div>
                <div className="epicchronicle_boxright">
                  <div className="credential_achievements_main">
                    <div className="credential_achievements_box">
                      <div className="achievements_heading">Founder</div>
                      <div className="achievements_details">
                         Om Sonone <span>(Mechanical Engineering)</span>
                      </div>
                    </div>
                    <div className="credential_achievements_box">
                      <div className="achievements_heading">Domain</div>
                      <div className="achievements_details">
                        AgriTech | Agricultural Mechanisation
                      </div>
                    </div>
                    <div className="credential_achievements_box">
                      <div className="achievements_heading">Achievements</div>
                      <ul className="listingbox">
                        <li>Winner – NEST Innovation Challenge</li>
                        <li>₹10 Lakh Grant</li>
                        <li>Affordable mechanisation for cotton farming</li>
                      </ul>
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
