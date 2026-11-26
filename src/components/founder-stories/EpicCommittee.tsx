import React from "react";
import { EpicCommitteeColumns, EpicCommitteeData } from "@/data/tableData";
import Table from "@/components/ui/Table";
import PDFViewer from "../PdfPreview";

const page = () => {
  return (
    <div className="">
      <div className="main_content">
        <div className="aicte_main">
          <div className="heading innerpageheading">Committee Members</div>
          <Table
            columns={EpicCommitteeColumns}
            data={EpicCommitteeData}
            wrapperClassName="table-responsive"
            tableClassName="student_project_table"
          />
          <div className="mt-4 mt-sm-5">
            <PDFViewer
              src="/pdf/placement/placement_brochure.pdf"
              title="Dummy PDF"
              height={750}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
