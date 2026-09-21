import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

/* DATA */
export const programData = {
  UG: [
    {
      title: "Artificial Intelligence and Machine Learning",
      tags: ["B.Tech"],
    },
    {
      title: "Civil Engineering",
      tags: ["B.Tech"],
    },
    {
      title: "Computer Science and Engineering",
      tags: ["B.Tech"],
    },
    {
      title: "Electronics & Telecommunication",
      tags: ["B.Tech"],
    },
    
  ],

  PG: [
    {
      title: "Advanced AI Systems",
      tags: ["M.Tech"],
    },
    {
      title: "Structural Engineering",
      tags: ["M.Tech"],
    },
    {
      title: "Data Science",
      tags: ["M.Tech"],
    },
  ],

  PhD: [
    {
      title: "Research in AI & Robotics",
      tags: ["PhD"],
    },
    {
      title: "Civil Infrastructure Research",
      tags: ["PhD"],
    },
  ],
};

/* TAB COMPONENT */
export function ProgramTabs({ activeTab, setActiveTab }) {
  return (
    <div className="btn-group mt-3">
      {["UG", "PG", "PhD"].map((tab) => (
        <button
          key={tab}
          className={`btn ${
            activeTab === tab ? "btn-danger" : "btn-outline-secondary"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

/* CARD COMPONENT */
export function ProgramCard({ item }) {
  return (
    <div className="program-card p-4 text-white h-100">
      <div className="icon mb-3">
        <div className="bg-white bg-opacity-25 rounded-circle p-2 d-inline-block">
          🎓
        </div>
      </div>

      <h5>{item.title}</h5>

      <div className="d-flex gap-2 flex-wrap mt-3">
        {item.tags.map((tag, i) => (
          <span key={i} className="badge bg-info text-dark">
            {tag}
          </span>
        ))}
      </div>

      <a href="#" className="text-white mt-3 d-inline-block">
        Explore More →
      </a>
    </div>
  );
}

/* SLIDER */
export function ProgramSlider({ data }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={3}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <ProgramCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}