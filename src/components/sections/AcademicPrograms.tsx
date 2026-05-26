"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import NextPrev from "../ui/NextPrev";

export type Program = {
  id: number;
  name: string;
  icon: string;
  levels: string[];
};

export const programData = {
  UG: [
    {
      id: 1,
      name: "Artificial Intelligence and Machine Learning",
      icon: "/images/home/ai.svg",
      levels: ["B.Tech", "M.Tech", "PhD"],
    },
    {
      id: 2,
      name: "Civil Engineering",
      icon: "/images/home/Civil-Engineering.svg",
      levels: ["B.Tech", "M.Tech", "PhD"],
    },
    {
      id: 3,
      name: "Computer Science and Engineering",
      icon: "/images/home/Computer-Science.svg",
      levels: ["B.Tech", "M.Tech", "PhD"],
    },
    {
      id: 4,
      name: "Electronics & Telecommunication",
      icon: "/images/home/Electronics.svg",
      levels: ["B.Tech", "M.Tech", "PhD"],
    },
    {
      id: 5,
      name: "Computer Science and Engineering",
      icon: "/images/home/Computer-Science.svg",
      levels: ["B.Tech", "M.Tech", "PhD"],
    },
    {
      id: 6,
      name: "Electronics & Telecommunication",
      icon: "/images/home/Electronics.svg",
      levels: ["B.Tech", "M.Tech", "PhD"],
    },
  ],
  PG: [
    {
      id: 1,
      name: "M.Tech - Data Science & AI",
      icon: "/images/home/ai.svg",
      levels: ["M.Tech", "PhD"],
    },
    {
      id: 2,
      name: "M.Tech - Cloud Computing",
      icon: "/images/home/ai.svg",
      levels: ["M.Tech", "PhD"],
    },
    {
      id: 3,
      name: "M.Tech - Cybersecurity",
      icon: "/images/home/ai.svg",
      levels: ["M.Tech", "PhD"],
    },
  ],
  DOCTORAL: [
    {
      id: 1,
      name: "PhD - Computer Science",
      icon: "/images/home/ai.svg",
      levels: ["PhD"],
    },
    {
      id: 2,
      name: "PhD - Electronics & Communication",
      icon: "/images/home/ai.svg",
      levels: ["PhD"],
    },
  ],
};

export function ProgramTabs({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  const tabs = [
    { label: "UG", value: "UG" },
    { label: "PG", value: "PG" },
    { label: "PhD", value: "DOCTORAL" },
  ];

  return (
    <div className="d-flex gap-2 mt-4 flex-wrap ProgramsTabbing">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setActiveTab(tab.value)}
          className="btn"
          style={{
            padding: "8px 18px",
            fontSize: "15px",
            fontWeight: "600",
            borderRadius: "6px",
            border: "none",
            backgroundColor: activeTab === tab.value ? "#C4161C" : "#fff",
            color: activeTab === tab.value ? "#fff" : "#6B7280",
            cursor: "pointer",
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export function ProgramSlider({ data }: { data: Program[] }) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showNav = isMobile ? data.length > 2 : data.length > 4;

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
  }, [swiperReady, data, showNav]);

  return (
    <div className="mt-5">
      <Swiper
        modules={[Navigation]}
        spaceBetween={25}
        slidesPerView={1}
        loop={showNav}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setSwiperReady(true);
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {data.map((program) => (
          <SwiperSlide key={program.id}>
            <div className="ProgramsCard">
              <div className="IconBox">
                <Image src={program.icon} alt={program.name} width={40} height={40} />
              </div>

              <h5 className="Programshead">{program.name}</h5>

              <div className="program_availablebagde">
                {program.levels.map((level) => (
                  <span key={level} className="badge">
                    {level}
                  </span>
                ))}
              </div>

              <a href="#" className="exploreMorelink">
                Explore More
                <Image src="/images/home/right-arrow.svg" alt="arrow" width={16} height={16} />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showNav && (
        <div className="d-flex justify-content-center gap-3 mt-4">
          <NextPrev prevRef={prevRef} nextRef={nextRef} />
        </div>
      )}
    </div>
  );
}

export default function AcademicPrograms() {
  const [activeTab, setActiveTab] = useState("UG");

  const data = programData[activeTab as keyof typeof programData];

  return (
    <>
      <section className="academic_programs_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="heading_small">PROGRAMMES OFFERED</span>
              <h2 className="heading">
                Academic <span>Programs</span>
              </h2>
              <ProgramTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="col-lg-6 text-center">
              <Image
                src="/images/home/academic-programs-girls.webp"
                alt="Students"
                width={500}
                height={400}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="academic_programs_blue">
        <div className="container">
          <ProgramSlider data={data} />
        </div>
      </section>
    </>
  );
}
