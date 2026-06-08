"use client";

import Link from "next/link";
import React from "react";

type TopLink = {
  title: string;
  link: string;
  highlight?: boolean;
};

const Topstrip = () => {
  const topLinks: TopLink[] = [
    {
      title: "Admission Registration 2026",
      link: "/admission-registration-2026",
      highlight: true,
    },
    {
      title: "SITEEE Exam Result",
      link:
        "https://set2026.ishinfosys.com/SYMENTSCORE-TC2026/login.aspx",
    },
    {
      title: "Dual Degree Programs at SIT",
      link: "https://www.sitpune.edu.in/dual-degree-programs",
      highlight: true,
    },
    {
      title: "Bajaj Engineering Skills Programme",
      link:
        "https://ezapp26.ishinfo.com/SITB2026/Register/Index.aspx",
    },
  ];

  return (
    <div className="headertop_strip text-white py-1 small">
      <div className="animated_gradient"></div>

      <div className="container-fluid position-relative">
        <div className="d-flex align-items-center justify-content-between">
          {/* Marquee Section */}
          <div className="topstrip_marquee flex-grow-1">
            {/* Desktop */}
            <div className="topstrip_track desktop_track">
              {topLinks.map((item, index) => (
                <React.Fragment key={index}>
                  <Link
                    href={item.link}
                    className={`topstrip_link ${
                      item.highlight ? "highlight_link" : ""
                    }`}
                    target="_blank"
                  >
                    {item.title}
                  </Link>

                  {index !== topLinks.length - 1 && (
                    <span className="topstrip_divider">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Mobile */}
            <div className="topstrip_track mobile_track">
              {[...topLinks, ...topLinks].map((item, index) => (
                <React.Fragment key={index}>
                  <Link
                    href={item.link}
                    className={`topstrip_link ${
                      item.highlight ? "highlight_link" : ""
                    }`}
                    target="_blank"
                  >
                    {item.title}
                  </Link>

                  <span className="topstrip_divider">|</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Contact Us Button */}
          <div className="ms-3 flex-shrink-0">
            <Link
              href="/"
              className="contact_btnheader"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topstrip;