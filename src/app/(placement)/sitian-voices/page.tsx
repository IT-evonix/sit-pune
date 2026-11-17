import React from "react";
import InnerpageBanner from "@/components/InnerpageBanner";
import Image from "next/image";
import LabsAndSpaces from "@/components/ui/LabsAndSpaces";

const sitianVoicesGallery = [
  {
    id: "1",
    title: "BMC Pre-Placement Talk",
    image: "/images/innerpages/placement/sitianGallery/sitianGallery1.webp",
    alt: "BMC Pre-Placement Talk",
  },
  {
    id: "2",
    title: "NUTANIX Guest Lecture",
    image: "/images/innerpages/placement/sitianGallery/sitianGallery2.webp",
    alt: "NUTANIX Guest Lecture",
  },
  {
    id: "3",
    title: "NUTANIX Guest Lecture",
    image: "/images/innerpages/placement/sitianGallery/sitianGallery3.webp",
    alt: "NUTANIX Guest Lecture",
  },
  {
    id: "4",
    title: "Students participation in Guest Lecture",
    image: "/images/innerpages/placement/sitianGallery/sitianGallery4.webp",
    alt: "Students participation in Guest Lecture",
  },
  {
    id: "5",
    title: "NICE Company – Contest Winners",
    image: "/images/innerpages/placement/sitianGallery/sitianGallery5.webp",
    alt: "NICE Company – Contest Winners",
  },
  {
    id: "6",
    title: "NICE Hackathon Winners",
    image: "/images/innerpages/placement/sitianGallery/sitianGallery6.webp",
    alt: "NICE Hackathon Winners",
  },
  {
    id: "7",
    title: "Leadership meeting of PACCAR India",
    image: "/images/innerpages/placement/sitianGallery/sitianGallery7.webp",
    alt: "Leadership meeting of PACCAR India",
  },
  {
    id: "8",
    title: "Students visit to Dassault Systemes",
    image: "/images/innerpages/placement/sitianGallery/sitianGallery8.webp",
    alt: "Students visit to Dassault Systemes",
  },
  {
    id: "9",
    title: "SAS and Tracelink Company Selects",
    image: "/images/innerpages/placement/sitianGallery/sitianGallery9.webp",
    alt: "SAS and Tracelink Company Selects",
  },
  {
    id: "10",
    title: "Pre-Placement Training",
    image: "/images/innerpages/placement/sitianGallery/sitianGallery10.webp",
    alt: "Pre-Placement Training",
  },
  {
    id: "11",
    title: "UBI Soft Online Test",
    image: "/images/innerpages/placement/sitianGallery/sitianGallery11.webp",
    alt: "UBI Soft Online Test",
  },
  
  
];

const additionalFounderStories = [
  {
    name: "Himani Arora",
    company: "ZS Associates",
    batch: "Computer Science  2022-26",
    image: "/images/home/testimonials/Himani-Arora.webp",
    description:
      "SIT provided me with the right guidance, valuable opportunities, and a strong foundation for my career. The constant support from faculty and industry exposure helped me grow both personally and professionally. I’m grateful to be part of a community that encourages students to reach their full potential.",
  },
  {
    name: "Priyanshu Mohanty",
    company: "NOMURA",
    batch: "Robotics & Automation  2023-27",
    image: "/images/home/testimonials/Priyanshu-Mohanty.webp",
    description:
      "The Placement Cell at SIT, Pune played an important role throughout my placement journey. Their structured preparation, prompt communication, guidance and continuous support created an environment where students could focus on performing their best. More than the training itself, it was their willingness to help at every stage that made the experience successful and truly memorable. I'm sincerely grateful for their efforts and commitment to every student's success.",
  },
  {
    name: "Anvesha Singh",
    company: "SAS R&D",
    batch: "Computer Science 2023-27",
    image: "/images/home/testimonials/Anvesha-Singh.webp",
    description:
      "One of the most valuable aspects of my time at SIT has been the opportunity to combine academic learning with research and practical application. The encouragement from faculty members to explore emerging technologies, publish research work, and present at conferences helped me develop both technical expertise and confidence. Through these experiences, I developed a deeper appreciation for research, critical thinking, and lifelong learning. The training and placement support at SIT further helped me strengthen my industry-relevant skills, prepare for recruitment processes, and gain confidence in transitioning from academia to the professional world.",
  },
];

const page = () => {
  return (
    <div className="">
      <InnerpageBanner
        title={`SITian Voices & Photo Gallery`}
        breadcrumbs={[
          { label: "Placements" },
          { label: "SITian Voices & Photo Gallery" },
        ]}
      />
      <div className="Innerpage_main">
        <div className="aicte_main">
          <div className="container">
            <div className="heading innerpageheading text-center">SITian Voices</div>
            <div className="founder_stories_inner">
              <div className="founder_stories_box">
                <div className="founder_stories_text">
                  <p>
                    <Image
                      className="top_icon"
                      src="/images/innerpages/founder-stories/founder-img/quotes.png"
                      alt="Quote"
                      width={50}
                      height={50}
                    />
                    First company, first attempt. And I won't take all the credit for that. The trainings were solid, but what I'll really remember is the day of my Microsoft interview — placement coordinators who were already placed and working full time were on call with me the entire time. Guiding me, keeping me sane, and then waiting with me till the result came out. These are people who had nothing to gain, but they showed up anyway. That's the placement cell at SIT.
                    <Image
                      className="bottom_icon"
                      src="/images/innerpages/founder-stories/founder-img/quotes.png"
                      alt="Quote"
                      width={50}
                      height={50}
                    />
                  </p>

                  <div className="founder_name">Dhwani Bhavankar</div>
                  <div className="company_name">
                    Microsoft
                  </div>
                  <div className="batchyear">AIML  2022-26</div>
                </div>

                <div className="founder_stories_img">
                  <div className="testimonials_line"></div>

                  <div className="founder_img">
                    <Image
                      className="img-fluid"
                      src="/images/home/testimonials/Dhwani-Bhavankar.webp"
                      alt="Dhwani Bhavankar"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </div>
              <div className="founder_stories_box">
                <div className="founder_stories_text">
                  <p>
                    <Image
                      className="top_icon"
                      src="/images/innerpages/founder-stories/founder-img/quotes.png"
                      alt="Quote"
                      width={50}
                      height={50}
                    />
                    The Machines actually work like they do in theory. That was my first comment when I joined Bharat Forge as one-year intern. I am truly grateful for the Placement Cell at SIT Pune, who played the instrumental role in helping me achieve this feat. From my internship to my placement at Bharat Forge, I am grateful to have had the entire team at Placement Cell for being the constant in my growing journey towards engineering excellence.
                    <Image
                      className="bottom_icon"
                      src="/images/innerpages/founder-stories/founder-img/quotes.png"
                      alt="Quote"
                      width={50}
                      height={50}
                    />
                  </p>

                  <div className="founder_name">Aditya Parab</div>
                  <div className="company_name">Bharat Forge</div>
                  <div className="batchyear">Mechanical Engineering 2022-26</div>
                </div>

                <div className="founder_stories_img">
                  <div className="testimonials_line"></div>

                  <div className="founder_img">
                    <Image
                      className="img-fluid"
                      src="/images/home/testimonials/Aditya-Parab.webp"
                      alt="Aditya Parab"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </div>
              {additionalFounderStories.map((story) => (
                <div className="founder_stories_box" key={story.name}>
                  <div className="founder_stories_text">
                    <p>
                      <Image
                        className="top_icon"
                        src="/images/innerpages/founder-stories/founder-img/quotes.png"
                        alt="Quote"
                        width={50}
                        height={50}
                      />
                      {story.description}
                      <Image
                        className="bottom_icon"
                        src="/images/innerpages/founder-stories/founder-img/quotes.png"
                        alt="Quote"
                        width={50}
                        height={50}
                      />
                    </p>
                    <div className="founder_name">{story.name}</div>
                    <div className="company_name">{story.company}</div>
                    <div className="batchyear">{story.batch}</div>
                  </div>
                  {story.image && <div className="founder_stories_img">
                    <div className="testimonials_line"></div>
                    <div className="founder_img">
                      <Image
                        className="img-fluid"
                        src={story.image}
                        alt={story.name}
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>}
                </div>
              ))}
            </div>

            <div className="SITian_gallery" style={{ textAlign: "center" }}>
                {/* <div className="heading innerpageheading text-center">SITian Photo Gallery</div> */}
                <LabsAndSpaces
                  departments={[
                    {
                      id: "sitian-voices",
                      labs: [
                        {
                          id: "photo-gallery",
                          title: "SITian Photo Gallery",
                          gallery: sitianVoicesGallery,
                        },
                      ],
                    },
                  ]}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
