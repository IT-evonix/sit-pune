"use client";

import { useState } from "react";
import { Accordion } from "react-bootstrap";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "When can students start working in Australia?",
    answer:
      "Students can start working upon arrival in Australia. However, it’s advisable to focus on settling into academics before seeking employment.",
  },
  {
    question: "How many hours can students work per week?",
    answer: (
      <>
        <p>Students can work:</p>
        <ul className="listingbox">
          <li>48 hours per fortnight during academic sessions.</li>
          <li>Unlimited hours during scheduled breaks.</li>
        </ul>
        <p>
          Refer to the link for more details:{" "}
          <a
            className="redlink"
            href="https://www.education.gov.au/international-education/support-international-students/rights-international-students-work"
            target="_blank"
            rel="noopener noreferrer"
          >
            International students&apos; work rights
          </a>
        </p>
      </>
    ),
  },
  {
    question: "What is the estimated cost of living in Australia?",
    answer:
      "The average annual cost of living is approximately AUD 21,041, covering housing, food, transport, and other essentials. Costs may vary based on lifestyle.",
  },
  {
    question: "What is the fee structure for the program?",
    answer:
      "Tuition fees for the two years at Symbiosis will follow SIT’s fee structure. Tuition fees at Deakin will depend on the specific course. Additional costs include visa fees, health insurance (OSHC), and living expenses.",
  },
];

const Faq3 = () => {
  const [activeKey, setActiveKey] = useState<string | null>("0");

  return (
    <section className="main_content">
      <div className="faq_section">
        <div className="heading innerpageheading">
          Study and Living in Australia
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

export default Faq3;
