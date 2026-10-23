import { ArrowUpRight, } from "lucide-react";
import "@/app/css/library.css";
import Image from "next/image";

// const opacFeatures = [
//   { title: "Search the catalogue", text: "Find books and other library material by title, author, or subject." },
//   { title: "Review your account", text: "Check current loans, circulation history, and due dates." },
//   { title: "Build a reading list", text: "Save titles for later and recommend new books to the library." },
// ];

const WebOPAC = () => (
  <div className="main_content libraryMainSec">
    <section className="library-section-heading">
      <div className="heading innerpageheading">Web OPAC</div>
      <p>
Web OPAC is an Online Public Access Catalogue which allows library users avail the services of the library using Internet. Every library member gets the access of Web OPAC where he/she can check his/her circulation history, recommend new book titles to the library, create own reading list of favourite books etc.

      </p>
    </section>
    <div className="library-opac-callout">
      {/* <span className="library-opac-symbol"><BookOpenCheck size={30} aria-hidden="true" /></span> */}
      <div className="library-opac-copy">
        <div className="subheading mb-2">KOHA · Version 22.05</div>
        <p>The library utilizes ILMS KOHA-22.05 Version, a comprehensive, integrated library management system, to efficiently manage operations, including cataloging, circulation, and resource management. A Web OPAC is available for students and faculty to check the availability of resources. Additionally, they can log in to their personal accounts to view the borrowed books and CDs, as well as their due dates. The OPAC offers students the convenience of making online reservations for books to secure their desired titles with ease.

</p>
      </div>
      <a className="library-button-link" href="http://symbiosis-koha.informindia.co.in/" target="_blank" rel="noopener noreferrer">
        Web OPAC<ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </div>

        <div className="webopac_image mt-4 mt-sm-5">
          <Image
            src="/images/innerpages/academics/sssit.webp"
            alt="Dr. S.B. Mujumdar"
            width={1000}
            height={479}
            className="img-fluid "
            priority
          />
        </div>

    {/* <div className="library-card-grid">
      {opacFeatures.map((feature, index) => {
        const Icon = [Search, UserRound, BookOpenCheck][index];
        return (
          <article className="library-info-card library-opac-feature" key={feature.title}>
            <span className="library-card-icon"><Icon size={21} aria-hidden="true" /></span>
            <div className="subheading18">{feature.title}</div>
            <p>{feature.text}</p>
          </article>
        );
      })}
    </div> */}
  </div>
);

export default WebOPAC;
