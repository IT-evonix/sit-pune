"use client";

import React from 'react'
import Rounded_CTA from '../ui/Rounded_CTA'

const Herobannervideo = () => {
  return (
    <section className="hero-video position-relative">
        <video className="w-100" autoPlay muted loop playsInline controls>
            <source src="/videos/Sit_banner_video.mp4" type="video/mp4" />
        </video>
        {/* <div className="col-lg-6">
            <h1 className="display-5 text-white">
                Engineering the Future at <span className="sitpunetext">SIT Pune</span>
            </h1>

            <p className="mt-2 text-white">
                Welcome to Symbiosis Institute of Technology — where innovation meets excellence in engineering education.
            </p>

            <div className="mt-2 d-flex gap-3">
                    <Rounded_CTA label="Apply Now" link="/apply" bgColor = "#fff" textColor="#C4161C" borderColor="transparent" />
                    <Rounded_CTA label="Explore More" link="/programme" bgColor = "#transparent" textColor="#fff" borderColor="#fff" />
            </div>

            <ul className="herolist">
                <li>Industry-Ready Curriculum</li>
                <li>Expert Faculty</li>
                <li>Innovation Hub</li>
            </ul>
        </div> */}
    </section>
  );
};

export default Herobannervideo;