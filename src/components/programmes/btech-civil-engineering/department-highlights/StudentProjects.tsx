"use client";

import InfrastructureGallery, {
  MediaItem,
} from "@/components/InfrastructureGallery";
import Tabs, { TabItem } from "@/components/ui/Tabs";

const studentProjectsImages: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-projects/01_Jib_Crane_Models_Crane-O-Mania_and_Tilt_N_Flow.webp",
  },
  {
    id: 2,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-projects/02_Testing_of_Structure_Model_in_Open_Channel_Flow.webp",
  },
  {
    id: 3,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-projects/03_Team_with_Empire_State_Building_Model.webp",
  },
  {
    id: 4,
    type: "image",
    src: "/images/innerpages/programe/civil-engineering/student-projects/04_Empire_State_Building_Model.webp",
  },
];

const tabsData: TabItem[] = [
  {
    id: "studentProjectPhotos",
    title: "Project Photos",
    content: (
      <>
        <InfrastructureGallery title="" images={studentProjectsImages} />
      </>
    ),
  },
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
