"use client";

import { useState } from "react";
import "@/app/css/admission.css";
import {
  dualdegreeprogramsColumns,
  dualdegreeprogramsData,
  dualdegreeprogramsLaunchedColumns,
  dualdegreeprogramsLaunchedData,
  MastersProgressionAgreementColumns,
  MastersProgressionAgreementData,
} from "@/data/tableData";
import Table from "@/components/ui/Table";

const AcademicPathways = () => {
  const [activeTab, setActiveTab] = useState("siteee");
  const streamsCell = MastersProgressionAgreementData[0]?.streams;
  const mastersProgressionStreams =
    streamsCell && typeof streamsCell === "object" && "value" in streamsCell
      ? streamsCell.value
          .split("\n")
          .map((stream) => stream.replace(/^[^A-Za-z]+/, "").trim())
          .filter(Boolean)
      : [];

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
              Dual Degree
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
              Masters Progression
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
              Following 6 new dual degree programs have been initiated in
              2025-26
            </div>
            <Table
              columns={dualdegreeprogramsColumns}
              data={dualdegreeprogramsData}
              wrapperClassName="table-responsive"
              tableClassName="student_project_table"
            />

            <div className="subheading mt-4 mt-md-5">
              Dual Degree Programs Launched in 2025-26
            </div>
            <Table
              columns={dualdegreeprogramsLaunchedColumns}
              data={dualdegreeprogramsLaunchedData}
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
            <div className="subheading">
              Dual Degree Programs Launched in 2025-26
            </div>
            <div className="table-responsive">
              <div className="table-wrapper">
                <div className="table-responsive customtable">
                  <table className="student_project_table">
                    <thead>
                      <tr>
                        {MastersProgressionAgreementColumns.map((column) => (
                          <th key={column.key}>{column.title}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {MastersProgressionAgreementData.map((agreement, index) => (
                        <tr key={agreement.srNo}>
                          <td>{agreement.srNo}</td>
                          <td>{agreement.universityName}</td>
                          <td>{agreement.country}</td>
                          <td>{agreement.collaborationType}</td>
                          {index === 0 && (
                            <td rowSpan={MastersProgressionAgreementData.length}>
                              <ul className="streamListing" style={{ whiteSpace: "normal" }}>
                                {mastersProgressionStreams.map((stream) => (
                                  <li key={stream}>{stream}</li>
                                ))}
                              </ul>
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicPathways;
