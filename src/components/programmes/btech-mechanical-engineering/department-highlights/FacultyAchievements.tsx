import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const MEImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/faculty-achievements/faculty_achievements_1.png",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/faculty-achievements/faculty_achievements_2.webp",
  },
  
];

export default function Page() {
  return (

    <InfrastructureGallery
      title="Faculty Achievements"
      images={MEImages}
    />
  );
}