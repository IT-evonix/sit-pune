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
        <ul className="listingbox">
          <li>
            <strong>On-Campus Accommodation:</strong> Symbiosis provides hostel
            facilities equipped with essential amenities such as beds, study
            tables, and wardrobes. Rooms are available on a shared basis,
            typically accommodating two or three students. The hostels are
            designed to offer a comfortable living environment conducive to
            academic pursuits. Please refer to{" "}
            <a
              className="redlink"
              href="https://www.sitpune.edu.in/hostel-facilities"
            >
              Hostel Facility
            </a>{" "}
            for more details.
          </li>
          <li>
            <strong>Alternative Housing Options:</strong> For students
            preferring off-campus living, there are numerous residential areas
            and apartment complexes in proximity to the campus. These options
            include shared apartments and paying guest (PG) accommodations,
            providing flexibility based on individual preferences.
          </li>
          <li>
            <strong>Student Welfare Support:</strong> The university&apos;s
            Student Welfare Department is dedicated to assisting students with
            various aspects of campus life, ensuring a smooth transition and
            addressing any concerns related to accommodation and well-being.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Where can students live while studying at Deakin?",
    answer: (
      <>
        <p>Deakin offers both on-campus and off-campus housing options:</p>
        <ul className="listingbox">
          <li>
            <strong>On-campus:</strong> Safe, fully furnished residences with
            utilities and internet included.
          </li>
          <li>
            <strong>Off-campus:</strong> Guidance is provided by{" "}
            <a
              className="redlink"
              href="https://www.deakin.edu.au/accommodation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deakin Res
            </a>{" "}
            for securing rental accommodations in nearby areas.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "What support is available for finding accommodation?",
    answer: (
      <>
        <p>DeakinRes provides:</p>
        <ul className="listingbox">
          <li>Assistance with housing options and contracts.</li>
          <li>Access to secure and affordable accommodation listings.</li>
        </ul>
      </>
    ),
  },
];

const Faq4 = () => {
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

export default Faq4;
