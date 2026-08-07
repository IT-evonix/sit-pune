import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const AIMLImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/aiml/international-initiatives/AIT-2025.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/aiml/international-initiatives/APARNA.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/aiml/international-initiatives/Dubai.webp",
  },  
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/aiml/international-initiatives/Samarth-Bhadane.webp",
  },  
  {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/aiml/international-initiatives/SANSKAR.webp",
  },  
  {
    id: 6,
    type: "image",
    src: "/images/innerpages/programe/aiml/international-initiatives/Vedant.webp",
  },  
   
];

export default function Page() {
  return (

    <InfrastructureGallery
      title="International Initiatives"
      images={AIMLImages}
    />
  );
}