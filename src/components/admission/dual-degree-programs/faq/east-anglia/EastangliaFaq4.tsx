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
      "Do I get any assistance with accommodation and other formalities at Symbiosis?",
    answer: (
      <>
        <p>
          Symbiosis International (Deemed University) offers comprehensive
          support to assist students with accommodation and other formalities.
        </p>
        <p>
          <strong>On-Campus Accommodation:</strong> Hostel facilities with
          essential amenities such as beds, study tables, and wardrobes. Rooms
          are shared (2-3 students per room).{" "}
          <a className="redlink" href="#">
            Hostel Facility
          </a>
        </p>
        <p>
          <strong>Alternative Housing Options:</strong> Off-campus residential
          areas and apartment complexes available.
        </p>
        <p>
          <strong>Student Welfare Support:</strong> The Student Welfare
          Department assists students in transitioning smoothly.
        </p>
      </>
    ),
  },
  {
    question: "Where can students live while studying at UEA?",
    answer:
      "UEA has a range of accommodation available and a great page to give you all the useful accommodation information.",
  },
];

const EastangliaFaq4 = () => {
  const [activeKey, setActiveKey] = useState<string | null>("0");

  return (
    <section className="main_content">
      <div className="faq_section">
        <div className="heading innerpageheading">Accommodation</div>
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

export default EastangliaFaq4;
