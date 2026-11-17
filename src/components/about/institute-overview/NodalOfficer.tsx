import { nodalOfficerColumns, nodalOfficerData } from "@/data/tableData";
import Table from "@/components/ui/Table";
import React from "react";

const NodalOfficer = () => {
  return (
    <div className="main_content">
      <div className="heading innerpageheading">Nodal Officer Details</div>
      <Table
        columns={nodalOfficerColumns}
        data={nodalOfficerData}
        wrapperClassName="table-responsive"
        tableClassName="student_project_table"
      />
    </div>
  );
};

export default NodalOfficer;
