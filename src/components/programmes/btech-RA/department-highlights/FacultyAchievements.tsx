import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const RAImages: MediaItem[] = [
 {
  id: 1,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/faculty-achievements/faculty-achievements-1.webp",
},
{
  id: 2,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/faculty-achievements/faculty-achievements-2.webp",
},
{
  id: 3,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/faculty-achievements/faculty-achievements-3.webp",
},

 
  
];

export default function Page() {
  return (

    <InfrastructureGallery
      title="Faculty Achievements"
      images={RAImages}
    />
  );
}