import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const RAImages: MediaItem[] = [
{
  id: 1,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/placements/Major-Recruiters-1.webp",
},
{
  id: 2,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/placements/Major-Recruiters-2.webp",
},
{
  id: 3,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/placements/Major-Recruiters-3.webp",
},

 
];

export default function Page() {
  return (

    <InfrastructureGallery
      title="Placements"
      images={RAImages}
    />
  );
}