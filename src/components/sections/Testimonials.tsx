"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import NextPrev from "../ui/NextPrev";

type TestimonialType = {
  id: number;
  name: string;
  course: string;
  role: string;
  image: string;
  text: string;
};

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Dhwani Bhavankar",
    course: "AIML  2022-26",
    role: "Microsoft",
    image: "/images/home/testimonials/testimonials2.webp",
    text: "First company, first attempt. And I won't take all the credit for that. The trainings were solid, but what I'll really remember is the day of my Microsoft interview — placement coordinators who were already placed and working full time were on call with me the entire time. Guiding me, keeping me sane, and then waiting with me till the result came out. These are people who had nothing to gain, but they showed up anyway. That's the placement cell at SIT.",
  },
  
  {
    id: 2,
    name: "Aditya Parab",
    course: "Mechanical Engineering 2022-26",
    role: "Bharat Forge",
    image: "/images/home/testimonials/testimonials1.webp",
    text: "The Machines actually work like they do in theory. That was my first comment when I joined Bharat Forge as one-year intern. I am truly grateful for the Placement Cell at SIT Pune, who played the instrumental role in helping me achieve this feat. From my internship to my placement at Bharat Forge, I am grateful to have had the entire team at Placement Cell for being the constant in my growing journey towards engineering excellence",
  },
  {
    id: 3,
    name: "Himani Arora",
    course: "Computer Science  2022-26",
    role: "ZS Associates",
    image: "/images/home/testimonials/testimonials2.webp",
    text: "SIT provided me with the right guidance, valuable opportunities, and a strong foundation for my career. The constant support from faculty and industry exposure helped me grow both personally and professionally. I’m grateful to be part of a community that encourages students to reach their full potential.",
  },

  {
    id: 4,
    name: "Priyanshu Mohanty",
    course: "Robotics & Automation  2023-27",
    role: "NOMURA",
    image: "/images/home/testimonials/testimonials1.webp",
    text: "The Placement Cell at SIT, Pune played an important role throughout my placement journey. Their structured preparation, prompt communication, guidance and continuous support created an environment where students could focus on performing their best. More than the training itself, it was their willingness to help at every stage that made the experience successful and truly memorable. I'm sincerely grateful for their efforts and commitment to every student's success.",
  },

  {
    id: 5,
    name: "Anvesha Singh",
    course: "Computer Science 2023-27",
    role: "(International Student)",
    image: "/images/home/testimonials/testimonials1.webp",
    text: "One of the most valuable aspects of my time at SIT has been the opportunity to combine academic learning with research and practical application. The encouragement from faculty members to explore emerging technologies, publish research work, and present at conferences helped me develop both technical expertise and confidence. Through these experiences, I developed a deeper appreciation for research, critical thinking, and lifelong learning. The training and placement support at SIT further helped me strengthen my industry-relevant skills, prepare for recruitment processes, and gain confidence in transitioning from academia to the professional world.",
  },

  {
    id: 6,
    name: "Utkarsh Lakhani",
    course: "AIML 2023-27",
    role: "Bajaj Health",
    image: "/images/home/testimonials/testimonials1.webp",
    text: "I am grateful to our college Placement Cell for their continuous support throughout the placement process. They organized the recruitment drives efficiently, kept us informed at every stage, and ensured a smooth experience for both students and recruiters. The placement volunteers were extremely helpful, approachable, and well-coordinated, providing timely assistance and guidance during interviews, which made the entire process stress-free and seamless.",
  },

];

export default function Testimonial() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    if (!swiperReady || !swiperRef.current || !prevRef.current || !nextRef.current) return;

    const swiper = swiperRef.current;
    const params = swiper.params as any;
    if (!params) return;

    params.navigation = params.navigation || {};
    params.navigation.prevEl = prevRef.current;
    params.navigation.nextEl = nextRef.current;

    if (swiper.navigation) {
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiperReady]);

  return (
    <section className="testimonial_section">
      <Swiper
        modules={[Navigation]}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setSwiperReady(true);
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="testimonial_outer">
              <div className="testimonial_card">
                <div className="d-flex align-items-center gap-4 flex-wrap">
                  <div className="student_img">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={180}
                      height={180}
                    />
                  </div>

                  <div className="student_info">
                    <h3>{item.name}</h3>
                    <h5>{item.course}</h5>
                    <p>{item.role}</p>
                  </div>
                </div>

                <div className="testimonial_text mt-4">
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex justify-content-center mt-4">
        <NextPrev prevRef={prevRef} nextRef={nextRef} />
      </div>
    </section>
  );
}