import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const AIMLImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/aiml/placements/placements1.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/aiml/placements/placements2.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/aiml/placements/placements3.webp",
  },  
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/aiml/placements/placements4.webp",
  },  
  {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/aiml/placements/placements5.webp",
  },  
  {
    id: 6,
    type: "image",
    src: "/images/innerpages/programe/aiml/placements/placements6.webp",
  },  
  {
    id: 7,
    type: "image",
    src: "/images/innerpages/programe/aiml/placements/placements7.webp",
  }, 
  {
    id: 8,
    type: "image",
    src: "/images/innerpages/programe/aiml/placements/placements8.webp",
  }, 
  {
    id: 9,
    type: "image",
    src: "/images/innerpages/programe/aiml/placements/placements9.webp",
  }, 
  {
    id: 10,
    type: "image",
    src: "/images/innerpages/programe/aiml/placements/placements10.webp",
  }, 
  {
    id: 11,
    type: "image",
    src: "/images/innerpages/programe/aiml/placements/placements11.webp",
  },  
];

export default function Page() {
  return (

    <InfrastructureGallery
      title="Placements"
      images={AIMLImages}
    />
  );
}