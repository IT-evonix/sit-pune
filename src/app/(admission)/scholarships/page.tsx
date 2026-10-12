import InnerpageBanner from "@/components/InnerpageBanner";
import TabbingSidebar from "@/components/TabbingSidebar";
import ScholarshipDetails from "@/components/admission/scholarship/ScholarshipDetails";
import ScholarshipAchievements2025_26 from "@/components/admission/scholarship/scholarship-achievements/ScholarshipAchievements2025_26";
import ScholarshipAchievements2024_25 from "@/components/admission/scholarship/scholarship-achievements/ScholarshipAchievements2024_25";
import ScholarshipAchievements2023_24 from "@/components/admission/scholarship/scholarship-achievements/ScholarshipAchievements2023_24";
import ScholarshipAchievements2022_23 from "@/components/admission/scholarship/scholarship-achievements/ScholarshipAchievements2022_23";
import ScholarshipAchievements2021_22 from "@/components/admission/scholarship/scholarship-achievements/ScholarshipAchievements2021_22";
import ScholarshipAchievements2020_21 from "@/components/admission/scholarship/scholarship-achievements/ScholarshipAchievements2020_21";

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
          id: "scholarshipachievements2025-26",
          title: "2025-26",
          content: <ScholarshipAchievements2025_26 />,
        },
        {
          id: "scholarshipachievements2024-25",
          title: "2024-25",
          content: <ScholarshipAchievements2024_25 />,
        },
        {
          id: "scholarshipachievements2023-24",
          title: "2023-24",
          content: <ScholarshipAchievements2023_24 />,
        },
        {
          id: "scholarshipachievements2022-23",
          title: "2022-23",
          content: <ScholarshipAchievements2022_23 />,
        },
        {          
          id: "scholarshipachievements2021-22",
          title: "2021-22",
          content: <ScholarshipAchievements2021_22 />,
        },
        {          
          id: "scholarshipachievements2020-21",
          title: "2020-21",
          content: <ScholarshipAchievements2020_21 />,
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
