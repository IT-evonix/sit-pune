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
    photo: "/images/innerpages/programe/aiml/faculty/Dr-Sumit-Kumar-aiml.webp",
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
    photo: "/images/innerpages/programe/aiml/faculty/DrAnupKumarBongale-aiml.webp",
    emails: ["anupkumar.bongale@sitpune.edu.in"],
    qualification: "Ph.D., M. Tech., B.E.",
    links: {
      linkedin: "https://www.linkedin.com/in/dr-anupkumar-bongale-3002ba162/",
      googleScholar:"https://scholar.google.ca/citations?user=HKRqBfEAAAAJ&hl=en",
      scopus:"https://www.scopus.com/pages/search/authors?firstName=Anupkumar&lastName=Bongale",
      orcid: "https://orcid.org/0000-0002-5897-0283",
    },
  },

  {
    id: 4,
    name: "Dr.Anjali Dalvi",
    designation:"Associate Professor",
    photo: "/images/innerpages/programe/aiml/faculty/Dr-Anjali-Dalvi-aiml.webp",
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
    photo: "/images/innerpages/programe/aiml/faculty/DrSangeetaPant-aiml.webp",
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
    photo: "/images/innerpages/programe/aiml/faculty/DrPoojaVinayakKamat-aiml.webp",
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
  {
id: 7,
name: "Dr. Tanveer Ahmed",
designation: "Associate Professor",
photo: "/images/innerpages/programe/aiml/faculty/Dr-Tanveer-Ahmed.webp",
emails: ["tanveer.ahmed@sitpune.edu.in"],
qualification: "Ph.D.",
links: {
linkedin: "https://www.linkedin.com/in/tanveer-ahmed-2882a22b/",
googleScholar:
"https://scholar.google.com/citations?user=kTIGxhUAAAAJ&hl=en&oi=ao",
},
},
{
id: 8,
name: "Dr. Wasim Khan",
designation: "Senior Assistant Professor",
photo: "/images/innerpages/programe/aiml/faculty/Dr-Wasim-Khan.webp",
emails: ["wasim.khan@sitpune.edu.in"],
qualification: "Ph.D.",
links: {
linkedin: "https://www.linkedin.com/in/dr-wasim-khan-89249722/",
googleScholar:
"https://scholar.google.com/citations?user=JJOg5WkAAAAJ&hl=en",
// researcherID: "https://researchid.co/admin/login-home",
orcid: "https://orcid.org/0000-0003-2311-1451",
},
},
{
id: 9,
name: "Dr. Nivedita Mishra",
designation: "Associate Professor",
photo: "/images/innerpages/programe/aiml/faculty/Dr-Nivedita-Mishra.webp",
emails: ["nivedita.mishra@sitpune.edu.in"],
qualification: "Ph.D., M.E., B.E",
links: {
linkedin: "https://www.linkedin.com/in/dr-nivedita-mishra-05009774/",
googleScholar:
"https://scholar.google.com/citations?user=xLtCEyAAAAAJ&hl=en&oi=ao",
orcid: "https://orcid.org/0000-0002-3790-8659",
},
},
{
  id: 10,
  name: "Dr. Priyanka Deshmukh",
  designation: "Assistant Professor, AIML",
  photo: "/images/innerpages/programe/aiml/faculty/Dr-Priyanka-Deshmukh.webp",
  emails: ["priyanka.deshmukh@sitpune.edu.in"],
  qualification: "Ph.D., M.E., B.E",
  links: {
    linkedin:
      "https://www.linkedin.com/in/dr-priyanka-deshmukh-shahade-59014053/",
    googleScholar:
      "https://scholar.google.co.in/citations?user=NKoPuvsAAAAJ",
    // researcherId: "RESEARCHER_ID_HERE",
    orcid: "https://orcid.org/0009-0005-4214-5827",
  },
},
{
  id: 11,
  name: "Dr. Zulfikar Ali Ansari",
  designation: "Assistant Professor, AIML",
  photo: "/images/innerpages/programe/aiml/faculty/Dr-Zulfikar-Ali-Ansari.webp",
  emails: ["zulfikar.ansari@sitpune.edu.in"],
  qualification: "Ph.D., M.E., B.E",
  links: {
    linkedin:
      "https://www.linkedin.com/in/dr-zulfikar-ali-ansari-8827044b/",
    googleScholar:
      "https://scholar.google.com/citations?user=ZZN0ZR0AAAAJ&hl=en",
    // researcherId: "https://researchid.co/admin/login-home",
    orcid: "https://orcid.org/0000-0003-0095-8713",
  },
},
{
  id: 12,
  name: "Dr. Sagar Dhanraj Pande",
  designation: "Associate Professor, AIML",
  photo: "/images/innerpages/programe/aiml/faculty/Dr-Sagar-Dhanraj-Pande.webp",
  emails: ["sagar.pande@sitpune.edu.in"],
  qualification: "Ph.D (CSE), M.E (CSE), B.E. (CSE)",
  links: {
    linkedin:
      "https://www.linkedin.com/in/dr-sagar-dhanraj-pande-b8161392/",
    scopus:
      "https://www.scopus.com/authid/detail.uri?authorId=57213160540",
    // researcherId:
    //   "https://publons.com/researcher/4875874/dr-sagar-dhanraj-pande/",
    orcid: "https://orcid.org/0000-0003-4506-6997",
  },
},
{
  id: 13,
  name: "Dr. Shrikrishna Kolhar",
  designation: "Assistant Professor, AIML",
  photo: "/images/innerpages/programe/aiml/faculty/Dr-Shrikrishna-Kolhar.webp",
  emails: ["shrikrishna.kolhar@sitpune.edu.in"],
  qualification: "Ph.D., M.E., B.E",
  links: {
    linkedin:
      "https://www.linkedin.com/in/dr-shrikrishna-kolhar-3aaba273/",
    googleScholar:
      "http://scholar.google.co.in/citations?user=RxNwuzwAAAAJ",
    orcid: "https://orcid.org/0000-0003-4170-0081",
  },
},
{
  id: 14,
  name: "Dr. Sheetal Borhade",
  designation: "Senior Assistant Professor, AIML",
  photo: "/images/innerpages/programe/aiml/faculty/Dr-Sheetal-Borhade.webp",
  emails: ["sheetal.borhade@sitpune.edu.in"],
  qualification: "Ph.D (AI & ML), M.E., B.E",
  links: {
    linkedin:
      "https://www.linkedin.com/in/sheetal-kusal-borhade-ph-d-68171640/",
    googleScholar:
      "https://scholar.google.co.in/citations?user=KpLKRlwAAAAJ&hl=en",
  },
},
{
  id: 15,
  name: "Dr. Ananya Bhattacharjee",
  designation: "Assistant Professor, AIML",
  photo: "/images/innerpages/programe/aiml/faculty/Dr-Ananya-Bhattacharjee.webp",
  emails: ["ananya.bhattacharjee@sitpune.edu.in"],
  qualification: "Ph.D., M.E., B.E",
  links: {
    linkedin:
      "https://www.linkedin.com/in/ananya-bhattacharjee/",
    googleScholar:
      "https://scholar.google.com/citations?user=8r_0ctQAAAAJ&hl=en",
    // researcherId:
    //   "https://researchid.co/rid101151",
    orcid: "https://orcid.org/0000-0002-1550-6835",
  },
},
{
  id: 16,
  name: "Prof. Mayur Mukund Gaikwad",
  designation: "Assistant Professor, AIML",
  photo: "/images/innerpages/programe/aiml/faculty/Prof-Mayur-Mukund-Gaikwad.webp",
  emails: ["mayur.gaikwad@sitpune.edu.in"],
  qualification: "MTech., B.E",
  links: {
    linkedin:
      "https://www.linkedin.com/in/mayur-gaikwad-9047b0249/",
    googleScholar:
      "https://scholar.google.com/citations?user=WQ0lrLgAAAAJ&hl=en&authuser=1",
    // researcherId:
    //   "https://www.webofscience.com/wos/author/record/HDM-6213-2022",
    orcid: "https://orcid.org/0000-0002-5399-2619",
  },
},
{
  id: 17,
  name: "Dr. Shivali Amit Wagle",
  designation: "Associate Professor, AIML",
  photo: "/images/innerpages/programe/aiml/faculty/Dr-Shivali-Amit-Wagle.webp",
  emails: ["shivali.wagle@sitpune.edu.in"],
  qualification: "Ph.D., M.E., B.E.",
  links: {
    linkedin:
      "https://www.linkedin.com/in/dr-shivali-wagle-0a141a13/",
    googleScholar:
      "https://scholar.google.com/citations?user=xgDRG-UAAAAJ&hl=en",
    // researcherId:
    //   "https://www.webofscience.com/wos/author/record/1852758",
    orcid: "https://orcid.org/0000-0002-0061-9618",
  },
},
{
  id: 18,
  name: "Dr. Aniket K. Shahade",
  designation: "Assistant Professor, AIML",
  photo: "/images/innerpages/programe/aiml/faculty/Dr-Aniket-K-Shahade.webp",
  emails: ["aniket.shahade@sitpune.edu.in"],
  qualification: "Ph.D, MBA, M.E, B.E.",
  links: {
    linkedin:
      "https://www.linkedin.com/in/dr-aniket-shahade-228125a6/",
    googleScholar:
      "https://scholar.google.com/citations?user=VNx0XcMAAAAJ&hl=en",
    // researcherId:
    //   "https://www.webofscience.com/wos/author/record/GSO-2570-2022",
    orcid: "https://orcid.org/0000-0003-1025-7654",
  },
},
{
  id: 19,
  name: "Dr. Archana Y. Chaudhari",
  designation: "Associate Professor, AIML",
  photo: "/images/innerpages/programe/aiml/faculty/Dr-Archana-Y-Chaudhari.webp",
  emails: ["archana.chaudhari@sitpune.edu.in"],
  qualification: "Ph.D, M.E., B.E",
  links: {
    linkedin:
      "https://www.linkedin.com/in/archanachaudhari/",
    googleScholar:
      "https://scholar.google.co.in/citations?user=WHkirXUAAAAJ&hl=en",
    // researcherId:
    //   "https://www.webofscience.com/wos/author/record/X-3752-2019",
    orcid: "https://orcid.org/0000-0002-4423-8921",
  },
},
{
  id: 20,
  name: "Dr. Geetanjali Sharma",
  designation: "Assistant Professor, AIML",
  photo: "/images/innerpages/programe/aiml/faculty/Dr-Geetanjali-Sharma.webp",
  emails: ["geetanjali.sharma@sitpune.edu.in"],
  qualification: "Ph.D., M.E., B.E",
  links: {
    linkedin:
      "https://www.linkedin.com/in/dr-geetanjali-sharma-39561a36a/",
    googleScholar:
      "https://scholar.google.com/citations?user=WLY-fnUAAAAJ&hl=hi",
    orcid: "https://orcid.org/0000-0001-9204-426X",
  },
},
{
  id: 21,
  name: "Dr. Dhanashree K. Barbole",
  designation: "Assistant Professor, AIML",
  photo: "/images/innerpages/programe/aiml/faculty/Dr-Dhanashree-K-Barbole.webp",
  emails: ["dhanashree.barbole@sitpune.edu.in"],
  qualification: "Ph.D., M.E., B.E",
  links: {
    linkedin:
      "https://www.linkedin.com/in/dr-dhanashree-k-barbole-552165197/",
    googleScholar:
      "https://scholar.google.co.in/citations?user=g4tEkhQAAAAJ&hl=en",
    orcid: "https://orcid.org/0000-0002-3969-1043",
  },
},
{
  id: 22,
  name: "Dr. Sumanto Dutta",
  designation: "Assistant Professor, AIML",
  photo: "/images/innerpages/programe/aiml/faculty/Dr-Sumanto-Dutta.webp",
  emails: ["sumanto.dutta@sitpune.edu.in"],
  qualification: "Ph.D (CSE), M.Tech (CSE), B.E (CSE)",
  links: {
    linkedin:
      "https://www.linkedin.com/in/sumantodutta/",
    googleScholar:
      "https://scholar.google.com/citations?user=6C9KLzUAAAAJ&hl=en",
    // researcherId:
    //   "https://www.scopus.com/authid/detail.uri?authorId=57209181426",
    orcid: "https://orcid.org/0000-0001-6283-0999",
  },
},
{
  id: 23,
  name: "Dr. Aditi Saxena",
  designation: "Assistant Professor, AIML",
  photo: "/images/innerpages/programe/aiml/faculty/Dr-Aditi-Saxena.webp",
  emails: ["aditi.saxena@sitpune.edu.in"],
  qualification: "Ph.D (AI & ML), M.E., B.E",
  links: {
    linkedin:
      "https://www.linkedin.com/in/aditi-saxena29/",
    googleScholar:
      "https://scholar.google.com/citations?user=l3bCTZMAAAAJ&hl=en&oi=sra",
    // researcherId:
    //   "https://www.webofscience.com/wos/woscc/smart-search",
    orcid: "https://orcid.org/0000-0002-9046-7733",
  },
},
{
  id: 24,
  name: "Dr. Madhvi Saxena",
  designation: "Assistant Professor",
  photo: "/images/innerpages/programe/aiml/faculty/Dr-Madhvi-Saxena.webp",
  emails: ["madhvi.saxena@sitpune.edu.in"],
  qualification: "Ph.D., M.E., B.E",
  links: {
    linkedin:
      "https://www.linkedin.com/in/dr-madhvi-saxena-143b8257/",
    googleScholar:
      "https://scholar.google.com/citations?user=4t0CDKEAAAAJ&hl=en",
    // researcherId:
    //   "https://www.webofscience.com/wos/woscc/smart-search",
    orcid: "https://orcid.org/0000-0001-9718-5766",
  },
},
{
  id: 25,
  name: "Dr. Mahendar Reddy",
  designation: "Assistant Professor",
  photo: "/images/innerpages/programe/aiml/faculty/Dr-Mahendar-Reddy.webp",
  emails: ["mahender.chilukala@sitpune.edu.in"],
  qualification: "Ph.D, M.E., B.E",
  links: {
    // researcherId:
    //   "https://www.webofscience.com/wos/woscc/smart-search",
    orcid: "https://orcid.org/0000-0002-9046-7733",
  },
},
{
  id: 26,
  name: "Prof. Shruti Sunnad",
  designation: "Teaching Associate, AIML",
  photo: "/images/innerpages/programe/aiml/faculty/women-photo.webp",
  emails: ["shruti.sunnad@sitpune.edu.in"],
  qualification: "M.E., B.E",
  links: {
     linkedin:
      "https://www.linkedin.com/in/shruti-s-488188a3/",
  },
},
{
  id: 27,
  name: "Prof. Amruta S. Kolhar",
  designation: "Teaching Associate, AIML",
  photo: "/images/innerpages/programe/aiml/faculty/Prof-Amruta-S-Kolhar.webp",
  emails: ["amruta.kolhar@sitpune.edu.in"],
  qualification: "Ph.D. Pursuing, M.E, B.E.",
  links: {
    linkedin:
      "https://www.linkedin.com/in/amruta-pandit-kolhar-281627219/",
    googleScholar:
      "https://scholar.google.com/citations?user=DmVnVtcAAAAJ&hl=en",
    orcid: "https://orcid.org/0009-0002-9558-2738",
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
{
  id: 1,
  name: "Dr. Akshay Bhosale",
  designation: "Assistant Professor",
  photo: "/images/innerpages/programe/entc/faculty/akshya-bhosale.webp",
  emails: ["akshay.bhosale@sitpune.edu.in"],
  qualification: "PhD",
  links: {
    linkedin: "https://www.linkedin.com/in/dr-akshay-bhosale-34227a28/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNcxL0SdGSXipb5hl6Mo%2FeA%3D%3D",
    googleScholar:
      "https://scholar.google.com/citations?hl=en&user=don-MJoAAAAJ&view_op=list_works&gmla=AO4B3jv7VlUojTsAIDt01TDqO1b9NSsROqPhJqKNe7Vdvu0mICvW5fmZFTH5bhEcLQNgbIEuSpQk",
    scopus:
      "https://www.scopus.com/authid/detail.uri?authorId=58536633200",
    orcid: "https://orcid.org/0000-0003-2141-3691",
  },
},
{
  id: 2,
  name: "Dr. Anurag Mahajan",
  designation: "Associate Professor",
  photo: "/images/innerpages/programe/entc/faculty/anurag-mahajan.webp",
  emails: ["anurag.mahajan@sitpune.edu.in"],
  qualification: "PhD",
  links: {
    linkedin: "https://www.linkedin.com/feed/",
    googleScholar:
      "https://scholar.google.co.in/citations?user=LyzuJRoAAAAJ",
    scopus:
      "https://www.scopus.com/authid/detail.uri?authorId=40461791800",
    orcid: "https://orcid.org/0000-0002-2251-522X",
  },
},
{
  id: 3,
  name: "Dr. Harikrishnan R",
  designation: "Professor",
  photo: "/images/innerpages/programe/entc/faculty/harikrishnan-r.webp",
  emails: ["harikrishnan.r@sitpune.edu.in"],
  qualification: "B.E., M.E., M.Tech., PhD",
  links: {
    linkedin: "https://www.linkedin.com/in/harikrishnan-ramachandran-38b71188/",
    googleScholar:
      "https://scholar.google.com/citations?hl=en&authuser=2&user=-IrfhUQAAAAJ",
    scopus:
      "https://www.scopus.com/authid/detail.uri?authorId=56587668400",
    orcid: "https://orcid.org/0000-0001-5512-2345",
  },
},
{
  id: 4,
  name: "Dr. Aditya Jain",
  designation: "Associate Professor",
  photo: "/images/innerpages/programe/entc/faculty/aditya-jain.webp",
  emails: ["aditya.j@sitpune.edu.in"],
  qualification: "PhD; Postdoctoral Fellowship",
  links: {
    linkedin: "http://www.linkedin.com/in/dradityajain",
    googleScholar:
      "https://scholar.google.com/citations?user=c0qN9C0AAAAJ&hl=en",
    scopus:
      "https://www.scopus.com/authid/detail.uri?authorId=57189220339",
    orcid: "https://orcid.org/0000-0003-2509-4608",
  },
},
{
  id: 5,
  name: "Dr. Akash Kumar Bhoi",
  designation: "Assistant Professor",
  photo: "/images/innerpages/programe/entc/faculty/akash-kumar-bhoi.webp",
  emails: ["akash.bhoi@sitpune.edu.in"],
  qualification: "Ph.D., M.Tech., B.Tech.",
  links: {
    linkedin: "https://www.linkedin.com/in/akashkumarbhoi/",
    googleScholar:
      "https://scholar.google.co.in/citations?user=1pFjkMsAAAAJ",
    scopus:
      "https://www.scopus.com/authid/detail.uri?authorId=56441729400",
    orcid: "https://orcid.org/0000-0003-2759-3224",
  },
},
{
  id: 6,
  name: "Dr. Amar Choudhary",
  designation: "Assistant Professor",
  photo: "/images/innerpages/programe/entc/faculty/amar-choudhary.webp",
  emails: ["amar.choudhary@sitpune.edu.in"],
  qualification: "PhD",
  links: {
    scopus:
      "https://www.scopus.com/authid/detail.uri?authorId=57216703204",
  },
},
{
  id: 7,
  name: "Dr Maha Veera Varaprasad Kantipudi",
  designation: "Professor",
  photo: "/images/innerpages/programe/entc/faculty/maha-veera-varaprasad-kantipudi.webp",
  emails: ["prasad.kantipudi@sitpune.edu.in"],
  qualification: "Ph.D",
  links: {
    linkedin:
      "http://www.linkedin.com/in/dr-mvv-prasad-kantipudi-239444a5",
    googleScholar:
      "https://scholar.google.com/citations?hl=en&user=OYFPg_kAAAAJ&view_op=list_works&sortby=pubdate",
    scopus:
      "https://www.scopus.com/authid/detail.uri?authorId=57158399800",
    orcid:
      "https://orcid.org/0000-0002-0605-4654",
  },
},
{
  id: 8,
  name: "Dr. Vipin Prakash Yadav",
  designation: "Assistant Professor",
  photo: "/images/innerpages/programe/entc/faculty/vipin-prakash-yadav.webp",
  emails: ["vipin.yadav@sitpune.edu.in"],
  qualification: "PhD",
  links: {
    linkedin:
      "https://www.linkedin.com/in/vipin-prakash-yadav-868022133/",
    googleScholar:
      "https://scholar.google.com/citations?user=OQbwQ6cAAAAJ&hl=en",
    scopus:
      "https://www.scopus.com/pages/authors/57192306973",
    orcid: "https://orcid.org/0000-0002-8492-9372",
  },
},
{
  id: 9,
  name: "Dr. Jayshree Ashok Pande",
  designation: "Assistant Professor",
  photo: "/images/innerpages/programe/entc/faculty/jayshree-pande.webp",
  emails: ["jayshree.pande@sitpune.edu.in"],
  qualification: "B.E. M.E. Ph.D.",
  links: {
    googleScholar:
      "https://scholar.google.co.in/citations?user=i0D2axUAAAAJ&hl=en",
    orcid:
      "https://orcid.org/my-orcid?orcid=0000-0003-2564-4534",
  },
},
{
  id: 10,
  name: "Dr. Mousumi Bhanja",
  designation: "Assistant Professor",
  photo: "/images/innerpages/programe/entc/faculty/mousumi-bhanja.webp",
  emails: ["mousumi.bhanja@sitpune.edu.in"],
  qualification: "B.Tech. M.Tech. Ph.D.",
  links: {
    linkedin:
      "https://www.linkedin.com/in/dr-mousumi-bhanja-44847854/",
    googleScholar:
      "https://scholar.google.com/citations?hl=en&user=nthbbeYAAAAJ",
    scopus:
      "https://www.scopus.com/pages/authors/55490070000",
    orcid: "https://orcid.org/0000-0001-5312-6633",
  },
},
{
  id: 11,
  name: "Dr. Paresh Nasikkar",
  designation: "Associate Professor",
  photo: "/images/innerpages/programe/entc/faculty/paresh-nasikkar.webp",
  emails: ["paresh.nasikkar@sitpune.edu.in"],
  qualification: "BE MS PhD",
  links: {
    linkedin:
      "http://www.linkedin.com/in/dr-paresh-nasikkar-7bbaaa35",
    googleScholar:
      "https://scholar.google.com/citations?hl=en&user=bqx6KBUAAAAJ&view_op=list_works&sortby=pubdate",
    orcid: "https://orcid.org/0000-0002-1532-9293",
  },
},
{
  id: 12,
  name: "Dr. Sankit Ramkrishna Kassa",
  designation: "Associate Professor",
  photo: "/images/innerpages/programe/entc/faculty/sankit-ramkrishna-kassa.webp",
  emails: ["sankit.kassa@sitpune.edu.in"],
  qualification: "B.E. M.Tech. Ph.D.",
  links: {
    googleScholar:
      "https://scholar.google.co.in/citations?hl=en&user=9vdOq-QAAAAJ",
    orcid:
      "https://orcid.org/my-orcid?orcid=0000-0003-2564-4534",
  },
},
{
  id: 13,
  name: "Dr. Shailesh Vitthalrao Bhalerao",
  designation: "Assistant Professor",
  photo: "/images/innerpages/programe/entc/faculty/shailesh-vitthalrao-bhalerao.webp",
  emails: ["shailesh.bhalerao@sitpune.edu.in"],
  qualification:
    "B.E., MTech (Electronics), PhD (Biosciences and Biomedical Engineering) (IIT Indore)",
  links: {
    googleScholar:
      "https://scholar.google.co.in/citations?user=FP_sQMoAAAAJ",
    orcid: "https://orcid.org/0000-0001-6516-5576",
  },
},
{
  id: 14,
  name: "Dr. Mrinal Rahul Bachute",
  designation: "Professor",
  photo: "/images/innerpages/programe/entc/faculty/mrinal-rahul-bachute.webp",
  emails: ["mrinal.bachute@sitpune.edu.in"],
  qualification: "Ph.D., M.E., B.E",
  links: {
    linkedin:
      "https://www.linkedin.com/in/dr-mrinal-bachute-6500841b/",
    googleScholar:
      "https://scholar.google.com/citations?user=Dc1qELcAAAAJ&hl=en",
    scopus:
      "https://www.scopus.com/authid/detail.uri?authorId=57189389452",
    orcid: "https://orcid.org/0000-0002-6647-9347",
  },
},
{
  id: 15,
  name: "Dr Vaishali Baste",
  designation: "Assistant Professor",
  photo: "/images/innerpages/programe/entc/faculty/vaishali-baste.webp",
  emails: ["vaishali.baste@sitpune.edu.in"],
  qualification: "B.E. M.E. Ph.D.",
  links: {
    googleScholar:
      "https://scholar.google.com/citations?hl=en&user=kZaZETEAAAAJ",
    scopus: "https://tinywebs.info/7CrHic",
    orcid: "https://orcid.org/0000-0003-4713-6290",
  },
},
{
  id: 16,
  name: "Dr. Kumar Mohit",
  designation: "Assistant Professor",
  photo: "/images/innerpages/programe/entc/faculty/kumar-mohit.webp",
  emails: ["kumar.mohit@sitpune.edu.in"],
  qualification: "PhD; Postdoctoral Fellowship",
  links: {
    // vidwan: "https://siu.irins.org/profile/697624",
    linkedin: "https://www.linkedin.com/in/dr-kumar-mohit-4b20971ba/",
    googleScholar:
      "https://scholar.google.com/citations?hl=en&user=24zsTPkAAAAJ",
    scopus:
      "https://www.scopus.com/authid/detail.uri?authorId=6507274509",
    orcid: "https://orcid.org/0000-0003-3186-1244",
    // researchGate:
    //   "https://www.researchgate.net/profile/Kumar-Mohit-4",
    // ieee: "https://www.ieee.org/profile/myprofile/myprofile.html",
  },
},
{
  id: 17,
  name: "Dr. Mangal Singh",
  designation: "Associate Professor",
  photo: "/images/innerpages/programe/entc/faculty/mangal-singh.webp",
  emails: ["mangal.singh@sitpune.edu.in"],
  qualification: "PhD",
  links: {
    googleScholar:
      "https://scholar.google.com/citations?user=DkiMkp4AAAAJ&hl=en&authuser=1",
    // wos: "https://www.webofscience.com/wos/author/record/AAF-7779-2020",
    scopus:
      "https://www.scopus.com/authid/detail.uri?authorId=57199045515",
    orcid: "https://orcid.org/0000-0002-0971-657X",
    // researchGate: "https://www.researchgate.net/profile/Mangal-Singh-3",
    // vidwan: "https://vidwan.inflibnet.ac.in/profile/309497",
    linkedin: "https://www.linkedin.com/in/singhmangal/",
  },
},
{
  id: 18,
  name: "Dr. Marshiana D",
  designation: "Associate Professor",
  photo: "/images/innerpages/programe/entc/faculty/marshiana-d.webp",
  emails: ["marshiana.d@sitpune.edu.in"],
  qualification: "B.E. M.Tech. Ph.D.",
  links: {
    googleScholar:
      "https://scholar.google.com/citations?hl=en&user=nFccCjcAAAAJ",
    orcid: "https://orcid.org/0000-0003-0084-0870",
    // researcherId: "https://researchid.co/marshiana",
    // vidwan: "https://vidwan.inflibnet.ac.in/profile/182192",
  },
},
{
  id: 19,
  name: "Priyanka Tupe Waghmare",
  designation: "Associate Professor",
  photo: "/images/innerpages/programe/entc/faculty/priyanka-tupe-waghmare.webp",
  emails: ["priyanka.tupe@sitpune.edu.in"],
  qualification: "Ph.D., M.E., M.B.S.",
  links: {
    linkedin: "https://www.linkedin.com/in/priyanka-tupe-waghmare/",
    googleScholar:
      "https://scholar.google.com/citations?user=2LAB8vYAAAAJ&hl=en",
    scopus:
      "https://www.scopus.com/authid/detail.uri?authorId=57022217300",
    orcid: "https://orcid.org/0000-0003-2759-3224",
  },
},
{
  id: 20,
  name: "Dr. Saurabh Nagar",
  designation: "Assistant Professor",
  photo: "/images/innerpages/programe/entc/faculty/saurabh-nagar.webp",
  emails: ["saurabh.nagar@sitpune.edu.in"],
  qualification: "B.Tech, PhD.",
  links: {
    googleScholar:
      "https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=APjjwuaklX3Wf8k-yVjDF_RJznhHOijVVm0A_V6YvgxqnPIpYrU8tme12AJk_jSuqTt-noaG8_7-s3QJgcAxDA&user=ouz7YxgAAAAJ",
    orcid: "https://orcid.org/0000-0001-7088-9763",
    scopus:
      "https://www.scopus.com/authid/detail.uri?authorId=59884158200",
    // wos: "https://www.webofscience.com/wos/author/record/AAA-5577-2019",
  },
},
{
  id: 21,
  name: "Dr. Shahid Aziz",
  designation: "Assistant Professor",
  photo: "/images/innerpages/programe/entc/faculty/shahid-aziz.webp",
  emails: ["shahid.aziz@sitpune.edu.in"],
  qualification: "B.E. M.Tech. Ph.D.",
  links: {
    googleScholar:
      "https://scholar.google.com/citations?user=46ZhjL4AAAAJ&hl=en&authuser=2",
    orcid: "https://orcid.org/0000-0001-5415-8864",
    // researchGate: "https://www.researchgate.net/profile/Shahid-Aziz-13",
    // vidwan: "https://vidwan.inflibnet.ac.in/profile/148686",
  },
},
{
  id: 22,
  name: "Dr. Shilpa Hudnurkar",
  designation: "Assistant Professor",
  photo: "/images/innerpages/programe/entc/faculty/shilpa-hudnurkar.webp",
  emails: ["shilpa.hudnurkar@sitpune.edu.in"],
  qualification: "B.E. M.Tech. Ph.D.",
  links: {
    googleScholar:
      "https://scholar.google.com/citations?user=2ZJUPEUAAAAJ&hl=en&oi=ao",
    orcid: "https://orcid.org/0000-0001-7854-2019",
    // researcherId:
    //   "https://www.webofscience.com/wos/author/record/1589947",
    // vidwan: "https://vidwan.inflibnet.ac.in/profile/296599",
  },
},
{
  id: 23,
  name: "Dr. Shripad V Deshpande",
  designation: "Assistant Professor",
  photo: "/images/innerpages/programe/entc/faculty/shripad-deshpande.webp",
  emails: ["shripad.deshpande@sitpune.edu.in"],
  qualification: "B.Sc(Engg). M.Tech. Ph.D.",
  links: {
    googleScholar:
      "https://scholar.google.com/citations?user=bP-vdzUAAAAJ&hl=en",
    orcid: "https://orcid.org/0000-0002-5656-3596",
    // researchId: "https://researchid.co/rid45326",
    // vidwan: "https://vidwan.inflibnet.ac.in/profile/182223",
  },
},
{
  id: 24,
  name: "Dr. Snehal Bhosale",
  designation: "Assistant Professor",
  photo: "/images/innerpages/programe/entc/faculty/snehal-bhosale.webp",
  emails: ["snehal.bhosale@sitpune.edu.in"],
  qualification: "PhD",
  links: {
    googleScholar:
      "https://scholar.google.com/citations?hl=en&user=KymuBEYAAAAJ",
    scopus:
      "https://www.scopus.com/authid/detail.uri?authorId=54583382500",
    orcid: "https://orcid.org/0000-0002-0275-3554",
    linkedin: "https://www.linkedin.com/in/dr-snehal-bhosale-11a676294/",
  },
},
{
  id: 25,
  name: "Sushma Parihar",
  designation: "Assistant Professor",
  photo: "/images/innerpages/programe/entc/faculty/sushma-parihar.webp",
  emails: ["sushmap@sitpune.edu.in"],
  qualification: "B.Tech, M.Tech, Ph.D. Pursuing",
  links: {
    linkedin: "https://www.linkedin.com/in/sushmaparihar/",
    googleScholar:
      "https://scholar.google.com/citations?user=kTsV8nAAAAAJ&hl=en&oi=ao",
    scopus:
      "https://www.scopus.com/authid/detail.uri?authorId=57211908398",
    orcid: "https://orcid.org/0000-0003-0733-1999",
  },
},
];