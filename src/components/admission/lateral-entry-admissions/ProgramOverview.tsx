
import React from "react";
import Table from "@/components/ui/Table";
import { AdmissionprocessSchedule, AdmissionprocessScheDate, AllotedSeatsBranch, AllotedSeatsBranchData } from "@/data/tableData";
const ProgramOverview = () => {
  return (
    <div className="main_content programe_overview_main">
      <div className="heading innerpageheading">Program Overview</div>
      <p>The institute admits students directly in the second year through lateral entry. The intake for the same is 10% of total intake of the branch as given below.</p>
      <div className="subheading mt-4 mt-sm-5">The admission process for the academic year 2026–2027 has commenced</div>
      <Table
        columns={AdmissionprocessSchedule}
        data={AdmissionprocessScheDate}
        wrapperClassName="table-responsive"
        tableClassName="student_project_table"
      />

      <div className="subheading mt-4 mt-sm-5">
        Alloted seats for Lateral entry 2025-26 batch is 10% of the intake of 2025-26 batch
      </div>
      <Table
        columns={AllotedSeatsBranch}
        data={AllotedSeatsBranchData}
        wrapperClassName="table-responsive"
        tableClassName="student_project_table"
      />

    </div>
  );
};

export default ProgramOverview;
