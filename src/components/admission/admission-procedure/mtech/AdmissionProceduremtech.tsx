"use client";

import Table from "@/components/ui/Table";
import Link from "next/link";
import {
  MtechAdmissionProcessEnquiryColumns,
  MtechAdmissionProcessEnquiryData,
  MtechBranchSpecificEnquiryColumns,
  MtechBranchSpecificEnquiryData,
} from "@/data/tableData";
import "@/app/css/admission.css";

const AdmissionProceduremtech = () => {
  return (
    <div className="main_content">
      <h2 className="siteee-title">Online Admission Procedure</h2>
      <div className="siteee-step-card mb-4">
        <p className="siteee-note">
          &quot;No new registrations are being accepted for M.Tech AI &amp; ML
          due to the current waitlist &quot;
        </p>
      </div>
      <div className="siteee-timeline">
        <article className="siteee-step">
          <span className="siteee-step-number">1</span>
          <div className="siteee-step-card">
            <div className="subheading18 redheading">Paid Registration</div>
            <ul>
              <li>M.Tech 2026-27 Registration Link :</li>
              <li>M.Tech Geoinformatics 2026-27 Registration Link :</li>
            </ul>
            <p>
              A non-refundable fee of Rs.1500/- for online application is
              payable by every candidate at the time of registration for the
              SIT.
            </p>
          </div>
        </article>
        <article className="siteee-step">
          <span className="siteee-step-number">2</span>
          <div className="siteee-step-card">
            <div className="subheading18 redheading">
              Documents Uploading and Branch Preference Selection.
            </div>
            <ul>
              <li>Documents Uploading Link -</li>
              <li>
                <Link className="redlink" href="#mtech-document-guidelines">
                  Guidelines for documents uploading
                </Link>
              </li>
            </ul>
          </div>
        </article>
        <article className="siteee-step">
          <span className="siteee-step-number">3</span>
          <div className="siteee-step-card">
            <div className="subheading18 redheading">
              Documents Verification
            </div>
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
              <strong>For GATE candidates -</strong> Preference will be given to
              GATE qualified candidates and admission of such candidates will be
              based on GATE score.
              <br />
              <strong>For Non-GATE candidates-</strong> The entrance examination
              and personal interview will be conducted at SIT, and based on the
              score of the entrance exam, merit will be declared.
            </p>
            <p className="siteee-note">
              <Link
                className="redlink"
                href="/pdf/admission/admission-procedure/M.Tech_Entrance_Syllabus.pdf"
                target="_blank"
              >
                M.Tech Common Entrance Exam Syllabus
              </Link>
            </p>
          </div>
        </article>
        <article className="siteee-step">
          <span className="siteee-step-number">5</span>
          <div className="siteee-step-card">
            <div className="subheading18 redheading">Fees Details</div>
            <p className="redlink">
              <Link className="redlink" href="#">
                Click here
              </Link>
            </p>
          </div>
        </article>
        <article className="siteee-step">
          <span className="siteee-step-number">6</span>
          <div className="siteee-step-card">
            <div className="subheading18 redheading">
              Waitlist (if required)
            </div>
          </div>
        </article>
        <article className="siteee-step">
          <span className="siteee-step-number">7</span>
          <div className="siteee-step-card">
            <div className="subheading18 redheading">Hostel Allocation</div>
            <p>
              After fees payment, interested candidates can register for hostel
              allotment.
            </p>
          </div>
        </article>
      </div>
      <section className="py-4 py-sm-5" aria-labelledby="mtech-important-links">
        <h3 id="mtech-important-links" className="subheading">
          Important Links
        </h3>
        <div className="siteee-step-card">
          <ul>
            <li>
              <Link className="redlink" href="#" target="_blank">
                List of eligibility documents required for admission
              </Link>
            </li>
            <li>
              <Link
                className="redlink"
                href="/pdf/admission/admission-procedure/Annexure_II_PG_2022.pdf"
                target="_blank"
              >
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="siteee-contact" aria-labelledby="mtech-write-us">
        <h3 id="mtech-write-us">Write to us</h3>
        <div className="siteee-contact-grid">
          <div>
            <h4>General inquiries</h4>
            <Link className="" href="mailto:mtechadmissions@sitpune.edu.in">
              mtechadmissions@sitpune.edu.in
            </Link>
          </div>
          <div>
            <h4>Documents uploading related inquiries</h4>
            <Link className="" href="mailto:mtechadmissions@sitpune.edu.in">
              mtechadmissions@sitpune.edu.in
            </Link>
          </div>
          <div>
            <h4>Hostel inquiries</h4>
            <Link className="" href="mailto:hostelallotment@sitpune.edu.in">
              hostelallotment@sitpune.edu.in
            </Link>
          </div>
        </div>
      </section>
      <section
        className="siteee-step-card mt-4 mt-sm-5 mb-4 mb-sm-5"
        id="mtech-document-guidelines"
      >
        <h2 className="siteee-title">
          Guidelines for Documents Uploading
        </h2>
        <p>
          Kindly note the following guidelines while uploading the documents –
        </p>
        <ul>
          <li>
            Upload one PDF file for each mandatory document (Aadhar card, 10th
            mark sheet, 12th Mark sheet, BE/B Tech 1st to 8th semesters mark
            sheets), having scans of both sides / all pages of the document.
          </li>
          <li>
            Upload the correct document PDF against the corresponding document
            title. For instance, do not upload the 10th mark sheet in place of
            the 10th passing certificate.
          </li>
          <li>
            Ensure that the uploaded document PDF’s contain clear and readable
            scanned pages of the required documents.
          </li>
          <li>
            Ensure that you save and click the Submit Button after uploading
            documents in the portal.
          </li>
          <li>
            You may upload the currently unavailable documents later; 8th sem
            marksheet in case of appeared students, Leaving / Transfer
            certificates, etc.
          </li>
        </ul>
      </section>

      <section aria-labelledby="siteee-talk-us">
        <div className="subheading">Talk to us</div>
        <div className="subheading18">Overall Admission Process Enquiry</div>
        <Table
          columns={MtechAdmissionProcessEnquiryColumns}
          data={MtechAdmissionProcessEnquiryData}
          wrapperClassName="table-responsive"
          tableClassName="student_project_table"
        />
      </section>

      <section aria-labelledby="siteee-talk-us" className="mt-4 mt-sm-5">
        <div className="subheading18">Branch Specific Enquiry</div>
        <Table
          columns={MtechBranchSpecificEnquiryColumns}
          data={MtechBranchSpecificEnquiryData}
          wrapperClassName="table-responsive"
          tableClassName="student_project_table"
        />
      </section>
      <div className="mt-4 mt-sm-5">
        <div className="subheading">International Admission</div>
        <p>
          Symbiosis Centre for International Education (SCIE) handles all
          subject matters relating to admissions of International Students to
          the constituent institutes of Symbiosis International (Deemed
          University).
        </p>
        <p>
          Kindly visit the link provided below for further assistance:{" "}
          <Link
            className="redlink"
            href="https://www.scie.ac.in/"
            target="_blank"
          >
            click Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdmissionProceduremtech;
