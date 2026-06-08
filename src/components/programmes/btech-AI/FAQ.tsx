"use client";

import { useState } from "react";
import { Container, Accordion } from "react-bootstrap";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "What is intake for B.Tech AI and ML?",
    answer: "The Intake for B.Tech AI and ML is 180 students.",
  },
  {
    question: "What are the eligibility criteria for B.Tech AI and ML?",
    answer:
      "Passed Standard XII (10+2) or equivalent examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/ Biotechnology/ Biology/ Technical Vocational subject/ Computer Science/ Information Technology/ Informatics Practices/ Agriculture/ Engineering Graphics/ Business Studies from any recognised Board with a minimum of 45% marks or equivalent grade (40% marks or equivalent grade for Scheduled Caste/ Scheduled Tribes).",
  },
  {
    question: "What are Infrastructure facilities available for AI and ML?",
    answer: (
      <ul className="listingbox">
        <li>GPU- DGX (DL WS P2587 4V100/256GB 32G) Server</li>
        <li>HP IDS Z8 G4 Workstation G4 90 1125W APJ Chassis</li>
      </ul>
    ),
  },
  {
    question: "What are courses offered for B.Tech AI and ML?",
    answer: (
      <>
        <p>
          Please refer to the programme structure section from the website.{" "}
          <Link href="/" className="redtext">
            www.sitpune.edu.in
          </Link>
        </p>
      </>
    ),
  },
  {
    question:
      "What are employment opportunities after completion of B.Tech AI and ML?",
    answer: (
      <>
        <p>
          There are huge opportunities for different positions after successful
          completion of undergraduate and postgraduate programmes. Some of these
          opportunities are listed here{" "}
        </p>
        <ul className="listingbox">
          <li>Data Engineer</li>
          <li>Data Analyst</li>
          <li>Business Analyst</li>
          <li>Machine Learning Engineer</li>
          <li>Deep Learning Engineer</li>
          <li>Data Scientist</li>
          <li>AI Scientist</li>
        </ul>
      </>
    ),
  },
  {
    question:
      "Any prior knowledge of statistics and mathematics required for learning Machine and deep learning?",
    answer:
      "No. We have incorporated the basics concepts of statistics and mathematics required for learning Machine and deep learning.).",
  },
  {
    question: "Any Industry Collaborations for B.Tech AI and ML?",
    answer:
      "Yes. We are in collaboration with Tech Mahindra (Makers Lab) for conduction of few courses. Collaboration with other companies is also in progress.",
  },
  {
    question:
      "What are the possibilities of a placement in a good MNC company?",
    answer:
      "Symbiosis institute of technology is associated with eminent companies such as google, Microsoft, amazon, and many more. So students have very good opportunities to get placed in such companies for their bright future endeavors.",
  },
  {
    question:
      "Will contemporary technologies such as IoT, Cyber Security be covered along with AI-ML courses?",
    answer:
      "In the given curriculum, we have given opportunities to students to stream themselves or acquire the specializations in various areas such as Embedded-AI(AI + IoT), Cyber Physical Systems(IoT + AI + Security), etc.",
  },
  {
    question:
      "Why are Artificial Intelligence technologies the talking point in the world today?",
    answer:
      "In ancient times, devices such as desk computers were not capable of doing high-level computations which were required to run machine learning applications. However, now, along with the availability of machines, these algorithms are capable of doing high-level computations and automate various processes. Furthermore, current algorithms such as chatbots are intelligent enough to handle communication with clients, perform critical tasks, banking transactions, etc.",
  },
  {
    question: "What role AI will play in empowering industries?",
    answer:
      "In recent times, with the advent of technologies such as Industry 4.0, Healthcare 4.0, smart cities, smart buildings, etc, AI has a major role to play in changing the functioning of current industries. However, decision making roles will still be handled by humans with the help of AI tools.",
  },
  {
    question:
      "How B.Tech in CS and AI/ML are linked or different from each other?",
    answer: (
      <>
        <p>
          If we talk about software engineering, the sub-problem solutions are
          correct, however, it is not the same in machine learning — you find
          errors and the aggregate results can be dismay.
        </p>
        <p>
          In a nutshell, the world needs software engineers as much as they need
          machine learning engineers. Both the job roles need to work
          symbiotically with each other. Machine learning needs you to have a
          solid foundation in mathematics and statistics. However, software
          engineering is usually the default route most people often fall victim
          of. But the degree definitely prepares you for the bigger picture.
          Also, being a software engineer does not prevent you from becoming a
          machine learning engineer. Machine learning engineers think on these
          lines —space of models, deployment, and the impact.
        </p>
        <p>
          In a nutshell, the world needs software engineers as much as they need
          machine learning engineers. Both the job roles need to work
          symbiotically with each other.{" "}
        </p>
      </>
    ),
  },
  {
    question: "How would you explain machine learning to a software engineer?",
    answer: (
      <>
        <p>
          Software engineering is about developing programs or tools to automate
          tasks. Machine learning is all about automating automation! Machine
          learning is about finding the optimal instructions to automate a task.
        </p>
        <p>
          Machine learning algorithms are instructions for computers to learn
          other instructions automatically from data or experience. Therefore,
          machine learning is the automation of automation.
        </p>
      </>
    ),
  },
  {
    question:
      "What are employment opportunities after completion of B.Tech AI and ML?",
    answer: (
      <>
        <p>
          A lot of things have aligned to make this an exciting time for major
          advancements in AI.
        </p>
        <ul className="listingbox">
          <li>
            Processing power has improved at an amazing rate — there’s been a
            trillion-fold increase in performance over the last 60 years.
          </li>
          <li>
            There’s more data that needs to be analyzed because businesses
          </li>
        </ul>
        <p>are capturing more signals from customer interactions.</p>
        <ul className="listingbox">
          <li>
            Application of AI has already improved consumer apps significantly —
            leading to further expectations in making life easier, spurring the
            need for AI technical knowhow and R&D.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "I have heard about AI. What is it exactly?",
    answer:
      "Artificial Intelligence (AI) is the concept of having machines “think like humans” — in other words, performing tasks like reasoning, planning, learning, and understanding language. While no one is expecting parity with human intelligence today or in the near future, AI has a big application in our day to day lives. The brain behind artificial intelligence is a technology called machine learning, which is designed to make our jobs easier and more productive.",
  },
  {
    question: "Am I already using AI?",
    answer: (
      <>
        <p>
          Yes. Almost everyone who has a computer, smartphone, or other smart
          device is already using AI to make life easier:
        </p>
        <ul className="listingbox">
          <li>
            Siri and Cortana act as your personal assistants using voice
            processing.
          </li>
          <li>Facebook recommends photo tags using image recognition.</li>
          <li>Amazon recommends products using machine learning algorithms.</li>
          <li>
            Waze suggests optimal driving routes using a combination of
            predictive models, forecasting, and optimization techniques.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "What are the key highlights of B.Tech AI and ML?",
    answer: (
      <>
        <ul className="listingbox">
          <li>Training by Industry</li>
          <li>Consultancy Projects</li>
          <li>Latest Curriculum</li>
          <li>Latest Curriculum</li>
        </ul>
      </>
    ),
  },
  {
    question: "How much will be the fees for this course?",
    answer: (
      <>
        <p>
          Please refer to the Admission section Related year/ course Fee
          structure from the website.{" "}
          <Link href="/" className="redtext">
            www.sitpune.edu.in
          </Link>
        </p>
      </>
    ),
  },
  {
    question: "Whether a hostel facility is available?",
    answer:
      "Yes. Please refer to the infrastructure section from the website.www.sitpune.edu.in to view the hostel facilities.",
  },
  {
    question: "Whether the student will have an internship during this course?",
    answer: "Yes",
  },
];

const ModernFAQ = () => {
  const [activeKey, setActiveKey] = useState<string | null>("0");

  return (
    <>
      <section className="main_content">
        <div className="faq_section">
          <div className="heading innerpageheading">
            Admission FAQs - B.Tech (Artificial Intelligence and Machine
            Learning)
          </div>

          <Accordion
            activeKey={activeKey}
            onSelect={(eventKey) => {
              const key = eventKey as string | null;

              if (key === activeKey) {
                setActiveKey(null); // close current item
              } else {
                setActiveKey(key); // open clicked item
              }
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

                <Accordion.Body>
                  <p>{faq.answer}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default ModernFAQ;
