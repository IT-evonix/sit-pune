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
      "What is the procedure for backlog examination at University of East Anglia for a dual degree program?",
    answer:
      "Students must clear all backlogs before joining UEA. Once at UEA, they will be treated like any other UEA student. If they fail a core unit, they will be required to repeat it.",
  },
  {
    question: "What is the process for applying for an UK student visa?",
    answer: (
      <p>
        For the latest information on applying for a student visa, please refer
        to our page which provides details and advice on the process. For more
        details, visit the{" "}
        <a
          className="redlink"
          href="https://immi.homeaffairs.gov.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          UK Immigration Website
        </a>
        .
      </p>
    ),
  },
];

const EastangliaFaq2 = () => {
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

export default EastangliaFaq2;
