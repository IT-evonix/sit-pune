"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "@/app/css/library.css";

const galleryImages = [
  {
    id: 1,
    src: "/images/innerpages/academics/Library-Orientations1.webp",
    alt: "Students attending a library orientation",
  },
  {
    id: 2,
    src: "/images/innerpages/academics/Library-Orientations2.webp",
    alt: "Library orientation session",
  },
  {
    id: 3,
    src: "/images/innerpages/academics/Library-Orientations3.webp",
    alt: "Students learning about library resources",
  },
  {
    id: 4,
    src: "/images/innerpages/academics/Library-Orientations4.webp",
    alt: "Library orientation at SIT",
  },
];

const LibraryActivity = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gallery = galleryRef.current;

    if (!gallery) return;

    NativeFancybox.bind(gallery, '[data-fancybox="library-activities"]', {
      Carousel: { infinite: true },
    });

    return () => NativeFancybox.unbind(gallery);
  }, []);

  return (
    <div className="main_content libraryMainSec">
      <section className="library-section-heading">
        <div className="heading innerpageheading">Library Activities</div>
        <p>
          The library conducts an annual information literacy program for
          students and faculty members, providing comprehensive training on the
          various databases subscribed by SIT and SIU. The SIT library annually
          organizes activities such as book exhibitions, special-day displays,
          and book review sessions.
        </p>
      </section>

      <div
        ref={galleryRef}
        className="library_activities_images infrastructure_images"
      >
        {galleryImages.map((image) => (
          <div className="infrastructure_card" key={image.id}>
            <a
              href={image.src}
              data-fancybox="library-activities"
              data-caption={image.alt}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={700}
                height={500}
                className="img-fluid infrastructure_img"
              />
            </a>
            {/* <p className="img-title">{image.alt}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryActivity;
