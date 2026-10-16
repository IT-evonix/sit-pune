"use client";

import { useState } from "react";
import Image from "next/image";
import InnerpageBanner from "@/components/InnerpageBanner";
import "@/app/css/admission.css";

export default function ChancellorMessagePage() {
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
                                src="/images/innerpages/about/s-b-mujumdar.webp"
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
                              Founder & President, Symbiosis
                            </h5>
                          </div>
                          <div className="leader-content mt-4">
                            <p>
                              I am delighted to welcome you to the Symbiosis
                              International (Deemed University). The University
                              is part of the larger Symbiosis family, which is
                              built on the core ideal of Vasudhaiv
                              Kutumbakam—the world is one family.
                            </p>
                            <p>
                              The University stands at the frontiers of global
                              innovation in academics as well as all the other
                              components that make education whole. I invite you
                              to peruse the extensive range of resources and
                              opportunities that we offer to all the members of
                              the University. From classrooms to wellness
                              centres, the amenities are both plenty and
                              first-rate. Most important of all, the teaching
                              and non-teaching staff at the University combine
                              in them the calibre and culture to help students
                              fulfil their higher education goals.
                            </p>
                            <p>
                              At Symbiosis, we are keenly aware of the enormous
                              responsibility that a higher education institution
                              must bear. Besides imparting knowledge and
                              know-how of the subject of choice, the institution
                              must prepare the student to thrive in the career
                              of his choice and contribute to the good of the
                              global citizenry.
                            </p>
                            <p>
                              The University makes every effort to live up to
                              its institutional mission of internationalization.
                              A quick tour of our campuses will confirm that our
                              reputation of being an institution of
                              international standing is well-earned. We take
                              great pride in hosting students from eighty-five
                              countries. The vision of internationalization
                              finds expression at the University all the way
                              from pedagogical practices to cultural activities.
                            </p>
                            <p className="m-0">
                              I hope that you will take the time to learn more
                              about the University and be inspired to join
                              hands.
                            </p>
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
                                src="/images/innerpages/about/vidya_yeravdekar.webp"
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
                              Dr. Vidya Yeravdekar
                            </h2>
                            <h5 className="subheading18 mb-0">
                              Principal Director, Symbiosis
                              <span>
                                Chancellor, Symbiosis International (Deemed
                                University)
                              </span>
                            </h5>
                          </div>
                          <div className="leader-content mt-4">
                            <p>
                              Dr. Vidya Yeravdekar is the Principal Director of
                              Symbiosis, and Chancellor of Symbiosis
                              International University. Symbiosis International
                              University is a multi-disciplinary, multinational,
                              multi-cultural University having more than 45000
                              students from all States of India and
                              international students from 85 countries. The
                              Symbiosis Society not only has under its ambit the
                              Symbiosis International University but also has
                              K12 Schools, College of Arts and Commerce and
                              Museums- the Afro Asian Cultural Museum and the
                              Dr. Babasaheb Ambedkar Museum & Memorial.
                            </p>
                            <p>
                              Dr. Vidya holds a Post Graduate Degree in
                              Medicine, a Degree in Law and Ph.D. in
                              'Internationalisation of Higher Education in
                              India’. Having presented papers at various
                              National & International Conferences, she has
                              numerous research publications to her credit and
                              has also authored several books. Ranked No.14
                              amongst India’s top 25 Powerful Women, Dr. Vidya
                              has been instrumental in bringing in innovative
                              approaches to promote internationalisation of
                              higher education in India.
                            </p>
                            <p>
                              As a member of University Grants Commission (UGC)
                              for two terms, Central Advisory Board of Education
                              (CABE) under Ministry of Education and Indian
                              Council for Cultural Relations (ICCR) under
                              Ministry of External Affairs, she has been a
                              facilitator of innovative approaches to higher
                              education in India.
                            </p>
                            <p>
                              Dr. Vidya has been appointed as a member of the
                              expert group on Global Outreach of Higher
                              Education, formulated by UGC to implement the
                              National Education Policy 2020 that was rolled out
                              by the Ministry of Education Govt. of India,
                              member of the Advisory Group of Analytical and
                              Advisory work (ASA) World Bank, Advisory Committee
                              of the IAU for the global survey on
                              internationalization and member of the Board of
                              Trustees of Muscat University, Oman.
                            </p>
                            <p className="m-0">
                              She has been elected as Member of the Central
                              Governing Council of Services Export Promotion
                              Council (SEPC) set up by the Ministry of Commerce
                              & Industry, Government of India, Member of the
                              General Assembly of the Indian Council for
                              Cultural Relations (ICCR), Governing Body of
                              Yashwantrao Chavan Academy of Development
                              Administration (YASHADA), Governing Board member
                              of the International Sports University, Government
                              of Maharashtra and Member of the NEP
                              implementation committee of Government of
                              Maharashtra. She also serves on the Board of
                              Directors of Emcure Pharmaceuticals Ltd and Bajaj
                              Holdings & Investment Limited.
                            </p>
                            <p>
                              Dr. Vidya has been appointed as the first Chair of
                              the OBREAL Global India Chapter a for a period of
                              3 years. She is a member on the Board of several
                              organisations like Rayat Shikshan Sanstha,
                              Research Committee of the Association of Indian
                              Universities (AIU), Public Health Foundation of
                              India, Symbiosis University of Applied Sciences
                              Indore, Symbiosis Skills and Open University,
                              Pune. She is a member of many corporate bodies
                              such as Federation of Indian Chambers of Commerce
                              & Industry (FICCI), Confederation of India
                              Industry (CII), Mahratta Chambers of Commerce and
                              Industries (MCCIA) and Not for profit
                              organisations like HK Firodiya Foundation, India
                              International Centre (IIC) & Pune International
                              Centre (PIC)
                            </p>
                            <p>
                              She has also been a member on many other
                              organizations such as Independent Director on the
                              Board of RITES Limited under Ministry of Railways,
                              Government of India, Education Quality Upgradation
                              and Inclusion Programme (EQUIP) Committee,
                              Ministry of Education, Govt. of India, Indian
                              Institute of Corporate Affairs, Yeshwantaro Chavan
                              Maharashtra Open University, State Knowledge
                              Advisory Board of Higher Education, Government of
                              Andhra Pradesh, Sub-Group on Higher & Technical
                              Education and Skill Development of Chief
                              Minister’s Advisory Council, Government of
                              Rajasthan to name a few.
                            </p>
                            <p>
                              Dr. Vidya’s hard work has won her numerous awards
                              and accolades. Her continuous endeavour to
                              innovate and initiate has helped Symbiosis attain
                              its present respect and admiration. Having
                              accomplished all such feats, Dr. Vidya is now
                              committed to shaping Indian higher education
                              globally through her extensive work in the field
                              of internationalisation of higher education.
                            </p>
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
                                src="/images/innerpages/about/ramakrishnan_raman.webp"
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
                              Dr. Ramakrishnan Raman
                            </h2>
                            <h5 className="subheading18 mb-0">
                              Vice Chancellor
                            </h5>
                          </div>
                          <div className="leader-content mt-4">
                            <p>
                              Dr. Ramakrishnan Raman, an accomplished
                              academician and seasoned professional, is the Vice
                              Chancellor at Symbiosis International (Deemed
                              University). With a remarkable educational journey
                              that includes a Bachelor's Degree in Computer
                              Science and Engineering and an MBA in Systems and
                              Marketing, and a doctoral degree in Management
                              from Pune University, Dr. Raman brings a wealth of
                              knowledge and expertise to this esteemed
                              institution. His extensive career spanning over
                              two decades is a testament to his diverse
                              experience in the corporate, academic, and
                              research domains.
                            </p>
                            <p>
                              He has served Symbiosis for over a decade in
                              different capacities including Professor &
                              Director Symbiosis Centre for Information
                              Technology, Professor & Director Symbiosis
                              Institute of Business Management – Pune, Dean –
                              Faculty of Management and Director – Strategy &
                              Development.
                            </p>
                            <p>
                              Dr. Raman's contributions extend beyond the
                              classroom, as he has been instrumental in
                              fostering international collaborations with
                              universities in Japan, Canada, United Kingdom, and
                              the United States. His prolific research in
                              Information Systems, IT Strategy,
                              Entrepreneurship, AI, Big Data, has earned him
                              recognition with international academia. He has
                              published several papers in reputed International
                              Journals indexed in SCOPUS and Web of Science.
                            </p>
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
