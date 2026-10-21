import React from "react";
import {} from "@/data/tableData";
import Link from "next/link";
import Table from "@/components/ui/Table";
import {
  MtechadmissionProgrammeProfile,
  MtechadmissionProgrammeProfileData,
} from "@/data/tableData";
import Image from "next/image";
const ProgramOverview = () => {
  return (
    <div className="main_content programe_overview_main">
      <div className="program_overview_section">
        <div className="program_overview_left">
          <div className="heading innerpageheading">Program Overview</div>
          <p>
            M Tech is a two-year professional postgraduate engineering master's
            degree programme focused on a specific engineering field. Students
            receive superior technology knowledge over the course of two years
            from one of the leading M Tech Colleges In Pune SIT Pune's M.Tech
            programme strengthens a candidate's talents and makes them a
            specialist in a particular area or sector.
          </p>
          <p>
            The curriculum is industry-oriented, with a wide choice of
            value-added courses in Artificial Intelligence and Machine Learning,
            Robotics and Artificial Intelligence, Automotive Technology, and
            M.Tech.(Geoinformatics). The curriculum strives to build students'
            holistic personalities, encompassing domain knowledge and soft
            skills, so that they are full technicians and decent human beings
            who love human and national values.
          </p>
          <p>
            Being among the best M Tech colleges in Pune, SIT also combines
            practical learning modalities like field trips, conferences,
            debates, experiential coursework, and case studies to aid in
            successful learning. Industry professionals and leaders give these
            lectures and conversations. Personal viewpoints on the issue and
            success stories help pupils grasp what they need to do.
          </p>
          <p>
            Furthermore, the industrial visits provide them with an up-close
            look at the occupations they seek.A combination of these activities
            is required for each student's success at M Tech in Pune .
            Commercial and academic professionals teach students ensuring that
            they fully comprehend the subjects. However, it's important to note
            that this field teaches you much more.
          </p>
          <p>
            It not only improves your skills but also builds a slew of new ones
            and vastly improves your problem-solving ability, allowing you to
            work on some of the world's most complex problems, such as global
            warming, carbon emissions, and renewable energy resources. Soft
            skills such as problem-solving, communication, and leadership are
            also developed.
          </p>
          <p>
            They are also urged to participate in class and contribute whenever
            feasible. It improves students' recollection of topic information
            and fosters a more profound enthusiasm in school. At SIT Pune, one
            of the best places to study M tech in pune, we educate such business
            trends through seasoned academia to ensure students have a complete
            learning experience.
          </p>
          <p>
            Furthermore, our eminent faculty teaches such industrial trends to
            ensure that students have a well-rounded learning experience.
            Students at SIT Pune benefit from a complete learning experience
            thanks to a hybrid learning programme. Students study traditional
            knowledge from books, modern technology, and industry trends through
            teachers and projects.
          </p>
          <p>
            We assist students in analysing real-world challenges and developing
            interdisciplinary engineering systems and solutions that will lead
            to their desired careers.
          </p>
        </div>
        <div className="program_overview_right">
          <Image
            src="/images/innerpages/admission/m-tech-addmission/Programme-Overview.webp"
            alt="Dr. S.B. Mujumdar"
            width={900}
            height={1080}
            className="img-fluid leader-image"
            priority
          />
        </div>
      </div>

      <div className="div mt-4 mt-sm-5">
        <div className="heading innerpageheading">Programme Profile</div>
        <p>
          Master of Technology (M.Tech) with specializations in the following
          disciplines:
        </p>
        <Table
          columns={MtechadmissionProgrammeProfile}
          data={MtechadmissionProgrammeProfileData}
          wrapperClassName="table-responsive"
          tableClassName="student_project_table"
        />
      </div>
      <div className="siteee-step-card mt-4 mt-sm-5">
        <ul className="listingbox">
          <li>Carnegie Mellon University, USA</li>
          <li>RMIT University, Australia</li>
          <li>Pennsylvania State University, USA</li>
        </ul>
      </div>
      <section
        className="siteee-contact mt-4 mt-sm-5"
        aria-labelledby="jeemain-contact-title"
      >
        <h3 id="jeemain-contact-title">Write to Us</h3>
        <div className="siteee-contact-grid">
          <div>
            <h4>M.Tech (AI and Machine Learning)</h4>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScA2IjsHmfwz9tnrWD2Zcz6Kv6HjxwuEC1p6KqHIhKYbZXFZw/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here to fill the Form
            </a>
          </div>
          <div>
            <h4>M.Tech (Automotive Technology)</h4>
            <a
              href="https://docs.google.com/forms/d/1u1-3Ko3T-RxhMFZ_hnvcf1mfE36xWl1LJUcWruEgk5M/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here to fill the Form
            </a>
          </div>
          <div>
            <h4>M.Tech (Robotics and Artificial Intelligence)</h4>
            <Link
              className=""
              href="https://docs.google.com/forms/d/e/1FAIpQLSeWLe2BwEgYaphBISIDSZ9MfUIKufj2-39hiHKVKAnptGd_ow/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here to fill the Form
            </Link>
          </div>
          <div>
            <h4>M.Tech (Geoinformatics)</h4>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc7kL3mi-SD4rEWRH8UIfq1J8pwEoELQzdd-wsElVGeSQtUVA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here to fill the Form
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramOverview;
