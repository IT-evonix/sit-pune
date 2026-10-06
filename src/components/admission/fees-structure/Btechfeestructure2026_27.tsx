"use client";

import { useState } from "react";
import "@/app/css/admission.css";
import Table from "@/components/ui/Table";
import {
  Feestructure2026_27SecAColumns,
  Feestructure2026_27SecAData,
  Feestructure2026_27SecBColumns,
  Feestructure2026_27SecBData,
  Feestructure2026_27NRISecAColumns,
  Feestructure2026_27NRISecAData,
  Feestructure2026_27NRISecBColumns,
  Feestructure2026_27NRISecBData,
  Feestructure2026_27ForeignNationalSecAColumns,
  Feestructure2026_27ForeignNationalSecAData,
  Feestructure2026_27ForeignNationalSecBColumns,
  Feestructure2026_27ForeignNationalSecBData,
  Feestructure2026_27HostelMessColumns,
  Feestructure2026_27HostelMessData,
} from "@/data/tableData";

const AdmissionProcedureug = () => {
  const [activeTab, setActiveTab] = useState("siteee");
  return (
    <div className="main_content">
      <div className="admission-tabs">
        <ul
          className="nav nav-tabs"
          role="tablist"
          aria-label="Admission routes"
        >
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link${activeTab === "siteee" ? " active" : ""}`}
              id="admission-siteee-tab"
              type="button"
              role="tab"
              aria-controls="admission-siteee-panel"
              aria-selected={activeTab === "siteee"}
              onClick={() => setActiveTab("siteee")}
            >
              Indian Students
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link${activeTab === "other" ? " active" : ""}`}
              id="admission-JEEMain-tab"
              type="button"
              role="tab"
              aria-controls="admission-JEEMain-panel"
              aria-selected={activeTab === "other"}
              onClick={() => setActiveTab("other")}
            >
              NRI/PIO/OCI
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link${activeTab === "foreign" ? " active" : ""}`}
              id="foreign-nationals-tab"
              type="button"
              role="tab"
              aria-controls="foreign-nationals-panel"
              aria-selected={activeTab === "foreign"}
              onClick={() => setActiveTab("foreign")}
            >
              Foreign Nationals
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link${activeTab === "hostel" ? " active" : ""}`}
              id="hostel-mess-tab"
              type="button"
              role="tab"
              aria-controls="hostel-mess-panel"
              aria-selected={activeTab === "hostel"}
              onClick={() => setActiveTab("hostel")}
            >
              Hostel &amp; Mess
            </button>
          </li>
        </ul>

        <div className="tab-content admission-tabs-content">
          <div
            className={`tab-pane fade${activeTab === "siteee" ? " show active" : ""}`}
            id="admission-siteee-panel"
            role="tabpanel"
            aria-labelledby="admission-siteee-tab"
            hidden={activeTab !== "siteee"}
            tabIndex={0}
          >
            <div className="subheading">
              SIT Pune - B.Tech Fee Structure AY 2026-27 | Indian Students
              (Annexure I)
            </div>

            <div className="subheading18">
              Section A: Annual Academic Fees — 1st Year 2026-27 (Amount in USD)
            </div>

            <Table
              columns={Feestructure2026_27SecAColumns}
              data={Feestructure2026_27SecAData}
              wrapperClassName="table-responsive"
              tableClassName="student_project_table"
            />
            <p className="m-0 mt-2">
              * Academic fees may be increased up to 10% over programme
              duration. Government taxes are additional.
            </p>

            <div className="subheading18 mt-4 mt-sm-5">
              Section B: Payment Installments — 1st Year 2026-27 (Amount in USD)
            </div>
            <Table
              columns={Feestructure2026_27SecBColumns}
              data={Feestructure2026_27SecBData}
              wrapperClassName="table-responsive"
              tableClassName="student_project_table"
            />
            <p className="mt-2">
              Note: 1st installment includes ₹20,000 refundable institute
              deposit.
            </p>
          </div>


          <div
            className={`tab-pane fade${activeTab === "other" ? " show active" : ""}`}
            id="admission-JEEMain-panel"
            role="tabpanel"
            aria-labelledby="admission-JEEMain-tab"
            hidden={activeTab !== "other"}
            tabIndex={0}
          >
            <div className="subheading">
              SIT Pune — B.Tech Fee Structure AY 2026-27 | NRI / PIO / OCI
              Students (Annexure II-a)
            </div>

            <div className="subheading18">
              Section A: Annual Academic Fees — 1st Year 2026-27 (Amount in USD)
            </div>

            <Table
              columns={Feestructure2026_27NRISecAColumns}
              data={Feestructure2026_27NRISecAData}
              wrapperClassName="table-responsive"
              tableClassName="student_project_table"
            />

            <div className="subheading18 mt-4 mt-sm-5">
              Section B: Payment Installments — 1st Year 2026-27 (Amount in USD)
            </div>
            <Table
              columns={Feestructure2026_27NRISecBColumns}
              data={Feestructure2026_27NRISecBData}
              wrapperClassName="table-responsive"
              tableClassName="student_project_table"
            />
            <p className="mt-2">
              * Admin fees are non-refundable. Institute deposit is refundable.
              Academic fees may increase up to 10% over programme duration.
            </p>
          </div>


          <div
            className={`tab-pane fade${activeTab === "foreign" ? " show active" : ""}`}
            id="foreign-nationals-panel"
            role="tabpanel"
            aria-labelledby="foreign-nationals-tab"
            hidden={activeTab !== "foreign"}
            tabIndex={0}
          >
            <div className="div">
              <div className="subheading">
                SIT Pune — B.Tech Fee Structure AY 2026-27 | Foreign National
                Students (Annexure II-b)
              </div>

              <div className="subheading18">
                Section A: Annual Academic Fees — 1st Year 2026-27 (Amount in
                USD) | After Golden Jubilee Scholarship
              </div>

              <Table
                columns={Feestructure2026_27ForeignNationalSecAColumns}
                data={Feestructure2026_27ForeignNationalSecAData}
                wrapperClassName="table-responsive"
                tableClassName="student_project_table"
              />

              <div className="subheading18 mt-4 mt-sm-5">
                Section B: Payment Installments — 1st Year 2026-27 (Amount in
                USD)
              </div>
              <Table
                columns={Feestructure2026_27ForeignNationalSecBColumns}
                data={Feestructure2026_27ForeignNationalSecBData}
                wrapperClassName="table-responsive"
                tableClassName="student_project_table"
              />
              <p className="mt-2">
                # Golden Jubilee Scholarship available only to Foreign National students in Batch 2026–30.
              </p>
            </div>
          </div>
          <div
            className={`tab-pane fade${activeTab === "hostel" ? " show active" : ""}`}
            id="hostel-mess-panel"
            role="tabpanel"
            aria-labelledby="hostel-mess-tab"
            hidden={activeTab !== "hostel"}
            tabIndex={0}
          >
            <div className="div">
              <div className="subheading">
                SIT Pune — B.Tech Hostel & Mess Fees AY 2026-27 | Lavale Hill
                Base Campus
              </div>

              <div className="subheading18">
                Applicable for all batches | Batches 2023-27, 2024-28 & 2025-29
              </div>
              <Table
                columns={Feestructure2026_27HostelMessColumns}
                data={Feestructure2026_27HostelMessData}
                wrapperClassName="table-responsive"
                tableClassName="student_project_table"
              />
              <p className="mt-2">
                * Hostel and mess fees can increase up to 15% per year.
                Government taxes (if any)would be additional as and when
                applicablel.
              </p>
              <p>
                ** Subsequent year fees communicated before next academic year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcedureug;
