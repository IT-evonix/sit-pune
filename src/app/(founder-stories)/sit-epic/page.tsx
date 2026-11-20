"use client";

// import Image from "next/image";
import TabbingSidebar from "@/components/TabbingSidebar";
import InnerpageBanner from "@/components/InnerpageBanner";
import AicteLdeaLab from "@/components/founder-stories/AicteLdeaLab";
import EpicChronicle from "@/components/founder-stories/EpicChronicle";
import EpicCommittee from "@/components/founder-stories/EpicCommittee";
import FounderStories from "@/components/founder-stories/FounderStories";
import MakersLab from "@/components/founder-stories/MakersLab";
import SITEpic from "@/components/founder-stories/SITEpic";
import Visionmissiongoal from "@/components/founder-stories/Visionmissiongoal";
const FounderStoriesPage = () => {
  const tabs = [
    {
      id: "AICTEIdeaLab",
      title: "AICTE Idea Lab",
      content: <AicteLdeaLab />,
    },
    {
      id: "EpicChronicle",
      title: "Epic Chronicle",
      content:<EpicChronicle />,
    },
    {
      id: "epicvisionmissiongoal",
      title: "Epic Vision Mission Goal",
      content: <Visionmissiongoal />,
    },
    {
      id: "EpicCommittee",
      title: "Epic Committee",
      content:<EpicCommittee />,
    }, 
    {
      id: "founder-stories",
      title: "Founder Stories",
      content:<FounderStories/>,
    },  
    {
      id: "makerslab",
      title: "Makers Lab",
      content: <MakersLab />,
    },
    {
      id: "sitepic",
      title: "Sit Epic",
      content: <SITEpic />,
    },
    
  ];

  return (
    <div className="mainpage-wrapper">
      <InnerpageBanner
        title={`Founder Stories`}
        breadcrumbs={[
          { label: "Founder Stories" },

          // { label: "Campus Life" },
        ]}
      />

      <div className="container-fluid py-5">
        <TabbingSidebar heading="Founder Stories" tabs={tabs} />
      </div>
    </div>
  );
};

export default FounderStoriesPage;
