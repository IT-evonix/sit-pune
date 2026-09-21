"use client";

// import Image from "next/image";
import TabbingSidebar from "@/components/TabbingSidebar";
import InnerpageBanner from "@/components/InnerpageBanner";
import Overview from "@/components/programmes/btech-RAI/Overview";
import Curriculum from "@/components/programmes/btech-RAI/Curriculum";
import Faculty from "@/components/programmes/btech-RAI/Faculty";
import AlumniAchievements from "@/components/programmes/btech-RAI/department-highlights/AlumniAchievements";
import FacultyAchievements from "@/components/programmes/btech-RAI/department-highlights/FacultyAchievements";
import IndustryInsightSeries from "@/components/programmes/btech-RAI/department-highlights/IndustryInsightSeries";
import InternationalInitiatives from "@/components/programmes/btech-RAI/department-highlights/InternationalInitiatives";
import OurlabsandSpaces from "@/components/programmes/btech-RAI/department-highlights/OurlabsandSpaces";
import StudentAchievements from "@/components/programmes/btech-RAI/department-highlights/StudentAchievements";
import StudentProjects from "@/components/programmes/btech-RAI/department-highlights/StudentProjects";
import HearFromourStudents from "@/components/programmes/btech-RAI/HearFromourStudents";
import MajorsandMinors from "@/components/programmes/btech-RAI/MajorsandMinors";
import Placements from "@/components/programmes/btech-RAI/Placements";
import AIMLDispatch from "@/components/programmes/btech-RAI/artificalDispatch";
const RAIPage = () => {
  const tabs = [
    {
      id: "overview",
      title: "About the Department",
      content: <Overview />,
    },
    {
      id: "Majors and Minors",
      title: "Majors and Minors",
      content: <MajorsandMinors />,
    },
    {
      id: "faculty",
      title: "Faculty",
      content: <Faculty />,
    },
    {
      id: "Curriculum",
      title: "Curriculum",
      content: <Curriculum />,
    },

    {
      id: "placements",
      title: "Placements",
      content: <Placements />,
    },

    {
      id: "department-highlights",
      title: "Department Highlights",
      subTabs: [

        {
          id: "our-labs-spaces",
          title: "Our Labs & Spaces",
          content: <OurlabsandSpaces />,
        },
        {
          id: "international-initiatives",
          title: "International Initiatives",
          content: <InternationalInitiatives />,
        },
        {
          id: "industry-insight-series",
          title: "Industry Insight Series",
          content: <IndustryInsightSeries />,
        },
        {
          id: "student-projects",
          title: "Student Projects",
          content: <StudentProjects />,
        },
        {
          id: "student-achievements",
          title: "Student Achievements",
          content: <StudentAchievements />,
        },
        {
          id: "faculty-achievements",
          title: "Faculty Achievements",
          content: <FacultyAchievements />,
        },
        {
          id: "alumni-achievments",
          title: "Alumni Achievements",
          content: <AlumniAchievements />,
        },
        // {
        //   id: "upcoming-events",
        //   title: "Upcoming Events",
        //   content: <div>Coming Soon</div>,
        // },
      ],
    },

    {
      id: "hear-from-our-students",
      title: "Hear from our Students",
      content: <HearFromourStudents />,
    },
    {
      id: "ArtificalDispatch",
      title: "The Artifical Dispatch",
      content: <AIMLDispatch />,
    },
  ];

  return (
    <div className="mainpage-wrapper">
      <InnerpageBanner
        title={`Robotics \n & Artificial Intelligence`}
        breadcrumbs={[
          // { label: "Programmes", href: "/programmes" },
          { label: "Programmes" },

          { label: "Robotics and Artificial Intelligence" },
        ]}
      />

      <div className="container-fluid py-5">
        <TabbingSidebar heading="Robotics and Artificial Intelligence" tabs={tabs} />
      </div>
    </div>
  );
};

export default RAIPage;
