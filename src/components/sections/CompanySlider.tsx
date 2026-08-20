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
    logo: "/images/home/logos/logo1.webp",
  },
  {
    name: "Capgemini",
    logo: "/images/home/logos/logo2.webp",
  },
  {
    name: "Infosys",
    logo: "/images/home/logos/logo26.webp",
  },
  {
    name: "Accenture",
    logo: "/images/home/logos/logo7.webp",
  },
  {
    name: "Deloitte",
    logo: "/images/home/logos/logo5.webp",
  },
  {
    name: "TCS",
    logo: "/images/home/logos/logo6.webp",
  },
  {
    name: "IBM",
    logo: "/images/home/logos/logo4.webp",
  },
  {
    name: "Capgemini",
    logo: "/images/home/logos/logo8.webp",
  },
  {
    name: "Infosys",
    logo: "/images/home/logos/logo10.webp",
  },
  {
    name: "Accenture",
    logo: "/images/home/logos/logo9.webp",
  },
  {
    name: "Deloitte",
    logo: "/images/home/logos/logo11.webp",
  },
  {
    name: "TCS",
    logo: "/images/home/logos/logo12.webp",
  },
  {
    name: "TCS",
    logo: "/images/home/logos/logo13.webp",
  },
  {
    name: "TCS",
    logo: "/images/home/logos/logo14.webp",
  },
  {
    name: "TCS",
    logo: "/images/home/logos/logo15.webp",
  },
  {
    name: "TCS",
    logo: "/images/home/logos/logo16.webp",
  },
  {
    name: "TCS",
    logo: "/images/home/logos/logo17.webp",
  },
  {
    name: "TCS",
    logo: "/images/home/logos/logo18.webp",
  },
  {
    name: "TCS",
    logo: "/images/home/logos/logo19.webp",
  },
  {
    name: "TCS",
    logo: "/images/home/logos/logo20.webp",
  },
  {
    name: "TCS",
    logo: "/images/home/logos/logo21.webp",
  },
  {
    name: "TCS",
    logo: "/images/home/logos/logo22.webp",
  },
  {
    name: "TCS",
    logo: "/images/home/logos/logo23.webp",
  },
  {
    name: "TCS",
    logo: "/images/home/logos/logo24.webp",
  },
  {
    name: "TCS",
    logo: "/images/home/logos/logo25.webp",
  },
  {
    name: "TCS",
    logo: "/images/home/logos/logo3.webp",
  },  
  
];

export default function CompanySlider() {
  return (
    <section className="Companylogos">
      <div className="container">
        <div className="Companylogosinner">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
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