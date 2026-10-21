import React from "react";
import Table from "@/components/ui/Table";
import {
  IMPSchedule,
  IMPScheduleDate,
} from "@/data/tableData";
const IMPforStudents = () => {
  return (
    <div className="main_content programe_overview_main">
      <div className="heading innerpageheading">
        Counselling/Admission dates for lateral admission
      </div>

      <Table
        columns={IMPSchedule}
        data={IMPScheduleDate}
        wrapperClassName="table-responsive"
        tableClassName="student_project_table"
      />
    </div>
  );
};

export default IMPforStudents;
