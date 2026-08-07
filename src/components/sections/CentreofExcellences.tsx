"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import Link from "next/link";
import Card from "@/components/ImageCard";
import { centreData } from "@/data/centreData";
import Rounded_CTA from "../ui/Rounded_CTA";
import { Image } from "react-bootstrap";
import { title } from "process";

export default function CentreOfExcellence() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="coe-section centreofexcellences">
      <div className="container">
        <div className="coe-inner">
          <div className="coe-left">
            <div className="heading">
              Where <br /> Breakthrough <span>Research Happens</span>
            </div>
            <p>
              Our research centres drive innovation across emerging
              technologies, fostering breakthrough discoveries that shape the
              future of engineering.
            </p>
            <Rounded_CTA
              label="Explore Research"
              link="/apply"
              bgColor="#fff"
              textColor="#10467F"
              borderColor="transparent"
            />
          </div>
          <div className="coe-right">
            <div className="coe-bg"></div>
            <button
              className="coe-prev"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 12H4M4 12L10 18M4 12L10 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="coe-next"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M20 12L14 6M20 12L14 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={25}
              slidesPerView={2}
              loop={true}
              speed={800}
              //   autoplay={{
              //     delay: 3000,
              //     disableOnInteraction: false,
              //     pauseOnMouseEnter: true,
              //   }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1.3,
                },
                992: {
                  slidesPerView: 2,
                },
              }}
            >
              {centreData.map((item) => (
                <SwiperSlide key={item.id}>
                  <Card item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
