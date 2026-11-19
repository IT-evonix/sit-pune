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
      link: "/",
      highlight: true,
    },
    // {
    //   title: "SITEEE Exam Result",
    //   link:
    //     "https://set2026.ishinfosys.com/SYMENTSCORE-TC2026/login.aspx",
    // },
    {
      title: "Dual Degree Programs at SIT",
      link: "/dual-degree-programs",
      highlight: true,
    },
    {
      title: "IEEE Conference ICEI 2026 (December 4-5, 2026) ",
      link:
        "https://iceiagnei.sitpune.edu.in/?_gl=1*ohvrmu*_gcl_au*MTM5MTQ0Mjc2NS4xNzkzNjIwMTg1#_ga=2.254415816.1593511415.1794986187-376287186.1792130173",
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
              href="/contactus"
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