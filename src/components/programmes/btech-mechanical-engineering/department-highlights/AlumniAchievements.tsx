import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const MEImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/alumni-achievments/alumni-achievments_1.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/alumni-achievments/alumni-achievments_2.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/alumni-achievments/alumni-achievments_3.webp",
  },  
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/alumni-achievments/alumni-achievments_4.webp",
  },  
  
];

export default function Page() {
  return (

    <InfrastructureGallery
      title="Alumni Achievements"
      images={MEImages}
    />
  );
}