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
      "What support services does Deakin provide for international students?",
    answer: (
      <>
        <p>Deakin ensures a smooth transition for students through Deakin Support and services:</p>
        <ul className="listingbox">
          <li>Orientation programs for academic and cultural adjustment.</li>
          <li>
            Access to Deakin Talent for career guidance, resume building, and
            interview preparation.
          </li>
          <li>Counseling and wellbeing services to support mental health.</li>
          <li>On-campus healthcare services, including doctors and nurses.</li>
        </ul>
      </>
    ),
  },
  {
    question: "How does Deakin assist with career opportunities?",
    answer: (
      <>
        <p>Deakin Talent provides:</p>
        <ul className="listingbox">
          <li>Personalized career planning and placement support.</li>
          <li>Access to job portals and internship opportunities.</li>
          <li>
            Workshops for interview preparation and professional development.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Are there scholarships or financial aid opportunities?",
    answer: (
      <p>
        Students may apply for merit-based scholarships and bursaries offered by
        Deakin. Contact the admissions office for specific details.{" "}
        <a
          className="redlink"
          href="https://www.deakin.edu.au/study/fees-and-scholarships/scholarships"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fees and scholarships
        </a>
      </p>
    ),
  },
];

const Faq5 = () => {
  const [activeKey, setActiveKey] = useState<string | null>("0");

  return (
    <section className="main_content">
      <div className="faq_section">
        <div className="heading innerpageheading">
          Support and Wellbeing
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

export default Faq5;
