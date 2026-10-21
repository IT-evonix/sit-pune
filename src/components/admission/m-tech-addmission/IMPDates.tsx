import React from "react";
import Table from "@/components/ui/Table";
import {
  MtechGeoinformaticsIMPSchedule,
  MtechGeoinformaticsIMPScheduleDate,
  MtechIMPSchedule,
  MtechIMPScheduleDate,
} from "@/data/tableData";
const IMPDates = () => {
  return (
    <div className="main_content programe_overview_main">
      <div className="">
        <Table
          columns={MtechIMPSchedule}
          data={MtechIMPScheduleDate}
          wrapperClassName="table-responsive"
          tableClassName="student_project_table"
        />
      </div>
      <div className="mt-4 mt-sm-5">
        <div className="subheading18 mb-2">
          M.Tech Geoinformatics
        </div>
        <Table
          columns={MtechGeoinformaticsIMPSchedule}
          data={MtechGeoinformaticsIMPScheduleDate}
          wrapperClassName="table-responsive"
          tableClassName="student_project_table"
        />
      </div>
    </div>
  );
};

export default IMPDates;
