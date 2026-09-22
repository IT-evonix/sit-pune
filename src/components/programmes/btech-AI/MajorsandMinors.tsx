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
        <MajorMinorProgrammes departmentId="aiml" />
      </div>
    </div>
  );
};

export default MajorsandMinors;
