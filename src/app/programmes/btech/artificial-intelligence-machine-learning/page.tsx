"use client";

// import Image from "next/image";
import TabbingSidebar from "@/components/TabbingSidebar";
import InnerpageBanner from "@/components/InnerpageBanner";
import Overview from "@/components/programmes/btech-AI/Overview";
import Curriculum from "@/components/programmes/btech-AI/Curriculum";
import Faculty from "@/components/programmes/btech-AI/Faculty";
import AlumniAchievements from "@/components/programmes/btech-AI/department-highlights/AlumniAchievements";
import FacultyAchievements from "@/components/programmes/btech-AI/department-highlights/FacultyAchievements";
import IndustryInsightSeries from "@/components/programmes/btech-AI/department-highlights/IndustryInsightSeries";
import InternationalInitiatives from "@/components/programmes/btech-AI/department-highlights/InternationalInitiatives";
import OurlabsandSpaces from "@/components/programmes/btech-AI/department-highlights/OurlabsandSpaces";
import StudentAchievements from "@/components/programmes/btech-AI/department-highlights/StudentAchievements";
import StudentProjects from "@/components/programmes/btech-AI/department-highlights/StudentProjects";
import HearFromourStudents from "@/components/programmes/btech-AI/HearFromourStudents";
import MajorsandMinors from "@/components/programmes/btech-AI/MajorsandMinors";
import Placements from "@/components/programmes/btech-AI/Placements";
import AIMLDispatch from "@/components/programmes/btech-AI/AIMLDispatch";
const AIMLPage = () => {
  const tabs = [
    {
      id: "overview",
      title: "About the Department",
      content: <Overview />,
    },
    {
      id: "Curriculum",
      title: "Curriculum",
      content: <Curriculum />,
    },
    {
      id: "department-highlights",
      title: "Department Highlights",
      subTabs: [
        {
          id: "alumni-achievments",
          title: "Alumni Achievements",
          content: <AlumniAchievements/>,
        },

        {
          id: "faculty-achievements",
          title: "Faculty Achievements",
          content:<FacultyAchievements/>,
        },

        {
          id: "industry-insight-series",
          title: "Industry Insight Series",
          content: <IndustryInsightSeries />,
        },
        
        {
          id: "international-initiatives",
          title: "International Initiatives",
          content: <InternationalInitiatives/>,
        },

        {
          id: "our-labs-spaces",
          title: "Our Labs & Spaces",
          content: <OurlabsandSpaces/>,
        },

        {
          id: "student-achievements",
          title: "Student Achievements",
          content: <StudentAchievements />,
        },

        {
          id: "student-projects",
          title: "Student Projects",
          content: <StudentProjects/>,
        },

        {
          id: "upcoming-events",
          title: "Upcoming Events",
          content: <div>Coming Soon</div>,
        },
      ],
    },

    {
      id: "faculty",
      title: "Faculty",
      content:<Faculty />,
    },

    {
      id: "hear-from-our-students",
      title: "Hear from our Students",
      content: <HearFromourStudents />,
    },

    {
      id: "MajorsandMinors",
      title: "Majors and Minors",
      content: <MajorsandMinors />,
    },

    {
      id: "placements",
      title: "Placements",
      content: <Placements />,
    },

    {
      id: "AIMLDispatch",
      title: "The AIML Dispatch",
      content: <AIMLDispatch />,
    },
  ];

  return (
    <div className="mainpage-wrapper">
      <InnerpageBanner
        title={`Artificial Intelligence \n & Machine Learning`}
        breadcrumbs={[
          // { label: "Programmes", href: "/programmes" },
          { label: "Programmes" },

          { label: "AIML" },
        ]}
      />

      <div className="container-fluid py-5">
        <TabbingSidebar heading="AIML" tabs={tabs} />
      </div>
    </div>
  );
};

export default AIMLPage;
