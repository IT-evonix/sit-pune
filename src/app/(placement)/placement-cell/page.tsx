import InnerpageBanner from "@/components/InnerpageBanner";
import Table from "@/components/ui/Table";
import {
  PlacementCommitteeColumns,
  PlacementCommitteeData,
} from "@/data/tableData";
import React from "react";

const page = () => {
  return (
    <div className="placementmain">
      <InnerpageBanner
        title={`Placement Cell`}
        breadcrumbs={[
          // { label: "Programmes", href: "/programmes" },
          { label: "Placements" },

          { label: "Placement Cell" },
        ]}
      />
      <div className="placement_cell_main">
        <div className="Innerpage_main">
          <div className="container">
            <div className="heading innerpageheading text-center">
              Placement Committee
            </div>
            <Table
              columns={PlacementCommitteeColumns}
              data={PlacementCommitteeData}
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
