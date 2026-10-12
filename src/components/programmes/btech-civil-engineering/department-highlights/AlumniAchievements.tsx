import InfrastructureGallery, { MediaItem } from "@/components/InfrastructureGallery";

const alumniAchievementsImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/alumni-achievments/Civil_Event_01_Tirth_BoB_All_Rounder.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/alumni-achievments/Civil_Event_02a_Muskan_Gold_Medal.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/alumni-achievments/Civil_Event_02b_Muskan_BoB_Best_Academics.webp",
  },
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/alumni-achievments/Civil_Event_04_ASCE_3D_Printing_2nd_Rank.webp",
  },
  {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/alumni-achievments/Civil_Event_05_Haris_TUHH_Global_Immersion.webp",
  },
  {
    id: 6,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/alumni-achievments/Civil_Event_06_Shreshtha_RUDN_Moscow.webp",
  },
  {
    id: 7,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/alumni-achievments/Civil_Event_07_Shreshtha_Hertie_Germany.webp",
  },
  {
    id: 8,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/alumni-achievments/Civil_Event_08_IFAT_University_Challenge.webp",
  },
  {
    id: 9,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/alumni-achievments/Civil_Event_09b_Protathalitis_Champion.webp",
  },
];

export default function Page() {
  return (
    <InfrastructureGallery
      title="Alumni Achievements"
      images={alumniAchievementsImages}
    />
  );
}