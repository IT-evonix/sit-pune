import InnerpageBanner from "@/components/InnerpageBanner";
import TabbingSidebar from "@/components/TabbingSidebar";
import AboutLibrary from "@/components/academics/AboutLibrary";
import AccesstoEResources from "@/components/academics/AccesstoEResources";
import WebOPAC from "@/components/academics/WebOPAC";
import LibraryMembership from "@/components/academics/LibraryMembership";
import LibraryCommittee from "@/components/academics/LibraryCommittee";
import LibraryActivity from "@/components/academics/LibraryActivity";
import LibraryBook from "@/components/academics/LibraryBook";
import ContactUs from "@/components/academics/ContactUs";
import UsefulLinks from "@/components/academics/UsefulLinks";

const LibraryPage = () => {
const tabs = [
    {
      id: "about-library",
      title: "About Library",
      content: <AboutLibrary/>,
    },
    {
      id: "accesstoe-resources",
      title: "Access to E-Resources",
      content: <AccesstoEResources/>,
    },
    {
      id: "webopac",
      title: "Web OPAC",
      content:<WebOPAC/>,
    },
    {
      id: "librarymembership",
      title: "Library Membership",
      content:<LibraryMembership/>,
    },
    {
      id: "librarystaff",
      title: "Library Committee & Library Staff",
      content:<LibraryCommittee/>,
    },
    {
      id: "libraryactivity",
      title: "Library Activity",
      content:<LibraryActivity/>,
    },
    {
      id: "librarybook",
      title: "Library Book Purchase",
      content:<LibraryBook/>,
    },
    {
      id: "siulibraryportal",
      title: "SIU Library Portal",
      url:"https://elibrary.siu.edu.in/user/login",
      Target:"_blank"
    },
    {
      id: "librarymanual",
      title: "Library Manual",
      url:"/pdf/academics/library/Library-Manual-2024.pdf",
      Target:"_blank"
    },
    {
      id: "usefulllinks",
      title: "Useful Links",
      content:<UsefulLinks/>,
    },
    {
      id: "contactus",
      title: "Contact Us",
      content:<ContactUs/>,
    },
  ];

  return (
    <div className="mainpage-wrapper">
      <InnerpageBanner
        title={`Library`}
        breadcrumbs={[
          // { label: "Programmes", href: "/programmes" },
          { label: "Academics" },

          { label: "Library" },
        ]}
      />

      <div className="container-fluid py-5">
        <TabbingSidebar heading="Library" tabs={tabs} />
      </div>
    </div>
  );
};

export default LibraryPage;
