"use client";

import React from "react";
import Image from "next/image";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// SWIPER CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// BUTTONS
// import NextPrev from "../ui/NextPrev";
import Rounded_CTA from "../ui/Rounded_CTA";

const HeroSlider = () => {
  return (
    <section className="firstslide position-relative">

      <Swiper
        // modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        
      >

        {/* SLIDE 1 */}
        <SwiperSlide className="herofirstslide">

          <div className="d-flex align-items-center">

            <div className="container">

              <div className="row align-items-center">

                <div className="col-lg-6 mt-5">

                  <h1 className="display-5 text-white">
                    Engineering the Future at{" "}
                    <span className="sitpunetext">
                      SIT Pune
                    </span>
                  </h1>

                  <p className="mt-3 text-white">
                    Welcome to Symbiosis Institute of Technology — where innovation meets excellence in engineering education.
                  </p>

                  <div className="mt-3 d-flex gap-3">

                    <Rounded_CTA
                      label="Apply Now"
                      link="/apply"
                      bgColor="#fff"
                      textColor="#C4161C"
                      borderColor="transparent"
                    />

                    <Rounded_CTA
                      label="Explore More"
                      link="/programme"
                      bgColor="transparent"
                      textColor="#fff"
                      borderColor="#fff"
                    />

                  </div>

                  <ul className="herolist">
                    <li>Industry-Ready Curriculum</li>
                    <li>Expert Faculty</li>
                    <li>Innovation Hub</li>
                </ul>

                </div>

              </div>

            </div>

          </div>

        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide className="herofirstslide">

          <div className="position-relative">

            {/* <Image
              src="/images/home/banner-2-3.webp"
              alt="Hero Banner 2"
              fill
              className="object-fit-cover"
              priority
            /> */}

            <div className="d-flex align-items-center">

            <div className="container">

              <div className="row align-items-center">

                <div className="col-lg-6 mt-5">

                  <h1 className="display-5 text-white">
                    Engineering the Future at{" "}
                    <span className="sitpunetext">
                      SIT Pune
                    </span>
                  </h1>

                  <p className="mt-3 text-white">
                    Welcome to Symbiosis Institute of Technology — where innovation meets excellence in engineering education.
                  </p>

                  <div className="mt-3 d-flex gap-3">

                    <Rounded_CTA
                      label="Apply Now"
                      link="/apply"
                      bgColor="#fff"
                      textColor="#C4161C"
                      borderColor="transparent"
                    />

                    <Rounded_CTA
                      label="Explore More"
                      link="/programme"
                      bgColor="transparent"
                      textColor="#fff"
                      borderColor="#fff"
                    />

                  </div>

                  <ul className="herolist">
                    <li>Industry-Ready Curriculum</li>
                    <li>Expert Faculty</li>
                    <li>Innovation Hub</li>
                </ul>

                </div>

              </div>

            </div>

          </div>

          </div>

        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide className="herofirstslide">

          <div className="position-relative">

            {/* <Image
              src="/images/home/banner-2-3.webp"
              alt="Hero Banner 3"
              fill
              className="object-fit-cover"
              priority
            /> */}

            <div className="d-flex align-items-center">

            <div className="container">

              <div className="row align-items-center">

                <div className="col-lg-6 mt-5">

                  <h1 className="display-5 text-white">
                    Engineering the Future at{" "}
                    <span className="sitpunetext">
                      SIT Pune
                    </span>
                  </h1>

                  <p className="mt-3 text-white">
                    Welcome to Symbiosis Institute of Technology — where innovation meets excellence in engineering education.
                  </p>

                  <div className="mt-3 d-flex gap-3">

                    <Rounded_CTA
                      label="Apply Now"
                      link="/apply"
                      bgColor="#fff"
                      textColor="#C4161C"
                      borderColor="transparent"
                    />

                    <Rounded_CTA
                      label="Explore More"
                      link="/programme"
                      bgColor="transparent"
                      textColor="#fff"
                      borderColor="#fff"
                    />

                  </div>

                  <ul className="herolist">
                    <li>Industry-Ready Curriculum</li>
                    <li>Expert Faculty</li>
                    <li>Innovation Hub</li>
                </ul>

                </div>

              </div>

            </div>

          </div>
          </div>

        </SwiperSlide>

      </Swiper>

      {/* NAVIGATION BUTTONS */}
      {/* <NextPrev /> */}

    </section>
  );
};

export default HeroSlider;