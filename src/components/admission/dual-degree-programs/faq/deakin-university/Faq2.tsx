"use client";

import { useState } from "react";
import { Accordion } from "react-bootstrap";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question:
      "What is the procedure for backlog examination at Deakin University for a dual degree program?",
    answer: (
      <>
        <p>
          Students must clear all backlogs before joining Deakin. Once at
          Deakin, they will be treated like any other Deakin student. If they
          fail a core unit, they will be required to repeat it. For further
          details, students should refer to –{" "}
          <a
            className="redlink"
            href="https://www.deakin.edu.au/students/enrolment-and-fees/enrol/rights-and-responsibilities"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deakin student rights and responsibilities
          </a>
          .
        </p>
        <ul className="listingbox">
          <li>
            <strong>Re-enrolment in the Failed Unit:</strong>
            <ul className="sublistingbox">
              <li>
                You will need to re-enrol in the failed unit during a subsequent
                study period.
              </li>
              <li>
                For core units or those required for compulsory unit sets,
                passing these is essential to meet course requirements.
              </li>
              <li>
                For elective units, you can retake the same unit or choose an
                alternative elective that fits your course structure.
              </li>
            </ul>
          </li>
          <li>
            <strong>Seeking Academic Advice:</strong>
            <ul className="sublistingbox">
              <li>
                It is recommended to consult with Student Central to confirm
                unit offerings and review your course plan.
              </li>
              <li>
                You may also seek feedback from your teaching staff or Unit
                Chair for guidance before retaking the unit.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Final Unit to Complete – Pass Conceded or Supplementary
              Assessment:
            </strong>
            <ul className="sublistingbox">
              <li>
                If the failed unit is the final credit point required to
                complete your degree, you may be eligible for a Pass Conceded
                (PC) grade or a Supplementary Assessment.
              </li>
              <li>
                Eligibility criteria include being one credit point short of
                completing your degree and meeting the university&apos;s
                requirements.
              </li>
              <li>
                Applications must be submitted within five working days of the
                official result release dates.
              </li>
            </ul>
          </li>
          <li>
            <strong>Academic Progress Considerations:</strong>
            <ul className="sublistingbox">
              <li>
                Failing the same unit twice, failing a compulsory practicum or
                placement, or failing at least 50% of credit points in two
                consecutive study periods may lead to an academic progress
                review.
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "What is the process for applying for an Australian student visa?",
    answer: (
      <>
        <p>Students must:</p>
        <ul className="listingbox">
          <li>Submit an online application via the Department of Home Affairs portal.</li>
          <li>
            Provide documentation including proof of enrolment, financial
            capacity, health insurance (OSHC), and English language
            proficiency.
          </li>
          <li>Complete a Genuine Temporary Entrant (GTE) assessment.</li>
        </ul>
        <p>
          For more details, visit the{" "}
          <a
            className="redlink"
            href="https://immi.homeaffairs.gov.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Australian Immigration Website
          </a>
          .
        </p>
      </>
    ),
  },
];

const Faq2 = () => {
  const [activeKey, setActiveKey] = useState<string | null>("0");

  return (
    <section className="main_content">
      <div className="faq_section">
        <div className="heading innerpageheading">Examination Related</div>
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

export default Faq2;
