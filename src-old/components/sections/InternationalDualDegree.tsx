"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import NextPrev from "../ui/NextPrev";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// SWIPER CSS
import "swiper/css";
import "swiper/css/navigation";

const InternationalDualDegree = () => {
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

  const universities = [
    {
      image: "/images/home/International-Dual1.png",
      alt: "Deakin",
      name: "Deakin University, Australia",
      bg: "#F8F1F1",
    },
    {
      image: "/images/home/International-Dual2.png",
      alt: "UEA",
      name: "University of East Anglia, UK",
      bg: "#EFF2F5",
    },
    {
      image: "/images/home/International-Dual3.png",
      alt: "Loughborough",
      name: "Loughborough University, UK",
      bg: "#f0f0f0",
    },
    {
      image: "/images/home/International-Dual4.png",
      alt: "Northeastern",
      name: "Northeastern University, US",
      bg: "#F8F1F1",
    },
    {
      image: "/images/home/International-Dual5.png",
      alt: "Aston",
      name: "Aston University, UK",
      bg: "#EFF2F5",
    },
  ];

  return (
    <div>
      <div className="internationalization_bottom">
        <div className="container">
          <div className="international_inner">
            {/* LEFT BOX */}
            <div className="International_leftbox">
              <div className="program_card position-relative h-100">
                <div className="International_heading">
                  International Dual Degree Programmes
                </div>

                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={2}
                  slidesPerGroup={1}
                  loop={true}
                  speed={800}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    setSwiperReady(true);
                  }}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                  }}
                  className="mt-3"
                >
                  {universities.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className="university_box h-100"
                        style={{
                          backgroundColor: item.bg,
                        }}
                      >
                        <Image
                          src={item.image}
                          alt={item.alt}
                          width={250}
                          height={120}
                          className="img-fluid"
                        />

                        <p className="mt-4 mb-0">{item.name}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* CUSTOM BUTTONS */}
                <div className="slider_btns">
                  {/* <button className="slider_btn custom-prev">
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7071 8.07112C17.0976 7.6806 17.0976 7.04743 16.7071 6.65691L10.3431 0.292946C9.95262 -0.0975785 9.31946 -0.0975785 8.92893 0.292946C8.53841 0.68347 8.53841 1.31664 8.92893 1.70716L14.5858 7.36401L8.92893 13.0209C8.53841 13.4114 8.53841 14.0446 8.92893 14.4351C9.31946 14.8256 9.95262 14.8256 10.3431 14.4351L16.7071 8.07112ZM0 7.36401V8.36401H16V7.36401V6.36401H0V7.36401Z" fill="white"/>
                    </svg>
                  </button>
                  <button className="slider_btn active custom-next">
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7071 8.07112C17.0976 7.6806 17.0976 7.04743 16.7071 6.65691L10.3431 0.292946C9.95262 -0.0975785 9.31946 -0.0975785 8.92893 0.292946C8.53841 0.68347 8.53841 1.31664 8.92893 1.70716L14.5858 7.36401L8.92893 13.0209C8.53841 13.4114 8.53841 14.0446 8.92893 14.4351C9.31946 14.8256 9.95262 14.8256 10.3431 14.4351L16.7071 8.07112ZM0 7.36401V8.36401H16V7.36401V6.36401H0V7.36401Z" fill="white"/>
                    </svg>
                  </button> */}
                  <NextPrev prevRef={prevRef} nextRef={nextRef} />
                </div>
              </div>
            </div>

            {/* RIGHT BOX */}
            <div className="International_rightbox">
              <div className="program_card h-100">
                <div className="academic_progression_heading">
                  Academic Progression Programmes
                </div>

                <div className="row g-4 mt-3">
                  <div className="col-md-6">
                    <div className="progression_box">
                      <Image
                        src="/images/home/Academic-Progression1.png"
                        alt="Aston"
                        width={260}
                        height={120}
                        className="img-fluid"
                      />

                      <p className="mt-4" style={{ fontSize: '16px', margin: 0 }}>
                        Aston University, UK
                      </p>

                      <p>Over 10 Prestigious MSc Programmes</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="progression_box">
                      <Image
                        src="/images/home/Academic-Progression2.png"
                        alt="Loughborough"
                        width={260}
                        height={120}
                        className="img-fluid"
                      />

                      <p className="mt-4" style={{ fontSize: '16px', margin: 0 }}>
                        Loughborough University, UK
                      </p>

                      <p>
                        Over 35 prestigious MSc programmes to help you expand
                        your academic career.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalDualDegree;
