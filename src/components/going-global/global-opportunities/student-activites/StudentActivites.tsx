import Image from "next/image";
import React from "react";
import LabsAndSpaces from "@/components/ui/LabsAndSpaces";

const studentActivitiesGallery = [
  {
    id: "student-activity-1",
    title: "Session by Deakin Delegation for first year students",
    image:
      "/images/innerpages/going-global/global-opportunities/global-opportunities1.webp",
    alt: "global opportunities image",
  },
  {
    id: "student-activity-2",
    title: "Guest Session on Career Readiness by Wendy Dsouza ll 24 July 2026 ",
    image:
      "/images/innerpages/going-global/global-opportunities/global-opportunities2.webp",
    alt: "global opportunities image",
  },
  {
    id: "student-activity-3",
    title: "University of Southern Denmark",
    image:
      "/images/innerpages/going-global/global-opportunities/global-opportunities3.webp",
    alt: "global opportunities image",
  },
  {
    id: "student-activity-4",
    title: "Dr. Yuri Hadi_University of Nottingham",
    image:
      "/images/innerpages/going-global/global-opportunities/global-opportunities4.webp",
    alt: "global opportunities image",
  },
  {
    id: "student-activity-5",
    title: "Outreach Activities – Northeastern University",
    image:
      "/images/innerpages/going-global/global-opportunities/global-opportunities5.webp",
    alt: "global opportunities image",
  },
  {
    id: "student-activity-6",
    title:
      "Prof. David Halliwell, Deputy Vice-Chancellor (Partnerships), Deakin University",
    image:
      "/images/innerpages/going-global/global-opportunities/global-opportunities6.webp",
    alt: "global opportunities image",
  },
];

const StudentActivites = () => {
  return (
    <div className="main_content studentactivites_main">
      <div className="row">
        <div className="col-md-6">
          <div className="div">
            <div className="heading innerpageheading">Student Activites</div>
            <p>
              At Symbiosis Institute of Technology (SIT), Pune,
              internationalization is built into the academic journey, with
              Symbiosis International (Deemed University) partnering with 80+
              international universities worldwide and SIT actively
              collaborating with 30+ institutions to offer students structured
              pathways abroad — including six Dual Degree Programs with
              Swinburne University, Macquarie University, and Aston University
              (Australia/UK), four new 2025-26 dual degree programs in
              Mechanical, Civil, Data Science, and Cyber Security with the
              University of East Anglia and Deakin University, Masters
              Progression Agreements (4+1/4+2) with Loughborough University,
              Aston University, and North-Eastern University, and Semester
              Exchange and Global Immersion opportunities at institutions such
              as Hamburg University of Technology (TUHH), KU Leuven, and the
              Asian Institute of Technology; supported by a global partner
              network spanning 14+ countries, 60+ international co-supervisors,
              and 75+ incoming international students in 2025-26, this ecosystem
              gives every SIT student credible, real-world routes to study,
              intern, and graduate abroad.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <Image
            src="/images/innerpages/going-global/global-opportunities/global-student-travel-adventure.webp"
            alt="Students"
            width={800}
            height={450}
            className="img-fluid"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="training_organizedStudents">
            <div className="heading innerpageheading">
              Workshops-Hands-on training organized for students
            </div>
            <p>
              Symbiosis Institute of Technology, Pune has organized several
              workshops, hands-on training programs, and expert sessions for
              students and faculty members to enhance practical knowledge and
              research skills. The institute also hosted distinguished
              professors and researchers from reputed international universities
              who shared valuable insights on emerging technologies, innovation,
              and global research trends. These activities have strengthened
              academic collaboration, international exposure, and experiential
              learning at the institute.
            </p>
          </div>
        </div>
      </div>

      <div className="div">
        <LabsAndSpaces
          departments={[
            {
              id: "student-activities",
              labs: [
                {
                  id: "student-activities-gallery",
                  title: "Student Activities Gallery",
                  gallery: studentActivitiesGallery,
                },
              ],
            },
          ]}
        />
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="david_halliwell_msg">
            <div className="heading innerpageheading">
              Prof. David Halliwell, Deputy Vice-Chancellor (Partnerships),
              Deakin University{" "}
            </div>
            <p>
              Prof. David Halliwell, Deputy Vice-Chancellor (Partnerships),
              Deakin University, along with Ms. Priyanka Singh, Ms. Irfa Javed,
              and Ms. Chaturika Bandara, visited Symbiosis Institute of
              Technology. He interacted with Dual Degree students, sharing
              insights on academic excellence, innovation, and global learning
              opportunities at Deakin University. The visit strengthened the
              ongoing partnership between Deakin University and Symbiosis
              International University, promoting collaboration in research and
              student mobility. Discussions were led by Dr. Anupama S. Kotur
              (Kaddi) and Dr. Hardik Vachharajani to explore further avenues of
              cooperation.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentActivites;
