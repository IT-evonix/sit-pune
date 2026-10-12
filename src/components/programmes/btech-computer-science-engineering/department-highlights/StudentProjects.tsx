"use client";

import InfrastructureGallery, {
  MediaItem,
} from "@/components/InfrastructureGallery";
// import StudentProjectList from "@/components/ui/StudentProjectList";
import Tabs, { TabItem } from "@/components/ui/Tabs";

const ComputerScienceImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/computer-science/student-projects/student-projects-1.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/computer-science/student-projects/student-projects-2.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/computer-science/student-projects/student-projects-3.webp",
  },
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/computer-science/student-projects/student-projects-4.webp",
  },
  {
    id: 5,
    type: "image",
    src: "/images/innerpages/programe/computer-science/student-projects/student-projects-5.webp",
  },
  {
    id: 6,
    type: "image",
    src: "/images/innerpages/programe/computer-science/student-projects/student-projects-6.webp",
  },
  {
    id: 7,
    type: "image",
    src: "/images/innerpages/programe/computer-science/student-projects/student-projects-7.webp",
  },
  {
    id: 8,
    type: "image",
    src: "/images/innerpages/programe/computer-science/student-projects/student-projects-8.webp",
  },
  {
    id: 9,
    type: "image",
    src: "/images/innerpages/programe/computer-science/student-projects/student-projects-9.webp",
  },
  {
    id: 10,
    type: "image",
    src: "/images/innerpages/programe/computer-science/student-projects/student-projects-10.webp",
  },
];
const tabsData: TabItem[] = [
  {
    id: "studentProjectPhotos",
    title: "Project Photos",
    content: (
      <>
        <InfrastructureGallery title="" images={ComputerScienceImages} />
      </>
    ),
  },
  // {
  //   id: "studentProjectList",
  //   title: "Student Project List",
  //   content: <>
  //       <StudentProjectList department="AIML" />
  //     </>,
  // },
];

export default function Page() {
  return (
    <div className="main_content">
      <div className="student_projects_main">
        <div className="div">
          <Tabs tabs={tabsData} />
        </div>
      </div>
    </div>
  );
}
