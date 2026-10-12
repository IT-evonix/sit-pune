import React from "react";
import "@/app/css/admission.css";
import Table from "@/components/ui/Table";
import {
  ScholarshipAchievements2024_25Columns,
  ScholarshipAchievements2024_25Data,
} from "@/data/tableData";

const ScholarshipAchievements2025_26 = () => {
  return (
    <div className="main_content">
      <div className="heading innerpageheading">Scholarship Achievements 2024-25</div>
      <div className="div">
        <Table
          columns={ScholarshipAchievements2024_25Columns}
          data={ScholarshipAchievements2024_25Data}
          wrapperClassName="table-responsive"
          tableClassName="student_project_table"
        />
      </div>
    </div>
  );
};

export default ScholarshipAchievements2025_26;
