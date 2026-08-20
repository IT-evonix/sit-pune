export interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  photo: string;
  //   email: string;
  emails: string[];
  qualification: string;

  links?: {
    linkedin?: string;
    googleScholar?: string;
    scopus?: string;
    orcid?: string;
  };
}

export const facultyData: FacultyMember[] = [
  {
    id: 1,
    name: "Dr. Ketan Kotecha",
    designation:"Professor & Director, SIT Pune | Dean, Faculty of Engineering | Head, SCAAI",
    photo: "/images/innerpages/programe/aiml/faculty/Dr-Ketan-Kotecha.webp",
    emails: ["director@sitpune.edu.in"],
    qualification: "Ph.D (IIT Bombay)",
    links: {
      linkedin: "https://www.linkedin.com/in/ketankotecha/",
      googleScholar:
        "https://scholar.google.co.in/citations?user=oNiE0gMAAAAJ&hl=en",
      scopus:
        "https://www.scopus.com/pages/search/authors?firstName=ketan&lastName=Kotecha",
      orcid: "https://orcid.org/0000-0003-2653-3780",
    },
  },
  {
    id: 2,
    name: "Dr. Sumit Kumar",
    designation: "Professor and Head AI&ML",
    photo: "/images/innerpages/programe/aiml/faculty/Dr-Sumit-Kumar.webp",
    emails: ["headaiml@sitpune.edu.in, kumar.sumit@sitpune.edu.in"],
    qualification: "PhD(Jamia Millia Islamia), M. Tech., B. Tech.",
    links: {
      linkedin: "https://www.linkedin.com/in/sumit-kumar-09524b4a/",
      googleScholar:
        "https://scholar.google.co.in/citations?user=jyP8jvoAAAAJ&hl=en",
      scopus:
        "https://www.scopus.com/pages/search/authors?firstName=sumit&lastName=Kumar",
      orcid: "https://orcid.org/0000-0002-6332-2870",
    },
  },
  {
    id: 3,
    name: "Dr. Anupkumar M Bongale",
    designation:"Professor",
    photo: "/images/innerpages/programe/aiml/faculty/Dr-Anup-Kumar-Bongale.webp",
    emails: ["anupkumar.bongale@sitpune.edu.in"],
    qualification: "Ph.D., M. Tech., B.E.",
    links: {
      linkedin: "https://www.linkedin.com/in/dr-anupkumar-bongale-3002ba162/",
      googleScholar:"https://scholar.google.ca/citations?user=HKRqBfEAAAAJ&hl=en",
      scopus:"https://www.scopus.com/pages/search/authors?firstName=Anupkumar&lastName=Bongale",
      orcid: "https://orcid.org/0000-0002-5897-028",
    },
  },

  {
    id: 4,
    name: "Dr.Anjali Dalvi",
    designation:"Associate Professor",
    photo: "/images/innerpages/programe/aiml/faculty/Dr-Anjali-Dalvi.webp",
    emails: ["anjali.dalvi@sitpune.edu.in"],
    qualification: "Ph.D, M.E., B.E",
    links: {
      linkedin: "https://www.linkedin.com/in/anjali-dalvi-245a68330/",
      googleScholar:
        "https://scholar.google.co.in/citations?user=wHCYRVsAAAAJ&hl=en",
      orcid: "https://orcid.org/my-orcid?emailVerified=true&orcid=0009-0009-7268-8346",
    },
  },
  {
    id: 5,
    name: "Dr. Sangeeta Pant",
    designation: "Associate Professor",
    photo: "/images/innerpages/programe/aiml/faculty/Dr-Sangeeta-Pant.webp",
    emails: ["sangeeta.pant@sitpune.edu.in"],
    qualification: "Ph.D (Applied Mathematics)",
    links: {
      linkedin: "https://www.linkedin.com/in/sangeeta-pant-phd-22695613/",
      googleScholar:"https://scholar.google.com/citations?user=Po1YUX4AAAAJ&hl=en",
      orcid: "https://orcid.org/0000-0001-6531-1561",
    },
  },
  {
    id: 6,
    name: "Dr. Pooja Vinayak Kamat",
    designation:"Associate Professor",
    photo: "/images/innerpages/programe/aiml/faculty/Dr-Pooja-Vinayak-Kamat.webp",
    emails: ["pooja.kamat@sitpune.edu.in"],
    qualification: "Ph.D (AI & ML)., M.E., B.E",
    links: {
      linkedin: "https://www.linkedin.com/in/pooja-kamat-19603158/",
      googleScholar:
        "https://scholar.google.com/citations?user=gJoZDOUAAAAJ&hl=en",
      scopus:
        "scopus.com/pages/authors/56828931000",
      orcid: "https://orcid.org/0000-0002-7597-0197",
    },
  },
];
