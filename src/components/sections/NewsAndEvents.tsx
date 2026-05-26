"use client";
import React from 'react'
import Image from "next/image";
import { ArrowRight, CalendarDays } from 'lucide-react';
// import { CalendarDays, ArrowRight } from "@phosphor-icons/react";

const NewsAndEvents = () => {

    const newsData = [
  {
    id: 1,
    title:
      "Team Raacers from SIT Pune wins National Level Robotics Championship",
    date: "05 May 2026",
    image:
      "/images/gallery/gallery2.webp",
  },
  {
    id: 2,
    title:
      "Team Raacers from SIT Pune wins National Level Robotics Championship",
    date: "05 May 2026",
    image:
      "/images/gallery/gallery2.webp",
  },
  {
    id: 3,
    title:
      "Team Raacers from SIT Pune wins National Level Robotics Championship",
    date: "05 May 2026",
    image:
      "/images/gallery/gallery2.webp",
  },
];


  return (
    <div>
        <section className="news-events-section position-relative">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-5">
            <h2 className="heading">
              News & <span>Events</span>
            </h2>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* LEFT BIG CARD */}
            <div className="col-lg-6">
              <div className="featured-news-card position-relative overflow-hidden">
                <Image
                  src="/images/home/news.webp"
                  alt="Campus"
                  fill
                  className="featured-image"
                />

                {/* <div className="overlay"></div> */}

                <div className="featured-content">
                  <span className="heading_small onbg">CAMPUS NEWS</span>

                  <h3>
                    SIT Pune Ranked Among <br />
                    Top Emerging Engineering Institutes in India
                  </h3>

                  <p>
                    Recognized for academic excellence, innovation and industry
                    collaboration. Team Raacers from SIT Pune wins National
                    Level Robotics Championship
                  </p>

                  <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mt-4">
                    <div className="date-box">
                      <CalendarDays size={16} />
                      <span>20 May 2024</span>
                    </div>

                    <button className="read-more-btn">
                      Read More <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE NEWS LIST */}
            <div className="col-lg-6">
              <div className="news-list-wrapper">
                {newsData.map((item, index) => (
                  <a href="#"
                    key={item.id}
                    className={`news-item newsList ${
                      index !== newsData.length - 1 ? "border-bottom-item" : ""
                    }`}
                  >
                    <div className="d-flex gap-4">
                      {/* IMAGE */}
                      <div className="news-thumb">
                        <Image
                          src={item.image}
                          alt="news"
                          fill
                          className="thumb-img"
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="flex-grow-1">
                        <h5>{item.title}</h5>

                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div className="date-box small-date">
                            <CalendarDays size={16} />
                            <span>{item.date}</span>
                          </div>

                          <ArrowRight
                            size={16}
                            className="arrow-icon"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsAndEvents
