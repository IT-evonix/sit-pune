import React from "react";
import "@/app/css/admission.css";
import Table from "@/components/ui/Table";
import {
  ScholarshipAchievements2020_21Columns,
  ScholarshipAchievements2020_21Data,
} from "@/data/tableData";

const ScholarshipAchievements2025_26 = () => {
  return (
    <div className="main_content">
      <div className="heading innerpageheading">Scholarship Achievements 2020-21</div>
      <div className="div">
        <Table
          columns={ScholarshipAchievements2020_21Columns}
          data={ScholarshipAchievements2020_21Data}
          wrapperClassName="table-responsive"
          tableClassName="student_project_table"
        />
      </div>
    </div>
  );
};

export default ScholarshipAchievements2025_26;
