export interface Faculty {
  id: number;
  name: string;
  designation: string;
  qualification: string;
  email: string[];
  image: string;

  // Professional Profiles
  linkedin?: string;
  googleScholar?: string;
  scopus?: string;
  orcid?: string;
}

export type FacultyCategory =
  | "undergraduate"
  | "postgraduate"
  | "dualDegree"
  | "doctoralAdmissions";

export type Department =
  // Undergraduate
  | "aiml"
  | "civil"
  | "computer"
  | "electronics"
  | "mechanical"
  | "robotics"

  // Postgraduate
  | "mba"
  | "mca"
  | "mtech"

  // Dual Degree
  | "btechMtech"

  // Doctoral
  | "phd";

export const facultyData: Record<
  FacultyCategory,
  Partial<Record<Department, Faculty[]>>
> = {
  // =========================
  // UNDERGRADUATE
  // =========================
  undergraduate: {
    aiml: [
      {
        id: 1,
        name: "Dr. Ketan Kotecha",
        designation:
          "Professor & Director SIT  Pune,Dean, Faculty of Engineering, Head, Symbiosis Centre for Applied Artificial Intelligence",
        qualification: "Ph.D (IIT Bombay)",
        email: ["director@sitpune.edu.in"],
        image: "/images/innerpages/programe/aiml/faculty/Dr-Ketan-Kotecha.webp",

        linkedin: "https://www.linkedin.com/in/ketankotecha/",
        googleScholar:
          "https://scholar.google.co.in/citations?user=oNiE0gMAAAAJ&hl=en",
        scopus:
          "https://www.scopus.com/pages/search/authors?firstName=ketan&lastName=Kotecha",
        orcid: "https://orcid.org/0000-0003-2653-3780",
      },
      {
        id: 2,
        name: "Dr. Sumit Kumar",
        designation: "Professor and Head AI&ML",
        qualification: "PhD(Jamia Millia Islamia), M. Tech., B. Tech.",
        email: ["headaiml@sitpune.edu.in", "kumar.sumit@sitpune.edu.in"],
        image: "/images/innerpages/programe/aiml/faculty/Dr-Sumit-Kumar.webp",

        linkedin: "https://www.linkedin.com/in/sumit-kumar-09524b4a/",
        googleScholar:
          "https://scholar.google.co.in/citations?user=jyP8jvoAAAAJ&hl=en",
        scopus:
          "https://www.scopus.com/pages/search/authors?firstName=sumit&lastName=Kumar",
        orcid: "https://orcid.org/0000-0002-6332-2870",
      },
      {
        id: 3,
        name: "Dr. Anupkumar M Bongale",
        designation: "Professor",
        qualification: "Ph.D., M. Tech., B.E.",
        email: ["anupkumar.bongale@sitpune.edu.in"],
        image:
          "/images/innerpages/programe/aiml/faculty/B.tech.webp",

        linkedin: "https://www.linkedin.com/in/dr-anupkumar-bongale-3002ba162/",
        googleScholar:
          "https://scholar.google.ca/citations?user=HKRqBfEAAAAJ&hl=en",
        scopus:
          "https://www.scopus.com/pages/search/authors?firstName=Anupkumar&lastName=Bongale",
        orcid: "https://orcid.org/0000-0002-5897-028",
      },

      // Add more AIML faculty here
    ],

    civil: [
      {
        id: 101,
        name: "Dr. Civil Faculty",
        designation: "Professor & Head, Department of Civil Engineering",
        qualification: "Ph.D",
        email: ["civil@sitpune.edu.in"],
        image: "/images/innerpages/programe/civil/faculty/faculty-1.webp",
      },

      // Add more Civil faculty here
    ],

    computer: [
      // Add Computer faculty here
    ],

    electronics: [
      // Add Electronics & Telecommunication faculty here
    ],

    mechanical: [
      // Add Mechanical faculty here
    ],

    robotics: [
      // Add Robotics faculty here
    ],
  },

  // =========================
  // POSTGRADUATE
  // =========================
  postgraduate: {
    mba: [
      // Add MBA faculty here
    ],

    mca: [
      // Add MCA faculty here
    ],

    mtech: [
      // Add M.Tech faculty here
    ],
  },

  // =========================
  // DUAL DEGREE PROGRAMMES
  // =========================
  dualDegree: {
    btechMtech: [
      // Add B.Tech + M.Tech faculty here
    ],
  },

  // =========================
  // DOCTORAL ADMISSIONS
  // =========================
  doctoralAdmissions: {
    phd: [
      // Add PhD faculty here
    ],
  },
};
