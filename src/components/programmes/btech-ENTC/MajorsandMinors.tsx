// import React from 'react'
// import Image from 'next/image'

// const MajorsandMinors = () => {
//   return (
//     <div>
//       <div className="heading"><span> Majors and Minors</span></div>
//         <div className="MajorsandMinors_box">
//             <Image 
//                 src="/images/innerpages/programe/entc/majors-and-minors/Copy-of-E&TC-Congratulations-1.webp"
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
// import Image from "next/image";
import MajorMinorProgrammes from "@/components/ui/MajorMinorProgrammes";

const MajorsandMinors = () => {
  return (
    <div className="main_content">
      <div className="heading innerpageheading">
        Majors and Minors
      </div>
      <div className="MajorsandMinors_box">
        {/* <Image
          src="/images/innerpages/programe/aiml/majors-and-minors/AIML-Majors-and-Minors.webp"
          alt="Majors and Minors"
          width={700}
          height={600}
          className="img-fluid"
        /> */}
        <MajorMinorProgrammes departmentId="entc" />
      </div>
    </div>
  );
};

export default MajorsandMinors;
