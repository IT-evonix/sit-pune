import React from "react";
import Image from "next/image";
import PDFCard from "@/components/ui/PDFCard";
import Table from "@/components/ui/Table";
import {
  DualDegreecsColumns,
  DualDegreecsData,
  DualDegreeceColumns,
  DualDegreeceData,
} from "@/data/tableData";
import "@/app/css/admission.css";

const DeakinUniversity = () => {
  return (
    <div className="main_content">
      <div className="row">
        <div className="col-md-7">
          <div className="dual-degree-box siteee-step-card">
            <div className="heading innerpageheading">
              SIT -Deakin University Partnership
            </div>
            <p>
              This dual degree program will allow the students to obtain a
              Bachelor of Technology in Computer Science and Engineering/ Civil
              Engineering from SIT, Pune and a Bachelor of Data Science
              (Honours)/ Bachelor of Cyber Security/ Civil engineering (Bachelor
              of Engineering – Honours) from Deakin University. The new
              offerings will extend brilliant opportunities for ambitious Indian
              students to get a two-year work visa (Extension is subject to the
              policy changes of the Australian Government), opening avenues for
              global career outcomes. The ease of mobility and accessibility is
              being facilitated by the two institutions in alignment with their
              commitment to providing quality education, skilling, and research
              pathways to help shape successful future outcomes for Indian
              students.
            </p>
          </div>
          <div className="pdf_main">
            <PDFCard
              item={{
                id: 1,
                title: "Brochure",
                pdfUrl:
                  "/pdf/admission/dual-degree-programs/SIT_Dual_Degrees_deakin-university.pdf",
              }}
            />
          </div>
        </div>
        <div className="col-md-5">
          <div className="dual-degreeimg">
            <Image
              src="/images/innerpages/admission/dual-degree/deakin-university.webp"
              alt="Dual Degree Programs"
              width={800}
              height={500}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 mt-sm-5">
        <div className="heading innerpageheading">
          Cost Estimate for the Dual Degree Program
        </div>
        <Table
          columns={DualDegreecsColumns}
          data={DualDegreecsData}
          headerGroups={[
            {
              title: "Computer Science and Engineering",
              colSpan: 2,
              rowSpan: 2,
              className: "text-center",
            },
          ]}
          wrapperClassName="table-responsive"
          tableClassName="student_project_table"
        />
      </div>

      <div className="mt-4 mt-sm-4">
        <Table
          columns={DualDegreeceColumns}
          data={DualDegreeceData}
          headerGroups={[
            {
              title: "Civil Engineering",
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

export default DeakinUniversity;
