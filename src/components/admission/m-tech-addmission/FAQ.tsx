"use client";

import { useState, type ReactNode } from "react";
import { Accordion } from "react-bootstrap";
import Table from "@/components/ui/Table";
import {
  MtechFAQEligibilityColumns,
  MtechFAQEligibilityData,
  MtechFAQProgrammeColumns,
  MtechFAQProgrammeData,
  MtechFAQScheduleColumns,
  MtechFAQScheduleData,
} from "@/data/tableData";
import "@/app/css/admission.css";

interface FAQItem {
  question: string;
  answer: ReactNode;
}

const faqs: FAQItem[] = [
  {
    question:
      "1) What are the available M.Tech programs at Symbiosis Institute of Technology, their intake capacities, and program durations?",
    answer: (
      <>
        <p>
          <strong>Symbiosis Institute of Technology</strong> offers the
          following <strong>M.Tech programs</strong> with their respective
          intake capacities and durations:
        </p>
        <Table
          columns={MtechFAQProgrammeColumns}
          data={MtechFAQProgrammeData}
          wrapperClassName="table-responsive"
          tableClassName="student_project_table"
        />
        <p>
          These programs are designed to equip students with advanced knowledge
          and skills in specialized engineering disciplines.
        </p>
        <p>*Applied for AICTE approval</p>
      </>
    ),
  },
  {
    question:
      "2) What are the important dates for the M.Tech admissions counseling and program commencement for 2026-27 at Symbiosis Institute of Technology, Pune?",
    answer: (
      <>
        <p>
          Below is the schedule for <strong>M.Tech admissions</strong> for the
          academic year <strong>2026-27:</strong>
        </p>
        <Table
          columns={MtechFAQScheduleColumns}
          data={MtechFAQScheduleData}
          wrapperClassName="table-responsive"
          tableClassName="student_project_table"
        />
        <p>
          Candidates are advised to adhere to these dates to ensure a smooth
          admission process.
        </p>
      </>
    ),
  },
  {
    question:
      "3) What are the eligibility criteria and admission process for M.Tech programs at Symbiosis Institute of Technology (SIT)?",
    answer: (
      <>
        <p>
          Below are the <strong>eligibility criteria</strong> and details about
          the <strong>admission process</strong> for M.Tech programs at SIT:
        </p>
        <h5>
          <strong>Eligibility Criteria</strong>
        </h5>
        <Table
          columns={MtechFAQEligibilityColumns}
          data={MtechFAQEligibilityData}
          wrapperClassName="table-responsive"
          tableClassName="student_project_table"
        />
        <p>
          <strong>Note:</strong> All eligibility is subject to AICTE guidelines.
        </p>
        <h5>
          <strong>Admission Process</strong>
        </h5>
        <p>
          <strong>1. Entrance Examination and Personal Interview:</strong>
        </p>
        <ul className="listingbox">
          <li>
            <strong>GATE Qualified Students:</strong> Exempted from the entrance
            exam and directly invited for a personal interview.
          </li>
          <li>
            <strong>Non-GATE Students:</strong> Must appear for an online
            entrance examination followed by a personal interview.
          </li>
        </ul>
        <p>
          <strong>2. Online Exam Details:</strong>
        </p>
        <ul className="listingbox">
          <li>
            Conducted online via computer, laptop, or mobile with internet
            connectivity.
          </li>
          <li>Specifics about exam structure and dates will be announced soon.</li>
        </ul>
        <p>
          The final selection will be based on performance in the entrance exam
          (if applicable) and personal interview.
        </p>
      </>
    ),
  },
  {
    question: "4) Will the admission rounds be conducted online?",
    answer: (
      <p>
        Yes, the admission rounds will be conducted <strong>online</strong>.
        Candidates will get an offered branch letter on mail after the merit is
        generated.
      </p>
    ),
  },
  {
    question:
      "5) Is registration mandatory for the 2026 SIT admissions, and what happens if a candidate does not complete it?",
    answer: (
      <p>
        Yes, <strong>registration is mandatory</strong> for the 2026 SIT
        admissions. Candidates who do not complete the registration process
        will not be considered for the admission process and will not be
        eligible for counselling or seat allotment. It is essential to complete
        the registration to participate in the admission procedure.
      </p>
    ),
  },
  {
    question:
      "6) What is the online admission procedure for M.Tech programs at Symbiosis Institute of Technology (SIT)?",
    answer: (
      <>
        <p>
          The <strong>online admission procedure</strong> includes the
          following steps:
        </p>
        <p>
          <strong>Paid Registration:</strong>
        </p>
        <ul className="listingbox">
          <li>
            Candidates need to register online for the{" "}
            <strong>M.Tech 2026-27 program</strong>.
          </li>
          <li>
            The registration fee is <strong>INR 1500/-</strong>, which is
            non-refundable.
          </li>
          <li>
            Ensure to complete the registration process and payment to proceed
            with the admission process.
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "7) How can candidates apply for M.Tech programs at Symbiosis Institute of Technology (SIT)?",
    answer: (
      <>
        <p>
          Candidates can apply for SIT M.Tech programs through the following
          link:
        </p>
        <p>
          Ensure that all required details and documents are submitted during
          the registration process.
        </p>
      </>
    ),
  },
  {
    question: "8) What documents are required for M.Tech program admissions?",
    answer: (
      <>
        <p>
          The following documents are <strong>mandatory</strong> for M.Tech
          admissions at SIT:
        </p>
        <ul className="listingbox">
          <li>
            <strong>Aadhar Card</strong>
          </li>
          <li>
            <strong>10th Mark Sheet</strong>
          </li>
          <li>
            <strong>12th Mark Sheet</strong>
          </li>
          <li>
            <strong>BE/B.Tech 1st to 8th Semester Mark Sheets</strong>
          </li>
        </ul>
        <p>
          Ensure all documents are uploaded in the specified format during the
          application process.
        </p>
      </>
    ),
  },
  {
    question:
      "9) Where can candidates find important resources related to M.Tech admissions at SIT?",
    answer: (
      <>
        <p>
          Candidates can access the following important resources for M.Tech
          admissions at SIT:
        </p>
        <ul className="listingbox">
          <li>
            <strong>List of Eligibility Documents Required for Admission</strong>{" "}
            – Detailed information on the documents needed for the admission
            process.{" "}
            <a
              className="redlink"
              href="https://www.sitpune.edu.in/assets/pdf/Annexure%20II_PG_2022.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              List of eligibility documents required for admission
            </a>
          </li>
          <li>
            <strong>M.Tech Common Entrance Exam Syllabus</strong> – Information
            about the syllabus for the entrance exam.{" "}
            <a
              className="redlink"
              href="https://www.sitpune.edu.in/assets/pdf/M.Tech_Entrance_Syllabus.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              M.Tech Common Entrance Exam Syllabus
            </a>
          </li>
        </ul>
        <p>
          These resources provide essential details for a smooth admission
          process. Visit the SIT admissions portal for direct access to these
          links.
        </p>
      </>
    ),
  },
  {
    question:
      "10) What are the guidelines for uploading documents for M.Tech admissions?",
    answer: (
      <>
        <p>
          Please follow these <strong>guidelines</strong> while uploading
          documents for M.Tech admissions:
        </p>
        <ul className="listingbox">
          <li>
            Upload one PDF file for each mandatory document (Aadhar card, 10th
            mark sheet, 12th mark sheet, BE/B.Tech 1st to 8th semester mark
            sheets), including scans of both sides/all pages.
          </li>
          <li>
            Ensure the correct document PDF is uploaded under the corresponding
            document title (e.g., do not upload the 10th mark sheet in place of
            the 10th passing certificate).
          </li>
          <li>
            Ensure that all uploaded PDFs contain clear and readable scans of
            the required documents.
          </li>
          <li>
            Save and click the Submit Button after uploading documents in the
            portal.
          </li>
          <li>
            You may upload currently unavailable documents, such as the
            8th-semester mark sheet (for students yet to appear) and
            Leaving/Transfer certificates, at a later date.
          </li>
          <li>
            Incomplete submissions may result in disqualification from the
            admission process.
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "11) Where can candidates upload their documents for admissions at Symbiosis Institute of Technology (SIT)?",
    answer: (
      <>
        <p>
          Candidates can upload their documents for admissions through the
          following link:
        </p>
        <p>
          Ensure all required documents are uploaded as per the guidelines
          during the application process.
        </p>
      </>
    ),
  },
  {
    question:
      "12) What is the process for document verification and merit listing at Symbiosis Institute of Technology (SIT)?",
    answer: (
      <>
        <p>
          <strong>1. Document Verification:</strong>
        </p>
        <ul className="listingbox">
          <li>
            All uploaded documents will be verified by SIT experts to ensure
            their authenticity and eligibility compliance.
          </li>
        </ul>
        <p>
          <strong>2. Merit Listing and Branch Allocation:</strong>
        </p>
        <ul className="listingbox">
          <li>
            After document verification and eligibility checks, a merit list
            will be prepared.
          </li>
          <li>
            Candidates will be informed about their merit status and branch
            allocation via email.
          </li>
        </ul>
        <p>This process ensures transparency and fairness in admissions.</p>
      </>
    ),
  },
  {
    question:
      "13) How is the merit listing (branch allocation) done for M.Tech admissions?",
    answer: (
      <>
        <p>
          Merit listing and branch allocation for M.Tech admissions at SIT are
          conducted as follows:
        </p>
        <ul className="listingbox">
          <li>
            <strong>For GATE Candidates:</strong> Preference is given to
            GATE-qualified candidates. Admissions for these candidates are
            based on their GATE scores.
          </li>
          <li>
            <strong>For Non-GATE Candidates:</strong> Non-GATE candidates must
            appear for an entrance examination and personal interview conducted
            by SIT. Merit is determined based on the entrance exam score.
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "14) How can candidates contact SIT for M.Tech admission-related inquiries?",
    answer: (
      <>
        <p>
          Candidates can reach out to SIT for M.Tech admission-related
          inquiries through the following email addresses:
        </p>
        <ul className="listingbox">
          <li>
            <strong>General inquiries:</strong>{" "}
            <a
              className="redlink"
              href="mailto:mtechadmissions@sitpune.edu.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              mtechadmissions@sitpune.edu.in
            </a>
          </li>
          <li>
            <strong>Documents uploading inquiries:</strong>{" "}
            <a
              className="redlink"
              href="mailto:mtechadmissions@sitpune.edu.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              mtechadmissions@sitpune.edu.in
            </a>
          </li>
          <li>
            <strong>Hostel-related inquiries:</strong>{" "}
            <a
              className="redlink"
              href="mailto:hostelallotment@sitpune.edu.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              hostelallotment@sitpune.edu.in
            </a>
          </li>
        </ul>
        <p>For any specific concerns, email the appropriate department for assistance.</p>
        <p>
          The final merit list will be prepared based on these criteria,
          ensuring fair and transparent branch allocation.
        </p>
      </>
    ),
  },
  {
    question:
      "15) Which web browsers are compatible for registering on the SIT Pune 2026 application portal?",
    answer: (
      <>
        <p>
          The SIT Pune 2026 application portal is compatible with the following
          web browsers:
        </p>
        <ul className="listingbox">
          <li>
            <strong>Internet Explorer:</strong> Version 6.0 or above.
          </li>
          <li>
            <strong>Other Browsers:</strong> Mozilla Firefox, Google Chrome, and
            similar browsers also support the application portal.
          </li>
        </ul>
        <p>
          Candidates are advised to use updated versions of their preferred
          browsers for a smooth registration process.
        </p>
      </>
    ),
  },
  {
    question:
      "16) How can I enable JavaScript in my browser to complete the registration for SIT Pune?",
    answer: (
      <>
        <p>
          To enable JavaScript and complete the registration for SIT Pune,
          follow these steps:
        </p>
        <ul className="listingbox">
          <li>
            Open your browser and navigate to{" "}
            <strong>Tools &gt; Internet Options</strong>.
          </li>
          <li>
            Go to the <strong>Security</strong> tab and click on{" "}
            <strong>Custom Level</strong>.
          </li>
          <li>
            Scroll down to the section labeled <strong>Scripting</strong>.
          </li>
          <li>
            Under <strong>Active Scripting</strong>, select{" "}
            <strong>Enable</strong> and click OK.
          </li>
          <li>Refresh the page and proceed with the registration again.</li>
        </ul>
        <p>Ensure JavaScript is enabled for a smooth registration process.</p>
      </>
    ),
  },
  {
    question:
      "17) How can candidates use their SIT Pune M.Tech program 2026 ID & Password or email and password in the admission process?",
    answer: (
      <>
        <p>
          Candidates can use their SIT Pune M.Tech program 2026 ID &amp;
          Password or registered email and password for the following purposes
          during the SIT admission process:
        </p>
        <ul className="listingbox">
          <li>
            <strong>Filling the Application Form:</strong> Log in to complete
            and submit the SIT application form.
          </li>
          <li>
            <strong>Checking &quot;My Mail&quot;:</strong> Access important
            updates and notifications regarding the admission process.
          </li>
          <li>
            <strong>Modifying Personal Details:</strong> Update or correct
            personal information if needed.
          </li>
        </ul>
        <p>
          Ensure you keep your login credentials secure and readily available
          for all admission-related activities.
        </p>
      </>
    ),
  },
  {
    question:
      "18) What should candidates do if they do not receive a confirmation email within 24 hours of registration?",
    answer: (
      <>
        <p>
          Candidates should receive a confirmation email within 24 hours of
          registration. If they do not, they are advised to:
        </p>
        <ul className="listingbox">
          <li>
            <strong>Contact via Email:</strong> Send an email to{" "}
            <a
              className="redlink"
              href="mailto:mtechadmissions@sitpune.edu.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              mtechadmissions@sitpune.edu.in
            </a>{" "}
            and{" "}
            <a
              className="redlink"
              href="mailto:siusupport@ishinfo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              siusupport@ishinfo.com
            </a>{" "}
            for assistance.
          </li>
          <li>
            <strong>Check Spam/Junk Folder:</strong> Ensure the email
            hasn&apos;t been filtered into spam or junk folders.
          </li>
        </ul>
        <p>
          This will help resolve the issue promptly and ensure smooth processing
          of their application.
        </p>
      </>
    ),
  },
  {
    question:
      "19) Where should candidates send payment-related queries for SIT admissions registration, and what information should they include?",
    answer: (
      <>
        <p>
          Candidates should send payment-related queries to{" "}
          <a
            className="redlink"
            href="mailto:siusupport@ishinfo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            siusupport@ishinfo.com
          </a>
          .
        </p>
        <p>When sending the query, they must include the following information:</p>
        <ul className="listingbox">
          <li>
            A <strong>screenshot of the transaction</strong> as proof of
            payment.
          </li>
          <li>
            Additional details such as <strong>registration number</strong> and{" "}
            <strong>payment date</strong> (if applicable).
          </li>
        </ul>
        <p>This will help resolve the issue promptly.</p>
      </>
    ),
  },
  {
    question:
      "20) Is it mandatory to complete both the Registration and Document Uploading forms to participate in the admission process for M.Tech program in SIT Pune?",
    answer: (
      <>
        <p>
          Yes, it is <strong>mandatory</strong> to complete and submit both{" "}
          <strong>Registration</strong> and{" "}
          <strong>Document Uploading</strong> forms to participate in the
          admission process for the M.Tech program in SIT Pune.
        </p>
        <p>
          Candidates who fail to submit both parts of the registration form
          will not be eligible to participate in the admission counselling
          rounds.
        </p>
        <p>
          Ensure that both sections are completed before the deadline to avoid
          disqualification.
        </p>
      </>
    ),
  },
  {
    question:
      "21) How will branch allocation be handled for registered candidates, and what happens if a candidate does not get their preferred branch?",
    answer: (
      <>
        <p>
          Candidates can select their preferred order of branches while filling
          the registration form. Branch allocation will be based on merit and
          seat availability.
        </p>
        <p>
          If a candidate does not get their preferred branch and chooses not to
          pay for the currently allotted seat, they will be automatically added
          to the waiting list for their higher branch preferences. Notifications
          will be sent as and when the respective waiting lists are updated.
        </p>
      </>
    ),
  },
  {
    question:
      "22) Is there a specific cut-off score required for M.Tech program admissions?",
    answer:
      "No, there is no specific cut-off for M.Tech program admissions. Candidates are evaluated based on their performance, and the selection is done according to the overall merit and seat availability.",
  },
  {
    question:
      "23) Where can I find the detailed fee structure for 2026 at SIT Pune?",
    answer: (
      <p>
        For the detailed fee structure for 2026, please{" "}
        <a
          className="redlink"
          href="/fees-structure"
        >
          click here
        </a>
        . This will give you comprehensive information regarding the fees for
        the various programs.
      </p>
    ),
  },
  {
    question:
      "24) Is the branch allocation confirmed only after paying the first installment of academic fees and the refundable institute deposit?",
    answer:
      "Yes, the branch allocation is confirmed only after the payment of the first installment of academic fees and the refundable institute deposit. Candidates must complete these payments for their branch to be officially allocated.",
  },
  {
    question:
      "25) Is it possible for a candidate to apply online for a branch change after paying the fees for the allocated branch?",
    answer: (
      <p>
        Yes, candidates can apply{" "}
        <strong>online through Candidate Portal</strong> for a branch change
        after paying the fees for the currently allocated branch. The request
        will be considered based on seat availability and merit.
      </p>
    ),
  },
  {
    question:
      "26) Are hostel facilities available for M.Tech program students, and how are they allocated?",
    answer: (
      <p>
        Yes, hostel facilities are available for M.Tech program students at
        Symbiosis Institute of Technology. Hostel accommodation is provided on
        a <strong>first-come, first-served</strong> basis, so students are
        advised to apply early to secure a seat.
      </p>
    ),
  },
  {
    question:
      "27) What is the procedure for applying for hostel accommodation at Symbiosis Institute of Technology, and when should candidates pay the hostel and mess fees?",
    answer: (
      <>
        <p>
          To apply for hostel accommodation at Symbiosis Institute of
          Technology, candidates must follow these steps:
        </p>
        <ul className="listingbox">
          <li>
            <strong>Apply Online:</strong> While paying the 1st installment of
            academic fees, candidates should apply for hostel requirements in
            the finance module of the portal.
          </li>
          <li>
            <strong>Approval and Fee Payment:</strong> Once the hostel
            accommodation is approved, candidates must pay the Hostel/Mess fees
            as per the instructions.
          </li>
        </ul>
        <p>
          For further details, candidates can email{" "}
          <a
            className="redlink"
            href="mailto:hostelallotment@sitpune.edu.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            hostelallotment@sitpune.edu.in
          </a>
          . For information on hostel fees, please{" "}
          <a
            className="redlink"
            href="/fees-structure"
          >
            click here
          </a>
          .
        </p>
      </>
    ),
  },
  {
    question:
      "28) How should candidates submit their original documents for the admission process?",
    answer:
      "Candidates must upload soft copies of their original documents (ensuring they are clear and readable) on the online document uploading portal using their registration login credentials.",
  },
  {
    question:
      "29) Where can I find the rules for admission cancellation and refunds?",
    answer: (
      <p>
        For the admission cancellation and refund rules, please refer to the{" "}
        <strong>University Refund Rules</strong>. You can find the detailed
        information by{" "}
        <a
          className="redlink"
          href="/pdf/admission/m-tech-addmission/M-tech-Circular-6-of-2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here
        </a>
        .
      </p>
    ),
  },
  {
    question:
      "30) What is the procedure to cancel a confirmed seat for Symbiosis Institute of Technology admissions?",
    answer: (
      <>
        <p>
          To cancel a confirmed seat at Symbiosis Institute of Technology,
          follow these steps:
        </p>
        <p>
          For M.Tech program Admission Cancellation following is the link:{" "}
          <strong>
            <a
              className="redlink"
              href="https://siufinance.ishinfo.com/SIUDAdmission/login/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://siufinance.ishinfo.com/SIUDAdmission/login/
            </a>
          </strong>
        </p>
        <ul className="listingbox">
          <li>
            <strong>Log in to the Admission Finance Portal:</strong>
            <ul className="sublistingbox">
              <li>
                Use your <strong>M.Tech Programs registration ID</strong> and
                password to access the student module.
              </li>
            </ul>
          </li>
          <li>
            <strong>Submit an Online Cancellation Request:</strong>
            <ul className="sublistingbox">
              <li>Fill in the required admission information on the portal.</li>
              <li>Complete and submit the cancellation request form.</li>
            </ul>
          </li>
          <li>
            <strong>Confirmation of Cancellation:</strong>
            <ul className="sublistingbox">
              <li>The seat cancellation process will be finalized after submission.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "31) Are students required to purchase their own books and stationery for Symbiosis Institute of Technology, and what resources are available on campus?",
    answer: (
      <>
        <p>
          Yes, students are required to purchase their own books and stationery.
          To assist with this, a bookseller will be arranged on campus by the
          institute.
        </p>
        <p>
          Additionally, students are encouraged to utilize the institute&apos;s
          well-equipped library and online resources for access to relevant
          books, journals, periodicals, and other academic materials. These
          resources provide comprehensive support for their studies.
        </p>
      </>
    ),
  },
  {
    question:
      "32) Will the institute provide uniforms for students, and are there specific days when wearing the uniform is mandatory?",
    answer:
      "Yes, the institute will arrange uniforms for all students. Wearing the uniform is mandatory on specific weekdays, as determined by the institute. Students will be informed about the designated uniform days at the start of the academic session.",
  },
  {
    question:
      "33) What amenities and facilities are provided in the hostel rooms at Symbiosis Institute of Technology?",
    answer: (
      <>
        <p>
          The hostel rooms at Symbiosis Institute of Technology are equipped
          with the following amenities:
        </p>
        <ul className="listingbox">
          <li>Wi-Fi connectivity</li>
          <li>Bed</li>
          <li>Mattress</li>
          <li>Table and Chair</li>
          <li>Cupboard</li>
          <li>Bucket and Mug</li>
        </ul>
        <p>These facilities ensure a comfortable and convenient stay for students.</p>
      </>
    ),
  },
  {
    question:
      "34) What qualifications and backgrounds do the faculty members at Symbiosis Institute of Technology have?",
    answer: (
      <>
        <p>
          The faculty members at Symbiosis Institute of Technology are highly
          qualified, with several holding doctorates or fellowships from
          prestigious universities worldwide, including:
        </p>
        <ul className="listingbox">
          <li>Carnegie Mellon University, USA</li>
          <li>RMIT University, Australia</li>
          <li>Pennsylvania State University, USA</li>
        </ul>
        <p>
          For more details about the faculty and their academic achievements,
          please{" "}
          <a
            className="redlink"
            href="https://www.sitpune.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>
          .
        </p>
      </>
    ),
  },
  {
    question: "35) How can I reach the institute?",
    answer: (
      <p>
        You can refer to the following <strong>Google Map</strong> location for
        directions to the institute:{" "}
        <a
          className="redlink"
          href="/contactus#SITMap"
          
        >
          Google Map
        </a>
        .
      </p>
    ),
  },
];

const FAQ = () => {
  const [activeKey, setActiveKey] = useState<string | null>("0");

  return (
    <section className="main_content">
      <div className="faq_section">
        <Accordion
          activeKey={activeKey}
          onSelect={(eventKey) => {
            const key = eventKey as string | null;
            setActiveKey(key === activeKey ? null : key);
          }}
        >
          {faqs.map((faq, index) => (
            <Accordion.Item
              eventKey={index.toString()}
              key={faq.question}
              className="faq_item"
            >
              <Accordion.Header>
                <div className="faq_header">{faq.question}</div>
              </Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
