import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const AIMLImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/aiml/alumni-achievments/Aadith.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/aiml/alumni-achievments/Arya-harshit.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/aiml/alumni-achievments/B.tech.webp",
  },  
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/aiml/alumni-achievments/Devansh-Singh.webp",
  },  
  {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/aiml/alumni-achievments/M.tech.webp",
  },  
  {
    id: 6,
    type: "image",
    src: "/images/innerpages/programe/aiml/alumni-achievments/Om-Shankar.webp",
  },  
  {
    id: 7,
    type: "image",
    src: "/images/innerpages/programe/aiml/alumni-achievments/Payas-Deshpande.webp",
  },  
];

export default function Page() {
  return (

    <InfrastructureGallery
      title="Alumni Achievements"
      images={AIMLImages}
    />
  );
}