import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";

const ComputerScienceImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/computer-science/industry-insight-series/Industry 1.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/computer-science/industry-insight-series/industry-insight-series2.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/computer-science/industry-insight-series/industry-insight-series3.webp",
  },  
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/computer-science/industry-insight-series/industry-insight-series4.webp",
  },  
  {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/computer-science/industry-insight-series/industry-insight-series5.webp",
  },  
];


export default function Page() {
  return (

    <InfrastructureGallery
      title="Industry Insight Series"
      images={ComputerScienceImages}
    />
  );
}