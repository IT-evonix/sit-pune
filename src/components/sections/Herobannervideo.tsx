import React from "react";

const Herobannervideo = () => {
  return (
    <section className="hero-video position-relative">
      <video
        className="w-100"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/Sit_banner_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Herobannervideo;