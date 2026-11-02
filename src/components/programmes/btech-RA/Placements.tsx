import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";


const RAImages: MediaItem[] = [
{
  id: 1,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/placements/placement1.webp",
},
{
  id: 2,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/placements/placement2.webp",
},
{
  id: 3,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/placements/placement3.webp",
},
{
  id: 4,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/placements/placement4.webp",
},
{
  id: 5,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/placements/placement5.webp",
},
{
  id: 6,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/placements/placement6.webp",
},
{
  id: 7,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/placements/placement7.webp",
},
{
  id: 8,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/placements/placement8.webp",
},
{
  id: 9,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/placements/placement9.webp",
},
{
  id: 10,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/placements/placement10.webp",
},
{
  id: 11,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/placements/placement11.webp",
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