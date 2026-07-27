"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Container, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "swiper/css";

export default function GallerySec() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      NativeFancybox.bind(containerRef.current, "[data-fancybox]", {
        Carousel: {
          infinite: true,
        },
      });
    }

    return () => {
      NativeFancybox.close();
    };
  }, []);

  const galleryImages = [
    { id: 1, image: "/images/gallery/gallery1.webp" },
    { id: 2, image: "/images/gallery/gallery2.webp" },
    { id: 3, image: "/images/gallery/gallery3.webp" },
    { id: 4, image: "/images/gallery/gallery1.webp" },
    { id: 5, image: "/images/gallery/gallery2.webp" },
    { id: 6, image: "/images/gallery/gallery3.webp" },
    { id: 7, image: "/images/gallery/gallery1.webp" },
    { id: 8, image: "/images/gallery/gallery2.webp" },
    { id: 9, image: "/images/gallery/gallery3.webp" },
    { id: 10, image: "/images/gallery/gallery1.webp" },
    { id: 11, image: "/images/gallery/gallery2.webp" },
    { id: 12, image: "/images/gallery/gallery3.webp" },
  ];

  return (
    <section className="gallery-section">
      <Container>
        <div className="text-center mb-4">
          <h2 className="heading text-white fw-bold">
            Campus <span className="text-warning">Life</span>
          </h2>

          <p className="text-white">
            A vibrant ecosystem of culture, sports, innovation and lifelong
            memories.
          </p>
        </div>

        <div ref={containerRef}>
          <Swiper
            modules={[Autoplay]}
            loop={true}
            centeredSlides={true}
            slidesPerView={5}
            spaceBetween={-180}
            speed={900}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.15,
                spaceBetween: -40,
              },
              768: {
                slidesPerView: 1.7,
                spaceBetween: -80,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: -100,
              },
            }}
            className="gallerySwiper"
          >
            {galleryImages.map((item) => (
              <SwiperSlide key={item.id}>
                <a
                  href={item.image}
                  data-fancybox="gallery"
                  className="gallery-card"
                >
                  <Image
                    src={item.image}
                    alt="Campus Life"
                    width={900}
                    height={600}
                    className="gallery-img"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="d-flex justify-content-center gap-4 mt-4 flex-wrap">
          <Button className="campustourBtn">
            Campus <span>Tour</span>
          </Button>

          <Button className="exploregallerybtn">
            Explore <span>Gallery</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}