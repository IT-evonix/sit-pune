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
        <MajorMinorProgrammes departmentId="mechanical-engineering" />
      </div>
    </div>
  );
};

export default MajorsandMinors;
