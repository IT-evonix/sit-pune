"use client";

import { useState } from "react";
import "@/app/css/admission.css";
import Table from "@/components/ui/Table";
import {
  MtechEDFeestructure2026_27SecAColumns,
  MtechEDFeestructure2026_27SecAData,
  MtechEDFeestructure2026_27SecBColumns,
  MtechEDFeestructure2026_27SecBData,
  MtechEDFeestructure2026_27SecCColumns,
  MtechEDFeestructure2026_27SecCData,
  MtechEDFeestructure2026_27NRISecAColumns,
  MtechEDFeestructure2026_27NRISecAData,
  MtechEDFeestructure2026_27NRISecBColumns,
  MtechEDFeestructure2026_27NRISecBData,
  MtechEDFeestructure2026_27NRISecCColumns,
  MtechEDFeestructure2026_27NRISecCData,
  MtechEDFeestructure2026_27ForeignNationalSecAColumns,
  MtechEDFeestructure2026_27ForeignNationalSecAData,
  MtechEDFeestructure2026_27ForeignNationalSecBColumns,
  MtechEDFeestructure2026_27ForeignNationalSecBData,
  MtechEDFeestructure2026_27ForeignNationalSecCColumns,
  MtechEDFeestructure2026_27ForeignNationalSecCData,
  MtechEDFeestructure2026_27HostelMessColumns,
  MtechEDFeestructure2026_27HostelMessData,
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
              SIT Pune — M.Tech Engineering Design Fee Structure AY 2026-27 |
              Indian Students (Annexure I)
            </div>
            <div className="div">
              Full Time Batch 2026-28 & Part Time Batch 2026-29 | Letter
              FO/SIU/2025-26/4169 dated 13 Oct 2025
            </div>
            <div className="subheading18">
              Section A: Annual Academic Fees (Amount in ₹)
            </div>

            <Table
              columns={MtechEDFeestructure2026_27SecAColumns}
              data={MtechEDFeestructure2026_27SecAData}
              wrapperClassName="table-responsive"
              tableClassName="student_project_table"
            />

            <div className="subheading18 mt-4 mt-sm-5">
              Section B: Payment Installments — Full Time 2 Years (Amount in ₹)
            </div>
            <Table
              columns={MtechEDFeestructure2026_27SecBColumns}
              data={MtechEDFeestructure2026_27SecBData}
              headerGroups={[
                {
                  title: "Fee Head",
                  colSpan: 1,
                  rowSpan: 2,
                },
                { title: "1st Year 2026–27", colSpan: 2 },
                { title: "2nd Year 2027–28", colSpan: 2 },
              ]}
              wrapperClassName="table-responsive"
              tableClassName="student_project_table"
            />

            <div className="subheading18 mt-4 mt-sm-5">
              Section C: Payment Installments — Part Time 3 Years (Amount in ₹)
            </div>
            <Table
              columns={MtechEDFeestructure2026_27SecCColumns}
              data={MtechEDFeestructure2026_27SecCData}
              headerGroups={[
                { title: "Fee Head", colSpan: 1, rowSpan: 2 },
                { title: "1st Year 2026–27", colSpan: 2 },
                { title: "2nd Year 2027–28", colSpan: 2 },
                { title: "3rd Year 2028–29", colSpan: 2 },
              ]}
              wrapperClassName="table-responsive"
              tableClassName="student_project_table"
            />
            <p className="mt-2">
              * Academic fees may increase up to 10% over programme duration.
              Government taxes (if any)would be additional as and when
              applicablel. Institute deposit is refundable.
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
              SIT Pune — M.Tech Engineering Design Fee Structure AY 2026–27 |
              NRI / PIO / OCI Students (Annexure II-a)
            </div>
            <div className="div">
              Full Time Batch 2026–28 & Part Time Batch 2026–29 | Letter
              FO/SIU/2025-26/4169 dated 13 Oct 2025
            </div>
            <div className="subheading18">
              Section A: Annual Academic Fees (Amount in USD)
            </div>

            <Table
              columns={MtechEDFeestructure2026_27NRISecAColumns}
              data={MtechEDFeestructure2026_27NRISecAData}
              wrapperClassName="table-responsive"
              tableClassName="student_project_table"
            />

            <div className="subheading18 mt-4 mt-sm-5">
              Section B: Payment Installments — Full Time 2 Years (Amount in
              USD)
            </div>
            <Table
              columns={MtechEDFeestructure2026_27NRISecBColumns}
              data={MtechEDFeestructure2026_27NRISecBData}
              headerGroups={[
                { title: "Fee Head", colSpan: 1, rowSpan: 2 },
                { title: "1st Year 2026–27", colSpan: 2 },
                { title: "2nd Year 2027–28", colSpan: 2 },
              ]}
              wrapperClassName="table-responsive"
              tableClassName="student_project_table"
            />

            <div className="subheading18 mt-4 mt-sm-5">
              Section C: Payment Installments — Part Time 3 Years (Amount in
              USD)
            </div>
            <Table
              columns={MtechEDFeestructure2026_27NRISecCColumns}
              data={MtechEDFeestructure2026_27NRISecCData}
              headerGroups={[
                { title: "Fee Head", colSpan: 1, rowSpan: 2 },
                { title: "1st Year", colSpan: 2 },
                { title: "2nd Year", colSpan: 2 },
                { title: "3rd Year", colSpan: 2 },
              ]}
              wrapperClassName="table-responsive"
              tableClassName="student_project_table"
            />
            <p className="mt-2">
              * Institute deposit and SCIE admin fees apply to Batch DSY 2025-29
              only.
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
                SIT Pune — M.Tech Engineering Design Fee Structure AY 2026–27 |
                Foreign National Students (Annexure II-b)
              </div>
              <div className="">
                After Golden Jubilee Scholarship | Full Time Batch 2026–28 &
                Part Time Batch 2026–29
              </div>
              <div className="subheading18">
                Section A: Annual Academic Fees After Golden Jubilee Scholarship
                (Amount in USD)
              </div>

              <Table
                columns={MtechEDFeestructure2026_27ForeignNationalSecAColumns}
                data={MtechEDFeestructure2026_27ForeignNationalSecAData}
                wrapperClassName="table-responsive"
                tableClassName="student_project_table"
              />

              <div className="subheading18 mt-4 mt-sm-5">
                Section B: Payment Installments — Full Time 2 Years (Amount in
                USD)
              </div>
              <Table
                columns={MtechEDFeestructure2026_27ForeignNationalSecBColumns}
                data={MtechEDFeestructure2026_27ForeignNationalSecBData}
                headerGroups={[
                  { title: "Fee Head", colSpan: 1, rowSpan: 2 },
                  { title: "1st Year 2026–27", colSpan: 2 },
                  { title: "2nd Year 2027–28", colSpan: 2 },
                ]}
                wrapperClassName="table-responsive"
                tableClassName="student_project_table"
              />

              <div className="subheading18 mt-4 mt-sm-5">
                Section C: Payment Installments — Part Time 3 Years (Amount in
                USD)
              </div>
              <Table
                columns={MtechEDFeestructure2026_27ForeignNationalSecCColumns}
                data={MtechEDFeestructure2026_27ForeignNationalSecCData}
                headerGroups={[
                  { title: "Fee Head", colSpan: 1, rowSpan: 2 },
                  { title: "1st Year", colSpan: 2 },
                  { title: "2nd Year", colSpan: 2 },
                  { title: "3rd Year", colSpan: 2 },
                ]}
                wrapperClassName="table-responsive"
                tableClassName="student_project_table"
              />
              <p className="mt-2">
                # Golden Jubilee Scholarship for Foreign National students in
                Batch 2026-28/2026-29 only.
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
                SIT Pune — B.Tech Hostel & Mess Fees AY 2026–27 | Lavale Hill
                Base Campus
              </div>
              <div className="subheading18">
                Applicable for all batches | Batches 2023-27, 2024-28 & 2025-29
              </div>
              <Table
                columns={MtechEDFeestructure2026_27HostelMessColumns}
                data={MtechEDFeestructure2026_27HostelMessData}
                wrapperClassName="table-responsive"
                tableClassName="student_project_table"
              />
              <p className="mt-2">
                Hostel and mess fees can increase up to 15% per year. Government
                taxes (if any)would be additional as and when applicable.
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
