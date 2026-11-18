"use client";

// import Image from "next/image";
import TabbingSidebar from "@/components/TabbingSidebar";
import InnerpageBanner from "@/components/InnerpageBanner";
import StudentActivites from "@/components/going-global/global-opportunities/student-activites/StudentActivites";
import AcademicPathways from "@/components/going-global/global-opportunities/academic-pathways/AcademicPathways";
import StudyAbroad from "@/components/going-global/global-opportunities/study-abroad/StudyAbroad";
const page = () => {
  const tabs = [
    {
      id: "student-activites",
      title: "Student Activites",
      content: <StudentActivites />,
    },
    {
      id: "academic-pathways",
      title: "Academic Pathways",
      content: <AcademicPathways />,
    },
    {
      id: "study-abroad",
      title: "Study Abroad",
      content: <StudyAbroad />,
    },
  ];

  return (
    <div className="mainpage-wrapper">
      <InnerpageBanner
        title={`Global Opportunities`}
        breadcrumbs={[
          { label: "Going Global" },

          { label: "Global Opportunities" },
        ]}
      />

      <div className="container-fluid py-5">
        <TabbingSidebar heading="Global Opportunities" tabs={tabs} />
      </div>
    </div>
  );
};

export default page;
