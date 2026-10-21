"use client";

import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Table from "@/components/ui/Table";
import {
  AdmissionprocessSchedule,
  AdmissionprocessScheDate,
  AllotedSeatsBranchData,
  LateralEntryFAQBranchColumns,
} from "@/data/tableData";
import "@/app/css/admission.css";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
  activeKey: string | null;
  onSelect: (key: string | null) => void;
  showIndex?: boolean;
}

const registrationFAQs: FAQItem[] = [
  {
    question: "I have received the SITSYDA ID & Password, what can I use it for? ",
    answer:
      "You can use the SITSYDA ID /email and password to fill in the SIT application form, check My Mail, Modify Personal details.",
  },
  {
    question: "My SITSYDA ID is 999999. Please send the password to my mail id immediately. ",
    answer:
      "You will receive an email within 24 hours of registration. If you do not, please email lateraladmissions@sitpune.edu.in",
  },
  {
    question:
      "I could not register online for SITSYDA, since the following error message appeared - 'Java Script Error'  ",
    answer:
      "Please use Internet Explorer Ver 6.0 or above. Please note that the browsers like Mozilla firefox, Google Chrome etc., will support the application.",
  },
  {
    question:
      "I could not register online for SITSYDA, as I am not able to proceed after 'I agree' in the terms and conditions page.",
    answer: (
      <>
        <p>
          This application uses JavaScript. Please make sure that JavaScript is
          enabled in your browser.
        </p>
        <p>
          To enable JavaScript goto: Tools &gt;&gt; InternetOptions &gt;&gt;
          Security &gt;&gt; Custom Level. Scroll down until you see section
          labeled &apos;Scripting&apos; Under &apos;Active Scripting&apos;,
          select &apos;Enable&apos; and click OK. &quot;
        </p>
        <p>Click refresh and do the registration again.</p>
      </>
    ),
  },
  {
    question:
      "My current address is valid only till March end. Is it possible for me to update and make a change in the address in early April? ",
    answer:
      "Yes, you can modify any set of personal details. You can do this after you have received your SITSYDA ID /email and password.",
  },
];

const generalFAQs: FAQItem[] = [
  {
    question:
      "1) What are the available B.Tech streams and their respective intake capacities for Direct Second Year (DSY) Engineering admissions at Symbiosis Institute of Technology (SIT)?",
    answer: (
      <>
        <p>
          The intake capacities for{" "}
          <strong>Direct Second Year (DSY) Engineering admissions</strong> at{" "}
          <strong>SIT</strong> for the Academic Year 2026-27 are as follows:
        </p>
        <p>
          <strong>
            Proposed intake is based onRegular Lateral Entry (10% of First-Year
            Intake).
          </strong>
        </p>
        
        <Table
          columns={LateralEntryFAQBranchColumns}
          data={AllotedSeatsBranchData}
          wrapperClassName="table-responsive"
          tableClassName="student_project_table"
        />
      </>
    ),
  },
  {
    question:
      "2) What are the important dates for Direct Second Year (DSY) admissions at Symbiosis Institute of Technology (SIT) Pune for 2026?",
    answer: (
      <>
        <p>
          The key dates for{" "}
          <strong>Direct Second Year (DSY) admissions</strong> at SIT Pune for
          the academic year 2026 are as follows:
        </p>
        <Table
          columns={AdmissionprocessSchedule}
          data={AdmissionprocessScheDate}
          wrapperClassName="table-responsive"
          tableClassName="student_project_table"
        />
      </>
    ),
  },
  {
    question:
      "3) What is the eligibility criteria for Direct Second Year (DSY) admissions at Symbiosis Institute of Technology (SIT)?",
    answer: (
      <>
        <p>
          To be eligible for{" "}
          <strong>Direct Second Year (DSY) admissions</strong>, candidates must
          meet any of the following criteria:
        </p>
        <ul className="listingbox">
          <li>
            <strong>Diploma Qualification:</strong>
            <ul className="sublistingbox">
              <li>
                Completed a Diploma Course or a Diploma in Vocational Course
                from any recognized Polytechnic College as per AICTE norms.
              </li>
            </ul>
          </li>
          <li>
            <strong>B.Sc. Qualification:</strong>
            <ul className="sublistingbox">
              <li>
                Passed a B.Sc. Degree from a recognized university as defined
                by UGC, with at least 45% marks (40% for SC/ST candidates).
              </li>
              <li>
                Must have passed H.S.C. with Mathematics as a subject as per
                AICTE norms.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          These criteria are aligned with AICTE norms to ensure eligibility for
          DSY admissions.
        </p>
      </>
    ),
  },
  {
    question: "4) Will the admission rounds be conducted online?",
    answer:
      "Yes, the admission rounds will be conducted online. Candidates will get an offered branch letter via mail after the merit is generated.",
  },
  {
    question:
      "5) Is registration mandatory for the 2026 SIT admissions, and what happens if a candidate does not complete it?",
    answer:
      "Yes, registration is mandatory for the 2026 SIT admissions. Candidates who do not complete the registration process will not be considered for the admission process and will not be eligible for counselling or seat allotment. It is essential to complete the registration to participate in the admission procedure.",
  },
  {
    question:
      "6) What is the registration fee for Direct Second Year (DSY) admissions at Symbiosis Institute of Technology (SIT)?",
    answer: (
      <p>
        The registration fee for DSY admissions is <strong>Rs. 1500/-</strong>.
        This fee is non-refundable and must be paid online at the time of
        registration.
      </p>
    ),
  },
  {
    question:
      "7) How can candidates apply for Direct Second Year (DSY) Engineering admissions at Symbiosis Institute of Technology (SIT)?",
    answer: (
      <>
        <p>
          Candidates can apply for{" "}
          <strong>SIT Direct Second Year (DSY) Engineering admissions</strong>{" "}
          through the following link:
        </p>
        <p>
          Ensure that all required details and documents are submitted during
          the registration process.
        </p>
      </>
    ),
  },
  {
    question:
      "8) What are the eligibility documents required for admission to Symbiosis Institute of Technology (SIT) for Diploma, B.Sc., and Vocational Course candidates?",
    answer: (
      <>
        <p>
          The following eligibility documents must be uploaded during the second
          stage of admission after registration:
        </p>
        <ul className="listingbox">
          <li>
            <strong>For Diploma Candidates:</strong>
            <ul className="sublistingbox">
              <li>Diploma mark lists till V or VI Semester (if passed)</li>
              <li>10th Marks List and Certificate</li>
              <li>HSC (12th Class) Mark List and Certificate (if applicable)</li>
              <li>Transfer Certificate</li>
              <li>Migration Certificate</li>
              <li>Gap Certificate (if applicable)</li>
              <li>Caste Certificate (if applicable)</li>
              <li>
                Address Proof (Electricity Bill, Aadhar Card, or Driving
                License)
              </li>
              <li>Passport-size photograph</li>
            </ul>
          </li>
          <li>
            <strong>For B.Sc. Candidates:</strong>
            <ul className="sublistingbox">
              <li>Final Year B.Sc. Mark List</li>
              <li>10th Marks List and Certificate</li>
              <li>Certificate of Passing B.Sc.</li>
              <li>HSC (12th Class) Mark List and Certificate</li>
              <li>Transfer Certificate</li>
              <li>Migration Certificate</li>
              <li>Gap Certificate (if applicable)</li>
              <li>Caste Certificate (if applicable)</li>
              <li>
                Address Proof (Electricity Bill, Aadhar Card, or Driving
                License)
              </li>
              <li>Passport-size photograph</li>
            </ul>
          </li>
          <li>
            <strong>For Vocational Course Candidates:</strong>
            <ul className="sublistingbox">
              <li>Mark Lists of the Vocational Course</li>
              <li>10th Marks List and Certificate</li>
              <li>Certificate of Passing the Vocational Course</li>
              <li>
                HSC (12th Class) Mark List and Certificate (if applicable)
              </li>
              <li>Transfer Certificate</li>
              <li>Migration Certificate</li>
              <li>Gap Certificate (if applicable)</li>
              <li>Caste Certificate (if applicable)</li>
              <li>
                Address Proof (Electricity Bill, Aadhar Card, or Driving
                License)
              </li>
              <li>Passport-size photograph</li>
            </ul>
          </li>
        </ul>
        <p>
          Candidates must ensure that all documents are clear and valid before
          uploading.
        </p>
      </>
    ),
  },
  {
    question:
      "9) What are the guidelines for uploading documents for Symbiosis Institute of Technology (SIT) admissions?",
    answer: (
      <>
        <p>
          When uploading documents, candidates should follow these guidelines:
        </p>
        <ul className="listingbox">
          <li>
            <strong>PDF Format:</strong> Upload one PDF file for each mandatory
            document (e.g., Aadhar card, 10th mark sheet, Diploma 3rd, 4th, and
            5th Mark Sheets), which should include scans of both sides or all
            pages of the document.
          </li>
          <li>
            <strong>Correct Document Title:</strong> Ensure that the correct
            document is uploaded against the corresponding title. For example,
            do not upload the 10th mark sheet in place of the 10th passing
            certificate.
          </li>
          <li>
            <strong>Clear and Readable Scans:</strong> The uploaded documents
            should be clear and easily readable. Ensure that all scanned pages
            are legible and in good quality.
          </li>
          <li>
            <strong>Submission:</strong> After uploading the documents, make
            sure to save and click the submit button on the portal. Failing to
            do so will result in the candidate not being included in the merit
            list or branch allocation process.
          </li>
          <li>
            <strong>Uploading Unavailable Documents:</strong> If certain
            documents (e.g., entrance examination score card, 12th Mark List,
            Passing Certificate, or Transfer Certificate) are currently
            unavailable, they can be uploaded later.
          </li>
        </ul>
        <p>
          Following these guidelines will ensure that your application is
          processed correctly and efficiently.
        </p>
      </>
    ),
  },
  {
    question:
      "10) Where can candidates upload their documents for admissions at Symbiosis Institute of Technology (SIT)?",
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
      "11) What is the process for document verification and merit listing at Symbiosis Institute of Technology (SIT)?",
    answer: (
      <>
        <ul className="listingbox">
          <li>
            <strong>Document Verification:</strong>
            <ul className="sublistingbox">
              <li>
                All uploaded documents will be verified by SIT experts to
                ensure their authenticity and eligibility compliance.
              </li>
            </ul>
          </li>
          <li>
            <strong>Merit Listing and Branch Allocation:</strong>
            <ul className="sublistingbox">
              <li>
                After document verification and eligibility checks, a merit
                list will be prepared.
              </li>
              <li>
                Candidates will be informed about their merit status and branch
                allocation via email.
              </li>
            </ul>
          </li>
        </ul>
        <p>This process ensures transparency and fairness in admissions.</p>
      </>
    ),
  },
  {
    question:
      "12) How can candidates contact Symbiosis Institute of Technology (SIT) for various inquiries?",
    answer: (
      <>
        <p>
          Candidates can reach out to the following email addresses based on
          their inquiry type:
        </p>
        <ul className="listingbox">
          <li>
            <strong>General Inquiries:</strong> For any general
            admission-related inquiries, email us at{" "}
            <a
              className="redlink"
              href="mailto:lateraladmissions@sitpune.edu.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              lateraladmissions@sitpune.edu.in
            </a>
          </li>
          <li>
            <strong>Documents Uploading Related Inquiries:</strong> For issues
            related to uploading documents, contact{" "}
            <a
              className="redlink"
              href="mailto:lateraladmissions@sitpune.edu.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              lateraladmissions@sitpune.edu.in
            </a>
          </li>
          <li>
            <strong>Hostel Inquiries:</strong> For queries regarding hostel
            facilities, email{" "}
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
        <p>
          Please use the respective email addresses to ensure that your query
          reaches the appropriate department.
        </p>
      </>
    ),
  },
  {
    question:
      "13) Which web browsers are compatible for registering on the SIT Pune 2026 application portal?",
    answer: (
      <>
        <p>
          The SIT Pune 2026 application portal is compatible with the following
          web browsers:
        </p>
        <ul className="listingbox">
          <li>
            <strong>Internet Explorer:</strong> Version 6.0 or above
          </li>
          <li>
            <strong>Other Browsers:</strong> Mozilla Firefox, Google Chrome, and
            similar browsers
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
      "14) How can I enable JavaScript in my browser to complete the registration for SIT Pune?",
    answer: (
      <>
        <p>
          To enable JavaScript and complete the registration for SIT Pune,
          follow these steps:
        </p>
        <ul className="listingbox">
          <li>
            Open your browser and navigate to{" "}
            <strong>Tools &gt; Internet Options</strong>
          </li>
          <li>
            Go to the <strong>Security</strong> tab and click on{" "}
            <strong>Custom Level</strong>
          </li>
          <li>
            Scroll down to the section labeled <strong>Scripting</strong>
          </li>
          <li>
            Under <strong>Active Scripting</strong>, select{" "}
            <strong>Enable</strong> and click OK
          </li>
          <li>Refresh the page and proceed with the registration again</li>
        </ul>
        <p>Ensure JavaScript is enabled for a smooth registration process.</p>
      </>
    ),
  },
  {
    question:
      "15) How can candidates use their SIT Pune Direct Second Year 2026 ID & Password or email and password in the admission process?",
    answer: (
      <>
        <p>
          Candidates can use their SIT Pune Direct Second Year 2026 ID &amp;
          Password or registered email and password for the following purposes:
        </p>
        <ul className="listingbox">
          <li>
            <strong>Filling the Application Form:</strong> Log in to complete
            and submit the SIT application form
          </li>
          <li>
            <strong>Checking &quot;My Mail&quot;:</strong> Access important
            updates and notifications regarding the admission process
          </li>
          <li>
            <strong>Modifying Personal Details:</strong> Update or correct
            personal information if needed
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
      "16) What should candidates do if they do not receive a confirmation email within 24 hours of registration?",
    answer: (
      <>
        <ul className="listingbox">
          <li>
            <strong>Contact via Email:</strong>
            <ul className="sublistingbox">
              <li>
                Send an email to{" "}
                <a
                  className="redlink"
                  href="mailto:lateraladmissions@sitpune.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  lateraladmissions@sitpune.edu.in
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
                for assistance
              </li>
            </ul>
          </li>
          <li>
            <strong>Check Spam/Junk Folder:</strong>
            <ul className="sublistingbox">
              <li>
                Ensure the email hasn&apos;t been filtered into spam or junk
                folders
              </li>
            </ul>
          </li>
        </ul>
        <p>
          This will help resolve the issue promptly and ensure smooth processing
          of the application.
        </p>
      </>
    ),
  },
  {
    question:
      "17) Where should candidates send payment-related queries for SIT admissions registration, and what information should they include?",
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
        <p>Include the following information:</p>
        <ul className="listingbox">
          <li>A screenshot of the transaction as proof of payment</li>
          <li>
            Additional details such as registration number and payment date (if
            applicable)
          </li>
        </ul>
        <p>This will help resolve the issue promptly.</p>
      </>
    ),
  },
  {
    question:
      "18) Is it mandatory to complete both the Registration and Document Uploading forms to participate in the admission process for DSY in SIT Pune?",
    answer: (
      <p>
        Yes, it is mandatory to complete and submit both{" "}
        <strong>
          Registration and Document Uploading forms to participate in the
          admission process for DSY in SIT Pune
        </strong>
        . Candidates who fail to submit both parts will not be eligible for
        counselling rounds. Ensure that both sections are completed before the
        deadline to avoid disqualification.
      </p>
    ),
  },
  {
    question:
      "19) How will branch allocation be handled for registered candidates, and what happens if a candidate does not get their preferred branch?",
    answer:
      "Candidates can select their preferred order of branches while filling the registration form. Branch allocation will be based on merit and seat availability If a candidate does not get their preferred branch and chooses not to pay for the currently allotted seat, they will automatically be added to the waiting list for higher branch preferences. Notifications will be sent when waiting lists are updated.",
  },
  {
    question: "20) Is there a specific cut-off score required for DSY admissions?",
    answer:
      "No, there is no specific cut-off for DSY admissions. Candidates are evaluated based on performance, and selection is done according to overall merit and seat availability.",
  },
  {
    question:
      "21) Where can I find the detailed fee structure for 2026 at SIT Pune?",
    answer: (
      <p>
        For the detailed fee structure for 2026, please{" "}
        <a
          className="redlink"
          href="/fees-structure"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here
        </a>
        . This provides comprehensive information regarding the fees for
        various programs.
      </p>
    ),
  },
  {
    question:
      "22) Is the branch allocation confirmed only after paying the first installment of academic fees and the refundable institute deposit?",
    answer:
      "Yes, the branch allocation is confirmed only after the payment of the first installment of academic fees and the refundable institute deposit. Candidates must complete these payments for their branch to be officially allocated.",
  },
  {
    question:
      "23) Is it possible for a candidate to apply online for a branch change after paying the fees for the allocated branch?",
    answer:
      "Yes, candidates can apply online through the Candidate Portal for a branch change after paying the fees for the currently allocated branch. The request will be considered based on seat availability and merit.",
  },
  {
    question:
      "24) Are hostel facilities available for DSY students, and how are they allocated?",
    answer:
      "Yes, hostel facilities are available for DSY students at Symbiosis Institute of Technology. Hostel accommodation is provided on a first-come, first-served basis, so students are advised to apply early to secure a seat.",
  },
  {
    question:
      "25) What is the procedure for applying for hostel accommodation at Symbiosis Institute of Technology, and when should candidates pay the hostel and mess fees?",
    answer: (
      <>
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
            href="https://www.sitpune.edu.in/fees-structure"
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
    question:
      "26) How should candidates submit their original documents for the admission process?",
    answer:
      "Candidates must upload soft copies of their original documents (ensuring they are clear and readable) on the online document uploading portal using their registration login credentials.",
  },
  {
    question:
      "27) Where can I find the rules for admission cancellation and refunds?",
    answer: (
      <p>
        For the admission cancellation and refund rules, please refer to the{" "}
        <strong>University Refund Rules</strong>. You can find detailed
        information by{" "}
        <a
          className="redlink"
          href="/pdf/admission/lateral-entry-admissions/Circular-6-of-2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          clicking here
        </a>
        .
      </p>
    ),
  },
  {
    question:
      "28) What is the procedure to cancel a confirmed seat for Symbiosis Institute of Technology admissions?",
    answer: (
      <>
        <p>
          To cancel a confirmed seat at Symbiosis Institute of Technology (DSY
          Admission), follow these steps:
        </p>
        <ul className="listingbox">
          <li>
            <strong>Log in to the Admission Finance Portal:</strong> Use your
            DSY registration ID and password to access the student module via{" "}
            <a
              className="redlink"
              href="http://siufinance.ishinfo.com/UGStudentAdmission"
              target="_blank"
              rel="noopener noreferrer"
            >
              this link
            </a>
            .
          </li>
          <li>
            <strong>Submit an Online Cancellation Request:</strong>
            <ul className="sublistingbox">
              <li>Fill in the required admission information on the portal</li>
              <li>Complete and submit the cancellation request form</li>
            </ul>
          </li>
          <li>
            <strong>Confirmation of Cancellation:</strong> The seat
            cancellation process will be finalized after submission
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "29) Are students required to purchase their own books and stationery for Symbiosis Institute of Technology, and what resources are available on campus?",
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
      "30) Will the institute provide uniforms for students, and are there specific days when wearing the uniform is mandatory?",
    answer:
      "Yes, the institute will arrange uniforms for all students. Wearing the uniform is mandatory on specific weekdays, as determined by the institute. Students will be informed about the designated uniform days at the start of the academic session.",
  },
  {
    question:
      "31) What amenities and facilities are provided in the hostel rooms at Symbiosis Institute of Technology?",
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
        <p>
          These facilities ensure a comfortable and convenient stay for
          students.
        </p>
      </>
    ),
  },
  {
    question:
      "32) What qualifications and backgrounds do the faculty members at Symbiosis Institute of Technology have?",
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
    question: "33) How can I reach the institute?",
    answer: (
      <p>
        You can refer to the following Google Map location for directions to
        the institute:{" "}
        <a
          className="redlink"
          href="/contactus"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Map
        </a>
        .
      </p>
    ),
  },
];

const FAQAccordion = ({
  items,
  activeKey,
  onSelect,
  showIndex = true,
}: FAQAccordionProps) => (
  <Accordion
    activeKey={activeKey}
    onSelect={(eventKey) => {
      const key = eventKey as string | null;
      onSelect(key === activeKey ? null : key);
    }}
  >
    {items.map((faq, index) => (
      <Accordion.Item
        eventKey={index.toString()}
        key={`${index}-${faq.question}`}
        className="faq_item"
      >
        <Accordion.Header>
          <div className="faq_header">
            {showIndex ? `${index + 1}. ` : ""}
            {faq.question}
          </div>
        </Accordion.Header>
        <Accordion.Body>{faq.answer}</Accordion.Body>
      </Accordion.Item>
    ))}
  </Accordion>
);

const LateralEntryAdmission = () => {
  const [activeTab, setActiveTab] = useState<"registration" | "general">(
    "registration",
  );
  const [registrationActiveKey, setRegistrationActiveKey] = useState<
    string | null
  >("0");
  const [generalActiveKey, setGeneralActiveKey] = useState<string | null>("0");

  return (
    <section className="main_content">
      <div className="faq_section">
        <div className="heading innerpageheading">
          Frequently Asked Questions
        </div>

        <div className="admission-tabs">
          <ul className="nav nav-tabs" role="tablist" aria-label="Lateral entry FAQs">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link${activeTab === "registration" ? " active" : ""}`}
                id="lateral-registration-tab"
                type="button"
                role="tab"
                aria-controls="lateral-registration-panel"
                aria-selected={activeTab === "registration"}
                onClick={() => setActiveTab("registration")}
              >
                FAQs Registration
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link${activeTab === "general" ? " active" : ""}`}
                id="lateral-general-tab"
                type="button"
                role="tab"
                aria-controls="lateral-general-panel"
                aria-selected={activeTab === "general"}
                onClick={() => setActiveTab("general")}
              >
                General FAQs
              </button>
            </li>
          </ul>
        </div>

        <div
          id="lateral-registration-panel"
          role="tabpanel"
          aria-labelledby="lateral-registration-tab"
          hidden={activeTab !== "registration"}
        >
          <FAQAccordion
            items={registrationFAQs}
            activeKey={registrationActiveKey}
            onSelect={setRegistrationActiveKey}
          />
        </div>

        <div
          id="lateral-general-panel"
          role="tabpanel"
          aria-labelledby="lateral-general-tab"
          hidden={activeTab !== "general"}
        >
          <FAQAccordion
            items={generalFAQs}
            activeKey={generalActiveKey}
            onSelect={setGeneralActiveKey}
            showIndex={false}
          />
        </div>
      </div>
    </section>
  );
};

export default LateralEntryAdmission;
