import Table from "@/components/ui/Table";
import {
  LibraryCommitteeColumns,
  LibraryCommitteeData,
  LibraryStaffColumns,
  LibraryStaffData,
} from "@/data/tableData";
import "@/app/css/library.css";

const LibraryCommittee = () => (
  <div className="main_content libraryMainSec">
    <section className="library-section-heading">
      <div className="heading innerpageheading">Library Committee & Staff</div>    </section>
    <section className="library-content-section mt-0">
      <div className="library-section-heading library-section-heading-compact">
        <div className="subheading18 mb-2">The Library Advisory Committee of Symbiosis Institute of Technology has been reconstituted as under
</div>
      </div>
      <Table
        columns={LibraryCommitteeColumns}
        data={LibraryCommitteeData}
        wrapperClassName="table-responsive"
        tableClassName="student_project_table"
      />
    </section>
    <section className="library-content-section">
      <div className="library-section-heading library-section-heading-compact">
        <div className="subheading18 mb-2">Library Staff</div>
      </div>
      <Table
        columns={LibraryStaffColumns}
        data={LibraryStaffData}
        wrapperClassName="table-responsive"
        tableClassName="student_project_table"
      />
    </section>
  </div>
);

export default LibraryCommittee;
