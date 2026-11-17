"use client";

import { useState, type MouseEvent as ReactMouseEvent } from "react";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import InnerpageBanner from "@/components/InnerpageBanner";
import "@/app/css/admission.css";
import RecruitersSlider from "@/components/ui/RecruitersSlider";
import { MagazineArticle } from "@/data/recruiters";

export default function ChancellorMessagePage() {
  const [activeLeader, setActiveLeader] = useState("founder");

  const handleMagazineArticleClick = (
    event: ReactMouseEvent<HTMLDivElement>,
  ) => {
    const clickedImage = event.target;

    if (
      !(clickedImage instanceof HTMLImageElement) ||
      !clickedImage.closest(".recruiter_logo_item")
    ) {
      return;
    }

    const startIndex = MagazineArticle.findIndex(
      (article) => article.name === clickedImage.alt,
    );

    if (startIndex < 0) {
      return;
    }

    Fancybox.show(
      MagazineArticle.map((article) => ({
        src: article.image,
        type: "image",
        caption: article.name,
      })),
      {
        startIndex,
        Carousel: { infinite: false },
      },
    );
  };

  return (
    <div className="leadership_main sit-pune-leadership">
      <InnerpageBanner
        title="SIT Pune Leadership"
        breadcrumbs={[{ label: "About" }, { label: "SIT Pune Leadership" }]}
      />
      <div className="leadership_inner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="leadership_tabbing">
                <div className="admission-tabs">
                  <div className="leader-sticky">
                    <div className="row">
                      <div className="col-lg-4"></div>
                      <div className="col-lg-8 col-md-12">
                        <div className=".customTabs__nav ">
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
                                Dean & Director of SIT
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
                                Deputy Director Academics
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className={`nav-link${activeLeader === "vice-chancellor" ? " active" : ""}`}
                                id="leadership-vice-chancellor-tab"
                                type="button"
                                role="tab"
                                aria-controls="leadership-vice-chancellor-panel"
                                aria-selected={
                                  activeLeader === "vice-chancellor"
                                }
                                onClick={() =>
                                  setActiveLeader("vice-chancellor")
                                }
                              >
                                Deputy Director Administration
                              </button>
                            </li>
                          </ul>
                        </div>
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
                      <div className="row row g-0 g-md-5">
                        <div className="col-lg-4 text-center">
                          <div className="leader-sticky">
                            <div className="leader-image-wrapper">
                              <Image
                                src="/images/innerpages/programe/aiml/faculty/Dr-Ketan-Kotecha-aiml.webp"
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
                              Prof. Ketan Kotecha, PhD (IIT Bombay)
                            </h2>
                            <h5 className="subheading18 mb-0">
                              Dean, Faculty of Engineering, Symbiosis
                              International (Deemed University)
                            </h5>
                            <div className="leadership_emailboxmain">
                              <div className="leadership_emailbox">
                                <h6 className="mt-1">
                                  Professor & Director, Symbiosis Institute of
                                  Technology
                                </h6>
                                <a
                                  className="redlink"
                                  href="mailto:director@sitpune.edu.in"
                                >
                                  director@sitpune.edu.in
                                </a>
                              </div>
                              <div className="leadership_emailbox">
                                <h6 className="mt-1">
                                  Head, Symbiosis Centre for Applied AI ( SCAAI)
                                </h6>
                                <a
                                  className="redlink"
                                  href="mailto:head@scaai.siu.edu.in"
                                >
                                  head@scaai.siu.edu.in
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="leader-content mt-4">
                            <p>
                              Welcome to the dynamic world of engineering at
                              SIT, where innovation is not just a goal but a way
                              of life. At the forefront of technological
                              advancements, we blend expertise, technology, and
                              creativity to propel our community towards
                              excellence. SIT stands as a centre for creativity,
                              a beacon for learning, and a convergence point for
                              ideas that shape the future. Our success is rooted
                              in the unwavering commitment of our faculty
                              members to academic rigour, groundbreaking
                              research, and mentoring. Their dedication goes
                              beyond the confines of classrooms, influencing the
                              lives of our students in profound ways. Our
                              overarching objective has always been to bring out
                              the best in our students, moulding them into
                              professionals with strong ethical and moral
                              values. As you embark on your journey at SIT, you
                              join a diverse community engaged in hands-on
                              learning and cutting-edge research, paving the way
                              for successful careers in business, government, or
                              academia. Our faculty, involved in high-impact
                              research across various domains, including
                              Artificial Intelligence, Cyber Security,
                              Blockchain, Data Science, Robotics, GIS,
                              Nanoscience, Cloud Computing, Embedded Systems,
                              Infrastructure Design and Building Information
                              Modelling (BIM), ensures that our students are
                              exposed to the latest advancements in their field.
                              Through creative instruction, hands-on projects,
                              and involvement in various student competition
                              teams, our undergraduates and postgraduates
                              receive an exceptional educational experience.
                              Industry-sponsored capstone projects and
                              internships further foster professional ties,
                              laying the groundwork for post-graduation success.
                              At SIT, we strive to create an inclusive and
                              dynamic environment where excellence in teaching,
                              research, and service is paramount. I look forward
                              to working with each one of you and contributing
                              to the success and growth of our vibrant
                              engineering community. Should you have any
                              comments, questions, or ideas, please feel free to
                              email me at director@sitpune.edu.in.
                            </p>
                            <p>
                              Welcome to SIT, where your journey towards
                              engineering excellence begins!
                            </p>
                            <p>
                              Dr. Ketan Kotecha is a distinguished researcher
                              and educator specializing in deep learning,
                              artificial intelligence, computer algorithms, and
                              machine learning. Passionate about fostering
                              critical thinking skills, he has mentored over 25
                              PhD students to successful outcomes.
                            </p>
                            <p>
                              With over 30 years of experience at the forefront
                              of AI and deep learning, Dr. Kotecha is globally
                              recognized, ranking among the top 2% scientists
                              worldwide, a distinction conferred by Stanford
                              University. He boasts a prolific publication
                              record, with over 516 Scopus-indexed papers and 24
                              patents to his name. His work, cited over 11,000
                              times, reflects his profound impact on the field.
                            </p>
                            <p>
                              Dr. Kotecha's expertise extends to securing
                              prestigious research funding for Applied AI
                              projects. Notable grants include a PURSE grant
                              from DST worth INR 5.2 crores in AI for affordable
                              Healthcare and a Ministry of Electronics and
                              Information Technology grant worth INR 199.04
                              lakhs on Human Computer Interface, highlighting
                              his leadership in impactful research.
                            </p>
                            <p>
                              Recognized for his contributions, Dr. Kotecha has
                              received grants such as the Indo-Canadian Shastri
                              grant SSTSG 2023-24 and SPARC projects worth INR
                              166 lakhs from MHRD. His accolades also include
                              Erasmus Plus Faculty Mobility Grant, DUO-India
                              Professors Fellowship, grants from the Royal
                              Academy of Engineering and DST under Indo-Italy
                              and Indo-Serbia schemes. He was also selected by
                              MHRD Govt of India for a prestigious LEAP grant
                              for leadership program at Cambridge University UK.
                              He also received 3 projects from DRDO worth INR 30
                              lacs and 4 projects from UAEU university under 'AI
                              for Sustainability' grant.
                            </p>
                            <p>
                              Dr. Kotecha has led consultancy projects with
                              industry giants Philips, Avegen,ArcOne & Dassault
                              System demonstrating his ability to bridge
                              academia and industry. His leadership at SIT Pune
                              has secured significant CSR grants and government
                              funding for initiatives such as the Bajaj
                              Engineering Skills Training Centre(worth INR 30
                              crores) and a 5G use case lab in
                              AI+telemedicine(worth INR 50 lacs).
                            </p>
                            <p>
                              As an Adjunct Professor at Swinburne University,
                              Australia, Honorary Professor at Aston University
                              UK and a visiting professor at UCSI University
                              Malaysia, Dr. Kotecha continues to expand his
                              global footprint in academia.
                            </p>
                            <p>
                              A sought-after keynote speaker, Dr. Kotecha has
                              addressed prestigious forums worldwide, including
                              the Machine Intelligence Lab at USA, Imperial
                              college of London UK, Swinburne University of
                              Technology, Australia, Pretoria University, S
                              Africa, RUDN university Russia and many more.
                            </p>
                            <p className="m-0">
                              <a
                                className="redlink"
                                target="_blank"
                                href="https://www.shiksha.com/college/symbiosis-institute-of-technology-symbiosis-international-pune-lavale-village-29564"
                              >
                                Exclusive interview of our Director & Dean Dr.
                                Ketan Kotecha on fostering technovation at
                                Symbiosis Institute of Technology Pune
                              </a>
                            </p>
                            <div className="program_highlights_box">
                              <div className="program_highlights_left">
                                <div className="verticalScroll">
                                  <div className="heading innerpageheading">
                                    Online Articles
                                  </div>
                                  <ul className="listingbox">
                                    <li>
                                      <a
                                        className="redlink"
                                        target="_blank"
                                        href="https://www.thehindu.com/education/why-hybrid-engineering-will-be-the-future-of-the-domain/article68296301.ece"
                                      >
                                        Why Hybrid Engineering will be the
                                        future of the domain
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="redlink"
                                        target="_blank"
                                        href="https://www.educationworld.in/building-the-soft-skills-bridge-for-career-excellence-in-engineering/"
                                      >
                                        Building the Soft Skills Bridge for
                                        Career Excellence in Engineering
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="redlink"
                                        target="_blank"
                                        href="https://www.bweducation.com/article/how-can-an-institute-help-build-startups-through-their-pedagogy-393443"
                                      >
                                        How can An Institute Help Build Startups
                                        Through Their Pedagogy
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="redlink"
                                        target="_blank"
                                        href="https://digitallearning.eletsonline.com/2019/01/what-careers-to-choose-after-geoinformatics/"
                                      >
                                        What careers to choose after
                                        Geoinformatics?
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="redlink"
                                        target="_blank"
                                        href="https://www.educationworld.in/6-ways-in-which-certification-courses-add-an-edge-to-your-resume/"
                                      >
                                        Ways in which certification courses add
                                        an edge to your resume.
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="redlink"
                                        target="_blank"
                                        href="https://www.financialexpress.com/jobs-career/certificate-course-in-ai-and-machine-learning-the-right-way-to-add-value-to-your-resume-1490569/"
                                      >
                                        Certificate course in AI and Machine
                                        learning – The right way to add value to
                                        your resume.
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="redlink"
                                        target="_blank"
                                        href="https://www.hindustantimes.com/education/how-to-prepare-for-jee-2019-and-other-upcoming-engineering-entrance-exams/story-UldwOBuRB8D74Q2tPcrmhK.html"
                                      >
                                        How to prepare for JEE 2019 and other
                                        upcoming engineering entrance exams.
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="redlink"
                                        target="_blank"
                                        href="https://chetchat.in/lander?oref=https%3A%2F%2Fwww.sitpune.edu.in%2F"
                                      >
                                        Life in an Engineering College.
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="redlink"
                                        target="_blank"
                                        href="https://timesofindia.indiatimes.com/city/pune/symbiosis-technology-instt-teachers-get-rs-1-66cr-funding/articleshow/68695488.cms"
                                      >
                                        Symbiosis Technology Institute teachers
                                        get Rs. 1.66 crore funding.
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="program_highlights_right news_paper_articles">
                                <div className="verticalScroll redscroll">
                                  <div className="headingbg">
                                    Newspaper Articles
                                  </div>
                                  <ul className="listingbox">
                                    <li>
                                      <a
                                        className="redlink"
                                        target="_blank"
                                        href="https://www.deccanherald.com/education/how-to-practice-your-ikigai-897500.html"
                                      >
                                        How to practice your Ikigai?
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="redlink"
                                        target="_blank"
                                        href="https://www.hindustantimes.com/pune-news/principal-speak-ketan-kotecha-opens-up-about-plans-for-symbiosis-institute-of-technology/story-FErQfPWdWb4WFhmliIh6cL.html"
                                      >
                                        Principal speak: Dr.Ketan Kotecha opens
                                        up about plans for Symbiosis Institute
                                        of Technology.
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="redlink"
                                        target="_blank"
                                        href="/images/innerpages/about/Take-the-right-decision.jpg"
                                      >
                                        Take the right decision after class XII
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="redlink"
                                        target="_blank"
                                        href="https://www.thehindu.com/education/how-mechanical-engineers-can-drive-digital-transformation/article33219111.ece"
                                      >
                                        Article In The Hindu On 3D printers and
                                        digital twins.
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div
                              className="Magzin_artical_slider"
                              onClick={handleMagazineArticleClick}
                            >
                              <div className="w-100">
                                <RecruitersSlider
                                  program="MagazineArticle"
                                  slidesPerView={3}
                                  spaceBetween={0}
                                />
                              </div>
                            </div>
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
                      <div className="row row g-0 g-md-5">
                        <div className="col-lg-4 text-center">
                          <div className="leader-sticky">
                            <div className="leader-image-wrapper">
                              <Image
                                src="/images/innerpages/about/Dr-Deepali-Vora.webp"
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
                              Dr. Deepali Vora
                            </h2>
                            <h5 className="subheading18 mb-0">
                              Deputy Director Academics
                              <span>
                                Professor, Computer Science Engineering,
                                Ph.D.(CSE),
                              </span>
                            </h5>
                          </div>
                          <div className="leader-content mt-4">
                            <p>
                              Within the dynamic field of engineering, SIT is at
                              a forefront of technological innovations, where
                              the combination of expertise, technology, and
                              creativity drives our group's pursuit of
                              excellence. SIT serves as a centre for creativity,
                              a lighthouse for learning, and a place where ideas
                              come together to form the future. The foundation
                              of the success of our institute is the dedication
                              of faculty members to academic rigor, research
                              endeavours, and mentoring. Their commitment in
                              developing the next wave of engineers has an
                              influence on students' lives outside of the
                              classroom.
                            </p>
                            <p>
                              Our primary goal has consistently been to bring
                              out the best attribute in students’, shaping them
                              into professionals with ethical and moral values.
                            </p>
                            <p>
                              Dr. Deepali Vora, Professor in Computer Science
                              and Engineering, Deputy Director Academics,
                              Symbiosis Institute of Technology, Pune
                            </p>
                            <p>
                              Dr. Deepali Vora is a seasoned academician and
                              administrator, actively contributing to the growth
                              and development of Symbiosis Institute of
                              Technology. With over 25 years of rich experience
                              spanning research, industry, and academia, her
                              work reflects a deep commitment to both academic
                              excellence and institutional progress. She has
                              served on various committees at both the institute
                              and university levels, playing a key role in
                              shaping academic policies and programs.
                            </p>
                            <p>
                              Dr. Vora has an impressive research portfolio,
                              with over 75 publications in reputed national and
                              international journals and conferences, many
                              indexed in SCOPUS and Web of Science. She has
                              co-authored five books, contributed numerous book
                              chapters, and delivered expert talks in the fields
                              of Data Science and Machine Learning. Her
                              technical sessions on Data Science and Machine
                              Learning using Python have been highly impactful
                              for both students and faculty.
                            </p>
                            <p>
                              She has successfully secured research and training
                              grants from prominent government bodies such as
                              AICTE, ISTE, and DST, as well as from industry
                              partners, enabling her to organize conferences,
                              conduct faculty development programs, and pursue
                              research initiatives. Dr. Vora also serves on
                              various Boards of Studies and advisory panels
                              across institutions. As a keynote speaker and
                              advisory committee member at international
                              conferences, she has delivered several influential
                              talks on Artificial Intelligence.
                            </p>
                            <p>
                              An active reviewer, Dr. Vora contributes to
                              several international journals and conferences,
                              including IEEE Access, IGI Global’s Journal of Big
                              Data Analytics, Journal of Intelligent Systems,
                              and publications under Inderscience. Over 25
                              postgraduate students have completed their
                              dissertations under her guidance, and she is
                              currently mentoring several Ph.D. scholars in
                              their research endeavours.
                            </p>
                            <p>
                              Her contributions to knowledge dissemination
                              extend beyond academia, with articles on Data
                              Science and Machine Learning featured on platforms
                              like KnowledgeHut.com. Additionally, her online
                              course on “Deep Learning” is available on the
                              Unschool platform, reflecting her commitment to
                              accessible and practical education.
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
                      <div className="row row g-0 g-md-5">
                        <div className="col-lg-4 text-center">
                          <div className="leader-sticky">
                            <div className="leader-image-wrapper">
                              <Image
                                src="/images/innerpages/about/satish-patil.webp"
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
                              Dr. Satish Patil
                            </h2>
                            <h5 className="subheading18 mb-0">
                              Deputy Director Administration
                              <span>Ph.D.(Civil Engineering),</span>
                            </h5>
                          </div>
                          <div className="leader-content mt-4">
                            <p>
                              Dr. Satish Baliram Patil is an accomplished
                              academic administrator and civil engineering
                              professional with more than 35 years of experience
                              spanning higher education, technical education,
                              research, institutional administration, and public
                              works. He currently serves as the Deputy Director
                              (Administration) at Symbiosis Institute of
                              Technology (SIT), Symbiosis International (Deemed
                              University), Pune. Throughout his distinguished
                              career, he has held several academic leadership
                              positions, including Professor, Head of Department
                              contributing significantly to institutional
                              development, academic excellence, quality
                              assurance, and strategic administration.
                            </p>
                            <p>
                              Dr. Satish Patil holds a Ph.D. in Civil
                              Engineering, with research focused on Natural
                              Ventilation for Enclosed Buildings in Rural Areas.
                              His academic interests include sustainable
                              infrastructure, structural engineering,
                              transportation planning, construction materials,
                              geotechnical engineering, environmental
                              engineering, and institutional administration.
                            </p>
                            <p>
                              A committed researcher, Dr. Satish Patil has
                              published 15+ research papers, including
                              publications in Scopus-indexed, Web of Science,
                              and Q1 journals, presented papers at numerous
                              national and international conferences, authored
                              three book chapters, and has been granted four
                              published patents along with one copyright. He has
                              successfully guided two Ph.D. scholars and is
                              currently supervising additional doctoral
                              researchers. He also serves as a reviewer for
                              international conferences and actively promotes
                              multidisciplinary research and innovation.
                            </p>
                            <p>
                              Dr Satish Patil is a Life Member of the
                              Institution of Engineers (India) (IEI) and the
                              Indian Society for Technical Education (ISTE), and
                              is a Fellow of the Institution of Valuers (FIV).
                              His professional expertise encompasses university
                              governance, academic planning, accreditation
                              processes, policy implementation, infrastructure
                              planning, faculty development, and administrative
                              excellence. At Symbiosis Institute of Technology,
                              Dr. Satish Patil is committed to strengthening
                              institutional governance, enhancing administrative
                              efficiency, supporting academic excellence, and
                              fostering a student-centric ecosystem aligned with
                              the vision and values of Symbiosis International
                              (Deemed University).
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
