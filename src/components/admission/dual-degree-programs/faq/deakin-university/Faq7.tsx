"use client";

import { useState } from "react";
import { Accordion } from "react-bootstrap";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "What is the process for cancelling admission from a B.Tech Dual Degree?",
    answer: (
      <>
        <p>
          <strong>Eligibility for Cancellation</strong>
        </p>
        <p>
          Admission cancellation is permitted only under exceptional
          circumstances such as prolonged hospitalization or unforeseen deaths
          in the family.
        </p>
        <p>
          <strong>Steps to Cancel Admission</strong>
        </p>
        <ul className="listingbox">
          <li>
            <strong>Review the Institution&apos;s Policies:</strong>
            <ul className="sublistingbox">
              <li>Check the university&apos;s admission or withdrawal policies.</li>
              <li>
                Pay attention to clauses specific to dual degree programs,
                refund policies, and timelines for cancellation.
              </li>
            </ul>
          </li>
          <li>
            <strong>Submit Required Documents:</strong>
            <ul className="sublistingbox">
              <li>Admission offer letter</li>
              <li>Fee receipts</li>
              <li>ID card (if issued)</li>
            </ul>
          </li>
        </ul>
        <p>
          <strong>Decision Process</strong>
        </p>
        <ul className="listingbox">
          <li>Your case will be presented to a central committee.</li>
          <li>
            The committee will evaluate your request and decide on the course
            of action.
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "Will I get a refund if I cancel my admission to the dual degree program?",
    answer: (
      <>
        <p>
          <strong>Before the academic session starts:</strong>
        </p>
        <p>
          You are likely to receive a refund, typically minus a processing fee,
          in accordance with the refund policies of Symbiosis International
          (Deemed University) (SIU).
        </p>
        <p>
          <strong>Procedure for withdrawal:</strong>
        </p>
        <ul className="listingbox">
          <li>
            Students wishing to withdraw from the program must notify the Head
            of the host department at SIT in writing.
          </li>
          <li>
            A scrutiny committee will evaluate the request on a case-to-case
            basis and decide the further course of action.
          </li>
        </ul>
        <p>
          <strong>Refund and fee adjustment policies:</strong>
        </p>
        <ul className="listingbox">
          <li>
            Refunds of tuition fees will be governed by the refund policies for
            the dual degree program of SIU.
          </li>
          <li>
            Any difference in fees between the dual degree program and the
            regular course must be paid by the candidate.
          </li>
          <li>Typically, fees will be adjusted for upcoming academic sessions.</li>
        </ul>
        <p>
          <strong>What if my VISA is rejected?</strong>
        </p>
        <ul className="listingbox">
          <li>
            The procedure for VISA application should be initiated during
            Semester 3 of your studies to ensure sufficient time for unforeseen
            circumstances.
          </li>
          <li>
            You can re-apply for a VISA as per the policy of the UK or
            Australian Government.
          </li>
          <li>
            If a VISA is not granted, the student can be shifted to the regular
            B.Tech program, subject to applicable conditions.
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "Can admission be cancelled mid-course if eligibility issues are discovered later?",
    answer: (
      <>
        <p>
          Admission is often granted based on the information provided by the
          candidate during the application process. If discrepancies or
          falsifications are found during document verification, the
          institution has the right to cancel the admission.
        </p>
        <p>
          <strong>Reasons for cancellation may include:</strong>
        </p>
        <ul className="listingbox">
          <li>Failure to meet the minimum academic qualifications.</li>
          <li>Submission of incorrect or fraudulent documents.</li>
          <li>Not meeting other specific eligibility criteria.</li>
        </ul>
      </>
    ),
  },
  {
    question: "What are the deadlines for requesting cancellation?",
    answer: "Before completion of the third semester at SIT.",
  },
  {
    question: "When do I initiate the admission cancellation process?",
    answer: (
      <>
        <p>
          <strong>When do I initiate the admission cancellation process?</strong>
        </p>
        <p>
          Initiating the admission cancellation process promptly is crucial to
          ensure compliance with university policies and to maximize any
          potential refunds. Below are the procedures for both Symbiosis
          International (Deemed University) and Deakin University:
        </p>
        <p>
          <strong>Symbiosis International (Deemed University):</strong>
        </p>
        <ul className="listingbox">
          <li>
            <strong>Cancellation Before Program Commencement:</strong>
            <ul className="sublistingbox">
              <li>
                If you cancel your admission before the academic program begins,
                a deduction of ₹1,000 will be applied.
              </li>
              <li>The remaining academic or tuition fees paid will be refunded.</li>
            </ul>
          </li>
          <li>
            <strong>Cancellation After Program Commencement:</strong>
            <ul className="sublistingbox">
              <li>
                <strong>Within 30 Days:</strong>
                <ul className="sublistingbox">
                  <li>
                    If you cancel after joining the program and the vacant seat
                    is filled by another candidate within 30 days from the
                    program&apos;s start date, the deposit is fully refundable.
                  </li>
                  <li>
                    Academic, hostel, and mess fees are refunded after pro-rata
                    deductions.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Beyond 30 Days:</strong>
                <ul className="sublistingbox">
                  <li>
                    If the seat remains unfilled after 30 days, only the deposit
                    is refundable; academic, hostel, and mess fees are
                    non-refundable.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Non-Refundable Fees:</strong>
            <ul className="sublistingbox">
              <li>
                Certain fees, such as those for pre-induction modules,
                foundation courses, bridge courses, and medical insurance, are
                non-refundable regardless of the cancellation timing.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          <strong>Deakin University:</strong>
        </p>
        <ul className="listingbox">
          <li>
            <strong>Declining an Offer:</strong>
            <ul className="sublistingbox">
              <li>
                If you decide not to proceed with your offer from Deakin, you
                should formally decline it. This can be done by completing the
                necessary form available on Deakin&apos;s official website.
              </li>
            </ul>
          </li>
          <li>
            <strong>Deferring Admission:</strong>
            <ul className="sublistingbox">
              <li>
                If you wish to delay your studies rather than cancel, Deakin
                allows deferrals—up to two years for domestic students and one
                year for international students.
              </li>
              <li>
                It&apos;s advisable to contact Deakin&apos;s student services to
                discuss this option.
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
];

const Faq7 = () => {
  const [activeKey, setActiveKey] = useState<string | null>("0");

  return (
    <section className="main_content">
      <div className="faq_section">
        <div className="heading innerpageheading">
          Cancellation/ Withdrawal /Refund Related
        </div>
        <Accordion
          activeKey={activeKey}
          onSelect={(eventKey) => {
            const key = eventKey as string | null;
            setActiveKey(key === activeKey ? null : key);
          }}
        >
          {faqData.map((faq, index) => (
            <Accordion.Item
              eventKey={index.toString()}
              key={index}
              className="faq_item"
            >
              <Accordion.Header>
                <div className="faq_header">
                  {index + 1}. {faq.question}
                </div>
              </Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq7;
