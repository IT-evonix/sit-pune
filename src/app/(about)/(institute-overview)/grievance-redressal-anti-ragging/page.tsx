"use client";

// import Image from "next/image";
import TabbingSidebar from "@/components/TabbingSidebar";
import InnerpageBanner from "@/components/InnerpageBanner";
import GrievanceRedressal from "@/components/about/institute-overview/GrievanceRedressal";
import NodalOfficer from "@/components/about/institute-overview/NodalOfficer";
const CEPage = () => {
  const tabs = [
    {
      id: "grievance-redressal",
      title: "Grievance Redressal",
      content: <GrievanceRedressal />,
    },
    {
      id: "anti-ragging",
      title: "Anti-Ragging",
      subTabs: [
        {
          id: "anti-ragging-nodal-officer",
          title: "Nodal Officer Anti Ragging",
          content: <NodalOfficer />,
        },
        {
          id: "anti-ragging-affidavit",
          title: "Anti-Ragging: Online Affidavit Procedure",
          href: "/pdf/about/Revised-procedure-%26-Compliance-submission-letter.pdf",
          external: true,
        },
        {
          id: "anti-ragging-videos",
          title: "Anti-Ragging: Videos",
          href: "https://www.antiragging.in/video.html",
          external: true,
        },
        {
          id: "anti-ragging-posters",
          title: "Anti-Ragging: Posters",
          href: "/pdf/about/Antiragging-Posters.pdf",
          external: true,
        },
        {
          id: "anti-ragging-details",
          title: "Anti-Ragging: Rules, Committees and Grievance Mechanism",
          href: "https://www.siu.edu.in/about-us/why-us/student-wellbeing#antiRaggingPolicy",
          external: true,
        },
        {
          id: "anti-ragging-rules",
          title: "Anti-Ragging: Rules for Curbing Ragging, 2025",
          href: "/pdf/about/Notification_No_1709_Rules-for-Curbing-the-Menace-of-Ragging_2025.pdf",
          external: true,
        },
      ],
    },
  ];

  return (
    <div className="mainpage-wrapper">
      <InnerpageBanner
        title={`Grievance Redressal / Anti-Ragging`}
        breadcrumbs={[
          { label: "About" },

          { label: "Grievance Redressal / Anti-Ragging" },
        ]}
      />

      <div className="container-fluid py-5">
        <TabbingSidebar
          heading="Grievance Redressal / Anti-Ragging"
          tabs={tabs}
        />
      </div>
    </div>
  );
};

export default CEPage;
