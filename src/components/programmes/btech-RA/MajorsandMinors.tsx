// import React from 'react'
// import Image from 'next/image'

// const MajorsandMinors = () => {
//   return (
//     <div>
//       <div className="heading"><span> Majors and Minors</span></div>
//         <div className="MajorsandMinors_box">
//             <Image 
//                 src="/images/innerpages/programe/robot-automation/majors-and-minors/Majors.webp"
//                 alt="Majors and Minors"
//                 width={700}
//                 height={600}
//                 className="img-fluid"
//             />
//         </div>
//     </div>
//   )
// }

// export default MajorsandMinors



import React from "react";
import MajorMinorProgrammes from "@/components/ui/MajorMinorProgrammes";

const MajorsandMinors = () => {
  return (
    <div className="main_content">
      <div className="heading innerpageheading">
        Majors and Minors
      </div>
      <div className="MajorsandMinors_box">
        <MajorMinorProgrammes departmentId="robotics-and-automation" />
      </div>
    </div>
  );
};

export default MajorsandMinors;