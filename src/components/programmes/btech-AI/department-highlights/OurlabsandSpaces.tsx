import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const AIMLImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/aiml/our-labs-and-spaces/Apple-Authorised-Training-Centre.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/aiml/our-labs-and-spaces/Data-Visualisation-Lab.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/aiml/our-labs-and-spaces/Intel-Unnati-Generative-AI-lab.webp",
  },   
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/aiml/our-labs-and-spaces/our-labs-and-spaces1.webp",
  },   
  {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/aiml/our-labs-and-spaces/our-labs-and-spaces2.webp",
  },   
];

export default function Page() {
  return (

    <InfrastructureGallery
      title="Our Labs & Spaces"
      images={AIMLImages}
    />
  );
}