import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const MEImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/international-initiatives/SA1.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/international-initiatives/SA2.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/international-initiatives/SA3.webp",
  },  
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/international-initiatives/SA4.webp",
  },  
  {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/international-initiatives/SA5.webp",
  },  
   
];

export default function Page() {
  return (

    <InfrastructureGallery
      title="International Initiatives"
      images={MEImages}
    />
  );
}