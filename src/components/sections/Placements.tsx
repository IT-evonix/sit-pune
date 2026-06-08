"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import Testimonial from "./Testimonials";

const Placements = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // run only once
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="Placements_section" ref={sectionRef}>
        <div className="container">
          <div className="row">
            
            <div className="col-md-6">
              {/* <div className="heading_small">Placements</div> */}
              <div className="heading">                
                <span>Placements</span>
              </div>
              <div className="subheading">Excellent Opportunities Extraordinary Outcomes</div>
            </div>

            <div className="col-md-6">
              <div className="placementnumber">

                {/* Highest Package */}
                <div className="placementNum">
                  <div className="Numhead">
                    ₹
                    {startCount ? (
                      <CountUp end={48} duration={3} />
                    ) : (
                      0
                    )} LPA
                  </div>

                  <p>Highest Package</p>
                </div>

                <div className="verticalline"></div>

                {/* Average Package */}
                <div className="placementNum">
                  <div
                    className="Numhead"
                    style={{ color: "#C4161C" }}
                  >
                    ₹
                    {startCount ? (
                      <CountUp end={12} duration={3} />
                    ) : (
                      0
                    )} LPA
                  </div>

                  <p>Average Package</p>
                </div>

                <div className="verticalline"></div>

                {/* Placement Rate */}
                <div className="placementNum border-none">
                  <div className="Numhead">
                    {startCount ? (
                      <CountUp end={95} duration={3} />
                    ) : (
                      0
                    )}
                    %
                  </div>

                  <p>Placement Rate</p>
                </div>

              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6"></div>

            <div className="col-md-6">
              <Testimonial />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placements;