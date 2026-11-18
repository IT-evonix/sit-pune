import Image from "next/image";
import React from "react";
import LabsAndSpaces from "@/components/ui/LabsAndSpaces";
import { labsData } from "@/data/labsData";

const sportsGallery = labsData.filter(
  (department) => department.id === "campus-life-sports"
);

const SportsRecreation = () => {
  return (
    <div className="main_content">
      <div className="row">
        <div className="col-md-7">
          <div className="heading innerpageheading">Annual Sports</div>
          <p>
            PROTATHLITIS, our esteemed annual sports fest, is more than just a
            competition; it's a celebration of sportsmanship, unity, and the
            vibrant spirit of our college community. With teams representing
            each branch – Computer Science (CS), IT/AIML, Robotics & Civil,
            Electronics and Telecommunication (ENTC), and Mechanical Engineering
            – the event fosters friendly rivalry and camaraderie among students.
            Dressed in their distinctive branch-specific jerseys, participants
            engage in an array of sports, ranging from traditional favorites
            like football, cricket, and volleyball to newer additions such as
            lawn tennis, badminton, and dodgeball. As our commitment to
            fostering a dynamic sporting environment grows, so does the list of
            sports, ensuring there's something for everyone to enjoy. Join us at
            PROTATHLITIS as we embrace the thrill of competition, celebrate
            athletic prowess, and strengthen the bonds that unite us as a sports
            promoting college community.
          </p>
        </div>
        <div className="col-md-5">
          <Image
            src="/images/campus-life/sports/sports.webp"
            alt="Dr. S.B. Mujumdar"
            width={600}
            height={1068}
            className="img-fluid leader-image"
            priority
          />
        </div>
      </div>

      <div className="row mt-4 mt-sm-5">
        <div className="col-md-12">
          <LabsAndSpaces departments={sportsGallery} />
        </div>
      </div>
    </div>
  );
};

export default SportsRecreation;
