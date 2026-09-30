"use client";

import { useState } from "react";
import "@/app/css/admission.css";
import Link from "next/link";

const AdmissionProcedureug = () => {
  const [activeTab, setActiveTab] = useState("siteee");

  return (
    <div className="main_content">
      <div className="admission-tabs">
        <ul
          className="nav nav-tabs"
          role="tablist"
          aria-label="Admission routes"
        >
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link${activeTab === "siteee" ? " active" : ""}`}
              id="admission-siteee-tab"
              type="button"
              role="tab"
              aria-controls="admission-siteee-panel"
              aria-selected={activeTab === "siteee"}
              onClick={() => setActiveTab("siteee")}
            >
              SITEEE
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link${activeTab === "other" ? " active" : ""}`}
              id="admission-JEEMain-tab"
              type="button"
              role="tab"
              aria-controls="admission-JEEMain-panel"
              aria-selected={activeTab === "other"}
              onClick={() => setActiveTab("other")}
            >
              JEE (Main) / ASGEEE
            </button>
          </li>
        </ul>

        <div className="tab-content admission-tabs-content">
          <div
            className={`tab-pane fade${activeTab === "siteee" ? " show active" : ""}`}
            id="admission-siteee-panel"
            role="tabpanel"
            aria-labelledby="admission-siteee-tab"
            hidden={activeTab !== "siteee"}
            tabIndex={0}
          >
            <h2 className="siteee-title">
              1. Through Symbiosis Institute of Technology Engineering Entrance
              Examination (SITEEE)
            </h2>
            <p className="siteee-intro">
              A candidate seeking admission to the First Year B.Tech. programmes
              at Symbiosis Institute of Technology, Pune (SIU), can appear for
              the SITEEE 2026, which is conducted twice in CBT mode at multiple
              test centres across India.
            </p>
            <div className="siteee-timeline">
              <article className="siteee-step">
                <span className="siteee-step-number">1</span>
                <div className="siteee-step-card">
                  <div className="subheading18">
                    Step 1: Paid Registration, Document Upload, and Preference
                    Selection
                  </div>
                  <ul>
                    <li>
                      Registration is available online at www.sitpune.edu.in |
                      www.set-test.org
                    </li>
                  </ul>
                  <h4>Registration includes:</h4>
                  <ul className="siteee-sublist">
                    <li>Basic candidate information</li>
                    <li>Selection of SITEEE test date(s)</li>
                    <li>Selection of preferred test centre(s)</li>
                    <li>Institute selection</li>
                    <li>Selection of branch preferences</li>
                    <li>Upload of relevant documents:</li>
                    <li>
                      Category Certificate (if applicable) — mandatory for SC /
                      ST / PwD / KM candidates
                    </li>
                  </ul>
                  <h4>Payment of fees:</h4>
                  <ul>
                    <li>
                      SITEEE Examination Fee: ₹2,250 per test (non-refundable
                      and non-transferable)
                    </li>
                    <li>
                      SIT Pune Institute Charges: ₹1,000 (non-refundable and
                      non-transferable)
                    </li>
                  </ul>
                  <p className="siteee-note">
                    Note: Payment of the ₹1,000 institute charges for SIT Pune
                    is mandatory for merit list consideration. Candidates
                    failing to pay will not be included in the merit list or
                    branch allocation.
                  </p>
                  <p className="siteee-date-badge">
                    Registration &amp; Payment Deadline:{" "}
                    <strong>April 15, 2026 (Wednesday)</strong>
                  </p>
                  <h4>Contact for queries:</h4>
                  Email:{" "}
                  <Link className="redlink" href="mailto:info@set-test.org">
                    info@set-test.org
                  </Link>{" "}
                  | Mobile:
                  <Link className="redlink" href="tel:9071013499">
                    {" "}
                    9071013499
                  </Link>
                </div>
              </article>

              <article className="siteee-step">
                <span className="siteee-step-number">2</span>
                <div className="siteee-step-card">
                  <div className="subheading18">
                    Step 2: Admit Card Download
                  </div>
                  {/* <ul>
                  <li>
                    Candidates must download their admit card from -
                    https://www.set-test.org.
                  </li>
                </ul> */}
                  <h4>Admit Card Availability:</h4>
                  <ul>
                    <li>Test 01: April 24, 2026 (Friday)</li>
                    <li>Test 02: April 30, 2026 (Thursday)</li>
                  </ul>
                </div>
              </article>

              <article className="siteee-step">
                <span className="siteee-step-number">3</span>
                <div className="siteee-step-card">
                  <div className="subheading18">Step 3: SITEEE Examination</div>
                  <ul>
                    <li>Mode: Computer-Based Test (CBT)</li>
                    <li>Cities: Across 68 cities in India</li>
                  </ul>
                  <h4>Exam Schedule:</h4>
                  <ul>
                    <li>
                      Test 01: May 2, 2026 (Saturday), 11:30 AM – 12:30 PM
                    </li>
                    <li>Test 02: May 10, 2026 (Sunday), 11:30 AM – 12:30 PM</li>
                  </ul>
                </div>
              </article>

              <article className="siteee-step">
                <span className="siteee-step-number">4</span>
                <div className="siteee-step-card">
                  <div className="subheading18">Step 4: Result Declaration</div>
                  <ul>
                    <li>
                      Results can be checked and scorecards downloaded from
                      www.set-test.org
                    </li>
                  </ul>
                  <p className="siteee-date-badge">
                    Result Declaration Date:{" "}
                    <strong>May 20, 2026 (Wednesday)</strong>
                  </p>
                </div>
              </article>

              <article className="siteee-step">
                <span className="siteee-step-number">5</span>
                <div className="siteee-step-card">
                  <div className="subheading18">
                    Step 5: Merit Listing (Branch Allocation)
                  </div>
                  <ul>
                    <li>
                      Candidates who have appeared for SITEEE and paid the
                      ₹1,000 institute charges are eligible for merit listing.
                    </li>
                  </ul>
                  <h4>Branch Allocation Process:</h4>
                  <ul>
                    <li>
                      Based on entrance examination scores, branch preferences,
                      and seat availability
                    </li>
                    <li>
                      Higher-scoring candidates are allotted higher-preference
                      branches
                    </li>
                    <li>
                      Merit-listed candidates must confirm the allotted branch
                      by paying the first installment of academic fees within 5
                      days of merit list declaration
                    </li>
                    <li>
                      An email will be sent with branch allotment details, a
                      link to download the offer letter, and instructions for
                      fee payment
                    </li>
                  </ul>
                </div>
              </article>

              <article className="siteee-step">
                <span className="siteee-step-number">6</span>
                <div className="siteee-step-card">
                  <div className="subheading18">
                    Step 6: Fees Payment (First Installment)
                  </div>
                  <ul>
                    <li>
                      Payment modes: Online (NEFT/RTGS/Internet Banking/Credit
                      Card/Debit Card or Demand Draft only)
                    </li>
                    <li>Cheque and cash payments are not accepted</li>
                  </ul>
                </div>
              </article>

              <article className="siteee-step">
                <span className="siteee-step-number">7</span>
                <div className="siteee-step-card">
                  <div className="subheading18">
                    Step 7: Document Verification (Category Candidates Only)
                  </div>
                  <ul>
                    <li>
                      Category certificates are verified for applicable
                      candidates.
                    </li>
                    <li>
                      Discrepancies may result in removal from the current merit
                      list; candidates will be considered in the next merit
                      list.
                    </li>
                    <li>Separate communication will be sent in such cases.</li>
                  </ul>
                </div>
              </article>

              <article className="siteee-step">
                <span className="siteee-step-number">8</span>
                <div className="siteee-step-card">
                  <div className="subheading18">
                    Step 8: Waitlist / Branch Change (If Applicable)
                  </div>
                  <ul>
                    <li>
                      Branch change options are available after payment of the
                      first installment.
                    </li>
                    <li>
                      Candidates who fail to pay within 5 days of receiving the
                      offer letter are automatically waitlisted for
                      higher-preference branches in subsequent merit lists.
                    </li>
                  </ul>
                </div>
              </article>

              <article className="siteee-step">
                <span className="siteee-step-number">9</span>
                <div className="siteee-step-card">
                  <div className="subheading18">Step 9: Hostel Allocation</div>
                  <ul>
                    <li>
                      Hostel is provided on a first-come, first-served basis.
                    </li>
                    <li>
                      Candidates requesting hostel allocation must select the
                      option while paying the first installment.
                    </li>
                    <li>The hostel team will communicate availability.</li>
                    <li>
                      For hostel queries:{" "}
                      <Link
                        className="redlink"
                        href="mailto:hostelallotment@sitpune.edu.in"
                      >
                        hostelallotment@sitpune.edu.in
                      </Link>
                    </li>
                  </ul>
                </div>
              </article>

              <article className="siteee-step">
                <span className="siteee-step-number">10</span>
                <div className="siteee-step-card">
                  <div className="subheading18">
                    Step 10: Eligibility Process for Admitted Candidates
                  </div>
                  <ul>
                    <li>
                      After paying the first installment, candidates will
                      receive an email from the SIU Eligibility Section.
                    </li>
                    <li>
                      Candidates must complete and upload all required documents
                      on the Eligibility Portal:
                      <ul className="siteee-sublist">
                        <li>Application for Confirmation of Eligibility</li>
                        <li>Indemnification (Student &amp; Parent)</li>
                        <li>Medical Undertaking</li>
                        <li>Anti-Ragging Undertaking</li>
                        <li>Academic records, ID proof, certificates</li>
                      </ul>
                    </li>
                  </ul>

                  <h4>Contact for queries:</h4>
                  <ul>
                    <li>
                      Email:{" "}
                      <Link
                        className="redlink"
                        href="mailto:eligibility@sitpune.edu.in"
                      >
                        eligibility@sitpune.edu.in
                      </Link>
                    </li>
                    <li>
                      Eligibility In-Charge: Sr. Coordinator Mr. Nikhil Pujari –
                      <Link className="redlink" href="tel:9112299250">
                        9112299250
                      </Link>
                    </li>
                  </ul>
                  <h4>Document Upload Guidelines:</h4>
                  <ul>
                    <li>One PDF per mandatory document</li>
                    <li>
                      Both sides / all pages of documents should be clear and
                      legible
                    </li>
                    <li>
                      Save and submit after upload; otherwise, the candidate
                      will not be included in the merit list
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            <section
              className="siteee-contact"
              aria-labelledby="siteee-contact-title"
            >
              <h3 id="siteee-contact-title">Write to Us</h3>
              <div className="siteee-contact-grid">
                <div>
                  <h4>General inquiries</h4>
                  <a href="mailto:btechadmissions@sitpune.edu.in">
                    btechadmissions@sitpune.edu.in
                  </a>
                </div>
                <div>
                  <h4>Documents uploading related inquiries</h4>
                  <a href="mailto:btechdocuments@sitpune.edu.in">
                    btechdocuments@sitpune.edu.in
                  </a>
                </div>
                <div>
                  <h4>Hostel inquiries</h4>
                  <Link
                    className=""
                    href="mailto:hostellotment@sitpune.edu.in"
                  >
                    hostellotment@sitpune.edu.in
                  </Link>
                </div>
                <div>
                  <h4>Eligibility inquiries</h4>
                  <Link
                    className=""
                    href="mailto:eligibility@sitpune.edu.in"
                  >
                    eligibility@sitpune.edu.in
                  </Link>
                </div>
                <div>
                  <h4>Fees related inquiries</h4>
                  <Link className="" href="mailto:fees@sitpune.edu.in">
                    fees@sitpune.edu.in
                  </Link>
                </div>
              </div>
            </section>
          </div>
          <div
            className={`tab-pane fade${activeTab === "other" ? " show active" : ""}`}
            id="admission-JEEMain-panel"
            role="tabpanel"
            aria-labelledby="admission-JEEMain-tab"
            hidden={activeTab !== "other"}
            tabIndex={0}
          >
            <h2 className="siteee-title">
              2. Through JEE (Main-2026) / Any State Government Engineering
              Entrance Examination - 2026
            </h2>
            <p className="siteee-intro">
              Candidates can also apply using JEE (Main-2026) or/ and Any State
              Government Engineering Entrance Examination-2026 scores.
            </p>

            <div className="siteee-timeline">
              <article className="siteee-step">
                <span className="siteee-step-number">1</span>
                <div className="siteee-step-card">
                  <div className="subheading18">
                    Step 1: Paid Registration, Document Upload, and Branch
                    Preference Selection
                  </div>
                  <ul>
                    <li>
                      Registration online at: www.sitpune.edu.in | Registration
                      link:{" "}
                      <Link
                        className="redlink"
                        href="https://ezapp26.ishinfo.com/SIT2026/register/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://ezapp26.isihinfo.com/SIT2026/register/
                      </Link>
                    </li>
                    <li>Registration fee: ₹1,500</li>
                    <li>
                      Fee waiver: Candidates who have paid SITEEE + SIT Pune
                      registration (₹2,250 + ₹1,000) are exempted
                    </li>
                  </ul>
                  <h4>Documents to Upload:</h4>
                  <ul>
                    <li>Aadhaar card</li>
                    <li>
                      Entrance Exam Scorecard (JEE (Main-2026) / Any State
                      Engineering Entrance Exam-2026)
                    </li>
                    <li>Category Certificate (if applicable)</li>
                    <li>
                      Click Submit after uploading documents; failure will
                      result in exclusion from merit listing
                    </li>
                  </ul>
                </div>
              </article>

              <article className="siteee-step">
                <span className="siteee-step-number">2</span>
                <div className="siteee-step-card">
                  <div className="subheading18">
                    Step 2: Merit Listing (Branch Allocation)
                  </div>
                  <ul>
                    <li>
                      Branch allocation based on entrance scores, preferences,
                      and seat availability
                    </li>
                    <li>Higher scores → higher-preference branch allocation</li>
                    <li>
                      Merit-listed candidates must confirm branch by paying
                      first installment within 5 days
                    </li>
                    <li>
                      Email will be sent with allotment details and payment link
                    </li>
                  </ul>
                </div>
              </article>

              <article className="siteee-step">
                <span className="siteee-step-number">3</span>
                <div className="siteee-step-card">
                  <div className="subheading18">
                    Step 3: Fees Payment (First Installment)
                  </div>
                  <ul>
                    <li>
                      Payment modes: Online (NEFT/RTGS/Internet Banking/Credit
                      Card/Debit Card or Demand Draft only)
                    </li>
                    <li>Cheque and cash not accepted</li>
                  </ul>
                </div>
              </article>

              <article className="siteee-step">
                <span className="siteee-step-number">4</span>
                <div className="siteee-step-card">
                  <div className="subheading18">
                    Step 4: Document Verification
                  </div>
                  <ul>
                    <li>
                      Verification of entrance scorecards and category
                      certificates for first installment paid candidates
                    </li>
                    <li>
                      Discrepancies may result in removal from the current merit
                      list; candidates will be considered in the next merit
                      list.
                    </li>
                    <li>Separate communication will be sent in such cases</li>
                  </ul>
                </div>
              </article>

              <article className="siteee-step">
                <span className="siteee-step-number">5</span>
                <div className="siteee-step-card">
                  <div className="subheading18">
                    Step 5: Waitlist / Branch Change (If Required)
                  </div>
                  <ul>
                    <li>
                      Branch change options are available after payment of the
                      first installment.
                    </li>
                    <li>
                      Candidates who fail to pay within 5 days of receiving the
                      offer letter are automatically waitlisted for
                      higher-preference branches in subsequent merit lists.
                    </li>
                  </ul>
                </div>
              </article>

              <article className="siteee-step">
                <span className="siteee-step-number">6</span>
                <div className="siteee-step-card">
                  <div className="subheading18">Step 6: Hostel Allocation</div>
                  <ul>
                    <li>
                      Same as SITEEE route: first-come, first-served, request
                      via portal
                    </li>
                    <li>
                      Email:{" "}
                      <Link
                        className="redlink"
                        href="mailto:hostelallotment@sitpune.edu.in"
                      >
                        hostelallotment@sitpune.edu.in
                      </Link>
                    </li>
                  </ul>
                </div>
              </article>

              <article className="siteee-step">
                <span className="siteee-step-number">7</span>
                <div className="siteee-step-card">
                  <div className="subheading18">
                    Step 7: Eligibility Process for Admitted Candidates
                  </div>
                  <ul>
                    <li>
                      After paying the first installment, candidates will
                      receive an email from the SIU Eligibility Section.
                    </li>
                    <li>
                      Candidates must complete and upload all required documents
                      on the Eligibility Portal:
                    </li>
                  </ul>
                  <ul className="siteee-sublist">
                    <li>Application for Confirmation of Eligibility</li>
                    <li>Indemnification (Student &amp; Parent)</li>
                    <li>Medical Undertaking</li>
                    <li>Anti-Ragging Undertaking</li>
                    <li>Academic records, ID proof, certificates</li>
                  </ul>
                  <h4>Contact for queries:</h4>
                  <ul>
                    <li>
                      Email:{" "}
                      <Link
                        className="redlink"
                        href="mailto:eligibility@sitpune.edu.in"
                      >
                        eligibility@sitpune.edu.in
                      </Link>
                    </li>
                    <li>
                      Eligibility In-Charge: Sr. Coordinator Mr. Nikhil Pujari –
                      <Link className="redlink" href="tel:9028765797">
                        9028765797
                      </Link>
                    </li>
                  </ul>
                  <h4>Document Upload Guidelines:</h4>
                  <ul>
                    <li>One PDF per mandatory document</li>
                    <li>
                      Both sides / all pages of documents should be clear and
                      legible
                    </li>
                    <li>
                      Save and submit after upload; otherwise, the candidate
                      will not be included in the merit list
                    </li>
                  </ul>
                </div>
              </article>
            </div>

            <section
              className="siteee-contact"
              aria-labelledby="jeemain-contact-title"
            >
              <h3 id="jeemain-contact-title">Write to Us</h3>
              <div className="siteee-contact-grid">
                <div>
                  <h4>General inquiries</h4>
                  <a href="mailto:btechadmissions@sitpune.edu.in">
                    btechadmissions@sitpune.edu.in
                  </a>
                </div>
                <div>
                  <h4>Documents uploading related inquiries</h4>
                  <a href="mailto:btechdocuments@sitpune.edu.in">
                    btechdocuments@sitpune.edu.in
                  </a>
                </div>
                <div>
                  <h4>Hostel inquiries</h4>
                  <Link
                    className=""
                    href="mailto:hostelallotment@sitpune.edu.in"
                  >
                    hostelallotment@sitpune.edu.in
                  </Link>
                </div>
                <div>
                  <h4>Eligibility inquiries</h4>
                  <a href="mailto:eligibility@sitpune.edu.in">
                    eligibility@sitpune.edu.in
                  </a>
                </div>
                <div>
                  <h4>Fees related inquiries</h4>
                  <a href="mailto:fees@sitpune.edu.in">fees@sitpune.edu.in</a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcedureug;
