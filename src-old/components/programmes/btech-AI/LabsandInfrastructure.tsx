import InfrastructureGallery from "@/components/InfrastructureGallery";

type MediaItem = {
  id: number;
  type: "image" | "video" | "youtube";
  src: string;
  name: string;
};

const AIMLImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/Infrastructure/Cloud-Computing-Lab.webp",
    name: "Cloud Computing Lab",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/Infrastructure/Data-Processing-Analytics-Lab.webp",
    name: "Data Processing & Analytic Lab",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/Infrastructure/Apple-Authorised-Training-Centre.webp",
    name: "Apple Authorised Training Centre",
  },
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/Infrastructure/Data-Structures-and-Algorithm-Lab.webp",
    name: "Data Structure & Algorithm Lab",
  },
  {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/Infrastructure/Data-Visualisation-Lab.webp",
    name: "Data Visualisation Lab",
  },
  {
    id: 6,
    type: "image",
    src: "/images/innerpages/programe/Infrastructure/Machine-Deep-Learning-Lab.webp",
    name: "Machine & Deep Learning Lab",
  },
  {
    id: 7,
    type: "image",
    src: "/images/innerpages/programe/Infrastructure/Natural-Language-Processing-Lab.webp",
    name: "Natural Language Processing Lab",
  },
  {
    id: 8,
    type: "image",
    src: "/images/innerpages/programe/Infrastructure/Intel-Unnati-Generative-AI-lab.webp",
    name: "Intel Unnati Generative AI Lab",
  },

  // MP4 Video Example
  // {
  //   id: 9,
  //   type: "video",
  //   src: "/videos/aiml-lab-tour.mp4",
  //   name: "AI ML Lab Tour",
  // },

  // Youtube Example
  // {
  //   id: 10,
  //   type: "youtube",
  //   src: "https://www.youtube.com/embed/jNQXAC9IVRw",
  //   name: "Department Overview",
  // },
];

export default function Page() {
  return (

    <InfrastructureGallery
      title="AI ML Infrastructure"
      images={AIMLImages}
    />
  );
}