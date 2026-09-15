import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";

const RobotartificalImages: MediaItem[] = [
{
  id: 1,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/industry-insight-series/industry-insight-series-1.webp",
},
{
  id: 2,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/industry-insight-series/industry-insight-series-2.webp",
},
{
  id: 3,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/industry-insight-series/industry-insight-series-3.webp",
},
{
  id: 4,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/industry-insight-series/industry-insight-series-4.webp",
},
{
  id: 5,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/industry-insight-series/industry-insight-series-5.webp",
},
{
  id: 6,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/industry-insight-series/industry-insight-series-6.webp",
},
{
  id: 7,
  type: "image",
  src: "/images/innerpages/programe/robot-automation/industry-insight-series/industry-insight-series-7.webp",
},

];


export default function Page() {
  return (

    <InfrastructureGallery
      title="Industry Insight Series"
      images={RobotartificalImages}
    />
  );
}