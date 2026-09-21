"use client";

import InfrastructureGallery, {
  MediaItem,
} from "@/components/InfrastructureGallery";
import StudentProjectList from "@/components/ui/StudentProjectList";
import Tabs, { TabItem } from "@/components/ui/Tabs";

const RAIImages: MediaItem[] = [
// {
//   id: 1,
//   type: "image",
//   src: "/images/innerpages/programe/entc/student-projects/student-projects-1.webp",
// },

  
];
// const tabsData: TabItem[] = [
//   {
//     id: "studentProjectPhotos",
//     title: "Project Photos",
//     content: (
//       <>
//         <InfrastructureGallery title="" images={RAIImages} />
//       </>
//     ),
//   },
//   {
//     id: "studentProjectList",
//     title: "Student Project List",
//     content: <>
//         <StudentProjectList department="ENTC" />
//       </>,
//   },
// ];

export default function Page() {
  return (
    <div className="main_content">
      <div className="student_projects_main">
        {/* <div className="div">
          <Tabs tabs={tabsData} />
        </div> */}
        <div className="subheading">
           Coming Soon
        </div>
      </div>
    </div>
  );
}
