"use client";

// import Image from "next/image";
import TabbingSidebar from "@/components/TabbingSidebar";
import InnerpageBanner from "@/components/InnerpageBanner";
import Overview from "@/components/programmes/applied-science-first-year/Overview";
import Faculty from "@/components/programmes/applied-science-first-year/Faculty";
import FacultyAchievements from "@/components/programmes/applied-science-first-year/department-highlights/FacultyAchievements";
import InternationalInitiatives from "@/components/programmes/applied-science-first-year/department-highlights/InternationalInitiatives";
import OurlabsandSpaces from "@/components/programmes/applied-science-first-year/department-highlights/OurlabsandSpaces";
import StudentAchievements from "@/components/programmes/applied-science-first-year/department-highlights/StudentAchievements";
import AIMLDispatch from "@/components/programmes/applied-science-first-year/AIMLDispatch";
import UpcomingEvents from "@/components/programmes/applied-science-first-year/department-highlights/UpcomingEvents";
const CEPage = () => {
  const tabs = [
    {
      id: "overview",
      title: "About the Department",
      content: <Overview />,
    },
    {
      id: "faculty",
      title: "Faculty",
      content:<Faculty />,
    },
    {
      id: "department-highlights",
      title: "Department Highlights",
      subTabs: [
        {
          id: "our-labs-spaces",
          title: "Our Labs & Spaces",
          content: <OurlabsandSpaces/>,
        },
        {
          id: "international-initiatives",
          title: "International Initiatives",
          content: <InternationalInitiatives/>,
        },
        {
          id: "student-achievements",
          title: "Student Achievements",
          content: <StudentAchievements />,
        },
        {
          id: "faculty-achievements",
          title: "Faculty Achievements",
          content:<FacultyAchievements/>,
        },
        {
          id: "upcoming-events",
          title: "Upcoming Events",
          content: <UpcomingEvents />,
        },
      ],
    },
  
    {
      id: "AIMLDispatch",
      title: "The Applied Science Dispatch",
      content: <AIMLDispatch />,
    },
  ];

  return (
    <div className="mainpage-wrapper">
      <InnerpageBanner
        title={`Applied Science (First Year)`}
        subtitle="B.Tech."
        breadcrumbs={[
          { label: "Programmes" },

          { label: "Applied Science (First Year)" },
        ]}
      />

      <div className="container-fluid py-5">
        <TabbingSidebar heading="Applied Science (First Year)" tabs={tabs} />
      </div>
    </div>
  );
};

export default CEPage;
