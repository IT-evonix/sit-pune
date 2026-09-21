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
          "/images/innerpages/programe/aiml/faculty/Dr-Anup-Kumar-Bongale.webp",

        linkedin: "https://www.linkedin.com/in/dr-anupkumar-bongale-3002ba162/",
        googleScholar:
          "https://scholar.google.ca/citations?user=HKRqBfEAAAAJ&hl=en",
        scopus:
          "https://www.scopus.com/pages/search/authors?firstName=Anupkumar&lastName=Bongale",
        orcid: "https://orcid.org/0000-0002-5897-028",
      },

      {
        id: 4,
        name: "Dr.Anjali Dalvi",
        designation: "Associate Professor",
        qualification: "Ph.D, M.E., B.E",
        email: ["anjali.dalvi@sitpune.edu.in"],
        image: "/images/innerpages/programe/aiml/faculty/Dr-Anjali-Dalvi.webp",

        linkedin: "https://www.linkedin.com/in/anjali-dalvi-245a68330/",
        googleScholar:
          "https://scholar.google.co.in/citations?user=wHCYRVsAAAAJ&hl=en",
        orcid:
          "https://orcid.org/my-orcid?emailVerified=true&orcid=0009-0009-7268-8346",
      },
      {
        id: 5,
        name: "Dr. Sangeeta Pant",
        designation: "Associate Professor",
        qualification: "Ph.D (Applied Mathematics)",
        email: ["sangeeta.pant@sitpune.edu.in"],
        image: "/images/innerpages/programe/aiml/faculty/Dr-Sangeeta-Pant.webp",

        linkedin: "https://www.linkedin.com/in/sangeeta-pant-phd-22695613/",
        googleScholar:
          "https://scholar.google.com/citations?user=Po1YUX4AAAAJ&hl=en",
        orcid: "https://orcid.org/0000-0001-6531-1561",
      },
      {
        id: 6,
        name: "Dr. Pooja Vinayak Kamat",
        designation: "Associate Professor",
        qualification: "Ph.D (AI & ML)., M.E., B.E",
        email: ["pooja.kamat@sitpune.edu.in"],
        image: "/images/innerpages/programe/aiml/faculty/Dr-Pooja-Vinayak-Kamat.webp",

        linkedin: "https://www.linkedin.com/in/pooja-kamat-19603158/",
        googleScholar:
          "https://scholar.google.com/citations?user=gJoZDOUAAAAJ&hl=en",
        scopus: "scopus.com/pages/authors/56828931000",
        orcid: "https://orcid.org/0000-0002-7597-0197",
      },
      {
        id: 7,
        name: "Dr. Sucheta V Kolekar",
        designation: "Associate Professor",
        qualification: "Ph.D (Adaptive E-learning), M.Tech (IT), B.E (IT)",
        email: ["sucheta.kolekar@sitpune.edu.in"],
        image: "/images/innerpages/programe/aiml/faculty/Dr-Sucheta V-Kolekar.webp",

        linkedin: "https://www.linkedin.com/in/sucheta-kolekar-74920415/",
        googleScholar:
          "https://scholar.google.co.in/citations?user=okqYYHUAAAAJ&hl=en",
        orcid: "https://orcid.org/0000-0003-2642-6088",
      },

      {
        id: 8,
        name: "Dr. Sagar Dhanraj Pande",
        designation: "Associate Professor",
        qualification: "Ph.D (CSE). M.E(CSE), B.E. (CSE)",
        email: ["sagar.pande@sitpune.edu.in"],
        image: "/images/innerpages/programe/aiml/faculty/Dr-Sagar-Dhanraj-Pande.webp",

        linkedin: "https://www.linkedin.com/in/dr-sagar-dhanraj-pande-b8161392/",
        googleScholar:
          "https://scholar.google.com/citations?user=Uh4x-ZsAAAAJ&hl=en&oi=ao",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57213160540",
        orcid: "https://orcid.org/0000-0003-4506-6997",
      },

      {
        id: 9,
        name: "Dr.Tanveer Ahmed",
        designation: "Associate Professor",
        qualification: "Ph.D.",
        email: ["tanveer.ahmed@sitpune.edu.in"],
        image: "/images/innerpages/programe/aiml/faculty/Dr-Tanveer-Ahmed.webp",

        linkedin: "https://www.linkedin.com/in/tanveer-ahmed-2882a22b/",
        googleScholar:
          "https://scholar.google.com/citations?user=kTIGxhUAAAAJ&hl=en&oi=ao",
        orcid: "https://orcid.org/",
      },
      {
        id: 10,
        name: "Dr. Archana Y. Chaudhari",
        designation: "Senior Assistant Professor",
        qualification: "Ph.D, M.E., B.E",
        email: ["archana.chaudhari@sitpune.edu.in"],
        image: "/images/innerpages/programe/aiml/faculty/Dr-Archana-Y-Chaudhari.webp",

        linkedin: "https://www.linkedin.com/in/archanachaudhari/",
        googleScholar:
          "https://scholar.google.co.in/citations?user=WHkirXUAAAAJ&hl=en",
        scopus: "https://www.scopus.com/pages/authors/57210323135",
        orcid: "https://orcid.org/0000-0002-4423-8921",
      },
      // Add More AIML Faculty Here
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
