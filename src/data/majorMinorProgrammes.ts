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
    subtitle:"Explore our specialised AI & ML programmes designed to build industry-ready skills and future-proof your career.",
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


  {
    id: "entc",
    shortTitle: "ENTC",
    title: "ENTC Major & Minor Programmes",
    subtitle:"Explore our specialised AI & ML programmes designed to build industry-ready skills and future-proof your career.",
    description: "",
    major: {
      title: "ENTC Honors Programmes",
      // description: "Advanced specialisations to lead in the AI-driven future.",
      items: [
        {
          id: "embedded-systems",
          title: "Bachelor of Technology with Honours in Embedded Systems",
          icon: "chip",
        },
        {
          id: "semiconductor-technology",
          title: "Bachelor of Technology with Honours in Semiconductor Technology",
          icon: "atom",
        },
        
      ],
    },
    minor: {
      title: "ENTC Minor Programmes",
      // description: "Focused areas to enhance your core expertise.",
      items: [
        {
          id: "ai-ml",
          title: "Bachelor of Technology with Minors in Artificial Intelligence and Machine Learning",
          icon: "brain",
        },
        {
          id: "cyber-security",
          title: "Bachelor of Technology with Minors in Cyber Security",
          icon: "shield",
        },
        
      ],
    },
  },

  {
    id: "robotics-and-automation",
    shortTitle: "robotics-and-automation",
    title: "Robotics & Automation Major Programmes",
    subtitle:"Explore our specialised AI & ML programmes designed to build industry-ready skills and future-proof your career.",
    description: "",
    major: {
      title: "Robotics & Automation Honors Programmes",
      // description: "Advanced specialisations to lead in the AI-driven future.",
      items: [
        {
          id: "aerial-and-drone-technology",
          title: "B. Tech in Robotics and Automation with Honours in Aerial and Drone Technology",
          icon: "cloud",
        },
        
      ],
    },
    minor: {
      title: "Robotics & Automation Minor Programmes",
      // description: "Focused areas to enhance your core expertise.",
      items: [
        {
          id: "engineering-fundamentals",
          title: "B. Tech in Robotics and Automation with Minors in Computer Science Engineering Fundamentals",
          icon: "chip",
        },
        
      ],
    },
  },


  {
    id: "robotics-and-artificial-intelligence",
    shortTitle: "robotics-and-artificial-intelligence",
    title: "Robotics& Artificial Intelligence Major & Minor Programmes",
    subtitle:"Explore our specialised AI & ML programmes designed to build industry-ready skills and future-proof your career.",
    description: "",
    major: {
      title: "Robotics& Artificial Intelligence Honors Programmes",
      // description: "Advanced specialisations to lead in the AI-driven future.",
      items: [
        {
          id: "aerial-and-drone-technology",
          title: "B. Tech in Robotics and Automation with Honours in Aerial and Drone Technology",
          icon: "cloud",
        },
        
      ],
    },
    minor: {
      title: "Robotics& Artificial Intelligence Minor Programmes",
      // description: "Focused areas to enhance your core expertise.",
      items: [
        {
          id: "engineering-fundamentals",
          title: "B. Tech in Robotics and Automation with Minors in Computer Science Engineering Fundamentals",
          icon: "chip",
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