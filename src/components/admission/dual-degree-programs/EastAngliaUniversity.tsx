import React from "react";
import Table from "@/components/ui/Table";
import {
  DualDegreemeColumns,
  DualDegreemeData,
} from "@/data/tableData";
import "@/app/css/admission.css";

const EastAngliaUniversity = () => {
  return (
    <div className="main_content">
      <div className="row">
        <div className="col-md-12">
          <div className="dual-degree-box siteee-step-card m-0">
            <div className="heading innerpageheading">
              Program with University of East Anglia
            </div>
            <p>
              This dual degree program will allow the students to obtain a Bachelor of Technology (Mechanical Engineering) from SIT, Pune and B Eng Hons. (Mechanical Engineering) from University of East Anglia. The new offerings will extend brilliant opportunities for ambitious Indian students to get a two-year work visa (Extension is subject to the policy changes of the UK Government), opening avenues for global career outcomes. The ease of mobility and accessibility is being facilitated by the two institutions in alignment with their commitment to providing quality education, skilling, and research pathways to help shape successful future outcomes for Indian students.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 mt-sm-5">
        <div className="heading innerpageheading">
          Cost Estimate for the Dual Degree Program
        </div>
        <Table
          columns={DualDegreemeColumns}
          data={DualDegreemeData}
          headerGroups={[
            {
              title: "Mechanical Engineering",
              colSpan: 2,
              rowSpan: 2,
              className: "text-center",
            },
          ]}
          wrapperClassName="table-responsive"
          tableClassName="student_project_table"
        />
      </div>
    </div>
  );
};

export default EastAngliaUniversity;
