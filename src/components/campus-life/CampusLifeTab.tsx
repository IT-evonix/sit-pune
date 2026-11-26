import Image from "next/image";
import React from "react";

const CampusLife = () => {
  return (
    <div className="main_content">
      <div className="heading innerpageheading">
        Life at SIT Pune – Beyond Academics
      </div>
      <div className="text-justify">
        Experience an enriching campus life at Symbiosis Institute of Technology
        (SIT), Pune, where academics blend with creativity, culture, sports, and
        innovation. From exciting cultural celebrations like Reverb to engaging
        student clubs, technical activities, sports competitions, and vibrant
        campus events, SIT offers students countless opportunities to explore
        their interests, showcase their talents, build meaningful connections,
        and create unforgettable memories.
      </div>
      <div className="campuslifeecardmain">
        <div className="campuslifeecard">
          <div className="campusImage">
            <Image
              src="/images/campus-life/sports/achievements1.webp"
              alt="Achievements image"
              width={1200}
              height={800}
              className="img-fluid"
              priority
            />
          </div>
          <p>lorem ipsum is simply dummy text of the printing</p>
        </div>
        <div className="campuslifeecard">
          <div className="campusImage">
            <Image
              src="/images/campus-life/sports/achievements1.webp"
              alt="Achievements image"
              width={1200}
              height={800}
              className="img-fluid"
              priority
            />
          </div>
          <p>lorem ipsum is simply dummy text of the printing</p>
        </div>
        <div className="campuslifeecard">
          <div className="campusImage">
            <Image
              src="/images/campus-life/sports/achievements1.webp"
              alt="Achievements image"
              width={1200}
              height={800}
              className="img-fluid"
              priority
            />
          </div>
          <p>lorem ipsum is simply dummy text of the printing</p>
        </div>
        <div className="campuslifeecard">
          <div className="campusImage">
            <Image
              src="/images/campus-life/sports/achievements1.webp"
              alt="Achievements image"
              width={1200}
              height={800}
              className="img-fluid"
              priority
            />
          </div>
          <p>lorem ipsum is simply dummy text of the printing</p>
        </div>
        <div className="campuslifeecard">
          <div className="campusImage">
            <Image
              src="/images/campus-life/sports/achievements1.webp"
              alt="Achievements image"
              width={1200}
              height={800}
              className="img-fluid"
              priority
            />
          </div>
          <p>lorem ipsum is simply dummy text of the printing</p>
        </div>
        <div className="campuslifeecard">
          <div className="campusImage">
            <Image
              src="/images/campus-life/sports/achievements1.webp"
              alt="Achievements image"
              width={1200}
              height={800}
              className="img-fluid"
              priority
            />
          </div>
          <p>lorem ipsum is simply dummy text of the printing</p>
        </div>
      </div>
    </div>
  );
};

export default CampusLife;
