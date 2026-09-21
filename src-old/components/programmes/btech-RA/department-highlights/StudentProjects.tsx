"use client";

import InfrastructureGallery, {
  MediaItem,
} from "@/components/InfrastructureGallery";
import StudentProjectList from "@/components/ui/StudentProjectList";
import Tabs, { TabItem } from "@/components/ui/Tabs";

const RAImages: MediaItem[] = [
// {
//   id: 1,
//   type: "image",
//   src: "/images/innerpages/programe/entc/student-projects/student-projects-1.webp",
// },

  
];
const tabsData: TabItem[] = [
  // {
  //   id: "studentProjectPhotos",
  //   title: "Project Photos",
  //   content: (
  //     <>
  //       <InfrastructureGallery title="" images={RAImages} />
  //     </>
  //   ),
  // },
  // {
  //   id: "studentProjectList",
  //   title: "Student Project List",
  //   content: <>
  //       <StudentProjectList department="RA" />
  //     </>,
  // },
];

export default function Page() {
  return (
    <div className="main_content">
      <div className="student_projects_main">
        {/* <div className="div">
          <Tabs tabs={tabsData} />
        </div> */}
        <div className="sub-heading">Coming soon</div>
      </div>
    </div>
  );
}
