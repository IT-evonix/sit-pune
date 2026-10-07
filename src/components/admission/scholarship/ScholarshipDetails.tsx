import React from "react";
import {
  ArrowRight,
  Bank2,
  CashCoin,
  Link45deg,
  MortarboardFill,
  TrophyFill,
} from "react-bootstrap-icons";
import "@/app/css/admission.css";

const ScholarshipDetails = () => {
  return (
    <div className="main_content">
      <div className="scholarship_main">
        <div className="row g-3">
          <div className="col-md-6">
            <div className="scholarship_box scholarship_summary scholarship_summary--red">
              <div className="scholarship_icon">
                <MortarboardFill size={30} aria-hidden="true" />
              </div>
              <div className="scholarship_content">
                <div className="subheading18">Name of Scholarship</div>
                <p>
                  Symbiosis International (Deemed University) has various
                  scholarship schemes to reward meritorious students.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="scholarship_box scholarship_summary">
              <div className="scholarship_icon">
                <TrophyFill size={27} aria-hidden="true" />
              </div>
              <div className="scholarship_content">
                <div className="subheading18">Scholarship Policy</div>
                <p>
                  With the objective of encouraging meritorious students and
                  academic excellence, Scholarships/ Awards are offered to
                  deserving students of the University by the Symbiosis Society
                  Foundation.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="scholarship_box scholarship_wide">
              <div className="scholarship_icon">
                <Bank2 size={28} aria-hidden="true" />
              </div>
              <div className="scholarship_content">
                <div className="subheading18">SIT</div>
                <p>
                  SIT awards merit scholarships under SIU policy for all our
                  undergraduate/ postgraduate programmes. The following are the
                  details of the Scholarship for Academic Excellence at SIT.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 mt-4 mt-sm-5">
            <section className="scholarship_section">
              <div className="siteee-step-card m-0">
                <h2 className="scholarship_heading subheading18">The Scheme</h2>
                <p>
                  Merit Scholarship for Semester / Annual Toppers - (Post
                  Graduate &amp; Undergraduate programmes)
                </p>
                <p className="scholarship_subtext">
                  Applicability and Commencement: This scholarship is applicable
                  to:
                </p>
                <ul className="siteee-sublist">
                  <li>
                    All UG / PG degree programmes which follow a semester
                    pattern.
                  </li>
                  <li>
                    UG / PG degree programmes which follow annual pattern
                    (except SMCW)
                  </li>
                  <li>
                    A student can avail only one SIU scholarship per semester.
                  </li>
                </ul>
              </div>
              <hr className="my-4 my-sm-5" />
              <div className="siteee-step-card m-0">
                <div className="subheading18">Awarded To:</div>
                <ul className="siteee-sublist">
                  <li>
                    Four semester toppers in the order of merit of every batch
                    of every degree programme (UG and PG) under SIU.
                  </li>
                  <li>
                    <span>Four toppers which follow an annual pattern.</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <div className="col-12 mt-4 mt-sm-5">
            <section className="scholarship_section">
              <div className="scholarship_heading subheading18">
                Nature of the Scholarship:
              </div>
              <p>
                First four toppers in the order of merit of every batch of every
                programme in every semester/ annually will be awarded the Merit
                Scholarship.
              </p>
              <p>
                The Scholarship recipients are granted concession in Academic
                Fees of the semester, applicable to all full time Post Graduate
                and Undergraduate degree programmes of all the Constituents of
                SIU, as below:
              </p>
            </section>
          </div>

          <div className="col-12">
            <div className="scholarship_box natureof_scholarship  scholarship_summary--red">
              <ul className="scholarship_rate_list">
                <li>
                  1st topper gets <strong>20%</strong>,
                </li>
                <li>
                  2nd topper gets <strong>15%</strong>,
                </li>
                <li>
                  3rd topper gets <strong>10%</strong>,
                </li>
                <li>
                  4th topper gets <strong>5%</strong>.
                </li>
              </ul>
              <div className="scholarship_payment">
                <span className="scholarship_icon">
                  <CashCoin size={28} aria-hidden="true" />
                </span>
                <p>
                  The scholarship amount will not be paid directly to the
                  students. It will be transferred by the University directly to
                  the Constituent, for the adjustment in academic fee of the
                  following semester.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="scholarship_box scholarship_bank">
              <div className="scholarship_icon">
                <Bank2 size={27} aria-hidden="true" />
              </div>
              <p>
                In case the student is a topper in the last semester of the
                programme, the scholarship amount will be transferred to the
                student&apos;s bank account as per available records.
              </p>
            </div>
          </div>

          <div className="col-12">
            <a
              className="scholarship_link"
              href="https://www.siu.edu.in/admissions/scholarship"
              target="_blank"
              rel="noreferrer"
            >
              <Link45deg size={35} aria-hidden="true" />
              <div>
                SIU Scholarships details and other scholarships offered by SIU
                can be seen at
                <div
                  className="highlighttext"
                  style={{
                    color: "#ffdf2d",
                    fontFamily: "Metropolis-SemiBold",
                  }}
                >
                  https://www.siu.edu.in/admissions/scholarship
                </div>
              </div>
              <ArrowRight size={25} color="#fff" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetails;
