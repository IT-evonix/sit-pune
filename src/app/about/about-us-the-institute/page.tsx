import React from 'react'

const page = () => {
  return (
    <div>
        <h1>About us</h1>
    </div>
  )
}

export default page


// 'use client';

// import Link from 'next/link';
// import React from 'react';

// interface SidebarItem {
//   title: string;
//   link: string;
// }

// interface LeftSidebarProps {
//   heading: string;
//   menuItems: SidebarItem[];
// }

// const LeftSidebar = ({
//   heading,
//   menuItems = [],
// }: LeftSidebarProps) => {
//   return (
//     <div className="sidebar-wrapper">
//       <div className="program-title">{heading}</div>

//       <ul className="sidebar-menu list-unstyled mb-0">
//         {menuItems.map((item: SidebarItem, index: number) => (
//           <li key={index} className="sidebar-item">
//             <Link href={item.link} className="sidebar-link">
//               {item.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default LeftSidebar;


//////////////////////////////////////////////////////////////////////////
// leftsidebar code

// 'use client';

// import Link from 'next/link';
// import React from 'react';

// interface SidebarItem {
//   title: string;
//   link: string;
// }

// interface LeftSidebarProps {
//   heading: string;
//   menuItems: SidebarItem[];
// }

// const LeftSidebar = ({
//   heading,
//   menuItems = [],
// }: LeftSidebarProps) => {
//   return (
//     <div className="sidebar-wrapper">
//       <div className="program-title">{heading}</div>

//       <ul className="sidebar-menu list-unstyled mb-0">
//         {menuItems.map((item: SidebarItem, index: number) => (
//           <li key={index} className="sidebar-item">
//             <Link href={item.link} className="sidebar-link">
//               {item.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default LeftSidebar;

/////////////////////////////////////////////////////////////////////////
// add in leftsidebar column
{/* <LeftSidebar
              heading="B.Tech AIML"
              menuItems={programmeMenu}
            />  */}

////////////////////////////////////////////////////////////////////////////
// add in page above return -----------------------
// const ProgrammePage = () => {
//   const programmeMenu = [
//     {
//       title: 'Overview',
//       link: '/overview',
//     },
//     {
//       title: 'Faculty Profile',
//       link: '/faculty-profile',
//     },
//     {
//       title: 'Labs & Infrastructure',
//       link: '/labs-infrastructure',
//     },
//     {
//       title: 'Eligibility',
//       link: '/eligibility',
//     },
//     {
//       title: 'Programme Structure',
//       link: '/programme-structure',
//     },
//     {
//       title: 'Outcome Based Education',
//       link: '/outcome-based-education',
//     },
//     {
//       title: 'Recent Achievements & Placement Highlights',
//       link: '/ecent-achievements-and-placement-highlights',
//     },
//     {
//       title: 'Stakeholder Feedback',
//       link: '/stakeholder-feedback',
//     },
//     {
//       title: 'Programme Structure',
//       link: '/student-testimonials',
//     },
//     {
//       title: 'FAQ',
//       link: '/FAQ',
//     },
//     {
//       title: 'Newsletter',
//       link: '/newsletter',
//     },
//   ];