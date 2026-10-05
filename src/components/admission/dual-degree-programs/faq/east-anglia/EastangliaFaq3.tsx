"use client";

import { useState } from "react";
import { Accordion } from "react-bootstrap";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "When can students start working in UK?",
    answer: (
      <>
        <p>
          Students can start working upon arrival in UK. However, it’s advisable
          to focus on settling into academics before seeking employment.
        </p>
        <p>
          <strong>Part-Time Jobs:</strong> International students who hold a
          student visa will be allowed to work part-time in the UK.
        </p>
        <p>
          To work in the UK, you require a national insurance number. It is free
          of cost but can take up to 4 to 6 weeks to process. You must call
          0345 600 0643 after arriving in the UK and follow the instructions.
          For more information, please check{" "}
          <a
            className="redlink"
            href="https://www.gov.uk/apply-national-insurance-number"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.gov.uk/apply-national-insurance-number
          </a>
          .
        </p>
        <p>
          <strong>Career Central:</strong> A useful tool for job preparation,
          internships, work placements, and skill development.
        </p>
        <p>
          After course completion, students can work full-time until their
          student visa expires.
        </p>
        <p>Before your Student visa expires, you must:</p>
        <ul className="listingbox">
          <li>Apply for the Graduate route visa if eligible.</li>
          <li>Look for sponsorship from an employer and apply for the Skilled Worker visa.</li>
          <li>Apply for another eligible visa route.</li>
          <li>Leave the UK before your Student visa expires.</li>
        </ul>
        <p>
          Refer to{" "}
          <a
            className="redlink"
            href="https://www.ukcisa.org.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            UKCISA
          </a>{" "}
          for more details on working after studies.
        </p>
      </>
    ),
  },
  {
    question: "How many hours can students work per week?",
    answer: (
      <>
        <p>Typical conditions are:</p>
        <ul className="listingbox">
          <li>
            You can work a maximum of 20 hours per week during term-time. This
            cannot be averaged (e.g. 25 hours in week 1 and 15 hours in week 2)
            and is calculated from Monday to Sunday.
          </li>
          <li>
            You can work full-time during your course vacations (usually
            Christmas, Easter, and Summer for undergraduate students) - The
            Student Information Zone can confirm these dates.
          </li>
          <li>
            You can work full-time once you have completed your course,
            submitted all work, and the official end date has passed (as stated
            on e:Vision), up until your visa expires.
          </li>
          <li>
            Refer link -{" "}
            <a
              className="redlink"
              href="https://www.uea.ac.uk/study/international-students/visa-advice-and-international-student-support/during-your-studies/life-in-the-uk/working-in-the-uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Working in the UK
            </a>
          </li>
          <li>
            Please note that reading week is considered term-time, so you cannot
            work full-time during that week.
          </li>
          <li>
            If your course of study is below degree level, you will be able to
            work a maximum of 10 hours per week during term-time, and full-time
            during vacations.
          </li>
        </ul>
        <p>
          Refer to{" "}
          <a
            className="redlink"
            href="https://www.ukcisa.org.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            UKCISA
          </a>{" "}
          for more details on working in the UK.
        </p>
      </>
    ),
  },
  {
    question: "What is the estimated cost of living in UK?",
    answer:
      "The average annual cost of living is approximately £1,136 per month, covering housing, food, transport, and other essentials. Costs may vary based on lifestyle.",
  },
  {
    question: "What is the fee structure for the program?",
    answer: (
      <>
        <p>Tuition fees for the two years at Symbiosis will follow SIT’s fee structure.</p>
        <p>
          Tuition fees at UEA will depend on the specific course. Additional
          costs include visa fees, health insurance (OSHC), and living
          expenses. Please visit{" "}
          <a
            className="redlink"
            href="https://www.uea.ac.uk/about/university-information/finance-and-procurement/finance-information-for-students/tuition-fees"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tuition Fees
          </a>{" "}
          for more details.
        </p>
      </>
    ),
  },
];

const EastangliaFaq3 = () => {
  const [activeKey, setActiveKey] = useState<string | null>("0");

  return (
    <section className="main_content">
      <div className="faq_section">
        <div className="heading innerpageheading">
          Study and Living in UK
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

export default EastangliaFaq3;
