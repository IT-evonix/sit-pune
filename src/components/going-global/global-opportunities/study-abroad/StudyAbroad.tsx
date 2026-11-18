"use client";

import { useState } from "react";
import "@/app/css/admission.css";
import { longtermColumns, longtermData, shorttermColumns, shorttermData } from "@/data/tableData";
import Table from "@/components/ui/Table";

const StudyAbroad = () => {
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
              Semster Excahnge Internships
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
              Short Term GIP
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
            <div className="heading innerpageheading">Long Term</div>
            <div className="subheading">
              Students selected for International Internships, semester exchange
              programme in 2025-26
            </div>
            <Table
              columns={longtermColumns}
              data={longtermData}
              wrapperClassName="table-responsive"
              tableClassName="student_project_table"
            />
          </div>
          <div
            className={`tab-pane fade${activeTab === "other" ? " show active" : ""}`}
            id="admission-JEEMain-panel"
            role="tabpanel"
            aria-labelledby="admission-JEEMain-tab"
            hidden={activeTab !== "other"}
            tabIndex={0}
          >
            <div className="heading innerpageheading">Short Term</div>
            <div className="subheading">
              Short-Term GIP/Summer/Winter School Programs{" "}
            </div>
            <Table
              columns={shorttermColumns}
              data={shorttermData}
              wrapperClassName="table-responsive"
              tableClassName="student_project_table"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroad;
