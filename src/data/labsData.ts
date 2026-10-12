export interface LabImage {
  id: string;
  image: string;
  title: string;
  alt?: string;
}

export interface LabItem {
  id: string;
  title: string;
  gallery: LabImage[];
}

export interface DepartmentLabs {
  id: string;
  department?: string;
  labs: LabItem[];
}

export const labsData: DepartmentLabs[] = [
  {
    id: "aiml",
    // department: "Artificial Intelligence & Machine Learning",
    labs: [
      {
        id: "machine-deep-learning",
        title: "Our Labs & Spaces",
        gallery: [
          {
            id: "machine-deep-learning-1",
            title:"Apple Authorised Training Centre.jpg",
            image:"/images/innerpages/programe/aiml/our-labs-and-spaces/Apple-Authorised-Training-Centre.webp",
            alt: "Machine & Deep Learning Lab",
          },
          {
            id: "machine-deep-learning-2",
            title:"Data Visualisation Lab",
            image:"/images/innerpages/programe/aiml/our-labs-and-spaces/Data-Visualisation-Lab.webp",
            alt: "Machine & Deep Learning Lab",
          },
          {
            id: "machine-deep-learning-3",
            title:"Intel CoE in Generative AI",
            image:"/images/innerpages/programe/aiml/our-labs-and-spaces/Intel-Unnati-Generative-AI-lab.webp",
            alt: "Machine & Deep Learning Lab",
          },
          {
            id: "machine-deep-learning-4",
            title:"AI and Data Science Lab",
            image:"/images/innerpages/programe/aiml/our-labs-and-spaces/our-labs-and-spaces1.webp",
            alt: "Machine & Deep Learning Lab",
          },
          {
            id: "machine-deep-learning-5",
            title:"Machine Learning and Deep Learning Lab",
            image:"/images/innerpages/programe/aiml/our-labs-and-spaces/our-labs-and-spaces2.webp",
            alt: "Machine & Deep Learning Lab",
          },
          {
            id: "machine-deep-learning-6",
            title:"GPU workstation lab",
            image:"/images/innerpages/programe/aiml/our-labs-and-spaces/GPU-workstation-lab.webp",
            alt: "Machine & Deep Learning Lab",
          },
        ],
      },
    ],
  },

  // Example another department
  {
    id: "mechanical-engineering",
    department: "Mechanical Engineering",
    labs: [
      {
        id: "mechanical-engineering",
        title: "Our Labs & Spaces",
        gallery: [
          {
            id: "mechanical-engineering-lab-1",
            title: "FM Lab",
            image: "/images/innerpages/programe/mechanical-engineering/our-labs-and-spaces/me-1.webp",
            alt: "Mechanical engineering laboratory",
          },
          {
            id: "mechanical-engineering-lab-2",
            title: "HT and RAC Lab",
            image: "/images/innerpages/programe/mechanical-engineering/our-labs-and-spaces/me-2.webp",
            alt: "Mechanical engineering laboratory",
          },
          {
            id: "mechanical-engineering-lab-3",
            title: "ICE lab",
            image: "/images/innerpages/programe/mechanical-engineering/our-labs-and-spaces/Me-3.webp",
            alt: "Mechanical engineering laboratory",
          },
          {
            id: "mechanical-engineering-lab-4",
            title: "Mechanics Lab",
            image: "/images/innerpages/programe/mechanical-engineering/our-labs-and-spaces/me-4.webp",
            alt: "Mechanical engineering laboratory",
          },
          {
            id: "mechanical-engineering-lab-5",
            title: "Project lab",
            image: "/images/innerpages/programe/mechanical-engineering/our-labs-and-spaces/me-5.webp",
            alt: "Mechanical engineering laboratory",
          },
          {
            id: "mechanical-engineering-lab-6",
            title: "Robotics Lab",
            image: "/images/innerpages/programe/mechanical-engineering/our-labs-and-spaces/Me-6.webp",
            alt: "Mechanical engineering laboratory",
          },
        ],
      },
    ],
  },

  // Example another department
  {
    id: "computer-science",
    department: "Computer Science",
    labs: [
      {
        id: "computer-science",
        title: "Our Labs & Spaces",
        gallery: [
          {
            id: "computer-science-lab-1",
            title: "Applied Artificial Intelligence Lab",
            image: "/images/innerpages/programe/computer-science/our-labs-and-spaces/Applied_Artificical_Intelligence_Lab.webp",
            alt: "Applied Artificial Intelligence Lab",
          },
          {
            id: "computer-science-lab-2",
            title: "Cloud Computing Lab",
            image: "/images/innerpages/programe/computer-science/our-labs-and-spaces/Cloud_Computing_Lab.webp",
            alt: "Cloud Computing Lab",
          },
          {
            id: "computer-science-lab-3",
            title: "Database Management and Analytics Lab",
            image: "/images/innerpages/programe/computer-science/our-labs-and-spaces/Database_Management_and_Analytics_Lab.webp",
            alt: "Database Management and Analytics Lab",
          },
          {
            id: "computer-science-lab-4",
            title: "Data Structure Lab",
            image: "/images/innerpages/programe/computer-science/our-labs-and-spaces/Data_Structure_Lab.webp",
            alt: "Data Structure Lab",
          },
          {
            id: "computer-science-lab-5",
            title: "Open Source Tool Lab",
            image: "/images/innerpages/programe/computer-science/our-labs-and-spaces/Open_Source_Tool_Lab.webp",
            alt: "Open Source Tool Lab",
          },
        ],
      },
    ],
  },

];
