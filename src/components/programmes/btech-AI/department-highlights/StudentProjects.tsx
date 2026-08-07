import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const AIMLImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/aiml/student-projects/student-projects1.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/aiml/student-projects/student-projects2.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/aiml/student-projects/student-projects3.webp",
  }, 
    {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/aiml/student-projects/student-projects4.webp",
  }, 
    {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/aiml/student-projects/student-projects5.webp",
  }, 
    {
    id: 6,
    type: "image",
    src: "/images/innerpages/programe/aiml/student-projects/student-projects6.webp",
  }, 
    {
    id: 7,
    type: "image",
    src: "/images/innerpages/programe/aiml/student-projects/student-projects7.webp",
  }, 
    {
    id: 8,
    type: "image",
    src: "/images/innerpages/programe/aiml/student-projects/student-projects8.webp",
  }, 
    {
    id:9,
    type: "image",
    src: "/images/innerpages/programe/aiml/student-projects/student-projects9.webp",
  }, 
  {
    id:10,
    type: "image",
    src: "/images/innerpages/programe/aiml/student-projects/student-projects10.webp",
  }, 
];

export default function Page() {
  return (

    <InfrastructureGallery
      title="Student Projects"
      images={AIMLImages}
    />
  );
}