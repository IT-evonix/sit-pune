"use client";

import { useState } from "react";
import { Accordion } from "react-bootstrap";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "What are the benefits of dual degree programs?",
    answer: (
      <ul className="listingbox">
        <li>
          <strong>International Degree:</strong> Gain an internationally
          recognized degree, opening doors to global opportunities.
        </li>
        <li>
          <strong>Work Permit in Australia:</strong> Obtain a work permit in
          Australia and access highly paid international employment.
        </li>
        <li>
          <strong>Opportunities for Further Education:</strong> Pursue a
          Master&apos;s degree at the same university, enhancing academic and
          professional prospects.
        </li>
        <li>
          <strong>Enhanced Resume Value:</strong> Increase the value of your
          resume with a dual degree, making you stand out in the job market.
        </li>
        <li>
          <strong>Exposure to Leading Researchers:</strong> Interact with
          renowned scientists and researchers, gaining valuable insights and
          inspiration.
        </li>
        <li>
          <strong>Awareness of Global Education Opportunities:</strong> Learn
          about higher education opportunities available abroad and expand your
          academic horizon.
        </li>
        <li>
          <strong>Access to Emerging Technologies:</strong> Explore and gain
          knowledge about cutting-edge and emerging technologies shaping the
          future.
        </li>
      </ul>
    ),
  },
  {
    question: "Will regular and dual degree classes be conducted separately?",
    answer:
      "No, the classes are usually conducted jointly for dual and regular-degree students. This integrated approach fosters a collaborative learning environment and enables students to benefit from diverse perspectives.",
  },
  {
    question: "What is the structure of the Symbiosis-Deakin dual degree program?",
    answer: (
      <>
        <p>
          The program allows students to complete two years of study at
          Symbiosis (SIT) followed by two years at Deakin University. On
          completion, students will earn:
        </p>
        <ul className="listingbox">
          <li>
            A four-year undergraduate degree from Symbiosis (with Recognition
            of Prior Learning for two years studied at Deakin).
          </li>
          <li>
            A Bachelor&apos;s degree from Deakin University in the respective
            program.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "What programs are offered under this dual degree arrangement?",
    answer: (
      <>
        <p>The arrangement includes programs in:</p>
        <ul className="listingbox">
          <li>
            <strong>Data Science: </strong>
            <a className="redlink" href="https://www.deakin.edu.au/course/bachelor-data-science-honours" target="_blank" rel="noopener noreferrer">
              Data Science Honours
            </a>
          </li>
          <li>
            <strong>Cyber Security: </strong>
            <a className="redlink" href="https://www.deakin.edu.au/course/bachelor-cyber-security-honours" target="_blank" rel="noopener noreferrer">
              Cyber Security Honours
            </a>
          </li>
          <li>
            <strong>Civil Engineering: </strong>
            <a className="redlink" href="https://www.deakin.edu.au/courses/major/civil-engineering-bachelor-engineering-honours" target="_blank" rel="noopener noreferrer">
              Civil Engineering Honours
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "What are the eligibility criteria for the program?",
    answer: (
      <>
        <p>Students are eligible to transfer to Deakin if they:</p>
        <ul className="listingbox">
          <li>Successfully complete the first two years of study at Symbiosis.</li>
          <li>
            Meet Deakin&apos;s admission and English language proficiency
            (IELTS) requirements.
          </li>
          <li>Satisfy Australian student visa requirements.</li>
        </ul>
      </>
    ),
  },
  {
    question:
      "What can I do if I am not able to clear IELTS/get the required score?",
    answer: (
      <>
        <div className="subheading18 mt-2">
          Required IELTS Score:
        </div>
        <ul className="listingbox">
          <li>
            A score of 6.0 overall with a minimum of 6.0 in all components is
            required to transfer admission to Deakin University.
          </li>
          <li>The IELTS score must be valid at the time of transfer.</li>
        </ul>
        <div className="subheading18 mt-2">
          Next Steps:
        </div>
        <ul className="listingbox">
          <li>
            Reappear for the IELTS if you don&apos;t meet the required score.
          </li>
          <li>
            You may get an extension of up to 6 months to achieve the required
            score.
          </li>
          <li>
            It is recommended to start preparing for and scheduling your IELTS
            exam during your first semester.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "What is the fee structure for the Dual Degree program at SIT?",
    answer: (
      <ul className="listingbox">
        <li>
          <strong>At SIT: </strong>
          The fees will typically be 1.5 times the regular fees along with
          applicable scholarships for the respective discipline in the given
          academic year. Please refer to the SIT website for the exact{" "}
          <a className="redlink" href="https://www.sitpune.edu.in/fees-structure">fee structure</a>.
        </li>
        <li>
          <strong>At Deakin University: </strong>
          Fees for the program can be found on the official Deakin University
          website (
          <a className="redlink" href="https://www.deakin.edu.au/course/bachelor-data-science" target="_blank" rel="noopener noreferrer">
            Deakin Bachelor of Data Science
          </a>
          ,{" "}
          <a className="redlink" href="https://www.deakin.edu.au/course/bachelor-cyber-security-honours" target="_blank" rel="noopener noreferrer">
            Deakin Bachelor of Cyber Security
          </a>
          ,{" "}
          <a className="redlink" href="https://www.deakin.edu.au/courses/major/civil-engineering-bachelor-engineering-honours" target="_blank" rel="noopener noreferrer">
            Deakin Bachelor of Civil Engg.
          </a>
          ). Note that there is typically a 2-3% increase in fees every year.
        </li>
      </ul>
    ),
  },
  {
    question: "What is the tuition fee structure for the programs at Deakin?",
    answer: (
      <ul className="listingbox">
        <li>
          <strong>Civil Engineering – </strong>
          <a className="redlink" href="https://www.deakin.edu.au/course/bachelor-engineering-honours-international" target="_blank" rel="noopener noreferrer">
            Fee Structure
          </a>
        </li>
        <li>
          <strong>Cyber Security – </strong>
          <a className="redlink" href="https://www.deakin.edu.au/course/bachelor-cyber-security-international" target="_blank" rel="noopener noreferrer">
            Fee Structure
          </a>
        </li>
        <li>
          <strong>Data Science – </strong>
          <a className="redlink" href="https://www.deakin.edu.au/course/bachelor-data-science-international" target="_blank" rel="noopener noreferrer">
            Fee Structure
          </a>
        </li>
      </ul>
    ),
  },
  {
    question: "Can I switch from a Dual Degree to a regular B.Tech?",
    answer: (
      <>
        <p>
          Yes, switching from a Dual Degree program to a regular B.Tech program
          may be possible. Follow these steps:
        </p>
        <ul className="listingbox">
          <li>
            <strong>Submit a Formal Request:</strong>
            <ul className="sublistingbox">
              <li>
                Write an application addressed to the department head, program
                coordinator, or academic office. Clearly state your request to
                switch programs.
              </li>
            </ul>
          </li>
          <li>
            <strong>Provide Justification:</strong>
            <ul className="sublistingbox">
              <li>Explain your reasons for switching, such as:</li>
              <li>
                A preference for focusing on the undergraduate degree
              </li>
              <li>Alignment with career goals</li>
              <li>Personal circumstances</li>
            </ul>
          </li>
          <li>
            <strong>Attach Required Documents:</strong>
            <ul className="sublistingbox">
              <li>Academic transcripts</li>
              <li>Student ID</li>
              <li>Any other relevant documents</li>
            </ul>
          </li>
          <li>
            <strong>Await Approval:</strong>
            <ul className="sublistingbox">
              <li>
                Your request may need to go through an approval process
                involving the scrutiny committee, department, academic council,
                or registrar.
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "What if I am not able to score the required CGPA in year 1 and 2 at SIT?",
    answer: (
      <>
        <p>
          If you are unable to meet the required CGPA during your 1st and 2nd
          years at the Symbiosis Institute of Technology (SIT), the following
          will apply:
        </p>
        <ul className="listingbox">
          <li>
            <strong>Repeating Courses in the First Year:</strong>
            <ul className="sublistingbox">
              <li>
                You may be required to repeat specific courses from Semester 1
                or Semester 2 if you fail to clear them on the first attempt.
              </li>
            </ul>
          </li>
          <li>
            <strong>Backlogs in the Second Year:</strong>
            <ul className="sublistingbox">
              <li>
                If you have a backlog in Semester 3 or any live backlogs from
                Semester 1 or 2, you will be disqualified from the dual degree
                program.
              </li>
            </ul>
          </li>
          <li>
            <strong>Transfer to the Regular B.Tech Program:</strong>
            <ul className="sublistingbox">
              <li>
                Disqualified students will be shifted to the regular B.Tech
                program.
              </li>
              <li>
                Such students must pay the difference in fees for the upcoming
                semesters.
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Can an International student opt for a dual degree program?",
    answer:
      "International students can apply for dual degree programs as per the qualifying criteria specified by SCIE. Please refer to the SCIE website for the application procedure.",
  },
];

const Faq1 = () => {
  const [activeKey, setActiveKey] = useState<string | null>("0");

  return (
    <section className="main_content">
      <div className="faq_section">
        <div className="heading innerpageheading">
          Frequently Asked Questions
        </div>

        <Accordion
          activeKey={activeKey}
          onSelect={(eventKey) => {
            const key = eventKey as string | null;

            if (key === activeKey) {
              setActiveKey(null);
            } else {
              setActiveKey(key);
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

              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq1;
