import { ArrowUpRight, Globe2 } from "lucide-react";
import "@/app/css/library.css";

const usefulLinks = [
  {
    title: "Inflibnet",
    href: "https://www.inflibnet.ac.in/",
    description:
      "To establish INFLIBNET: Information and Library Network a computer communication network for linking libraries and information centres in universities, deemed to be universities, colleges, UGC information centres, institutions of national importance and R & D institutions, etc. avoiding duplication of efforts. Build and strengthen ICT infrastructure in educational institutions with value-added services.",
  },
  {
    title: "ShodhGangotri",
    href: "https://shodhgangotri.inflibnet.ac.in/",
    description:
      "Under the initiative called “ShodhGangotri”, research scholars / research supervisors in universities are requested to deposit electronic version of approved synopsis submitted by research scholars to the universities for registering themselves for the Ph.D programme. The repository on one hand, would reveal the trends and directions of research being conducted in Indian universities, on the other hand it would avoid duplication of research. Synopsis in “ShodhGangotri” would later be mapped to full-text theses in 'ShodhGanga'. As such, once the full-text thesis is submitted for a synopsis, a link to the full-text theses would be provided from ShodhGangotri to 'ShodhGanga'",
  },
  {
    title: "Shodhganga",
    href: "https://shodhganga.inflibnet.ac.in/",
    description:
      "'Shodhganga' is the name coined to denote digital repository of Indian Electronic Theses and Dissertations set-up by the INFLIBNET Centre. The Shodhganga@INFLIBNET is set-up using an open source digital repository software called DSpace developed by MIT (Massachusetts Institute of Technology) in partnership between Hewlett- Packard (HP). The DSpace uses internationally recognized protocols and interoperability standards. Shodhganga provides a platform for research scholars to deposit their Ph.D. theses and make it available to the entire scholarly community in open access. The repository has the ability to capture, index, store, disseminate and preserve ETDs (Electronic Theses and Dissertations) submitted by the researchers.",
  },
  {
    title: "The South Asia Archive",
    href: "http://www.southasiaarchive.com/unauthenticated",
    description:
      "The South Asia Archive provides an extensive resource for students and scholars across the humanities and social sciences.",
  },
  {
    title: "SWAYAM",
    href: "https://swayam.gov.in/",
    description:
      "SWAYAM is a program initiated by Government of India and designed to achieve the three cardinal principles of Education Policy viz., access, equity and quality. This is done through an indigenous developed IT platform that facilitates hosting of all the courses, taught in classrooms from 9th class till post-graduation to be accessed by anyone, anywhere at any time.",
  },
  {
    title: "Sugamya Pustakalaya",
    href: "https://vikaspedia.in/education/interactive-resources/sugamya-pustakalaya",
    description:
      "Sugamya Pustakalaya is a collaborative effort of several organizations to end the book famine faced by people with print disabilities. DAISY Forum of India is a consortium of Not for Profit organizations from India who are involved in production and distribution of books and reading material in accessible formats for persons who cannot read normal print due to visual, cognitive or physical disabilities.",
  },
  {
    title: "World Intellectual Property (IP) Organization (WIPO)",
    subtitle: "Patents and Standards:",
    href: "https://www.wipo.int/reference/en/",
    description:
      "Intellectual Property Resource Reference Centre provides access to various intellectual property data collections currently hosted by the World Intellectual Property Organization. Access to the Digital Library is available to the general public free-of-charge.",
  },
  {
    title: "Free Patents Online",
    href: "https://www.freepatentsonline.com/",
    description:
      "Free Patents Online is a search engine, which helps in searching patents.",
  },
  {
    title: "Indian Patent",
    href: "https://www.indianpatents.org.in/",
    description:
      "Indian Patent Database provides free online access to Ekaswa A & Ekaswa B databases. Gives information regarding patent applications filed in India as published in the issues of the Gazette of India (Part III, Section 2) from January 1995 onwards.",
  },
  {
    title: "National Technical Information Service Reports [NTISR]",
    href: "https://www.ntis.gov/",
    description:
      "National Technical Information Service Reports [NTISR] are available online with effect from 1990 to till date. Search facility is available to find out the reports in your subject areas of interest. Downloading of any document in electronic format is possible.",
  },
  {
    title: "OAJ Directory of Open Access Journals",
    subtitle: "Open Access Directory",
    href: "https://doaj.org/",
    description:
      "DOAJ is a community-curated online directory that indexes and provides access to high quality, open access, peer-reviewed journals. DOAJ is independent. All funding is via donations, 40% of which comes from sponsors and 60% from members and publisher members. All DOAJ services are free of charge including being indexed in DOAJ. All data is freely available. DOAJ operates an education and outreach program across the globe, focusing on improving the quality of applications submitted.",
  },
  {
    title: "DOAB Directory of Open Access Books",
    href: "https://www.doabooks.org/",
    description:
      "The primary aim of DOAB is to increase discoverability of Open Access books. Academic publishers are invited to provide metadata of their Open Access books to DOAB. Metadata will be harvestable in order to maximize dissemination, visibility and impact. Aggregators can integrate the records in their commercial services and libraries can integrate the directory into their online catalogues, helping scholars and students to discover the books.",
  },
  {
    title: "Open DOAR Directory of Open Access Repositories",
    href: "https://v2.sherpa.ac.uk/opendoar/",
    description:
      "Open DOAR has opted to collect and provide information solely on sites that wholly embrace the concept of open access to full text resources that are of use to academic researchers. Thus sites where any form of access control prevents immediate access are not included: likewise sites that consist of metadata records only are also declined.",
  },
  {
    title: "Archive.org",
    subtitle: "Download free eBooks and textbooks",
    href: "https://archive.org/",
    description:
      "Internet Archive is a non-profit library of millions of free books, movies, software, music, websites, and more.",
  },
];

const UsefulLinks = () => (
  <div className="main_content libraryMainSec">
    <section className="library-section-heading">
      <div className="heading innerpageheading">Useful Links</div>
      <p>
        A directory of open learning platforms, research repositories, and
        scholarly information resources.
      </p>
    </section>
    <div className="library-card-grid library-useful-links-grid">
      {usefulLinks.map((link) => (
        <a
          className="library-link-card"
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          key={link.title}
        >
          <span className="library-card-icon">
            <Globe2 size={30} aria-hidden="true" stroke-width="1.5"/>
          </span>
          <span className="library-link-card-copy">
            <span className="subheading18 mb-1">{link.title}</span>
            <span className="subheading18">{link.subtitle}</span>
            <p className="usefulllink_para">{link.description}</p>
          </span>
          <ArrowUpRight
            className="library-link-arrow"
            size={20}
            aria-hidden="true"
          />
        </a>
      ))}
    </div>
  </div>
);

export default UsefulLinks;
