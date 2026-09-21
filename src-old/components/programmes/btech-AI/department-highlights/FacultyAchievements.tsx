import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const AIMLImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/aiml/faculty-achievements/FA-2.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/aiml/faculty-achievements/FA-3.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/aiml/faculty-achievements/FA-4.webp",
  },  
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/aiml/faculty-achievements/FA-5.webp",
  },  
  {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/aiml/faculty-achievements/FA-6.webp",
  },  
  {
    id: 6,
    type: "image",
    src: "/images/innerpages/programe/aiml/faculty-achievements/FA-7.webp",
  },  
  
];

export default function Page() {
  return (

    <InfrastructureGallery
      title="Faculty Achievements"
      images={AIMLImages}
    />
  );
}