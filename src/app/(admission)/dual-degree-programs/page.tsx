import InnerpageBanner from "@/components/InnerpageBanner";
import TabbingSidebar from "@/components/TabbingSidebar";
import DualDegreePrograms from "@/components/admission/dual-degree-programs/DualDegreePrograms";
import DeakinUniversity from "@/components/admission/dual-degree-programs/DeakinUniversity";
import Faq1 from "@/components/admission/dual-degree-programs/faq/deakin-university/Faq1";
import Faq2 from "@/components/admission/dual-degree-programs/faq/deakin-university/Faq2";
import Faq3 from "@/components/admission/dual-degree-programs/faq/deakin-university/Faq3";
import Faq4 from "@/components/admission/dual-degree-programs/faq/deakin-university/Faq4";
import Faq5 from "@/components/admission/dual-degree-programs/faq/deakin-university/Faq5";
import Faq6 from "@/components/admission/dual-degree-programs/faq/deakin-university/Faq6";
import Faq7 from "@/components/admission/dual-degree-programs/faq/deakin-university/Faq7";

import EastangliaFaq1 from "@/components/admission/dual-degree-programs/faq/east-anglia/EastangliaFaq1";
import EastangliaFaq2 from "@/components/admission/dual-degree-programs/faq/east-anglia/EastangliaFaq2";
import EastangliaFaq3 from "@/components/admission/dual-degree-programs/faq/east-anglia/EastangliaFaq3";
import EastangliaFaq4 from "@/components/admission/dual-degree-programs/faq/east-anglia/EastangliaFaq4";
import EastangliaFaq5 from "@/components/admission/dual-degree-programs/faq/east-anglia/EastangliaFaq5";
import EastangliaFaq6 from "@/components/admission/dual-degree-programs/faq/east-anglia/EastangliaFaq6";
import EastangliaFaq7 from "@/components/admission/dual-degree-programs/faq/east-anglia/EastangliaFaq7";
import EastAngliaUniversity from "@/components/admission/dual-degree-programs/EastAngliaUniversity";

const Admissionpage = () => {
  const tabs = [
    {
      id: "enquirehere",
      title: "Enquire Here",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSdLqor_Rxst7B77jw2vOEegdwBmzAJZN8twDSBUfD22Cs8b8g/viewform?usp=send_form",
      external: true,
    },
    {
      id: "dual-degree-programs-overview",
      title: " Dual Degree Programs Overview",
      content: <DualDegreePrograms />,
    },
    {
      id: "deakin-university",
      title: "Deakin University",
      subTabs: [
        {
          id: "sit-deakin-partnership",
          title: "SIT - Deakin University Partnership",
          content: <DeakinUniversity />,
        },
        {
          id: "deakin-faq",
          title: "FAQ",
          subTabs: [
            {
              id: "deakin-faq-1",
              title: "FAQS",
              content: <Faq1 />,
            },
            {
              id: "deakin-faq-2",
              title: "Examination Related",
              content: <Faq2 />,
            },
            {
              id: "deakin-faq-3",
              title: "Study and Living in Australia",
              content: <Faq3 />,
            },
            {
              id: "deakin-faq-4",
              title: "Accommodation",
              content: <Faq4 />,
            },
            {
              id: "deakin-faq-5",
              title: "Support and Wellbeing",
              content: <Faq5 />,
            },
            {
              id: "deakin-faq-6",
              title: "After Graduation",
              content: <Faq6 />,
            },
            {
              id: "deakin-faq-7",
              title: "Cancellation/ Withdrawal /Refund Related",
              content: <Faq7 />,
            },
          ],
        },
      ],
    },
    {
      id: "university-of-east-anglia",
      title: "University of East Anglia",
      subTabs: [
        {
          id: "east-anglia",
          title: "Program with University of East Anglia",
          content: <EastAngliaUniversity />,
        },
        {
          id: "east-anglia-faq",
          title: "FAQ",
          subTabs: [
            {
              id: "east-anglia-faq-1",
              title: "FAQS",
              content: <EastangliaFaq1 />,
            },
            {
              id: "east-anglia-faq-2",
              title: "Examination Related",
              content: <EastangliaFaq2 />,
            },
            {
              id: "east-anglia-faq-3",
              title: "Study and Living in UK",
              content: <EastangliaFaq3 />,
            },
            {
              id: "east-anglia-faq-4",
              title: "Accommodation",
              content: <EastangliaFaq4 />,
            },
            {
              id: "east-anglia-faq-5",
              title: "Support and Wellbeing",
              content: <EastangliaFaq5 />,
            },
            {
              id: "east-anglia-faq-6",
              title: "After Graduation",
              content: <EastangliaFaq6 />,
            },
            {
              id: "east-anglia-faq-7",
              title: "Cancellation/ Withdrawal /Refund Related",
              content: <EastangliaFaq7 />,
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="mainpage-wrapper">
      <InnerpageBanner
        title={`Dual Degree Programs`}
        breadcrumbs={[
          // { label: "Programmes", href: "/programmes" },
          { label: "Admissions" },

          { label: "Dual Degree Programs" },
        ]}
      />

      <div className="container-fluid py-5">
        <TabbingSidebar
          heading="Dual Degree Programs"
          tabs={tabs}
          defaultActiveTabId="dual-degree-programs-overview"
        />
      </div>
    </div>
  );
};

export default Admissionpage;
