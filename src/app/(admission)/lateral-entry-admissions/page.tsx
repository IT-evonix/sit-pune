import Eligibility from "@/components/admission/lateral-entry-admissions/Eligibility";
import FAQ from "@/components/admission/lateral-entry-admissions/FAQ";
import IMPforStudents from "@/components/admission/lateral-entry-admissions/IMPforStudents";
import ProgramOverview from "@/components/admission/lateral-entry-admissions/ProgramOverview";
import RulesRefundfees from "@/components/admission/lateral-entry-admissions/RulesRefundfees";
import InnerpageBanner from "@/components/InnerpageBanner";
import TabbingSidebar from "@/components/TabbingSidebar";

const Page = () => {
  const tabs = [
    {
      id: "program-overview",
      title: " Program Overview",
      content: <ProgramOverview />,
    },
    {
      id: "imp-of-students",
      title: " Eligibility",
      content: <Eligibility />,
    },
    {
      id: "scholarship-details",
      title: " IMP for Students",
      content: <IMPforStudents />,
    },
    {
      id: "faq",
      title: " FAQ",
      content: <FAQ />,
    },
    {
      id: "rules-for-refund-of-fees",
      title: " Rules for Refund of fees",
      content: <RulesRefundfees />,
    },
  ];

  return (
    <div className="mainpage-wrapper">
      <InnerpageBanner
        title={`Direct Second Year Admission (Lateral Entry)`}
        breadcrumbs={[
          // { label: "Programmes", href: "/programmes" },
          { label: "Admissions" },

          { label: "Lateral Entry Admission" },
        ]}
      />

      <div className="container-fluid py-5">
        <TabbingSidebar
          heading="Lateral Entry Admission"
          tabs={tabs}
          defaultActiveTabId="dual-degree-programs-overview"
        />
      </div>
    </div>
  );
};

export default Page;
