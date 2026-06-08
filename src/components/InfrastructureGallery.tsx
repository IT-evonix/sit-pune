"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export type MediaItem = {
  id: number;
  type: "image" | "video" | "youtube";
  src: string;
  name: string;
};

type Props = {
  title: string;
  images: MediaItem[];
};

export default function InfrastructureGallery({
  title,
  images,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const getYoutubeId = (url: string): string => {
    if (url.includes("/embed/")) {
      return url.split("/embed/")[1];
    }

    if (url.includes("watch?v=")) {
      return url.split("watch?v=")[1].split("&")[0];
    }

    if (url.includes("youtu.be/")) {
      return url.split("youtu.be/")[1].split("?")[0];
    }

    return "";
  };

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    NativeFancybox.bind(container, "[data-fancybox]", {
      Carousel: {
        infinite: true,
      },
    });

    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  return (
    <div className="main_content">
      <div className="heading innerpageheading">
        {title}
      </div>

      <div
        ref={containerRef}
        className="infrastructure_images"
      >
        {images.map((item) => (
          <div
            key={item.id}
            className="infrastructure_card"
          >
            {/* IMAGE */}
            {item.type === "image" && (
              <a
                href={item.src}
                data-fancybox="gallery"
                data-caption={item.name}
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  width={700}
                  height={500}
                  className="img-fluid infrastructure_img"
                />
              </a>
            )}

            {/* VIDEO */}
            {item.type === "video" && (
              <a
                href={item.src}
                data-fancybox="gallery"
                data-caption={item.name}
              >
                <div className="media-wrapper">
                  <video
                    className="infrastructure_img"
                    muted
                  >
                    <source
                      src={item.src}
                      type="video/mp4"
                    />
                  </video>

                  <span className="play-icon">
                    ▶
                  </span>
                </div>
              </a>
            )}

            {/* YOUTUBE */}
            {item.type === "youtube" && (
              <a
                href={item.src}
                data-fancybox="gallery"
                data-caption={item.name}
              >
                <div className="media-wrapper">
                  <img
                    src={`https://img.youtube.com/vi/${getYoutubeId(
                      item.src
                    )}/hqdefault.jpg`}
                    alt={item.name}
                    className="infrastructure_img"
                  />

                  <span className="play-icon">
                    ▶
                  </span>
                </div>
              </a>
            )}

            {item.name && (
              <p className="img-title">
                {item.name}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}