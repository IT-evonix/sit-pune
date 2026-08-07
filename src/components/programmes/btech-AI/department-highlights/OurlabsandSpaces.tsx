import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const AIMLImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/aiml/industry-insight-series/AISEE.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/aiml/industry-insight-series/AMOL-MAHAJAN.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/aiml/industry-insight-series/Anil-Kumar-Gupta.webp",
  },  
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/aiml/industry-insight-series/Harshal-Raut.webp",
  },  
  {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/aiml/industry-insight-series/Parvez-Khan.webp",
  },  
  {
    id: 6,
    type: "image",
    src: "/images/innerpages/programe/aiml/industry-insight-series/Sanjay-Sane.webp",
  },  
  {
    id: 7,
    type: "image",
    src: "/images/innerpages/programe/aiml/industry-insight-series/Shridhar-Sudarshan-Dudam.webp",
  },
  {
    id: 8,
    type: "image",
    src: "/images/innerpages/programe/aiml/industry-insight-series/SMITA-MAHAJAN.webp",
  },  
  {
    id: 9,
    type: "image",
    src: "/images/innerpages/programe/aiml/industry-insight-series/Soham-Dadarkar.webp",
  },  
  {
    id: 10,
    type: "image",
    src: "/images/innerpages/programe/aiml/industry-insight-series/Umesh-Patharkar.webp",
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