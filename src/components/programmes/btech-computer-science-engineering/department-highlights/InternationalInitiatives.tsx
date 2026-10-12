import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const ComputerScienceImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/computer-science/international-initiatives/international-initiatives1.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/computer-science/international-initiatives/international-initiatives2.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/computer-science/international-initiatives/international-initiatives3.webp",
  },  
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/computer-science/international-initiatives/international-initiatives4.webp",
  },  
   
];

export default function Page() {
  return (

    <InfrastructureGallery
      title="International Initiatives"
      images={ComputerScienceImages}
    />
  );
}