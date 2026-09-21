// import React from "react";

// const Eligibility = () => {
//   return (
//     <div>
//       <div className="main_content">
//         <div className="table-responsive">
//           <table className="table table-bordered align-middle">
//             <thead>
//               <tr className="align-middle">
//                 <th>Program Name</th>
//                 <th>Eligibility</th>
//                 <th>Mandatory Courses at 10 +2 level</th>
//                 <th>Other relevant course(s) for this discipline</th>
//               </tr>
//             </thead>

//             <tbody>
//               <tr>
//                 <td style={{ width: "18%" }}>
//                   B.Tech First Year{" "}
//                   <span style={{ color: "#C4161C" }}>
//                     <b>Indian Students</b>
//                   </span>
//                 </td>

//                 <td>
//                   Passed 10+2 examination with Physics and Mathematics as
//                   compulsory subjects along with one of Chemistry/ Computer
//                   Science/ Electronics/ Information Technology/ Biology/
//                   Informatics Practices/ Biotechnology/ Technical Vocational
//                   subject/ Agriculture/ Engineering Graphics/ Business Studies /
//                   Entrepreneurship.
//                   <br />
//                   <br />
//                   Obtained at least 45% marks (40% marks in case of candidates
//                   belonging to reserved category) in the above subjects taken
//                   together.
//                   <br />
//                   OR
//                   <br />
//                   Passed D.Voc. Stream in the same or allied sector.
//                   <br />
//                   <br />
//                   <i>
//                     (The University will offer suitable bridge courses such as
//                     Mathematics, Physics, Engineering Drawing, etc., for the
//                     students coming from diverse backgrounds to prepare level
//                     playing field and desired learning outcomes of the
//                     programme)
//                   </i>
//                 </td>

//                 <td rowSpan={2} style={{ verticalAlign: "middle" }}>
//                   Physics, Maths
//                 </td>

//                 <td rowSpan={2} style={{ verticalAlign: "middle" }}>
//                   Chemistry/ Computer Science/ Electronics/ Information
//                   Technology/ Biology/ Informatics Practices/ Biotechnology/
//                   Technical Vocational subject/ Agriculture/ Engineering
//                   Graphics/ Business Studies / Entrepreneurship
//                 </td>
//               </tr>

//               <tr>
//                 <td>
//                   B.Tech First Year{" "}
//                   <span style={{ color: "#C4161C" }}>
//                     <b>International Students</b>
//                   </span>
//                 </td>

//                 <td>
//                   International Students eligibility as per SCIE norms.
//                   <br />
//                   <br />
//                   Please follow link{" "}
//                   <a
//                     href="https://www.scie.ac.in"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="redtext"
//                   >
//                     www.scie.ac.in
//                   </a>
//                 </td>
//               </tr>

//               <tr>
//                 <td>Lateral Entry</td>

//                 <td>
//                   Passed Minimum THREE years/ TWO year (Lateral Entry) Diploma
//                   examination with at least 45% marks (40% marks in case of
//                   candidates belonging to reserved category) in ANY branch of
//                   Engineering and Technology.
//                   <br />
//                   OR
//                   <br />
//                   Passed B.Sc. Degree from a recognized University as defined by
//                   UGC, with at least 45% marks (40% marks in case of candidates
//                   belonging to reserved category) and passed 10+2 examination
//                   with Mathematics as a subject.
//                   <br />
//                   OR
//                   <br />
//                   Passed B. Voc/3-year D.Voc. Stream in the same or allied
//                   sector.
//                   <br />
//                   <br />
//                   <i>
//                     (The University will offer suitable bridge courses such as
//                     Mathematics, Physics, Engineering Drawing, etc., for the
//                     students coming from diverse backgrounds to achieve desired
//                     learning outcomes of the program)
//                   </i>
//                 </td>

//                 <td colSpan={2}></td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <div className="paddingBoth">
//           <div className="table-responsive custom-table">
//             <table className="table table-bordered mb-0">
//               <thead>
//                 <tr>
//                   <th colSpan={5} className="text-center align-middle">
//                     Reservation Policy for all Program
//                   </th>
//                 </tr>
//               </thead>

//               <tbody>
//                 <tr>
//                   <td className="align-middle">
//                     <b>I. Within the sanctioned intake</b>
//                   </td>

//                   <td className="align-middle">a) SC (In Percentage)</td>

//                   <td className="align-middle">b) ST (In Percentage)</td>

//                   <td className="align-middle">
//                     c) Person with Disability (PwD) (In Percentage)
//                   </td>

//                   <td className="align-middle">d) NRI (In Percentage)</td>
//                 </tr>

//                 <tr>
//                   <td>&nbsp;</td>
//                   <td className="align-middle">15</td>
//                   <td className="align-middle">7.5</td>
//                   <td className="align-middle">3</td>
//                   <td className="align-middle">5</td>
//                 </tr>

//                 <tr>
//                   <td className="align-middle">
//                     <b>II. Over and above the sanctioned intake</b>
//                   </td>

//                   <td className="align-middle">
//                     a) Kashmiri Migrants (In Seats with a maximum of 10 seats in
//                     the Institute)
//                   </td>

//                   <td className="align-middle">
//                     b) Foreign National / Overseas Citizen of India / children
//                     of the Indian Workers in the Gulf countries (In percentage
//                     per course)
//                   </td>

//                   <td>&nbsp;</td>
//                   <td>&nbsp;</td>
//                 </tr>

//                 <tr>
//                   <td>&nbsp;</td>
//                   <td className="align-middle">2</td>
//                   <td className="align-middle">15</td>
//                   <td>&nbsp;</td>
//                   <td>&nbsp;</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div className="redtext">
//           * Subject to AICTE guidelines.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Eligibility;



'use client';

import React from 'react';
import { Row, Col, Badge } from 'react-bootstrap';
import { FileText, Hourglass, ChevronRight } from 'lucide-react';

interface ProgrammeItem {
  id: number;
  title: string;
  batch: string;
  pdfUrl: string;
  pending?: boolean;
}

const programmeData: ProgrammeItem[] = [
  {
    id: 1,
    title: 'B.Tech AIML Program Structure (Provisional)',
    batch: '2026-30',
    pdfUrl: '/pdf/programmes/btech-AI/program-structure/B.Tech-AIML-2026-30-Program-Structure-Provisional.pdf',
  },
  {
    id: 2,
    title: 'B.Tech AIML Program Structure.pdf',
    batch: '2025-2029',
    pdfUrl: '/pdf/programmes/btech-AI/program-structure/B.Tech-AIML-2025-29-Program-Structure.pdf',
  },
  {
    id: 3,
    title: 'B.Tech AIML Program Structure.pdf',
    batch: '2024-2028',
    pdfUrl: '/pdf/programmes/btech-AI/program-structure/B.Tech-AIML-2024-28-Program-Structure.pdf',
  },
  {
    id: 4,
    title: 'B.Tech AIML Program Structure',
    batch: '2023-2027',
    pdfUrl: '/pdf/programmes/btech-AI/program-structure/B.Tech-AIML-2023-27-Program-Structure.pdf',
  },
  {
    id: 5,
    title: 'B.Tech AIML Program Structure',
    batch: '2022-2026',
    pdfUrl: '/pdf/programmes/btech-AI/program-structure/B.Tech-AIML-2022-26-Program-Structure.pdf',
  },
];

export default function ProgrammeStructurePage() {
  const handleOpenPDF = (url?: string) => {
    if (!url) return;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <div className="main_content">
        <div className="programme-wrapper">
            
            <div className="heading innerpageheading">
              Curriculum
            </div>

            {/* List */}
            <div className="programme-list">
              {programmeData.map((item) => (
                <div
                  key={item.id}
                  className="programme-card"
                  onClick={() => handleOpenPDF(item.pdfUrl)}
                  style={{ cursor: 'pointer' }}
                >
                  <Row className="align-items-center">

                    {/* Left */}
                    <Col xs={10} md={11}>
                      <div className="d-flex align-items-center gap-3">

                        <div className="small-icon-box">
                          {item.pending ? (
                            <Hourglass size={28} strokeWidth={2} />
                          ) : (
                            <FileText size={28} strokeWidth={2} />
                          )}
                        </div>

                        <div className="flex-grow-1">
                          <div className="d-flex flex-wrap flex-column flex-md-row align-items-md-center gap-2">

                            <h5 className="programme-title mb-0">
                              {item.title} {item.batch}
                            </h5>

                            {item.pending && (
                              <Badge className="pending-badge">
                                <Hourglass size={14} className="me-1" />
                                Approval is pending
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </Col>
                    {/* Right */}
                    <Col xs={2} md={1} className="text-end">
                      <ChevronRight size={30} className="arrow-icon" />
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
}