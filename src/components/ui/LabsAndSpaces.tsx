"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import { Plus } from "lucide-react";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "@/components/css/LabsAndSpaces.css";

import type { DepartmentLabs, LabImage } from "@/data/labsData";

interface LabsAndSpacesProps {
  departments: DepartmentLabs[];
}

interface LabCardProps {
  image: LabImage;
  labTitle: string;
  index: number;
  galleryName: string;
}

function LabCard({ image, labTitle, index, galleryName }: LabCardProps) {
  /*
   * FIRST 6 IMAGES
   *
   * 1 = Tall
   * 2 = Normal
   * 3 = Tall
   * 4 = Normal
   * 5 = Tall
   * 6 = Normal
   *
   * 7 onwards = Normal
   */

  let cardClass = "labs-card";

  switch (index) {
    case 0:
      cardClass += " labs-card--1";
      break;

    case 1:
      cardClass += " labs-card--2";
      break;

    case 2:
      cardClass += " labs-card--3";
      break;

    case 3:
      cardClass += " labs-card--4";
      break;

    case 4:
      cardClass += " labs-card--5";
      break;

    case 5:
      cardClass += " labs-card--6";
      break;

    default:
      cardClass += " labs-card--normal";
      break;
  }

  return (
    <a
      href={image.image}
      data-fancybox={galleryName}
      data-caption={image.title}
      className={cardClass}
      aria-label={`View ${image.title}`}
    >
      <div className="labs-card__image">
        <Image
          src={image.image}
          alt={image.alt || labTitle}
          fill
          sizes="
            (max-width: 767px) 100vw,
            (max-width: 991px) 50vw,
            33vw
          "
          className="labs-card__img"
        />
      </div>

      <div className="labs-card__overlay" />

      {/* Hover Plus Icon */}
      <div className="labs-card__zoom">
        <Plus size={30} strokeWidth={1.5} />
      </div>

      {/* Lab Name */}
      <div className="labs-card__content">
        <h3>{image.title}</h3>
      </div>
    </a>
  );
}

export default function LabsAndSpaces({ departments }: LabsAndSpacesProps) {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      dragToClose: true,

      Carousel: {
        infinite: false,

        Toolbar: {
          display: {
            left: [],
            middle: [],
            right: ["close"],
          },
        },

        Thumbs: {
          type: "classic",
        },
      },
    });

    return () => {
      Fancybox.unbind("[data-fancybox]");
      Fancybox.close();
    };
  }, []);

  return (
    <section className="labs-spaces">
      {departments.map((department) => {
        if (!department.labs?.length) {
          return null;
        }

        return (
          <div className="labs-department" key={department.id}>
            {/* <div className="labs-department__title">
                <h2>{department.department}</h2>
              </div> */}

            {department.labs.map((lab) => {
              const galleryName = `lab-${department.id}-${lab.id}`;

              return (
                <div className="labs-lab" key={lab.id}>
                  <div className="heading innerpageheading">{lab.title}</div>

                  <div className="labs-grid">
                    {lab.gallery.map((image, index) => (
                      <LabCard
                        key={image.id}
                        image={image}
                        labTitle={lab.title}
                        index={index}
                        galleryName={galleryName}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
}
