import InfrastructureGallery, { MediaItem } from "@/components/InfrastructureGallery";

const appliedScienceStudentAchievements: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/applied-science/student-achievements/student-achievements1.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/applied-science/student-achievements/student-achievements2.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/applied-science/student-achievements/student-achievements5.webp",
  },
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/applied-science/student-achievements/student-achievements6.webp",
  },
  {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/applied-science/student-achievements/student-achievements7.jpg",
  },
  {
    id: 6,
    type: "image",
    src: "/images/innerpages/programe/applied-science/student-achievements/student-achievements8.jpg",
  },
  {
    id: 7,
    type: "image",
    src: "/images/innerpages/programe/applied-science/student-achievements/student-achievements9.jpg",
  },
  {
    id: 8,
    type: "image",
    src: "/images/innerpages/programe/applied-science/student-achievements/student-achievements12.jpg",
  },
  {
    id: 9,
    type: "image",
    src: "/images/innerpages/programe/applied-science/student-achievements/student-achievements13.jpg",
  },
  {
    id: 10,
    type: "image",
    src: "/images/innerpages/programe/applied-science/student-achievements/student-achievements14.jpg",
  },
  {
    id: 11,
    type: "image",
    src: "/images/innerpages/programe/applied-science/student-achievements/student-achievements15.jpg",
  },
];

export default function Page() {
  return (
    <InfrastructureGallery
      title="Student Achievements"
      images={appliedScienceStudentAchievements}
    />
  );
}
