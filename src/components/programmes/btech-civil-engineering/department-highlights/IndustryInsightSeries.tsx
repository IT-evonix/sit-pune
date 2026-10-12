import InfrastructureGallery, { MediaItem } from "@/components/InfrastructureGallery";

const industryInsightSeriesImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/industry-insight-series/Civil_Ind_01_Expert_Talk_Structural_Geology.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/industry-insight-series/Civil_Ind_02_Stalwart_Talk_Dr_Sudhir_Mehta.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/industry-insight-series/Civil_Ind_03_Industry_Visit_Geberit.webp",
  },
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/industry-insight-series/Civil_Ind_04_Site_Visit_Dura_Longspan.webp",
  },
  {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/industry-insight-series/Civil_Ind_05_Site_Visit_Unique_UHPC.webp",
  },
  {
    id: 6,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/industry-insight-series/Civil_Ind_06_FDP_Revit_BIM_Autodesk.webp",
  },
  {
    id: 7,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/industry-insight-series/Civil_Ind_07_Industry_Conclave_2025.webp",
  },
  {
    id: 8,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/industry-insight-series/Civil_Ind_08_MoU_Larsen_Toubro.webp",
  },
  {
    id: 9,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/industry-insight-series/Civil_Ind_09_MoU_Bentley_Systems.webp",
  },
  {
    id: 10,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/industry-insight-series/Civil_Ind_10_CoE_Bentley_SIT.webp",
  },
  {
    id: 11,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/industry-insight-series/Civil_Ind_11_Future_Tech_Summit_2025.webp",
  },
  {
    id: 12,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/industry-insight-series/Civil_Ind_12_Industry_Expert_Talks.webp",
  },
  {
    id: 13,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/industry-insight-series/Civil_Ind_13_MoU_KHAAS_Group.webp",
  },
  {
    id: 14,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/industry-insight-series/Civil_Ind_14_Industry_Panel_Visit.webp",
  },
];

export default function Page() {
  return (
    <InfrastructureGallery
      title="Industry Insight Series"
      images={industryInsightSeriesImages}
    />
  );
}