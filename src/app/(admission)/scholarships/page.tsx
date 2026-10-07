import InnerpageBanner from "@/components/InnerpageBanner";
import TabbingSidebar from "@/components/TabbingSidebar";
import ScholarshipDetails from "@/components/admission/scholarship/ScholarshipDetails";
import ScholarshipAchievements2025_26 from "@/components/admission/scholarship/scholarship-achievements/ScholarshipAchievements2025_26";
const Admissionpage = () => {
  const tabs = [
    {
      id: "scholarship-details",
      title: " Scholarship Details",
      content: <ScholarshipDetails />,
    },
    {
      id: "scholarship-achievements",
      title: "Scholarship Achievements",
      subTabs: [
        {
          id: "sit-deakin-partnership",
          title: "2025-26",
          content: <ScholarshipAchievements2025_26 />,
        },
        {
          id: "sit-deakin-partnership",
          title: "2024-25",
          content: <ScholarshipAchievements2025_26 />,
        },
        {
          id: "sit-deakin-partnership",
          title: "2023-24",
          content: <ScholarshipAchievements2025_26 />,
        },
        {
          id: "sit-deakin-partnership",
          title: "2022-23",
          content: <ScholarshipAchievements2025_26 />,
        },
        {          
          id: "sit-deakin-partnership",
          title: "2021-22",
          content: <ScholarshipAchievements2025_26 />,
        },
        {          
          id: "sit-deakin-partnership",
          title: "2020-21",
          content: <ScholarshipAchievements2025_26 />,
        },
      ],
    },
    {
      id: "aicte-scholarship",
      title: "Click here for AICTE Scholarship/Fellowship Schemes",
      href: "https://www.aicte.gov.in/schemes/students-development-schemes",
      external: true,
    },
  ];

  return (
    <div className="mainpage-wrapper">
      <InnerpageBanner
        title={`Scholarship`}
        breadcrumbs={[
          // { label: "Programmes", href: "/programmes" },
          { label: "Admissions" },

          { label: "Scholarship" },
        ]}
      />

      <div className="container-fluid py-5">
        <TabbingSidebar
          heading="Scholarship"
          tabs={tabs}
          defaultActiveTabId="dual-degree-programs-overview"
        />
      </div>
    </div>
  );
};

export default Admissionpage;
