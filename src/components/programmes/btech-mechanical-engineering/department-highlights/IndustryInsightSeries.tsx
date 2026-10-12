import InfrastructureGallery, {  MediaItem, } from "@/components/InfrastructureGallery";

const MEImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/industry-insight-series/industry_insight_series_1.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/industry-insight-series/industry_insight_series_2.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/industry-insight-series/industry_insight_series_3.webp",
  },  
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/industry-insight-series/industry_insight_series_4.webp",
  },  
  {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/industry-insight-series/industry_insight_series_5.webp",
  },  
  {
    id: 6,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/industry-insight-series/industry_insight_series_6.webp",
  },  
  {
    id: 7,
    type: "image",
    src: "/images/innerpages/programe/mechanical-engineering/industry-insight-series/industry_insight_series_7.webp",
  },
];


export default function Page() {
  return (

    <InfrastructureGallery
      title="Industry Insight Series"
      images={MEImages}
    />
  );
}