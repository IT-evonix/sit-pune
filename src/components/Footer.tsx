"use client";
import React from 'react'
import Blussitpune from './Blussitpune';
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Smartphone,
  Mail,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer>
        <Blussitpune/>
        <footer className="sit-footer">
          <div className="container">
            <div className="row gy-5">
              {/* LEFT SIDE */}
              <div className="col-lg-4">
                {/* LOGO */}
                <div className="footer-logo mb-4">
                  <Image
                    src="/images/common/Logo.webp"
                    alt="sit logo"
                    width={420}
                    height={100}
                    className="img-fluid"
                  />
                </div>

                {/* TEXT */}
                <div className="footer-about">
                  <h2>
                    Symbiosis Institute of <br />
                    <span>Technology (SIT)</span>
                  </h2>

                  <p>
                    Symbiosis Institute of Technology Constituent of
                    Symbiosis International (Deemed University)
                    Near Lupin Research Park, Gram: Lavale,
                    Tal: Mulshi, Pune 412 115
                  </p>
                </div>

                {/* CONTACT */}
                <div className="contact-list">
                  <div className="contact-item">
                    <div className="icon-box">
                      <Phone size={22} />
                    </div>
                    <a href="tel:+91-20-61936300/6464/6419">+91-20-61936300</a>/ 
                    <a href="tel:+91-20-61936464">6464</a> /
                    <a href="tel:+91-20-61936419">6419</a>
                  </div>

                  <div className="contact-item">
                    <div className="icon-box">
                      <Smartphone size={22} />
                    </div>
                    <a href="tel:+91-7262980404">+91-7262980404</a>
                  </div>

                  <div className="contact-item">
                    <div className="icon-box">
                      <Mail size={22} />
                    </div>
                    <a href="mailto:adminofficer@sitpune.edu.in">
                      adminofficer@sitpune.edu.in
                    </a>
                  </div>
                </div>
              </div>

              {/* ABOUT */}
              <div className="col-lg-3 col-md-6">
                <div className="footer-links">
                  <h3>
                    About <span>Institute</span>
                  </h3>

                  <ul>
                    <li className="">
                      <ArrowRight size={18} />
                      The Institute
                    </li>

                    <li>
                      <ArrowRight size={18} />
                      Director&apos;s Message
                    </li>

                    <li>
                      <ArrowRight size={18} />
                      Chancellor&apos;s Message
                    </li>

                    <li>
                      <ArrowRight size={18} />
                      Vice Chancellor&apos;s Message
                    </li>

                    <li>
                      <ArrowRight size={18} />
                      Privacy Policy
                    </li>
                  </ul>
                </div>

                {/* WOMEN HELPLINE */}
                <div className="footer-links mt-5">
                  <h3>
                    Women <span>Helpline Number</span>
                  </h3>

                  <ul>
                    <li>
                      <ArrowRight size={18} />
                      8669977044
                    </li>

                    <li>
                      <ArrowRight size={18} />
                      Mandatory Disclosure
                    </li>

                    <li>
                      <ArrowRight size={18} />
                      Health Promoting Initiatives
                    </li>
                  </ul>
                </div>
              </div>

              {/* INFORMATION */}
              <div className="col-lg-2 col-md-6">
                <div className="footer-links">
                  <h3>
                    Information <span>For</span>
                  </h3>

                  <ul>
                    <li>
                      <ArrowRight size={18} />
                      Life at SIT
                    </li>

                    <li>
                      <ArrowRight size={18} />
                      First Year Admission
                    </li>

                    <li>
                      <ArrowRight size={18} />
                      Second Year
                    </li>

                    <li>
                      <ArrowRight size={18} />
                      Admission
                    </li>

                    <li>
                      <ArrowRight size={18} />
                      Ph.D.
                    </li>

                    <li>
                      <ArrowRight size={18} />
                      Campus Tour
                    </li>
                  </ul>
                </div>
              </div>

              {/* IMPORTANT LINKS */}
              <div className="col-lg-3">
                <div className="footer-links">
                  <h3>
                    Important <span>Links</span>
                  </h3>

                  <ul>
                    <li>
                      <ArrowRight size={18} />
                      Contact Us
                    </li>

                    <li>
                      <ArrowRight size={18} />
                      Site Map
                    </li>

                    <li>
                      <ArrowRight size={18} />
                      Training & Placement Cell
                    </li>

                    <li>
                      <ArrowRight size={18} />
                      Grievance Redressal
                    </li>

                    <li>
                      <ArrowRight size={18} />
                      AICTE Feedback Mechanism
                    </li>

                    <li>
                      <ArrowRight size={18} />
                      AICTE Approvals
                    </li>

                    <li>
                      <ArrowRight size={18} />
                      OER Letter
                    </li>

                    <li>
                      <ArrowRight size={18} />
                      Handbook on Basics of Cyber Hygiene
                      for Higher Education Institutions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="footer-bottom">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                <p>
                  Copyright ©2026{" "}
                  <span>Symbiosis Institute of Technology. </span>
                  All rights reserved.
                </p>

                <a href="https://www.evonix.co/" target="_blank" rel="noopener noreferrer" className="crafted_by">
                  Crafted by <span><Image  src="/images/common/footer-logo.webp" alt="Evonix Logo" width={100} height={30} /></span>
                </a>
              </div>
            </div>
          </div>
        </footer>
    </footer>
  )
}

export default Footer
