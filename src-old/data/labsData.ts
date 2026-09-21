// src/data/labsData.ts

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
            title: "Apple Authorised Training Centre.jpg",
            image:
              "/images/innerpages/programe/aiml/our-labs-and-spaces/Apple-Authorised-Training-Centre.webp",
            alt: "Machine & Deep Learning Lab",
          },

          {
            id: "machine-deep-learning-2",
            title: "Data Visualisation Lab",
            image:
              "/images/innerpages/programe/aiml/our-labs-and-spaces/Data-Visualisation-Lab.webp",
            alt: "Machine & Deep Learning Lab",
          },

          {
            id: "machine-deep-learning-3",
            title: "Intel CoE in Generative AI",
            image:
              "/images/innerpages/programe/aiml/our-labs-and-spaces/Intel-Unnati-Generative-AI-lab.webp",
            alt: "Machine & Deep Learning Lab",
          },

          {
            id: "machine-deep-learning-4",
            title: "AI and Data Science Lab",

            image:
              "/images/innerpages/programe/aiml/our-labs-and-spaces/our-labs-and-spaces1.webp",
            alt: "Machine & Deep Learning Lab",
          },

          {
            id: "machine-deep-learning-5",
            title: "Machine Learning and Deep Learning Lab",
            image:
              "/images/innerpages/programe/aiml/our-labs-and-spaces/our-labs-and-spaces2.webp",
            alt: "Machine & Deep Learning Lab",
          },

          {
            id: "machine-deep-learning-6",
            title: "GPU workstation lab",
            image:
              "/images/innerpages/programe/aiml/our-labs-and-spaces/GPU-workstation-lab.webp",
            alt: "Machine & Deep Learning Lab",
          },

          // 7th image onwards = normal cards

          //   {
          //     id: "machine-deep-learning-7",
          //     image:
          //       "/images/innerpages/programe/aiml/our-labs-and-spaces/our-labs-and-spaces7.webp",
          //     alt: "Machine & Deep Learning Lab",
          //   },

          //   {
          //     id: "machine-deep-learning-8",
          //     image:
          //       "/images/innerpages/programe/aiml/our-labs-and-spaces/our-labs-and-spaces8.webp",
          //     alt: "Machine & Deep Learning Lab",
          //   },

          //   {
          //     id: "machine-deep-learning-9",
          //     image:
          //       "/images/innerpages/programe/aiml/our-labs-and-spaces/our-labs-and-spaces9.webp",
          //     alt: "Machine & Deep Learning Lab",
          //   },
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
        id: "programming-lab",

        title: "Programming Lab",

        gallery: [
          {
            id: "programming-lab-1",
             title: "Data Structure & Algorithm Lab",

            image: "/images/labs/programming-lab-1.webp",
            alt: "Programming Lab",
          },
          {
            id: "programming-lab-2",
             title: "Data Structure & Algorithm Lab",

            image: "/images/labs/programming-lab-2.webp",
            alt: "Programming Lab",
          },
        ],
      },
    ],
  },
];
