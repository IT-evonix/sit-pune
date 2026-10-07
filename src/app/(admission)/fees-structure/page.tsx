import InnerpageBanner from "@/components/InnerpageBanner";
import TabbingSidebar from "@/components/TabbingSidebar";
import Btechfeestructure2026_27 from "@/components/admission/fees-structure/Btechfeestructure2026_27";
import MTechFeeStructure2026_27 from "@/components/admission/fees-structure/MTechFeeStructure2026_27";
import MTechEDFeeStructure2026_27 from "@/components/admission/fees-structure/MTechEDFeeStructure2026_27";
import BTech2ndSubsequentFees2026_27 from "@/components/admission/fees-structure/BTech2ndSubsequentFees2026_27";


const Admissionpage = () => {
const tabs = [
    {
      id: "btechfee-structure-2026-27",
      title: "BTech Fee Structure 2026-27",
      content: <Btechfeestructure2026_27/>,
    },
    {
      id: "btechsubsequent-fee-structure-2026-27",
      title: "BTech 2nd Subsequent Fees 2026-27",
      content: <BTech2ndSubsequentFees2026_27/>,
    },
    {
      id: "mtechfee-structure-2026-27",
      title: "MTech Fee Structure 2026-27",
      content:<MTechFeeStructure2026_27/>,
    },
    {
      id: "edfee-structure-2026-27",
      title: "MTech ED Fee Structure 2026-27",
      content:<MTechEDFeeStructure2026_27/>,
    },
  ];

  return (
    <div className="mainpage-wrapper">
      <InnerpageBanner
        title={`Fees Structure`}
        breadcrumbs={[
          // { label: "Programmes", href: "/programmes" },
          { label: "Admissions" },

          { label: "Fees Structure" },
        ]}
      />

      <div className="container-fluid py-5">
        <TabbingSidebar heading="Fees Structure" tabs={tabs} />
      </div>
    </div>
  );
};

export default Admissionpage;
