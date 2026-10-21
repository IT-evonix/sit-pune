import AdmissionCancellation from "@/components/admission/m-tech-addmission/AdmissionCancellation";
import Eligibility from "@/components/admission/m-tech-addmission/Eligibility";
import FAQ from "@/components/admission/m-tech-addmission/FAQ";
import IMPDates from "@/components/admission/m-tech-addmission/IMPDates";
import ProgramOverview from "@/components/admission/m-tech-addmission/ProgramOverview";
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
      id: "eligibility",
      title: " Eligibility",
      content: <Eligibility />,
    },
    {
      id: "important-dates",
      title: " Important Dates",
      content: <IMPDates />,
    },
    {
      id: "admission-cancellation",
      title: " Admission Cancellation",
      content: <AdmissionCancellation />,
    },
    {
      id: "faq",
      title: " FAQ",
      content: <FAQ />,
    },
  ];

  return (
    <div className="mainpage-wrapper">
      <InnerpageBanner
        title={`M.Tech Admission Programmes`}
        breadcrumbs={[
          // { label: "Programmes", href: "/programmes" },
          { label: "Admissions" },

          { label: "M.Tech Admission Programmes" },
        ]}
      />

      <div className="container-fluid py-5">
        <TabbingSidebar
          heading="M.Tech Admission"
          tabs={tabs}
          defaultActiveTabId="mtech-admission"
        />
      </div>
    </div>
  );
};

export default Page;
