import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const RobotartificalImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/robot-automation/international-initiatives/international-initiatives-1.webp",
  },
   {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/robot-automation/international-initiatives/international-initiatives-2.webp",
  },
   {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/robot-automation/international-initiatives/international-initiatives-3.webp",
  },
   {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/robot-automation/international-initiatives/international-initiatives-4.webp",
  },

   
];

export default function Page() {
  return (

    <InfrastructureGallery
      title="International Initiatives"
      images={RobotartificalImages}
    />
  );
}