"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

export default function StatsSection() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      number: 5000,
      suffix: "+",
      title: "Students Enrolled",
      color: "text-danger",
      icon: "/images/home/Students-Enrolled.svg",
    },
    {
      number: 95,
      suffix: "%",
      title: "Placement Rate",
      color: "text-primary",
      icon: "/images/home/Placement-Rate.svg",
    },
    {
      number: 300,
      suffix: "+",
      title: "Top Recruiters",
      color: "text-danger",
      icon: "/images/home/Top-Recruiters.svg",
    },
    {
      number: 50,
      suffix: "",
      title: "Research Labs",
      color: "text-primary",
      icon: "/images/home/Research-Labs.svg",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <Container>
        <div className="stateinner">
          <Row>
            {stats.map((item, index) => (
              <Col lg={3} md={6} key={index}>
                <div className="stat-box d-flex align-items-center gap-3">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={55}
                    height={55}
                    className="stat-icon"
                  />
                  <div>
                    <h2 className={`stateheading ${item.color}`}>
                      {startCount ? (
                        <CountUp end={item.number} duration={3} />
                      ) : (
                        0
                      )}
                      {item.suffix}
                    </h2>
                    <p className="mb-0 statetext">{item.title}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}