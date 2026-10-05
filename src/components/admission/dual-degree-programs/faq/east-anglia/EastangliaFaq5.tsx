"use client";

import { useState } from "react";
import { Accordion } from "react-bootstrap";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "What support services does UEA provide for international students?",
    answer: (
      <>
        <p>
          Student Services have dedicated International Student Advisers within
          the Student Life Team to support all international students. They can
          provide advice and guidance on a wide range of issues before, during,
          and after studying at UEA.
        </p>
        <p>
          You can contact them at{" "}
          <a
            className="redlink"
            href="mailto:studentlife.international@uea.ac.uk"
          >
            studentlife.international@uea.ac.uk
          </a>
          .
        </p>
        <p>
          You might like to review key information related to before you study,
          whilst you are at UEA and after you study.
        </p>
      </>
    ),
  },
  {
    question: "How does UEA assist with career opportunities?",
    answer:
      "UEA embeds a range of transferable skills and opportunities for internships or years in industry within a variety of our degree courses. Our Career Service is well-placed on campus to help you prepare and apply for work opportunities.",
  },
  {
    question: "Are there scholarships or financial aid opportunities?",
    answer:
      "Many of our Undergraduate and Postgraduate courses have scholarship opportunities available. Please view our scholarships page for the latest scholarship information.",
  },
];

const EastangliaFaq5 = () => {
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

export default EastangliaFaq5;
