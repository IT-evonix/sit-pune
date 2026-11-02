"use client";

import InfrastructureGallery, {
  MediaItem,
} from "@/components/InfrastructureGallery";
// import StudentProjectList from "@/components/ui/StudentProjectList";
import Tabs, { TabItem } from "@/components/ui/Tabs";

const RAImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/robot-automation/student-projects/studentprojects1.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/robot-automation/student-projects/studentprojects2.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/robot-automation/student-projects/studentprojects3.webp",
  },
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/robot-automation/student-projects/studentprojects4.webp",
  },

];
const tabsData: TabItem[] = [
  {
    id: "studentProjectPhotos",
    title: "Project Photos",
    content: (
      <>
        <InfrastructureGallery title="" images={RAImages} />
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
