import React from "react";
import Image from "next/image";
import PDFCard from "@/components/ui/PDFCard";
import {
  Award,
  BadgeCheck,
  CalendarDays,
  ClipboardList,
  FileCheck2,
  Files,
  MessageSquare,
  Send,
  UsersRound,
} from "lucide-react";
const DualDegreePrograms = () => {
  return (
    <div className="main_content">
      <div className="row">
        <div className="col-md-7">
          <div className="dual-degree-box siteee-step-card">
            <div className="heading innerpageheading">Dual Degree Programs</div>
            <div className="subheading">
              Symbiosis Institute of Technology offers following Dual Degree
              Programs:
            </div>
            <ul className="dual-degree-list">
              <li>
                B.Tech (Mechanical Engineering) in partnership with University
                of East Anglia, UK
              </li>
              <li>
                B.Tech (Civil Engineering) in partnership with Deakin
                University, Australia
              </li>
              <li>
                B.Tech (Computer Science and Engineering) - with specialization
                in Data Science in partnership with Deakin University, Australia
              </li>
              <li>
                B.Tech (Computer Science and Engineering) - with specialization
                in Cyber Security in partnership with Deakin University,
                Australia
              </li>
            </ul>
          </div>

          <div className="dual-degree-box siteee-step-card">
            <div className="subheading">Application Submission</div>
            <ul className="dual-degree-list">
              <li>
                Application process remains the same as per the admission
                process for first-year B.Tech. at SIT, Pune.
              </li>
              <li>
                Admission will be carried out by application in online mode as
                the regular admission process for first-year B.Tech. at SIT,
                Pune.
              </li>
              <li>
                Students must apply for the Dual Degree Program during their 1st
                semester admission when the form is floated to all admitted
                students before the commencement of the semester.
              </li>
              <li>
                Required documents include 10th and 12th Passing certificates
                and marks in the English language.
              </li>
            </ul>
          </div>

          <div className="dual-degree-box siteee-step-card">
            <div className="subheading">Selection and Evaluation</div>
            <ul className="dual-degree-list">
              <li>
                A joint admission committee from Symbiosis Institute of
                Technology Pune and the Partner University will review the
                applications.
              </li>
              <li>
                All admitted students who have filled out the dual degree
                application form will be merit-listed based on the eligibility
                criteria.
              </li>
              <li>
                Merit-listed candidates will be called to attend a personal
                interview session.
              </li>
              <li>
                The final selected students will have to confirm their admission
                within the stipulated time by signing the undertaking form.
                Waitlisted candidates will be given preference if the
                undertaking is not received.
              </li>
              <li>
                Students eligibility checks will be carried out every semester
                as per the eligibility norms of the dual degree.
              </li>
            </ul>
          </div>
          <div className="pdf_main">
            <PDFCard
              item={{
                id: 1,
                title: "Click Here for Fee Structure of 2025-26",
                pdfUrl: "/pdf/admission/dual-degree-programs/Revised_Fee_Sructure_25-26.pdf",
              }}
            />
          </div>
        </div>

        <div className="col-md-5">
          <div className="dual-degreeimg">
            <Image
              src="/images/innerpages/admission/dual-degree/International-Dual-Degree.webp"
              alt="Dual Degree Programs"
              width={800}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="admission_process_phase admission_phase1">
        <div className="admission_process_top">
          <div className="phaseNum_Name">
            <div className="phaseName">Application Submission</div>
          </div>
        </div>
        <div className="admission_process_content">
          <div className="processCrad_main">
            <div className="processCrad">
              <div className="processIcon">
                <ClipboardList size={30} strokeWidth={1} color="#163c7a" />
              </div>
              <div className="processText">
                <div className="subheading">
                  The application process is the same as the regular B.Tech.
                  admission at SIT, Pune.
                </div>
              </div>
            </div>
            <div className="processCrad_Arrow">
              <svg
                width="40"
                height="20"
                viewBox="0 0 64 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.682 8.064L1.782 6.986L7.898 13.102L1.782 19.262L0.682 18.184L5.742 13.124L0.682 8.064ZM9.81286 8.064L10.9129 6.986L17.0289 13.102L10.9129 19.262L9.81286 18.184L14.8729 13.124L9.81286 8.064ZM18.9437 8.064L20.0437 6.986L26.1597 13.102L20.0437 19.262L18.9437 18.184L24.0037 13.124L18.9437 8.064ZM28.0746 8.064L29.1746 6.986L35.2906 13.102L29.1746 19.262L28.0746 18.184L33.1346 13.124L28.0746 8.064ZM37.2054 8.064L38.3054 6.986L44.4214 13.102L38.3054 19.262L37.2054 18.184L42.2654 13.124L37.2054 8.064ZM46.3363 8.064L47.4363 6.986L53.5523 13.102L47.4363 19.262L46.3363 18.184L51.3963 13.124L46.3363 8.064ZM55.4672 8.064L56.5672 6.986L62.6832 13.102L56.5672 19.262L55.4672 18.184L60.5272 13.124L55.4672 8.064Z"
                  fill="#c2171d"
                ></path>
              </svg>
            </div>
            <div className="processCrad">
              <div className="processIcon">
                <Send size={30} strokeWidth={1} color="#163c7a" />
              </div>
              <div className="processText">
                <div className="subheading">
                  Students must apply online, just like for regular first-year
                  B.Tech. admissions.
                </div>
              </div>
            </div>
            <div className="processCrad_Arrow">
              <svg
                width="40"
                height="20"
                viewBox="0 0 64 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.682 8.064L1.782 6.986L7.898 13.102L1.782 19.262L0.682 18.184L5.742 13.124L0.682 8.064ZM9.81286 8.064L10.9129 6.986L17.0289 13.102L10.9129 19.262L9.81286 18.184L14.8729 13.124L9.81286 8.064ZM18.9437 8.064L20.0437 6.986L26.1597 13.102L20.0437 19.262L18.9437 18.184L24.0037 13.124L18.9437 8.064ZM28.0746 8.064L29.1746 6.986L35.2906 13.102L29.1746 19.262L28.0746 18.184L33.1346 13.124L28.0746 8.064ZM37.2054 8.064L38.3054 6.986L44.4214 13.102L38.3054 19.262L37.2054 18.184L42.2654 13.124L37.2054 8.064ZM46.3363 8.064L47.4363 6.986L53.5523 13.102L47.4363 19.262L46.3363 18.184L51.3963 13.124L46.3363 8.064ZM55.4672 8.064L56.5672 6.986L62.6832 13.102L56.5672 19.262L55.4672 18.184L60.5272 13.124L55.4672 8.064Z"
                  fill="#c2171d"
                ></path>
              </svg>
            </div>
            <div className="processCrad">
              <div className="processIcon">
                <CalendarDays size={30} strokeWidth={1} color="#163c7a" />
              </div>
              <div className="processText">
                <div className="subheading">
                  Those interested in the Dual Degree Program should apply
                  during their first semester, when the form is shared with all
                  admitted students before the semester starts.
                </div>
              </div>
            </div>
            <div className="processCrad_Arrow">
              <svg
                width="40"
                height="20"
                viewBox="0 0 64 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.682 8.064L1.782 6.986L7.898 13.102L1.782 19.262L0.682 18.184L5.742 13.124L0.682 8.064ZM9.81286 8.064L10.9129 6.986L17.0289 13.102L10.9129 19.262L9.81286 18.184L14.8729 13.124L9.81286 8.064ZM18.9437 8.064L20.0437 6.986L26.1597 13.102L20.0437 19.262L18.9437 18.184L24.0037 13.124L18.9437 8.064ZM28.0746 8.064L29.1746 6.986L35.2906 13.102L29.1746 19.262L28.0746 18.184L33.1346 13.124L28.0746 8.064ZM37.2054 8.064L38.3054 6.986L44.4214 13.102L38.3054 19.262L37.2054 18.184L42.2654 13.124L37.2054 8.064ZM46.3363 8.064L47.4363 6.986L53.5523 13.102L47.4363 19.262L46.3363 18.184L51.3963 13.124L46.3363 8.064ZM55.4672 8.064L56.5672 6.986L62.6832 13.102L56.5672 19.262L55.4672 18.184L60.5272 13.124L55.4672 8.064Z"
                  fill="#c2171d"
                ></path>
              </svg>
            </div>
            <div className="processCrad">
              <div className="processIcon">
                <Files size={30} strokeWidth={1} color="#163c7a" />
              </div>
              <div className="processText">
                <div className="subheading">
                  Required documents include 10th and 12th grade passing
                  certificates and English language marks.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="admission_process_phase admission_phase1">
        <div className="admission_process_top">
          <div className="phaseNum_Name">
            <div className="phaseName">Selection & Evaluation</div>
          </div>
        </div>
        <div className="admission_process_content">
          <div className="processCrad_main">
            <div className="processCrad">
              <div className="processIcon">
                <UsersRound size={30} strokeWidth={1} color="#163c7a" />
              </div>
              <div className="processText">
                <div className="subheading">
                  A team from SIT Pune and the partner university will review
                  the applications together.
                </div>
              </div>
            </div>
            <div className="processCrad_Arrow">
              <svg
                width="40"
                height="20"
                viewBox="0 0 64 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.682 8.064L1.782 6.986L7.898 13.102L1.782 19.262L0.682 18.184L5.742 13.124L0.682 8.064ZM9.81286 8.064L10.9129 6.986L17.0289 13.102L10.9129 19.262L9.81286 18.184L14.8729 13.124L9.81286 8.064ZM18.9437 8.064L20.0437 6.986L26.1597 13.102L20.0437 19.262L18.9437 18.184L24.0037 13.124L18.9437 8.064ZM28.0746 8.064L29.1746 6.986L35.2906 13.102L29.1746 19.262L28.0746 18.184L33.1346 13.124L28.0746 8.064ZM37.2054 8.064L38.3054 6.986L44.4214 13.102L38.3054 19.262L37.2054 18.184L42.2654 13.124L37.2054 8.064ZM46.3363 8.064L47.4363 6.986L53.5523 13.102L47.4363 19.262L46.3363 18.184L51.3963 13.124L46.3363 8.064ZM55.4672 8.064L56.5672 6.986L62.6832 13.102L56.5672 19.262L55.4672 18.184L60.5272 13.124L55.4672 8.064Z"
                  fill="#c2171d"
                ></path>
              </svg>
            </div>
            <div className="processCrad">
              <div className="processIcon">
                <Award size={30} strokeWidth={1} color="#163c7a" />
              </div>
              <div className="processText">
                <div className="subheading">
                  All students who submit the dual degree form and meet the
                  eligibility will be listed based on merit
                </div>
              </div>
            </div>
            <div className="processCrad_Arrow">
              <svg
                width="40"
                height="20"
                viewBox="0 0 64 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.682 8.064L1.782 6.986L7.898 13.102L1.782 19.262L0.682 18.184L5.742 13.124L0.682 8.064ZM9.81286 8.064L10.9129 6.986L17.0289 13.102L10.9129 19.262L9.81286 18.184L14.8729 13.124L9.81286 8.064ZM18.9437 8.064L20.0437 6.986L26.1597 13.102L20.0437 19.262L18.9437 18.184L24.0037 13.124L18.9437 8.064ZM28.0746 8.064L29.1746 6.986L35.2906 13.102L29.1746 19.262L28.0746 18.184L33.1346 13.124L28.0746 8.064ZM37.2054 8.064L38.3054 6.986L44.4214 13.102L38.3054 19.262L37.2054 18.184L42.2654 13.124L37.2054 8.064ZM46.3363 8.064L47.4363 6.986L53.5523 13.102L47.4363 19.262L46.3363 18.184L51.3963 13.124L46.3363 8.064ZM55.4672 8.064L56.5672 6.986L62.6832 13.102L56.5672 19.262L55.4672 18.184L60.5272 13.124L55.4672 8.064Z"
                  fill="#c2171d"
                ></path>
              </svg>
            </div>
            <div className="processCrad">
              <div className="processIcon">
                <MessageSquare size={30} strokeWidth={1} color="#163c7a" />
              </div>
              <div className="processText">
                <div className="subheading">
                  Shortlisted students will be invited for a personal interview
                </div>
              </div>
            </div>
            <div className="processCrad_Arrow">
              <svg
                width="40"
                height="20"
                viewBox="0 0 64 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.682 8.064L1.782 6.986L7.898 13.102L1.782 19.262L0.682 18.184L5.742 13.124L0.682 8.064ZM9.81286 8.064L10.9129 6.986L17.0289 13.102L10.9129 19.262L9.81286 18.184L14.8729 13.124L9.81286 8.064ZM18.9437 8.064L20.0437 6.986L26.1597 13.102L20.0437 19.262L18.9437 18.184L24.0037 13.124L18.9437 8.064ZM28.0746 8.064L29.1746 6.986L35.2906 13.102L29.1746 19.262L28.0746 18.184L33.1346 13.124L28.0746 8.064ZM37.2054 8.064L38.3054 6.986L44.4214 13.102L38.3054 19.262L37.2054 18.184L42.2654 13.124L37.2054 8.064ZM46.3363 8.064L47.4363 6.986L53.5523 13.102L47.4363 19.262L46.3363 18.184L51.3963 13.124L46.3363 8.064ZM55.4672 8.064L56.5672 6.986L62.6832 13.102L56.5672 19.262L55.4672 18.184L60.5272 13.124L55.4672 8.064Z"
                  fill="#c2171d"
                ></path>
              </svg>
            </div>
            <div className="processCrad">
              <div className="processIcon">
                <FileCheck2 size={30} strokeWidth={1} color="#163c7a" />
              </div>
              <div className="processText">
                <div className="subheading">
                  Selected students must confirm their admission on time by
                  signing an Undertaking form. If any selected student does not
                  submit the form, waitlisted students may be given a chance
                </div>
              </div>
            </div>
            <div className="processCrad_Arrow">
              <svg
                width="40"
                height="20"
                viewBox="0 0 64 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.682 8.064L1.782 6.986L7.898 13.102L1.782 19.262L0.682 18.184L5.742 13.124L0.682 8.064ZM9.81286 8.064L10.9129 6.986L17.0289 13.102L10.9129 19.262L9.81286 18.184L14.8729 13.124L9.81286 8.064ZM18.9437 8.064L20.0437 6.986L26.1597 13.102L20.0437 19.262L18.9437 18.184L24.0037 13.124L18.9437 8.064ZM28.0746 8.064L29.1746 6.986L35.2906 13.102L29.1746 19.262L28.0746 18.184L33.1346 13.124L28.0746 8.064ZM37.2054 8.064L38.3054 6.986L44.4214 13.102L38.3054 19.262L37.2054 18.184L42.2654 13.124L37.2054 8.064ZM46.3363 8.064L47.4363 6.986L53.5523 13.102L47.4363 19.262L46.3363 18.184L51.3963 13.124L46.3363 8.064ZM55.4672 8.064L56.5672 6.986L62.6832 13.102L56.5672 19.262L55.4672 18.184L60.5272 13.124L55.4672 8.064Z"
                  fill="#c2171d"
                ></path>
              </svg>
            </div>
            <div className="processCrad">
              <div className="processIcon">
                <BadgeCheck size={30} strokeWidth={1} color="#163c7a" />
              </div>
              <div className="processText">
                <div className="subheading">
                  Every semester, students eligibility will be checked according
                  to the rules of the dual degree program.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="DualDegreePrograms">
        <div className="DualDegreePrograms-steps">Jan-April</div>
        <div className="DualDegreePrograms-buttonbox">Orientation Session</div>
        <p>
          Informative sessions conducted for students and parents to introduce
          the Dual Degree Program and clarify doubts.
        </p>
      </div>
      <div className="DualDegreePrograms">
        <div className="DualDegreePrograms-steps">March-June</div>
        <div className="DualDegreePrograms-buttonbox">
          Application Submission
        </div>
        <p>
          Students apply for B.Tech. admission via SITEEE/JEE/ASGJEE as per the
          standard application procedure
        </p>
      </div>
      <div className="DualDegreePrograms">
        <div className="DualDegreePrograms-steps">July</div>
        <div className="DualDegreePrograms-buttonbox">
          Expression of Interest
        </div>
        <p>
          Interested and admitted students formally register their intent to
          join the Dual Degree Program.
        </p>
      </div>
      <div className="DualDegreePrograms">
        <div className="DualDegreePrograms-steps">August</div>
        <div className="DualDegreePrograms-buttonbox">Candidate Evaluation</div>
        <p>
          Shortlisting based on eligibility, followed by personal interviews to
          assess candidate suitability.
        </p>
      </div>
      <div className="DualDegreePrograms">
        <div className="DualDegreePrograms-steps">September</div>
        <div className="DualDegreePrograms-buttonbox">Candidate Evaluation</div>
        <p>
          Selected students receive an offer letter for the Dual Degre Program.
          They must submit an undertaking confirming their eligibility and
          commitment.
        </p>
      </div>
    </div>
  );
};

export default DualDegreePrograms;
