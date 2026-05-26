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
    name: "Rishabh Kaushick",
    course: "Third Year, Computer Science",
    role: "(International Student)",
    image: "/images/home/Rishabh-Kaushick.webp",
    text:
      "SIT made me change the way I think, in terms of my academic and personal life. The faculty comprises of highly qualified teachers who love their respective fields very much. They are friendly, down to earth and offer guidance without a moment's hesitation.",
  },
  {
    id: 2,
    name: "Rishabh Kaushick",
    course: "Third Year, Computer Science",
    role: "(International Student)",
    image: "/images/home/Rishabh-Kaushick.webp",
    text:
      "SIT made me change the way I think, in terms of my academic and personal life. The faculty comprises of highly qualified teachers who love their respective fields very much. They are friendly, down to earth and offer guidance without a moment's hesitation.",
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