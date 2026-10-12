import React from "react";
import "@/app/css/admission.css";
import Table from "@/components/ui/Table";
import {
  ScholarshipAchievements2021_22Columns,
  ScholarshipAchievements2021_22Data,
} from "@/data/tableData";

const ScholarshipAchievements2025_26 = () => {
  return (
    <div className="main_content">
      <div className="heading innerpageheading">Scholarship Achievements 2021-22</div>
      <div className="div">
        <Table
          columns={ScholarshipAchievements2021_22Columns}
          data={ScholarshipAchievements2021_22Data}
          wrapperClassName="table-responsive"
          tableClassName="student_project_table"
        />
      </div>
    </div>
  );
};

export default ScholarshipAchievements2025_26;
