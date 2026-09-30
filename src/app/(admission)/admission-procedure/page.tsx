import InnerpageBanner from "@/components/InnerpageBanner";
import TabbingSidebar from "@/components/TabbingSidebar";
import AdmissionProcedureug from "@/components/admission/admission-procedure/ug/AdmissionProcedure"
import AdmissionProcedurepg from "@/components/admission/admission-procedure/pg/AdmissionProcedure"
import React from "react";

const Admissionpage = () => {
const tabs = [
    {
      id: "ug",
      title: "Undergraduate (UG)",
      content: <AdmissionProcedureug/>,
    },
    {
      id: "pg",
      title: "Postgraduate (PG)",
      content: <AdmissionProcedurepg/>,
    },
    // {
    //   id: "phd",
    //   title: "PhD (Doctor of Philosophy)",
    //   content:<AdmissionProcedure/>,
    // },
  ];

  return (
    <div className="mainpage-wrapper">
      <InnerpageBanner
        title={`Admission Procedure`}
        breadcrumbs={[
          // { label: "Programmes", href: "/programmes" },
          { label: "Admission Procedure" },

          { label: "Admission Procedure" },
        ]}
      />

      <div className="container-fluid py-5">
        <TabbingSidebar heading="Admission Procedure" tabs={tabs} />
      </div>
    </div>
  );
};

export default Admissionpage;
