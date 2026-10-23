import Table from "@/components/ui/Table";
import {
  LibraryDatabaseColumns,
  LibraryDatabaseData,
  LibraryNonPrintCollectionColumns,
  LibraryNonPrintCollectionData,
  LibraryPrintCollectionColumns,
  LibraryPrintCollectionData,
  LibrarySectionColumns,
  LibrarySectionData,
  LibraryTimingColumns,
  LibraryTimingData,
} from "@/data/tableData";
import "@/app/css/library.css";
import "@/app/css/admission.css";
import Image from "next/image";

const libraryRules = [
  "Staff members register for library membership; student membership is created using institute records.",
  "Carry your institute or library identification card when using library services.",
  "Follow the applicable borrowing period and return or renew items by their due date. The listed late fee is ₹5 per book per day.",
  "Return an item early if requested by the library, and follow SIU replacement procedures for lost resources.",
  "Keep bags and personal belongings at the designated luggage counter. The library is not responsible for valuables left there.",
  "Ask library staff before photocopying material from reference books or current periodicals.",
  "Handle books and other resources carefully. Do not mark, cut, deface, or damage library material.",
  "Leave misplaced books on the trolley or a nearby table for library staff to reshelve.",
  "Do not transfer borrowed resources to another person. Use the OPAC to recommend titles for purchase.",
  "Maintain silence, keep mobile devices silent, and avoid conversations in library areas.",
  "Do not bring food or beverages into the library, and do not remove newspaper clippings.",
  "Photography requires prior permission. Follow the library's entry, dress, and security procedures.",
  "The Library In-charge may suspend access in cases of misconduct or abuse of library staff.",
];

const AboutLibrary = () => (
  <div className="main_content libraryMainSec">
    <div className="program_overview_section">
      <div className="program_overview_left">
        <div className="heading innerpageheading">About Library</div>
        <p>
          Library of Symbiosis Institute of Technology (SIT) came into existence
          with the establishment of SIT in 2008. The library occupies a place of
          pride in SIT and plays a very vital role in provision of learning
          resources for academics and research. It is the most lively place on
          the campus providing a comfortable and friendly environment that
          enables learning and advancement of knowledge, and promotes discovery
          and scholarship. Library is well equipped with latest information
          technology tools for information collection, processing and retrieval.
          The collection of books, journals, e-journals, reports and other
          reading resources are adequate for not only domain specific resources
          but for also general resources. Books and other resources are
          regularly augmented and online access to all premier journals as well
          as full-text & bibliographic databases available in the field of
          science, technology and allied subjects are provided to faculty, staff
          and students. The library uses KOHA, the web centric library
          management software. It offers a range of services including reference
          and consultation, membership, circulation, document delivery, resource
          sharing, information alert, bibliographic and digital library services
          to the library members. The Library has a team of well qualified
          personnel to cater to the technological and scientific needs of the
          institute, supported by an active collection of about 15,000+
          documents maintained in a professional way for quick retrieval.
        </p>
      </div>
      <div className="program_overview_right">
        <Image
          src="/images/innerpages/admission/m-tech-addmission/Programme-Overview.webp"
          alt="Dr. S.B. Mujumdar"
          width={900}
          height={1080}
          className="img-fluid leader-image"
          priority
        />
      </div>
    </div>

    <section className="library-content-section">
      <div className="subheading">Collection</div>
      <div className="library-table-grid">
        <div className="library-table-card">
          <div className="subheading18 mb-2">Print Collection</div>
          <Table
            columns={LibraryPrintCollectionColumns}
            data={LibraryPrintCollectionData}
            wrapperClassName="table-responsive"
            tableClassName="student_project_table"
          />
        </div>
      </div>
    </section>

    <section className="library-content-section">
      <div className="subheading">Non-Print Collection</div>
      <Table
        columns={LibraryNonPrintCollectionColumns}
        data={LibraryNonPrintCollectionData}
        wrapperClassName="table-responsive"
        tableClassName="student_project_table"
      />
    </section>

    <section className="library-content-section">
      <div className="subheading">Databases</div>
      <Table
        columns={LibraryDatabaseColumns}
        data={LibraryDatabaseData}
        wrapperClassName="table-responsive"
        tableClassName="student_project_table"
      />
    </section>

    <section className="library-content-section">
      <div className="subheading">Library Sections</div>
      <Table
        columns={LibrarySectionColumns}
        data={LibrarySectionData}
        wrapperClassName="table-responsive"
        tableClassName="student_project_table"
      />
    </section>

    <section className="library-content-section">
      <div className="subheading">Library Timing</div>
      <Table
        columns={LibraryTimingColumns}
        data={LibraryTimingData}
        wrapperClassName="table-responsive"
        tableClassName="student_project_table"
      />
    </section>

    <section className="library-content-section library-rules-card">
      <div className="siteee-step-card">
        <div className="subheading18 redheading">
          General Rules for the Members of the Library
        </div>
        <p>
          The members (Users) of Library are expected to observe the following
          rules. It shall help the Library in proper and efficient functioning
          and also it shall help the other members (users) of the Library.
        </p>
        <ul className="siteee-sublist"></ul>
        <ul className="library-rule-list">
          {libraryRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </div>
    </section>
  </div>
);

export default AboutLibrary;
