'use client';

// import Image from "next/image";
import TabbingSidebar from '@/components/TabbingSidebar';
import InnerpageBanner from '@/components/InnerpageBanner';
import Overview from '@/components/programmes/btech-AI/Overview';
import FacultyProfile from '@/components/programmes/btech-AI/FacultyProfile';
import LabsandInfrastructure from '@/components/programmes/btech-AI/LabsandInfrastructure';
import Eligibility from '@/components/programmes/btech-AI/Eligibility';
import ProgrammeStructure from '@/components/programmes/btech-AI/ProgrammeStructure';
import OutcomeBasedEducation from '@/components/programmes/btech-AI/OutcomeBasedEducation';
import AchievementsandPlacement from '@/components/programmes/btech-AI/AchievementsandPlacement';
import StakeholderFeedback from '@/components/programmes/btech-AI/StakeholderFeedback';
import FAQ from '@/components/programmes/btech-AI/FAQ';
import Newsletter from '@/components/programmes/btech-AI/Newsletter';

const AIMLPage = () => {
  const tabs = [
    {
      id: 'overview',
      title: 'Overview',
      content: <Overview />,
    },
    {
      id: 'faculty',
      title: 'Faculty Profile',
      content: <FacultyProfile/>,
    },
    {
      id: 'labs',
      title: 'Labs & Infrastructure',
      content: <LabsandInfrastructure />,
    },
    {
      id: 'eligibility',
      title: 'Eligibility',
      content: <Eligibility />,
    },
    {
      id: 'programme-structure',
      title: 'Programme Structure',
      content: <ProgrammeStructure />,
    },
    {
      id: 'outcome-based-education',
      title: 'Outcome Based Education',
      content: <OutcomeBasedEducation />,
    },
    {
      id: 'achievements-and-placement',
      title: 'Recent Achievements & Placement Highlights',
      content: <AchievementsandPlacement />,
    },
    {
      id: 'stakeholder-feedback',
      title: 'Stakeholder Feedback',
      content: <StakeholderFeedback />,
    },
    {
      id: 'faq',
      title: 'FAQ',
      content: <FAQ />,
    },
    {
      id: 'newsletter',
      title: 'Newsletter',
      content: <Newsletter />,
    },
  ];

  return (
    <div className="div">
      <InnerpageBanner
        title={`B.Tech in Artificial Intelligence \n & Machine Learning`}
        breadcrumbs={[
        // { label: "Programmes", href: "/programmes" },
        { label: "Programmes"},

        { label: "B Tech (Artificial Intelligence and Machine Learning)" },
        ]}
      />

        <div className="container-fluid py-5">
          <TabbingSidebar
                heading="B.Tech AIML"
                tabs={tabs}
              />
        </div>
    </div>
    
  );
};

export default AIMLPage;