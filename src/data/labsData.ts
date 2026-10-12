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

  {
    id: "applied-science",
    department: "Applied Science",
    labs: [
      {
        id: "applied-science",
        title: "Our Labs & Spaces",
        gallery: [
          {
            id: "applied-science-lab-1",
            title: "Chemistry Lab",
            image: "/images/innerpages/programe/applied-science/our-labs-and-spaces/Chemistry-Lab.webp",
            alt: "Concrete Technology Lab",
          },
          {
            id: "applied-science-lab-2",
            title: "Composite Materials Lab",
            image: "/images/innerpages/programe/applied-science/our-labs-and-spaces/Composite-Materials-Lab.webp",
            alt: "Transportation Engineering Lab",
          },
          {
            id: "applied-science-lab-3",
            title: "Language Lab",
            image: "/images/innerpages/programe/applied-science/our-labs-and-spaces/Language-Lab.webp",
            alt: "Geotechnical Engineering Lab",
          },
          {
            id: "applied-science-lab-4",
            title: "Material Research Lab",
            image: "/images/innerpages/programe/applied-science/our-labs-and-spaces/Material-Research-Lab.webp",
            alt: "Environmental Engineering Lab",
          },
          {
            id: "applied-science-lab-5",
            title: "Nanomaterials for Energy Applications Lab",
            image: "/images/innerpages/programe/applied-science/our-labs-and-spaces/Nanomaterials-for-Energy-Applications-Lab.webp",
            alt: "Engineering Mechanics Lab",
          },
          {
            id: "applied-science-lab-6",
            title: "Physics Lab",
            image: "/images/innerpages/programe/applied-science/our-labs-and-spaces/Physics-Lab.webp",
            alt: "Surveying Lab",
          },
        ],
      },
    ],
  },
  {
    id: "civil-engineering",
    department: "Civil Engineering",
    labs: [
      {
        id: "civil-engineering",
        title: "Our Labs & Spaces",
        gallery: [
          {
            id: "civil-engineering-lab-1",
            title: "Concrete Technology Lab",
            image: "/images/innerpages/programe/civil-engineering/our-labs-and-spaces/01_Concrete_Technology_Lab.webp",
            alt: "Concrete Technology Lab",
          },
          {
            id: "civil-engineering-lab-2",
            title: "Transportation Engineering Lab",
            image: "/images/innerpages/programe/civil-engineering/our-labs-and-spaces/02_Transportation_Engineering_Lab.webp",
            alt: "Transportation Engineering Lab",
          },
          {
            id: "civil-engineering-lab-3",
            title: "Geotechnical Engineering Lab",
            image: "/images/innerpages/programe/civil-engineering/our-labs-and-spaces/03_Geotechnical_Engineering_Lab.webp",
            alt: "Geotechnical Engineering Lab",
          },
          {
            id: "civil-engineering-lab-4",
            title: "Environmental Engineering Lab",
            image: "/images/innerpages/programe/civil-engineering/our-labs-and-spaces/04_Environmental_Engineering_Lab.webp",
            alt: "Environmental Engineering Lab",
          },
          {
            id: "civil-engineering-lab-5",
            title: "Engineering Mechanics Lab",
            image: "/images/innerpages/programe/civil-engineering/our-labs-and-spaces/05_Engineering_Mechanics_Lab.webp",
            alt: "Engineering Mechanics Lab",
          },
          {
            id: "civil-engineering-lab-6",
            title: "Surveying Lab",
            image: "/images/innerpages/programe/civil-engineering/our-labs-and-spaces/06_Surveying_Lab.webp",
            alt: "Surveying Lab",
          },
          {
            id: "civil-engineering-lab-7",
            title: "Civil Computer Lab",
            image: "/images/innerpages/programe/civil-engineering/our-labs-and-spaces/07_Civil_Computer_Lab.webp",
            alt: "Civil Computer Lab",
          },
          {
            id: "civil-engineering-lab-8",
            title: "Engineering Geology Lab",
            image: "/images/innerpages/programe/civil-engineering/our-labs-and-spaces/08_Engineering_Geology_Lab.webp",
            alt: "Engineering Geology Lab",
          },
        ],
      },
    ],
  },

  {
    id: "applied-science",
    department: "Applied Science",
    labs: [
      {
        id: "applied-science",
        title: "Our Labs & Spaces",
        gallery: [
          {
            id: "civil-engineering-lab-1",
            title: "Concrete Technology Lab",
            image: "/images/innerpages/programe/applied-science/our-labs-and-spaces/01_Concrete_Technology_Lab.webp",
            alt: "Concrete Technology Lab",
          },
          {
            id: "civil-engineering-lab-2",
            title: "Transportation Engineering Lab",
            image: "/images/innerpages/programe/applied-science/our-labs-and-spaces/02_Transportation_Engineering_Lab.webp",
            alt: "Transportation Engineering Lab",
          },
          {
            id: "civil-engineering-lab-3",
            title: "Geotechnical Engineering Lab",
            image: "/images/innerpages/programe/applied-science/our-labs-and-spaces/03_Geotechnical_Engineering_Lab.webp",
            alt: "Geotechnical Engineering Lab",
          },
          {
            id: "civil-engineering-lab-4",
            title: "Environmental Engineering Lab",
            image: "/images/innerpages/programe/applied-science/our-labs-and-spaces/04_Environmental_Engineering_Lab.webp",
            alt: "Environmental Engineering Lab",
          },
          {
            id: "civil-engineering-lab-5",
            title: "Engineering Mechanics Lab",
            image: "/images/innerpages/programe/applied-science/our-labs-and-spaces/05_Engineering_Mechanics_Lab.webp",
            alt: "Engineering Mechanics Lab",
          },
          {
            id: "civil-engineering-lab-6",
            title: "Surveying Lab",
            image: "/images/innerpages/programe/applied-science/our-labs-and-spaces/06_Surveying_Lab.webp",
            alt: "Surveying Lab",
          },
          {
            id: "civil-engineering-lab-7",
            title: "Civil Computer Lab",
            image: "/images/innerpages/programe/applied-science/our-labs-and-spaces/07_Civil_Computer_Lab.webp",
            alt: "Civil Computer Lab",
          },
          {
            id: "civil-engineering-lab-8",
            title: "Engineering Geology Lab",
            image: "/images/innerpages/programe/applied-science/our-labs-and-spaces/08_Engineering_Geology_Lab.webp",
            alt: "Engineering Geology Lab",
          },
        ],
      },
    ],
  },

];
