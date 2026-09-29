import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="placementmain">
      <div className="placementmain">
        <div className="container-fluid">
          <div className="profilemain">
                    <div className="profilecontent">
                      <div className="heading innerpageheading">
                        About the Department{" "}
                      </div>
                      <p className="m-0 p-0">
                        The Career Development & Outcomes Cell at Symbiosis Institute of Technology (SIT) is committed to preparing students for successful and rewarding careers through a strong ecosystem of industry engagement, career development, and placement support. The institute provides dedicated infrastructure, including seminar halls, interview rooms, discussion spaces, and modern facilities to ensure the smooth conduct of campus recruitment activities.
                      </p>
                      <p>SIT has established enduring relationships with leading national and global organizations across diverse industry sectors. Students are equipped for campus recruitment through structured training in technical competencies, aptitude, communication, interview skills, and professional development, enabling them to confidently meet evolving industry expectations.</p>
                    </div>
                    <div className="profileImage">
                      <Image
                        src="/images/innerpages/programe/aiml/Sumit-Kumarnew.webp"
                        alt="Sumit Kumar"
                        width={320}
                        height={380}
                      />
                      <div className="profileDescription">
                        <div className="profileName">Dr. Sumit Kumar</div>
                        <div className="profileDepartment">
                          <b>Head of Department</b>
                          <div>
                            <span>Professor</span>
                          </div>
                          <span>PhD (Jamia Millia Islamia), M.Tech, B.Tech</span>
                        </div>
                      </div>
                    </div>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default page;
