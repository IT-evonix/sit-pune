"use client";

import React from "react";

type NextPrevProps = {
  prevRef: React.RefObject<HTMLButtonElement | null>;
  nextRef: React.RefObject<HTMLButtonElement | null>;
};

export default function NextPrev({
  prevRef,
  nextRef,
}: NextPrevProps) {
  return (
    <div className="d-flex gap-3 justify-content-center mb-2 mt-2">
      <button
        ref={prevRef}
        className="swiper-prev-btn prevarrow"
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
        ref={nextRef}
        className="swiper-next-btn nextarrow"
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
    </div>
  );
}