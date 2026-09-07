export type RecruiterLogo = {
  id: number;
  name: string;
  image: string;
  width?: number;
  height?: number;
};

export type ProgramRecruiters = {
  title: string;
  logos: RecruiterLogo[];
};

/* =========================================================
   COMMON RECRUITERS
========================================================= */

export const commonRecruiters: RecruiterLogo[] = [
  {
    id: 1,
    name: "Recruiter 1",
    image: "/images/innerpages/programe/logo1.webp",
    width: 100,
    height: 50,
  },
  {
    id: 2,
    name: "Recruiter 2",
    image: "/images/innerpages/programe/logo2.webp",
    width: 100,
    height: 50,
  },
  {
    id: 3,
    name: "Recruiter 3",
    image: "/images/innerpages/programe/logo3.webp",
    width: 100,
    height: 50,
  },
  {
    id: 4,
    name: "Recruiter 4",
    image: "/images/innerpages/programe/logo4.webp",
    width: 100,
    height: 70,
  },
  {
    id: 5,
    name: "Recruiter 5",
    image: "/images/innerpages/programe/logo5.webp",
    width: 100,
    height: 50,
  },
  {
    id: 6,
    name: "Recruiter 6",
    image: "/images/innerpages/programe/logo6.webp",
    width: 100,
    height: 50,
  },
  {
    id: 7,
    name: "Recruiter 7",
    image: "/images/innerpages/programe/logo7.webp",
    width: 100,
    height: 50,
  },
  {
    id: 8,
    name: "Recruiter 8",
    image: "/images/innerpages/programe/logo8.webp",
    width: 100,
    height: 50,
  },
];

/* =========================================================
   PROGRAM-WISE RECRUITERS
========================================================= */

export const programRecruiters: Record<string, ProgramRecruiters> = {
  aiml: {
    title: "Top Recruiters",
    logos: commonRecruiters,
  },

  civil: {
    title: "Top Recruiters",
    logos: commonRecruiters,
  },

  electronics: {
    title: "Top Recruiters",
    logos: commonRecruiters,
  },

  mechanical: {
    title: "Top Recruiters",
    logos: commonRecruiters,
  },

  computerScience: {
    title: "Top Recruiters",
    logos: commonRecruiters,
  },

  robotics: {
    title: "Top Recruiters",
    logos: commonRecruiters,
  },
};