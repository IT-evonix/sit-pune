import React from "react";
import "@/app/css/admission.css";
import Table from "@/components/ui/Table";
import {
  ScholarshipAchievements2023_24Columns,
  ScholarshipAchievements2023_24Data,
} from "@/data/tableData";

const ScholarshipAchievements2025_26 = () => {
  return (
    <div className="main_content">
      <div className="heading innerpageheading">Scholarship Achievements 2023-24</div>
      <div className="div">
        <Table
          columns={ScholarshipAchievements2023_24Columns}
          data={ScholarshipAchievements2023_24Data}
          wrapperClassName="table-responsive"
          tableClassName="student_project_table"
        />
      </div>
    </div>
  );
};

export default ScholarshipAchievements2025_26;
