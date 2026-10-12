import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const ComputerScienceImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/computer-science/faculty-achievements/faculty-achievements1.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/computer-science/faculty-achievements/faculty-achievements2.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/computer-science/faculty-achievements/faculty-achievements3.webp",
  },  
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/computer-science/faculty-achievements/faculty-achievements4.webp",
  },  
  {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/computer-science/faculty-achievements/faculty-achievements5.webp",
  },  
];

export default function Page() {
  return (

    <InfrastructureGallery
      title="Faculty Achievements"
      images={ComputerScienceImages}
    />
  );
}