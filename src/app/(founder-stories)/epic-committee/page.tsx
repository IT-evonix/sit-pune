import React from "react";
import InnerpageBanner from "@/components/InnerpageBanner";
import {EpicCommitteeColumns,EpicCommitteeData,} from "@/data/tableData";
import Table from "@/components/ui/Table";

const page = () => {
  return (
    <div className="">
      <InnerpageBanner
        title={`Epic Committee`}
        breadcrumbs={[
          // { label: "Programmes", href: "/programmes" },
          { label: "Founder Stories" },

          { label: "Epic Committee" },
        ]}
      />
      <div className="Innerpage_main">
        <div className="aicte_main">
          <div className="container">
            <div className="heading innerpageheading text-center">Committee Members</div>
            <Table
              columns={EpicCommitteeColumns}
              data={EpicCommitteeData}
              wrapperClassName="table-responsive"
              tableClassName="student_project_table"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
