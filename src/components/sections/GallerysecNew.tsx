"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Container, Button } from "react-bootstrap";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function GallerysecNew() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      NativeFancybox.bind(containerRef.current, "[data-fancybox]", {
        Carousel: {
          infinite: true,
        },
      });
    }

    return () => NativeFancybox.close();
  }, []);

  const galleryImages = [
    {
      id: 1,
      image: "/images/gallery/gallery1.webp",
    },
    {
      id: 2,
      image: "/images/gallery/gallery2.webp",
    },
    {
      id: 3,
      image: "/images/gallery/gallery3.webp",
    },
    {
      id: 4,
      image: "/images/gallery/gallery1.webp",
    },
    {
      id: 5,
      image: "/images/gallery/gallery2.webp",
    },
    {
      id: 6,
      image: "/images/gallery/gallery3.webp",
    },
  ];

  const [center, setCenter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCenter((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const left = (center - 1 + galleryImages.length) % galleryImages.length;

  const right = (center + 1) % galleryImages.length;

  const visibleSlides = useMemo(
    () => [
      { ...galleryImages[left], position: "left" },
      { ...galleryImages[center], position: "center" },
      { ...galleryImages[right], position: "right" },
    ],
    [left, center, right],
  );

  return (
    <section className="gallery-section">
      <Container>
        <div className="text-center mb-1">
          <h2 className="heading text-white fw-bold">
            Campus <span className="text-warning">Life</span>
          </h2>

          <p className="text-white m-0 p-0">
            A vibrant ecosystem of culture, sports, innovation and lifelong
            memories.
          </p>
        </div>

        <div ref={containerRef} className="gallery-slider">
          {visibleSlides.map((item) => (
            <div key={item.id} className={`gallery-item ${item.position}`}>
              <a
                href={item.image}
                data-fancybox="gallery"
                className="gallery-card"
              >
                <Image
                  src={item.image}
                  alt=""
                  width={900}
                  height={650}
                  className="gallery-img"
                />
              </a>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center gap-4 mt-5 mb-5">
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
