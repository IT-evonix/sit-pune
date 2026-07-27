"use client";

import Image from "next/image";
import { useState } from "react";
import { locations, Location } from "@/data/locations";

const WorldMap = () => {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);

  return (
    <section className="world_map_section">
      <div className="container">

        {/* Heading */}

        <div className="section_heading text-center">

          <span className="sub_heading">
            INTERNATIONALIZATION
          </span>

          <h2>
            SIT Pune on the <span>World Map</span>
          </h2>

          <p>
            Hover over any country marker to explore our partnerships,
            exchange programmes and research collaborations.
          </p>

        </div>

        {/* =========================
              Desktop Map
        ========================= */}

        <div className="world_map_desktop d-none d-lg-block">

          <div className="world_map_wrapper">

            <Image
              src="/images/home/map.webp"
              alt="World Map"
              width={1400}
              height={700}
              priority
              className="img-fluid world_map_image"
            />

            {locations.map((item) => (

              <div
                key={item.id}
                className={`map_marker marker_${item.direction}`}
                style={{
                  top: item.top,
                  left: item.left,
                }}
                onMouseEnter={() => setActiveLocation(item)}
                onMouseLeave={() => setActiveLocation(null)}
              >

                <Image
                  src="/images/home/location-pin.svg"
                  alt={item.title}
                  width={30}
                  height={38}
                  className="location_pin"
                />

                {activeLocation?.id === item.id && (

                  <div className={`map_tooltip tooltip_${item.direction}`}>

                    <h5>
                      {item.title}
                    </h5>

                    <h6>
                      {item.university}
                    </h6>

                    <p className="tooltip_location">
                      {item.city}, {item.country}
                    </p>

                    <div className="tooltip_tags">

                      <span>
                        {item.programme}
                      </span>

                      <span>
                        {item.collaboration}
                      </span>

                      <span>
                        Est. {item.established}
                      </span>

                    </div>

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

        {/* =========================
              Mobile Cards
        ========================= */}

        <div className="world_map_mobile d-lg-none">

          <div className="row">

                        {locations.map((item) => (

              <div
                className="col-12 col-md-6 mb-3"
                key={item.id}
              >

                <div className="mobile_card">

                  <h5>{item.title}</h5>

                  <p>{item.university}</p>

                  <small>
                    {item.city}, {item.country}
                  </small>

                  <div className="tooltip_tags">

                    <span>{item.programme}</span>

                    <span>{item.collaboration}</span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default WorldMap;