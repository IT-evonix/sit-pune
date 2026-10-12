import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const ComputerScienceImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/computer-science/student-achievements/students_acheivement_1.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/computer-science/student-achievements/students_acheivement_2.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/computer-science/student-achievements/students_acheivement_3.webp",
  }, 
];

export default function Page() {
  return (

    <InfrastructureGallery
      title="Student Achievements"
      images={ComputerScienceImages}
    />
  );
}