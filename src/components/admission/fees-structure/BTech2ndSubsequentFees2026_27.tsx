"use client";

import { useState } from "react";
import "@/app/css/admission.css";
import Table from "@/components/ui/Table";
import {
  btech2ndFeestructure2026_27SecAColumns,
  btech2ndFeestructure2026_27SecAData,
  btech2ndFeestructure2026_27SecBColumns,
  btech2ndFeestructure2026_27SecBData,
  btech2ndFeestructure2026_27NRISecAColumns,
  btech2ndFeestructure2026_27NRISecAData,
  btech2ndFeestructure2026_27NRISecBColumns,
  btech2ndFeestructure2026_27NRISecBData,
  btech2ndFeestructure2026_27ForeignNationalSecAColumns,
  btech2ndFeestructure2026_27ForeignNationalSecAData,
  btech2ndFeestructure2026_27ForeignNationalSecBColumns,
  btech2ndFeestructure2026_27ForeignNationalSecBData,
  btech2ndFeestructure2026_27HostelMessColumns,
  btech2ndFeestructure2026_27HostelMessData,
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
              SIT Pune — B.Tech 2nd & Subsequent Year Fees AY 2026–27 | Indian Students (Annexure I)
            </div>
            <div className="div">
              Batches 2023-27, 2024-28 & 2025-29 | Letter FO/SIU/2026-27/222 dated 17 Jan 2026
            </div>
            <div className="subheading18">
              Section A: Regular Batch Academic Fees — AY 2026–27 (Amount in ₹)
            </div>

            <Table
              columns={btech2ndFeestructure2026_27SecAColumns}
              data={btech2ndFeestructure2026_27SecAData}
              wrapperClassName="table-responsive"
              tableClassName="student_project_table"
            />


            <div className="subheading18 mt-4 mt-sm-5">
              Section B: Direct Second Year (DSY) Batch Academic Fees — AY 2026–27 (Amount in ₹)
            </div>
            <Table
              columns={btech2ndFeestructure2026_27SecBColumns}
              data={btech2ndFeestructure2026_27SecBData}
              wrapperClassName="table-responsive"
              tableClassName="student_project_table"
            />
            <p className="mt-2">
              * Academic fees may increase up to 10% over programme duration. Government taxes would be additional as and when applicable. Institute deposit ₹20,000 (refundable) applicable for Batch DSY 2025-29 only (first time in 2nd year).
            </p>
          </div>

          {/* 2nd tab Start Here */}
          <div
            className={`tab-pane fade${activeTab === "other" ? " show active" : ""}`}
            id="admission-JEEMain-panel"
            role="tabpanel"
            aria-labelledby="admission-JEEMain-tab"
            hidden={activeTab !== "other"}
            tabIndex={0}
          >
            <div className="subheading">
              SIT Pune — B.Tech 2nd & Subsequent Year Fees AY 2026–27 | NRI / PIO / OCI Students (Annexure II-a)
            </div>
            <div className="div">
              Batches 2023-27, 2024-28 & 2025-29 | Letter FO/SIU/2026-27/222 dated 17 Jan 2026
            </div>
            <div className="subheading18">
              Regular Batches — Academic Fees AY 2026–27 (Amount in USD)
            </div>

            <Table
              columns={btech2ndFeestructure2026_27NRISecAColumns}
              data={btech2ndFeestructure2026_27NRISecAData}
              wrapperClassName="table-responsive"
              tableClassName="student_project_table"
            />

            <div className="subheading18 mt-4 mt-sm-5">
              DSY Batches — Academic Fees AY 2026–27 (Amount in USD)
            </div>
            <Table
              columns={btech2ndFeestructure2026_27NRISecBColumns}
              data={btech2ndFeestructure2026_27NRISecBData}
              wrapperClassName="table-responsive"
              tableClassName="student_project_table"
            />
            <p className="mt-2">
              * Institute deposit and SCIE admin fees apply to Batch DSY 2025-29 only.
            </p>
          </div>

          {/* 3rd tab Start Here */}
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
                SIT Pune — B.Tech 2nd & Subsequent Year Fees AY 2026–27 | Foreign National Students (Annexure II-b)
              </div>
              <div className="">After Golden Jubilee Scholarship | Batches 2023-27, 2024-28 & 2025-29 | Letter FO/SIU/2026-27/222 dated 17 Jan 2026</div>
              <div className="subheading18">
                Regular Batches — Academic Fees FY 2026–27 (Amount in USD) — After Golden Jubilee Scholarship
              </div>

              <Table
                columns={btech2ndFeestructure2026_27ForeignNationalSecAColumns}
                data={btech2ndFeestructure2026_27ForeignNationalSecAData}
                wrapperClassName="table-responsive"
                tableClassName="student_project_table"
              />

              <div className="subheading18 mt-4 mt-sm-5">
                DSY Batches — Academic Fees FY 2026-27 (Amount in USD) — After Golden Jubilee Scholarship
              </div>
              <Table
                columns={btech2ndFeestructure2026_27ForeignNationalSecBColumns}
                data={btech2ndFeestructure2026_27ForeignNationalSecBData}
                wrapperClassName="table-responsive"
                tableClassName="student_project_table"
              />
              <p className="mt-2">
                # Golden Jubilee Scholarship for Foreign National students taking admission in 2026 only. Academic fee payable = $1,300/yr for all programmes. Institute deposit $275 and SCIE admin $275 applicable for Batch DSY 2025-29 only.
              </p>
            </div>
          </div>

          {/* 4th tab Start Here */}
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
                SIT Pune — B.Tech Hostel & Mess Fees AY 2026-27 | Lavale Hill Base Campus
              </div>
              <div className="subheading18">
                Applicable for all batches | Batches 2023-27, 2024-28 & 2025-29
              </div>
              <Table
                columns={btech2ndFeestructure2026_27HostelMessColumns}
                data={btech2ndFeestructure2026_27HostelMessData}
                wrapperClassName="table-responsive"
                tableClassName="student_project_table"
              />
              <p className="mt-2">
                Hostel and mess fees can increase up to 15% per year.Government taxes would be additional as and when applicable.
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
