"use client";

import InnerpageBanner from "@/components/InnerpageBanner";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

const admissionCards = [
  {
    heading: "B.Tech",
    image: "/images/innerpages/admission/UG-img.webp",
    alt: "Students",
    href: "/b-tech",
  },
  {
    heading: "Lateral Entry",
    image: "/images/innerpages/admission/phd.webp",
    alt: "Students",
    href: "/lateral-entry",
  },
  {
    heading: "M.Tech",
    image: "/images/innerpages/admission/btech.webp",
    alt: "Students",
    href: "/m-tech",
  },
  {
    heading: "PhD",
    image: "/images/innerpages/admission/mtech.webp",
    alt: "Students",
    href: "https://scri.siu.edu.in/",
  },
];

const AdmissionProcedurePage = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const touchStartRef = useRef({ x: 0, card: 0 });

  const scrollToCard = (index: number) => {
    const cards = cardsRef.current;
    if (!cards) return;
    cards.scrollTo({ left: index * cards.clientWidth, behavior: "smooth" });
    setActiveCard(index);
  };

  return (
    <div className="mainadmission_procedure">
       <InnerpageBanner
        title={`Admissions Procedure`}
        breadcrumbs={[
          // { label: "Programmes", href: "/programmes" },
          { label: "Admissions" },

          { label: "Admissions Procedure" },
        ]}
      />
      <div className="mainadmission_top">
        <div className="heading text-center innerpageheading">Admissions Procedure</div>
      </div>
      <div className="mainadmission_bottom">
        <div className="container">
          {/* <div className="subheading18">Admissions Procedure</div> */}
          <div className="mainadmission_slider">
            <div
              className="mainadmission_inner"
              ref={cardsRef}
              onTouchStart={(event) => {
                const cards = event.currentTarget;
                touchStartRef.current = {
                  x: event.touches[0].clientX,
                  card: Math.round(cards.scrollLeft / cards.clientWidth),
                };
              }}
              onTouchEnd={(event) => {
                const cards = event.currentTarget;
                const swipeDistance =
                  touchStartRef.current.x - event.changedTouches[0].clientX;
                const lastCard = admissionCards.length - 1;

                if (swipeDistance > 40 && touchStartRef.current.card === lastCard) {
                  cards.scrollLeft = 0;
                  setActiveCard(0);
                } else if (
                  swipeDistance < -40 &&
                  touchStartRef.current.card === 0
                ) {
                  cards.scrollLeft = cards.clientWidth * lastCard;
                  setActiveCard(lastCard);
                }
              }}
              onScroll={(event) => {
                const cards = event.currentTarget;
                if (cards.clientWidth) {
                  setActiveCard(Math.round(cards.scrollLeft / cards.clientWidth));
                }
              }}
            >
              {admissionCards.map((card, index) => (
                <div className="admission_card" key={index}>
                  <div className="admission_Image">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      width={200}
                      height={200}
                      className="img-fluid"
                    />
                    <div className="admission_content">
                      <div className="subheading">{card.heading}</div>
                      <div className="subheading18">Admissions Procedure</div>
                      <Link
                        href={card.href}
                        target={card.href.startsWith("https://") ? "_blank" : undefined}
                        rel={card.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                        className="ExploreMore rounded-pill transition rounded_cta m-0"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mainadmission_dots" aria-label="Admission cards">
              {admissionCards.map((_, card) => (
                <button
                  key={card}
                  type="button"
                  className={activeCard === card ? "active" : ""}
                  aria-label={`Show admission card ${card + 1}`}
                  aria-current={activeCard === card ? "true" : undefined}
                  onClick={() => scrollToCard(card)}
                />
              ))}
            </div>
          </div>
          <p className="m-0 text-white text-center mt-4">
            Our diverse programs are thoughtfully designed to foster innovation,
            critical thinking, and professional excellence. Learn from
            experienced faculty, engage in experiential learning, and build a
            strong foundation for lifelong success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcedurePage;
