import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const AIMLImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/aiml/student-achievements/Abhishek-Sinha.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/aiml/student-achievements/Adarsh-Gautam.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/aiml/student-achievements/Best-paper.webp",
  }, 
    {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/aiml/student-achievements/COday-challenge.webp",
  }, 
    {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/aiml/student-achievements/GATE.webp",
  }, 
    {
    id: 6,
    type: "image",
    src: "/images/innerpages/programe/aiml/student-achievements/Nihar-Ranjan-Mishra.webp",
  }, 
    {
    id: 7,
    type: "image",
    src: "/images/innerpages/programe/aiml/student-achievements/Riddhima-Kiran-Deshmukh.webp",
  }, 
    {
    id: 8,
    type: "image",
    src: "/images/innerpages/programe/aiml/student-achievements/Intel-Unnati-Scholarship.webp",
  }, 
    {
    id:9,
    type: "image",
    src: "/images/innerpages/programe/aiml/student-achievements/VOIS.webp",
  }, 

];

export default function Page() {
  return (

    <InfrastructureGallery
      title="Student Achievements"
      images={AIMLImages}
    />
  );
}