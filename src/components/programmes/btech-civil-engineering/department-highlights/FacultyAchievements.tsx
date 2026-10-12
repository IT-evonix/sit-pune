import InfrastructureGallery, { MediaItem } from "@/components/InfrastructureGallery";

const facultyAchievementsImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/faculty-achievements/Civil_FA_1_Patent.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/faculty-achievements/Civil_FA_2_Research_Grant.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/faculty-achievements/Civil_FA_3_UYIR_Hackathon.webp",
  },
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/faculty-achievements/Civil_FA_4_UYIR_Hackathon.webp",
  },
  {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/faculty-achievements/Civil_FA_5_Best_Paper_ICMLBDA.webp",
  },
  {
    id: 6,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/faculty-achievements/Civil_FA_6_Best_Paper_ICMLBDA.webp",
  },
];

export default function Page() {
  return (
    <InfrastructureGallery
      title="Faculty Achievements"
      images={facultyAchievementsImages}
    />
  );
}