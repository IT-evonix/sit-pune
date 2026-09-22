export type ProgrammeItem = {
  id: string;
  title: string;
  icon: string;
};

export type ProgrammeDepartment = {
  id: string;
  shortTitle: string;
  title: string;
  subtitle: string;
  description?: string;

  major: {
    title: string;
    description?: string;
    items: ProgrammeItem[];
  };

  minor: {
    title: string;
    description?: string;
    items: ProgrammeItem[];
  };
};

export const majorMinorProgrammesData: ProgrammeDepartment[] = [
  {
    id: "aiml",
    shortTitle: "AIML",
    title: "AIML Major & Minor Programmes",
    subtitle:
      "Explore our specialised AI & ML programmes designed to build industry-ready skills and future-proof your career.",

    description: "",

    major: {
      title: "AIML Major Programmes",
      // description: "Advanced specialisations to lead in the AI-driven future.",

      items: [
        {
          id: "generative-ai",
          title: "Generative AI",
          icon: "brain",
        },
        {
          id: "cloud-operations-analytics",
          title: "Cloud Operations & Analytics",
          icon: "cloud",
        },
        {
          id: "digital-security-forensics",
          title: "Digital Security & Forensics",
          icon: "shield",
        },
        {
          id: "business-management-analytics",
          title: "Business Management & Analytics",
          icon: "chart",
        },
        {
          id: "quantum-computing",
          title: "Quantum Computing",
          icon: "atom",
        },
      ],
    },

    minor: {
      title: "AIML Minor Programmes",
      // description: "Focused areas to enhance your core expertise.",

      items: [
        {
          id: "iot-embedded-ai",
          title: "IoT & Embedded AI",
          icon: "cloud",
        },
        {
          id: "smart-manufacturing",
          title: "Smart Manufacturing & Intelligent Systems",
          icon: "chip",
        },
        {
          id: "quantum-technologies",
          title: "Quantum Technologies",
          icon: "atom",
        },
      ],
    },
  },

  /*
   * Example:
   * Future departments can be added here.
   */

  // {
  //   id: "cse",
  //   shortTitle: "CSE",
  //   title: "CSE Major & Minor Programmes",
  //   subtitle:
  //     "Explore our specialised Computer Science programmes...",
  //   description: "",
  //
  //   major: {
  //     title: "CSE Major Programmes",
  //     description: "Advanced specialisations...",
  //     items: [
  //       {
  //         id: "ai",
  //         title: "Artificial Intelligence",
  //         icon: "brain",
  //       },
  //     ],
  //   },
  //
  //   minor: {
  //     title: "CSE Minor Programmes",
  //     description: "Focused areas...",
  //     items: [
  //       {
  //         id: "cyber-security",
  //         title: "Cyber Security",
  //         icon: "shield",
  //       },
  //     ],
  //   },
  // },
];