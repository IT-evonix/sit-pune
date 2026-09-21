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

export const facultyRobot: FacultyMember[] = [
  {
    id: 1,
    name: "Dr Arunkumar Bongale",
    designation:" ",
    photo: "/images/innerpages/programe/robot-automation/faculty/arunkumar-bongale.webp",
    emails: [""],
    qualification: " ",
  },
 {
    id: 2,
    name: "Dr. Mrunal Kanti Mishra",
    designation: "Assistant Professor",
    photo: "/images/innerpages/programe/robot-automation/faculty/mrunal-mishra.webp",
    emails: ["mrunal.mishra@sitpune.edu.in"],
    qualification: "PhD (IIT Kharagpur) ",
    links: {
      linkedin: "https://www.linkedin.com/in/dr-mrunal-kanti-mishra-58185a143/",
      googleScholar:
        "https://scholar.google.com/citations?user=ZPD67jcAAAAJ&hl=en&authuser=1 ",
      scopus:
        "https://www.scopus.com/authid/detail.uri?authorId=57199420924",
      orcid: "https://orcid.org/0000-0002-6916-114X",
    },
  },
  {
    id: 3,
    name: "Satish Kumar",
    designation:" ",
    photo: "/images/innerpages/programe/robot-automation/faculty/satish-kumar.webp",
    emails: [""],
    qualification: " ",
  },
    {
    id: 4,
    name: "Sameer",
    designation:" ",
    photo: "/images/innerpages/programe/robot-automation/faculty/sameer.webp",
    emails: [""],
    qualification: " ",
  },
    {
    id: 5,
    name: "Priya Jadhav",
    designation:" ",
    photo: "/images/innerpages/programe/robot-automation/faculty/priya-jadhav.webp",
    emails: [""],
    qualification: " ",
  },
    {
    id: 6,
    name: "Dr. Praween Kumar Nishad",
    designation:"Dr. Praween Kumar Nishad ",
    photo: "/images/innerpages/programe/robot-automation/faculty/Praween-nishad.webp",
    emails: ["Praween.nishad@sitpune.edu.in"],
    qualification: " Ph.D ",
    links: {
  linkedin: "https://www.linkedin.com/in/praween-kumar-nishad-phd-052a4658/",
  googleScholar:
    "https://scholar.google.com/citations?user=51d25yUAAAAJ&hl=en",
  scopus:
    "https://www.scopus.com/authid/detail.uri?authorId=57323796600",
  orcid: "https://orcid.org/0000-0001-9176-0838",
},
  },
  {
    id: 7,
    name: "Dr. Ramesh B T",
    designation:"Assistant Professor",
    photo: "/images/innerpages/programe/robot-automation/faculty/Ramesh.webp",
    emails: ["ramesh.bt@sitpune.edu.in"],
    qualification: "PhD, M Tech",
    links: {
  linkedin: "https://www.linkedin.com/in/dr-ramesh-b-t-b38465128/",
  googleScholar:
    "https://scholar.google.com/citations?user=GIXnauQAAAAJ&hl=en",
  scopus:
    "https://www.scopus.com/authid/detail.uri?authorId=57201915312",
  orcid: "https://orcid.org/0003-0003-1370-1538",
},
  },
  {
    id: 8,
    name: "Dr. Neeraj Kumar",
    designation:"Assistant Professor",
    photo: "/images/innerpages/programe/robot-automation/faculty/neeraj-kumar.webp",
    emails: ["neeraj.kumar@sitpune.edu.in"],
    qualification: "Ph.D (NIT Meghalaya)",
    links: {
  linkedin: "https://www.linkedin.com/in/neeraj-kumar-phd-524a31363/",
  googleScholar:
    "https://scholar.google.com/citations?user=vnnDupIAAAAJ&hl=en",
  scopus:
    "https://www.scopus.com/authid/detail.uri?authorId=58132479700",
  orcid: "https://orcid.org/0000-0002-8785-7597",
},
  },
  {
    id: 9,
    name: "Dr Yudhishthir Raut",
    designation:"Sr. Assistant Professor",
    photo: "/images/innerpages/programe/robot-automation/faculty/yudhishthir.webp",
    emails: ["yudhishthir.raut@sitpune.edu.in"],
    qualification: "PhD, M Tech",
    links: {
  linkedin: "https://in.linkedin.com/in/dr-yudhishthir-raut-a4336524",
  googleScholar:
    "https://scholar.google.com/citations?user=YseJjPEAAAAJ&hl=en",
  scopus:
    "https://www.scopus.com/authid/detail.uri?authorId=57189294904",
  orcid: "https://orcid.org/0000-0002-6492-0215",
},
  },
  {
    id: 10,
    name: "Dr Aniket Ravindra Nargundkar",
    designation:"Assistant Professor",
    photo: "/images/innerpages/programe/robot-automation/faculty/aniket-nargundkar.webp",
    emails: ["aniket.nargundkar@sitpune.edu.in"],
    qualification: "PhD, M Tech",
    links: {
  linkedin: "https://www.linkedin.com/in/dr-aniket-nargundkar-772b7a205/",
  googleScholar:
    "https://scholar.google.com/citations?user=g07eszsAAAAJ&hl=en&authuser=1",
  scopus:
    "https://www.scopus.com/authid/detail.uri?authorId=57203920597",
  orcid: "https://orcid.org/0000-0002-1928-4192",
},
  },
  {
    id: 11,
    name: "Dr Manoj Kumar Shukla",
    designation:"Assistant Professor (Senior Gradee)",
    photo: "/images/innerpages/programe/robot-automation/faculty/manoj-shukla.webp",
    emails: ["manoj.shukla@sitpune.edu.in"],
    qualification: "PhD, M.Tech, B.Tech",
    links: {
  linkedin: "http://www.linkedin.com/in/dr-manoj-kumar-shukla-5016bb47",
  googleScholar:
    "https://scholar.google.com/citations?user=FlTiL-IAAAAJ&hl=en",
  scopus:
    "https://www.scopus.com/authid/detail.uri?authorId=7102610469",
  orcid: "https://orcid.org/0000-0002-7013-8801",
},
  },
  {
    id: 12,
    name: "Pankaj Jain",
    designation:"Assistant Professor",
    photo: "/images/innerpages/programe/robot-automation/faculty/Pankaj-jain.webp",
    emails: ["pankaj.jain@sitpune.edu.in"],
    qualification: "Ph.D",
    links: {
  linkedin: "https://www.linkedin.com/in/pankaj-jain-a80850b/",
  googleScholar:
    "https://scholar.google.com/citations?user=CkQ6St8AAAAJ&hl=en",
  scopus:
    "http://www.scopus.com/authid/detail.url?authorId=58982286100",
  orcid: "http://www.orcid.org/0000-0002-6206-497X",
},
  },
  {
    id: 13,
    name: "Dr. Vishwanath Nagallapati",
    designation:"Assistant Professor",
    photo: "/images/innerpages/programe/robot-automation/faculty/Dr_Vishwanath-N.webp",
    emails: ["vishwanath.nagallapati@sitpune.edu.in"],
    qualification: "B.Tech, M.Tech, Ph.D.",
    links: {
  linkedin: "https://www.linkedin.com/in/vishwanath-nagallapati-5a65a7130/",
  googleScholar:
    "https://scholar.google.com/citations?user=OzydwmoAAAAJ&hl=en",
  scopus:
    "https://www.scopus.com/authid/detail.uri?authorId=57222712904",
  orcid: "https://orcid.org/0000-0003-3029-7047",
},
  },
  {
    id: 14,
    name: "Dr. Akshay Saxena",
    designation:"Assistant Professor",
    photo: "/images/innerpages/programe/robot-automation/faculty/akshay-saxena.webp",
    emails: ["akshay.saxena@sitpune.edu.in"],
    qualification: "PhD (IIT Patna), M.Tech (IIT Patna)",
    links: {
  linkedin: "https://in.linkedin.com/in/akshaysaxenaiitp",
  googleScholar:
    "https://scholar.google.com/citations?user=oOpIlkZMJyIC&hl=en",
  scopus:
    "https://www.scopus.com/authid/detail.uri?authorId=58755925600",
  orcid: "https://orcid.org/0000-0003-0701-4264",
  // Vidwan ID:  718124
},
  },
  {
    id: 15,
    name: "Dr Mahesh Singh",
    designation:"Assistant Professor",
    photo: "/images/innerpages/programe/robot-automation/faculty/mahesh-singh.webp",
    emails: ["mahesh.singh@sitpune.edu.in"],
    qualification: "PhD, M.Tech",
    links: {
  linkedin: "https://www.linkedin.com/in/singhmahesh04/",
  googleScholar:
    "https://scholar.google.com/citations?user=byzyDwQAAAAJ&hl=en",
  scopus:
    "https://www.scopus.com/authid/detail.uri?authorId=56537433900",
  orcid: "https://orcid.org/0000-0002-5240-7107",
},
  },
  {
    id: 16,
    name: "Dr. Vikas",
    designation:"Assistant Professor",
    photo: "/images/innerpages/programe/robot-automation/faculty/vikas-imge.webp",
    emails: ["vikas@sitpune.edu.in"],
    qualification: "Ph.D., M.E., B.E.",
    links: {
  linkedin: "https://www.linkedin.com/in/dr-vikas-8aa94643/",
  googleScholar:
    "https://scholar.google.com/citations?user=QsDuBQsAAAAJ&hl=en",
  scopus:
    "https://www.scopus.com/authid/detail.uri?authorId=57113745400",
  orcid: "https://orcid.org/0000-0002-0700-5424",
},
  },
];

export const facultyentc: FacultyMember[] = [

];