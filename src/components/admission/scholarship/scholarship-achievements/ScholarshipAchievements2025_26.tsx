import React from "react";
import "@/app/css/admission.css";
import Table from "@/components/ui/Table";
import {
  ScholarshipAchievements2025_26Columns,
  ScholarshipAchievements2025_26Data,
} from "@/data/tableData";

const ScholarshipAchievements2025_26 = () => {
  return (
    <div className="main_content">
      <div className="heading innerpageheading">Scholarship Achievements 2025-26</div>
      <div className="div">
        <Table
          columns={ScholarshipAchievements2025_26Columns}
          data={ScholarshipAchievements2025_26Data}
          wrapperClassName="table-responsive"
          tableClassName="student_project_table"
        />
      </div>
    </div>
  );
};

export default ScholarshipAchievements2025_26;
