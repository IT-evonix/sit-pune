import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const MEImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/student-achievements/student_achievements_1.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/student-achievements/student_achievements_2.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/student-achievements/student_achievements_3.webp",
  }, 
    {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/student-achievements/student_achievements_4.webp",
  }, 
    {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/student-achievements/student_achievements_5.webp",
  }, 
    {
    id: 6,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/student-achievements/student_achievements_6.webp",
  }, 
    {
    id: 7,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/student-achievements/student_achievements_7.webp",
  }, 
    {
    id: 8,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/student-achievements/student_achievements_8.webp",
  }, 
    {
    id:9,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/student-achievements/student_achievements_9.webp",
  }, 

];

export default function Page() {
  return (

    <InfrastructureGallery
      title="Student Achievements"
      images={MEImages}
    />
  );
}