"use client";

import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";

const companies = [
  {
    name: "IBM",
    logo: "/images/home/ibm.webp",
  },
  {
    name: "Capgemini",
    logo: "/images/home/capg.webp",
  },
  {
    name: "Infosys",
    logo: "/images/home/infosys.webp",
  },
  {
    name: "Accenture",
    logo: "/images/home/accenture.webp",
  },
  {
    name: "Deloitte",
    logo: "/images/home/deloitte.webp",
  },
  {
    name: "TCS",
    logo: "/images/home/tcs.webp",
  },
  {
    name: "IBM",
    logo: "/images/home/ibm.webp",
  },
  {
    name: "Capgemini",
    logo: "/images/home/capg.webp",
  },
  {
    name: "Infosys",
    logo: "/images/home/infosys.webp",
  },
  {
    name: "Accenture",
    logo: "/images/home/accenture.webp",
  },
  {
    name: "Deloitte",
    logo: "/images/home/deloitte.webp",
  },
  {
    name: "TCS",
    logo: "/images/home/tcs.webp",
  },
  
];

export default function CompanySlider() {
  return (
    <section className="Companylogos">
      <div className="container">
        <div className="Companylogosinner">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}

            // Arrows only below 991px
            navigation={true}

            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 6,
                navigation: false,
              },
            }}
          >
            {companies.map((company, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-[80px]">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={160}
                    height={80}
                    className="object-contain h-[60px] w-auto companylogoimg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}