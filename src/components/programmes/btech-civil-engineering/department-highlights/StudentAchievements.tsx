import InfrastructureGallery, { MediaItem } from "@/components/InfrastructureGallery";

const studentAchievementsImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-achievements/01_Pranav_Jadhav_Final_Year_Project_Certificate.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-achievements/02_Tirth_Vaddoria_Final_Year_Project_Certificate.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-achievements/03_Riya_Vishwanath_Final_Year_Project_Certificate.webp",
  },
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-achievements/04_Ria_Rai_Final_Year_Project_Certificate.webp",
  },
  {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-achievements/05_Arpita_Dubey_Certificate_Presentation.webp",
  },
  {
    id: 6,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-achievements/05_Merit_Scholarship_Abhisheksing_Pardeshi.webp",
  },
  {
    id: 7,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-achievements/06_3D_Printing_Runner_Up_Team.webp",
  },
  {
    id: 8,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-achievements/06_Committee_Group_Photo.webp",
  },
  {
    id: 9,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-achievements/07_ASCE_Symposium_Team_Photo.webp",
  },
  {
    id: 10,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-achievements/07_Investiture_Ceremony_1.webp",
  },
  {
    id: 11,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-achievements/08_ASCE_Runner_Up_Certificate.webp",
  },
  {
    id: 12,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-achievements/08_Arpita_Dubey_Certificate.webp",
  },
  {
    id: 13,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-achievements/09_ASCE_Second_Place_Certificate.webp",
  },
  {
    id: 14,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-achievements/09_Avishruti_Das_Certificate_Presentation.webp",
  },
  {
    id: 15,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-achievements/10_BoB_Best_AllRounder_Tirth_Vaddoria.webp",
  },
  {
    id: 16,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-achievements/10_Investiture_Ceremony_2.webp",
  },
  {
    id: 17,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-achievements/11_Avishruti_Das_Certificate.webp",
  },
  {
    id: 18,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-achievements/11_BoB_Best_Academics_Muskan.webp",
  },
  {
    id: 19,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-achievements/12_BoB_Awardees_Display.webp",
  },
  {
    id: 20,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-achievements/13_BoB_Group_Photo.webp",
  },
  {
    id: 21,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-achievements/14_BoB_Cheque_Presentation.webp",
  },
];

export default function Page() {
  return (
    <InfrastructureGallery
      title="Student Achievements"
      images={studentAchievementsImages}
    />
  );
}