"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "@/app/css/RecruitersSlider.css";

import {
  programRecruiters,
  RecruiterLogo,
} from "@/data/recruiters";

interface RecruitersSliderProps {
  program: string;
}

export default function RecruitersSlider({
  program,
}: RecruitersSliderProps) {
  const recruiterData = programRecruiters[program];

  if (!recruiterData || recruiterData.logos.length === 0) {
    return null;
  }

  return (
    <div className="job_roles_recuitersright">
      <div className="heading innerpageheading text-center">
        {recruiterData.title}
      </div>

      <div className="recuiterslogo">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={2}
          spaceBetween={15}
          allowTouchMove={true}
          breakpoints={{
            576: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1279: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
          }}
        >
          {recruiterData.logos.map((logo: RecruiterLogo) => (
            <SwiperSlide key={logo.id}>
              <div className="recruiter_logo_item">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={logo.width || 100}
                  height={logo.height || 50}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}