"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Container, Button } from "react-bootstrap";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function GallerySec() {

  // Fancybox Logic
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      NativeFancybox.bind(container, "[data-fancybox]", {
        Carousel: {
          infinite: true,
        },
      });
    }

    return () => {
      NativeFancybox.close();
    };
  }, []);

  // Gallery Images
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
  ];

  return (
    <>
      <section className="gallery-section position-relative overflow-hidden">

        {/* Overlay */}
        {/* <div className="gallery-overlay"></div> */}

        <Container className="position-relative z-2">

          {/* Heading */}
          <div className="text-center mb-5">
            <div className="heading_small onbg" style={{backgroundColor: "rgba(255, 255, 255, 0.39)", color: "#fff;"}}>Campus Life</div>
            <h2 className="heading text-white fw-bold" style={{fontFamily: "Metropolis-Bold"}}>
              Life Beyond the{" "}
              <span className="text-warning">Classroom</span>
            </h2>

            <p className="text-white">
              A vibrant ecosystem of culture, sports, innovation, and lifelong memories.
            </p>
          </div>

          {/* Gallery */}
          <div ref={containerRef}>
            <div className="galleryinner">

              {/* Left Image */}
              <div className="galleryfisrt">
                <a
                  href={galleryImages[0].image}
                  data-fancybox="gallery"
                  className="gallery-card d-block"
                >
                  <Image
                    src={galleryImages[0].image}
                    alt="gallery"
                    width={700}
                    height={500}
                    className="img-fluid gallery-img"
                  />
                </a>
              </div>

              {/* Center Image */}
              <div className="gallerysecond">
                <a
                  href={galleryImages[1].image}
                  data-fancybox="gallery"
                  className="gallery-card d-block"
                >
                  <Image
                    src={galleryImages[1].image}
                    alt="gallery"
                    width={500}
                    height={400}
                    className="img-fluid gallery-img"
                  />
                </a>
              </div>

              {/* Right Image */}
              <div className="gallerytired">
                <a
                  href={galleryImages[2].image}
                  data-fancybox="gallery"
                  className="gallery-card d-block"
                >
                  <Image
                    src={galleryImages[2].image}
                    alt="gallery"
                    width={700}
                    height={500}
                    className="img-fluid gallery-img"
                  />
                </a>
              </div>

            </div>
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-center gap-4 mt-5 flex-wrap">
            <Button className="campustourBtn">
              Campus <span>Tour</span>
            </Button>
            <Button className="exploregallerybtn">
              Explore <span>Gallery</span>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}