"use client";

import { useState } from "react";
import { Accordion } from "react-bootstrap";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "What post-study work opportunities are available?",
    answer: (
      <>
        <p>
          Students completing their degree at Deakin are eligible for
          Post-Higher Education Work stream in Australia:
        </p>
        <ul className="listingbox">
          <li>2 years for undergraduate degrees.</li>
          <li>3 years for postgraduate degrees.</li>
        </ul>
        <p>
          Refer to the link for more details:{" "}
          <a
            className="redlink"
            href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485/changes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Temporary Graduate visa changes
          </a>
        </p>
      </>
    ),
  },
  {
    question:
      "Can this program help in applying for Permanent Residency (PR) in Australia?",
    answer:
      "Completing an Australian degree adds points towards PR eligibility under the General Skilled Migration program. Students are encouraged to review PR pathways via the Department of Home Affairs.",
  },
];

const Faq6 = () => {
  const [activeKey, setActiveKey] = useState<string | null>("0");

  return (
    <section className="main_content">
      <div className="faq_section">
        <div className="heading innerpageheading">After Graduation</div>
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

export default Faq6;
