"use client";

// import Image from "next/image";
import TabbingSidebar from "@/components/TabbingSidebar";
import InnerpageBanner from "@/components/InnerpageBanner";

import CampusLifeTab from "@/components/campus-life/CampusLifeTab";
import SportsRecreation from "@/components/campus-life/SportsRecreation";
import StudentClubs from "@/components/campus-life/StudentClubs";
import LabsandSpaces from "@/components/campus-life/LabsandSpaces";
import HostelAccommodation from "@/components/campus-life/HostelAccommodation";
import GenderEquality from "@/components/campus-life/GenderEquality";
import Mentoring from "@/components/campus-life/Mentoring";
import SITPuneExperience from "@/components/campus-life/SITPuneExperience";
const CampusLife = () => {
  const tabs = [
    {
      id: "CampusLife",
      title: "Campus Life",
      content: <CampusLifeTab />,
    },
    {
      id: "LabsandSpaces",
      title: "Labs and Spaces",
      content: <LabsandSpaces />,
    },
    {
      id: "StudentClubs",
      title: "Student Clubs",
      content:<StudentClubs />,
    }, 
    {
      id: "GenderEquality",
      title: "Gender Equality / ISR Activities",
      content:<GenderEquality />,
    }, 
    {
      id: "mentoring",
      title: "Mentoring",
      content:<Mentoring/>,
    },
    {
      id: "sitpuneExperience",
      title: "The SIT Pune Experience",
      content:<SITPuneExperience/>,
    },  
    {
      id: "SportsRecreation",
      title: "Sports & Recreation",
      content: <SportsRecreation />,
    },
    {
      id: "HostelAccommodation",
      title: "Hostel/ Accommodation",
      content: <HostelAccommodation />,
    },
  ];

  return (
    <div className="mainpage-wrapper">
      <InnerpageBanner
        title={`Campus Life`}
        breadcrumbs={[
          { label: "Campus Life" },

          // { label: "Campus Life" },
        ]}
      />

      <div className="container-fluid py-5">
        <TabbingSidebar heading="Campus Life" tabs={tabs} />
      </div>
    </div>
  );
};

export default CampusLife;
