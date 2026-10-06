"use client";

import { useState } from "react";
import "@/app/css/admission.css";

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
              Coming Soon...
            </div>

            
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
              Coming Soon...
            </div>
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
              Coming Soon...
            </div>
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
              Coming Soon...
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcedureug;
