"use client";

import { useState } from "react";
import Table from "@/components/ui/Table";
import {
  eligibilityAdmissionColumns,
  eligibilityAdmissionBranchwise,
  AdmissionProcessEnquiryColumns,
  AdmissionProcessEnquiryData,
  BranchSpecificEnquiryColumns,
  BranchSpecificEnquiryData,
} from "@/data/tableData";
import "@/app/css/admission.css";
import Link from "next/link";

const AdmissionProcedurepg = () => {
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
              Indian Students
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
              International Admission
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
            <h2 className="siteee-title">Eligibility</h2>
            <p className="siteee-intro">
              Diploma Course/ Diploma in vocational Course from any recognized
              Polytechnic College as per AICTE norms.
              <div className="subheading pb-0 mb-0">OR</div>
              Passed Diploma in Vocational stream in the same or allied sector
              as per AICTE norms.
              <div className="subheading pb-0 mb-0">OR</div>
              Passed B Sc Degree from a recognized university as defined by UGC
              [Obtained at least 45% marks (40% in case of candidate belonging
              to SC/ST category) and passed H.S.C with mathematics as a subject
              as per AICTE norms.
            </p>
            <h2 className="siteee-title">Indian students can get admission</h2>
            <ul className="siteee-intro">
              <li>In the second year through lateral entry.</li>
            </ul>
            <h2 className="siteee-title">Online Admission Procedure</h2>
            <div className="siteee-timeline">
              <article className="siteee-step">
                <span className="siteee-step-number">1</span>
                <div className="siteee-step-card">
                  <div className="subheading18 redheading">Paid Registration</div>
                  <p>
                    Direct Second Year Registration Link-
                    <br />A non-refundable fee of Rs.1500/- for online
                    application is payable by every candidate at the time of
                    registration for the SIT
                  </p>
                </div>
              </article>
              <article className="siteee-step">
                <span className="siteee-step-number">2</span>
                <div className="siteee-step-card">
                  <div className="subheading18 redheading">Document Uploading Link -</div>
                </div>
              </article>
              <article className="siteee-step">
                <span className="siteee-step-number">3</span>
                <div className="siteee-step-card">
                  <div className="subheading18 redheading">Documents Verification</div>
                  <p>Uploaded documents will be verified by SIT experts</p>
                </div>
              </article>
              <article className="siteee-step">
                <span className="siteee-step-number">4</span>
                <div className="siteee-step-card">
                  <div className="subheading18 redheading">
                    Merit listing (Branch Allocation)
                  </div>
                  <p>
                    After the document verification and eligibility check, the
                    merit list will be prepared and candidates will be informed
                    through e-mail
                  </p>
                </div>
              </article>
              <article className="siteee-step">
                <span className="siteee-step-number">5</span>
                <div className="siteee-step-card">
                  <div className="subheading18 redheading">Fees payment</div>
                  <p>
                    For details{" "}
                    <Link
                      className="redlink"
                      href="/pdf/admission/admission-procedure/2ndSubsequentYearDSY202627.pdf"
                      target="_blank"
                    >
                      Click Here
                    </Link>
                  </p>
                </div>
              </article>
              <article className="siteee-step">
                <span className="siteee-step-number">6</span>
                <div className="siteee-step-card">
                  <div className="subheading18 redheading">Hostel Allocation</div>
                  <p>
                    After fees payment, interested candidates can register for
                    hostel allotment.
                  </p>
                </div>
              </article>
              <article className="siteee-step">
                <span className="siteee-step-number">7</span>
                <div className="siteee-step-card">
                  <div className="subheading">
                    List of eligibility documents required for admission:
                  </div>
                  <div className="subheading18 redheading">
                    Eligibility documents to be uploaded second stage of
                    admission after registration
                  </div>
                  <Table
                    columns={eligibilityAdmissionColumns}
                    data={eligibilityAdmissionBranchwise}
                    wrapperClassName="table-responsive"
                    tableClassName="student_project_table"
                  />
                </div>
              </article>
            </div>
            <section
              className="py-4 py-sm-5"
              aria-labelledby="siteee-important-links"
            >
              <h3 className="subheading ">Important Links</h3>
              <div className="siteee-step-card">
                <ul>
                  <li>
                    Direct Second Year 2026 Fees Structure -{" "}
                    <Link
                      className="redlink"
                      href="/pdf/admission/admission-procedure/2nd-subsequent-year-DSY-2026-27.pdf"
                      target="_blank"
                    >
                      Click Here
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="redlink"
                      href="/pdf/admission/admission-procedure/refundp.pdf"
                      target="_blank"
                    >
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
            <section
              className="siteee-contact"
              aria-labelledby="siteee-contact-title"
            >
              <h3 id="siteee-contact-title">Write to Us</h3>
              <div className="siteee-contact-grid">
                <div>
                  <h4>General inquiries</h4>
                  <Link href="mailto:lateraladmissions@sitpune.edu.in">
                    lateraladmissions@sitpune.edu.in
                  </Link>
                </div>
                <div>
                  <h4>Documents uploading related inquiries</h4>
                  <Link href="mailto:lateraladmissions@sitpune.edu.in">
                    lateraladmissions@sitpune.edu.in
                  </Link>
                </div>
                <div>
                  <h4>Hostel inquiries</h4>
                  <Link
                    className=""
                    href="mailto:studentaffairs@sitpune.edu.in"
                  >
                    studentaffairs@sitpune.edu.in
                  </Link>
                </div>
              </div>
            </section>
            <section className="siteee-step-card mt-4 mt-sm-5 mb-4 mb-sm-5">
              <h2 className="siteee-title">
                Guidelines for Documents Uploading
              </h2>
              <p>
                Kindly note the following guidelines while uploading the
                documents –
              </p>
              <ol>
                <li>
                  Upload one PDF file for each mandatory document (Aadhar
                  card,10th mark sheet, Diploma 3rd,4th and 5th Mark sheet),
                  having scans of both sides / all pages of the document.
                </li>
                <li>
                  Upload the correct document PDF against the corresponding
                  document title. For instance, do not upload the 10th mark
                  sheet in place of the 10th passing certificate.
                </li>
                <li>
                  Ensure that the uploaded document PDF’s contain clear and
                  readable scanned pages of the required documents.
                </li>
                <li>
                  Ensure that you save and click the submit button after
                  uploading documents in the portal. Candidates failing to do so
                  will not be included in the merit listing (branch allocation).
                </li>
                <li>
                  You may upload the currently unavailable documents later; such
                  as the entrance examination score card and the 12th Mark list,
                  12th Passing, Leaving / Transfer certificates.
                </li>
              </ol>
            </section>
            <section aria-labelledby="siteee-talk-us">
              <div className="subheading">Talk to us</div>
              <div className="subheading18">
                Overall Admission Process Enquiry
              </div>
              <Table
                columns={AdmissionProcessEnquiryColumns}
                data={AdmissionProcessEnquiryData}
                wrapperClassName="table-responsive"
                tableClassName="student_project_table"
              />
            </section>

            <section aria-labelledby="siteee-talk-us" className="mt-4 mt-sm-5">
              <div className="subheading18">
                Overall Admission Process Enquiry
              </div>
              <Table
                columns={BranchSpecificEnquiryColumns}
                data={BranchSpecificEnquiryData}
                wrapperClassName="table-responsive"
                tableClassName="student_project_table"
              />
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
            <h2 className="siteee-title">International admission</h2>
            <p className="siteee-intro">
              Symbiosis Centre for International Education (SCIE) handles all
              subject matters relating to admissions of International Students
              to the constituent institutes of Symbiosis International (Deemed
              University).
            </p>
            <p className="siteee-intro">
              Kindly visit the link provided below for further assistance:{" "}
              <a
                className="redlink"
                href="https://www.scie.ac.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                click Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcedurepg;
