import { ArrowUpRight, BookMarked, Globe2 } from "lucide-react";
import "@/app/css/library.css";

const resourceLinks = [
  { title: "SIU Digital Library Portal", href: "https://elibrary.siu.edu.in/home", },
  { title: "National Digital Library of India", href: "https://ndl.iitkgp.ac.in/", },
  { title: "DELNET", href: "http://delnet.in/",},
  { title: "NPTEL", href: "https://nptel.ac.in/", },
  { title: "User guide for the digital library", href: "https://drive.google.com/file/d/1kC_2c61Fj2SL9A71I4Ui5XV3L0E6WDeK/view?usp=sharing", },
  { title: "SIT subscribed e-journals and e-books", href: "https://docs.google.com/spreadsheets/d/1UMwYO3B4qAy290Vg4Vl8Fq2c7ehAYRow/edit?rtpof=true", },
  { title: "ProQuest databases", href: "https://www.proquest.com/", },
  { title: "Print journals, magazines and newspapers", href: "https://docs.google.com/spreadsheets/d/1Jk0uERu3VAGIipyvC5cA1Z9_bQwllbTo/edit?rtpof=true", },
  { title: "Index of SIT subscribed print journals", href: "https://drive.google.com/drive/folders/1Nf72kwY4Bv2jXY_omti-e_YuhZTvLS7l?usp=drive_link", },
  { title: "Previous year question papers", href: "https://drive.google.com/drive/folders/1uMPTPPBvz2C_pzOZhHPh6aLtfwjeCHnA?usp=drive_link", },
  { title: "Newspaper clippings", href: "https://drive.google.com/drive/folders/1URfVBU3uPVq6yLV5iz3anLfvVtGXY441?usp=drive_link", },
];

const AccesstoEResources = () => (
  <div className="main_content libraryMainSec">
    <section className="library-section-heading">
      <div className="heading innerpageheading">Access to E-Resources</div>
      <p>
Library members can get the access of all e-resources on library portal. To access these e-resources you should have the login credentials for it. Every year newly admitted student’s registration is done according to their course duration by the librarian. Once the registration is completed members get the access of all e-resources. Link to Access All Subscribed E-resources:      </p>
    </section>
    <div className="library-resource-banner">
      {/* <span className="library-card-icon"><Globe2 size={22} aria-hidden="true" /></span> */}
      <div>
        <div className="subheading">Remote Access, Anytime</div>
        <p>The library provides round-the-clock, 24/7 access to a wide range of electronic resources via secure remote access. This feature allows you to utilize electronic databases, e-books, scholarly articles, and other digital materials anytime, from anywhere, ensuring flexibility in users learning journey.

</p>
      </div>
      <a className="library-button-link" href="https://elibrary.siu.edu.in/home" target="_blank" rel="noopener noreferrer">
        Digital Library<ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </div>
    <div className="library-card-grid library-resource-grid mt-4 mt-sm-5">
      {resourceLinks.map((resource) => (
        <a className="library-link-card" href={resource.href} target="_blank" rel="noopener noreferrer" key={resource.title}>
          <span className="library-card-icon"><BookMarked size={30} aria-hidden="true" stroke-width="1.5"/></span>
          <span className="library-link-card-copy"><span className="subheading18">{resource.title}</span></span>
          <ArrowUpRight className="library-link-arrow" size={20} aria-hidden="true" />
        </a>
      ))}
    </div>
  </div>
);

export default AccesstoEResources;
