"use client";

import { useState } from "react";
import "@/app/css/admission.css";
import Table from "@/components/ui/Table";
import {
  MtechFeestructure2026_27SecAColumns,
  MtechFeestructure2026_27SecAData,
  MtechFeestructure2026_27SecBColumns,
  MtechFeestructure2026_27SecBData,
  MtechFeestructure2026_27NRISecAColumns,
  MtechFeestructure2026_27NRISecAData,
  MtechFeestructure2026_27NRISecBColumns,
  MtechFeestructure2026_27NRISecBData,
  MtechFeestructure2026_27ForeignNationalSecAColumns,
  MtechFeestructure2026_27ForeignNationalSecAData,
  MtechFeestructure2026_27ForeignNationalSecBColumns,
  MtechFeestructure2026_27ForeignNationalSecBData,
  MtechFeestructure2026_27HostelMessColumns,
  MtechFeestructure2026_27HostelMessData,
} from "@/data/tableData";

const AdmissionProcedureug = () => {
  const [activeTab, setActiveTab] = useState("siteee");
  const mtechNriSectionBColumns = MtechFeestructure2026_27NRISecBColumns.map(
    (column) => ({
      ...column,
      title:
        column.key === "programmename"
          ? "Programme"
          : column.key === "feetype"
            ? ""
            : `Inst. ${Number(column.key.replace("installment", ""))}`,
      ...(column.key === "programmename" || column.key === "feetype"
        ? { rowSpan: 2 }
        : {}),
    }),
  );
  const mtechForeignNationalSectionBColumns =
    MtechFeestructure2026_27ForeignNationalSecBColumns.map((column) => ({
      ...column,
      title:
        column.key === "programmename"
          ? "Programme / Fee Head"
          : column.key === "feetype"
            ? ""
            : `Inst. ${Number(column.key.replace("installment", ""))}`,
      ...(column.key === "programmename" || column.key === "feetype"
        ? { rowSpan: 2 }
        : {}),
    }));

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
              SIT Pune — M.Tech Fee Structure AY 2026-27 | Indian Students
              (Annexure I)
            </div>
            <div className="div">
              Batch 2026-28 | Letter FO/SIU/2026-27/223 dated 17 Jan 2026
            </div>
            <div className="subheading18">
              Section A: Annual Academic Fees — 1st Year 2026–27 (Amount in ₹)
            </div>

            <Table
              columns={MtechFeestructure2026_27SecAColumns}
              data={MtechFeestructure2026_27SecAData}
              wrapperClassName="table-responsive"
              tableClassName="student_project_table"
            />

            <div className="subheading18 mt-4 mt-sm-5">
              Section B: Payment Installments — Both Years (Amount in ₹)
            </div>
            <Table
              columns={MtechFeestructure2026_27SecBColumns}
              data={MtechFeestructure2026_27SecBData}
              wrapperClassName="table-responsive"
              tableClassName="student_project_table"
            />
            <p className="mt-2">
              * Academic fees may increase up to 10% over programme duration.
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
              SIT Pune — M.Tech Fee Structure AY 2026-27 | NRI / PIO / OCI
              Students (Annexure II-a)
            </div>
            <div className="div">
              Batch 2026-28 | Letter FO/SIU/2026-27/223 dated 17 Jan 2026
            </div>
            <div className="subheading18">
              Section A: Annual Academic Fees — 1st Year 2026-27 (Amount in USD)
            </div>

            <Table
              columns={MtechFeestructure2026_27NRISecAColumns}
              data={MtechFeestructure2026_27NRISecAData}
              wrapperClassName="table-responsive"
              tableClassName="student_project_table"
            />

            <div className="subheading18 mt-4 mt-sm-5">
              Section B: Payment Installments — Both Years (Amount in USD)
            </div>
            <Table
              columns={mtechNriSectionBColumns}
              data={MtechFeestructure2026_27NRISecBData}
              headerGroups={[
                { title: "Programme", colSpan: 1, rowSpan: 2 },
                { title: "", colSpan: 1, rowSpan: 2 },
                { title: "1st Year 2026-27", colSpan: 3 },
                { title: "2nd Year 2027-28", colSpan: 2 },
              ]}
              wrapperClassName="table-responsive"
              tableClassName="student_project_table"
            />
            <p className="mt-2">
              * Admin fees are non-refundable. Institute deposit is refundable.
              Academic fees may increase up to 10% over programme duration.
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
                SIT Pune — M.Tech Fee Structure AY 2026-27 | Foreign National
                Students (Annexure II-b)
              </div>
              <div className="">
                Batch 2026-28 | Golden Jubilee Scholarship applied | Letter
                FO/SIU/2026-27/223 dated 17 Jan 2026
              </div>
              <div className="subheading18">
                Section A: Annual Academic Fees — 1st Year 2026-27 (Amount in
                USD) — After Golden Jubilee Scholarship
              </div>

              <Table
                columns={MtechFeestructure2026_27ForeignNationalSecAColumns}
                data={MtechFeestructure2026_27ForeignNationalSecAData}
                wrapperClassName="table-responsive"
                tableClassName="student_project_table"
              />

              <div className="subheading18 mt-4 mt-sm-5">
                Section B: Payment Installments — Both Years (Amount in USD)
              </div>
              <Table
                columns={mtechForeignNationalSectionBColumns}
                data={MtechFeestructure2026_27ForeignNationalSecBData}
                headerGroups={[
                  { title: "Programme / Fee Head", colSpan: 1, rowSpan: 2 },
                  { title: "", colSpan: 1, rowSpan: 2 },
                  { title: "1st Year 2026–27", colSpan: 3 },
                  { title: "2nd Year 2027–28", colSpan: 2 },
                ]}
                wrapperClassName="table-responsive"
                tableClassName="student_project_table"
              />
              <p className="mt-2">
                # Golden Jubilee Scholarship for Foreign National students in
                Batch 2026-28 only. All programmes = $2,500 total payable 1st
                year. ## 50% concession on admin fees for foreign nationals.
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
                columns={MtechFeestructure2026_27HostelMessColumns}
                data={MtechFeestructure2026_27HostelMessData}
                wrapperClassName="table-responsive"
                tableClassName="student_project_table"
              />
              <p className="mt-2">
                Hostel and mess fees can increase up to 15% per year. Government
                taxes (if any)would be additional as and when applicablel.
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
