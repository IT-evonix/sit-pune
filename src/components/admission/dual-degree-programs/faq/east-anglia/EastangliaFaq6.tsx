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
      <p>
        There are a range of post-study work opportunities and often these can
        be applied to through Careers Central. More information is available on
        our{" "}
        <a
          className="redlink"
          href="https://www.uea.ac.uk/study/international-students/visa-advice-and-international-student-support/after-your-course/post-study-work-visas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Post-study work visas page
        </a>
        .
      </p>
    ),
  },
  {
    question:
      "Can this program help in applying for Permanent Residency (PR) in UK?",
    answer: (
      <>
        <p>
          Students who have studied in the UK and obtained a degree or other
          relevant qualification from an approved UK higher education provider
          are eligible to apply for the Graduate route, which allows them to
          work after completing their studies. This route does not require
          sponsorship or endorsement from an employer or the educational
          institution.
        </p>
        <p>
          The Graduate route enables eligible graduates to remain in the UK to
          work or seek employment. Those who have completed an undergraduate or
          postgraduate master&apos;s degree (or hold a relevant qualification)
          can stay for two years, while PhD or doctoral qualification graduates
          can remain for three. Pls visit{" "}
          <a
            className="redlink"
            href="https://ukcisa.org.uk/Information--Advice/Working/Working-after-studies"
            target="_blank"
            rel="noopener noreferrer"
          >
            UKCISA - international student advice and guidance - Working after
            studies
          </a>{" "}
          for more information.
        </p>
      </>
    ),
  },
];

const EastangliaFaq6 = () => {
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

export default EastangliaFaq6;
