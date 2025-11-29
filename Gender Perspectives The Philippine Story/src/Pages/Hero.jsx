import React from "react";
import "../assets/Style/Hero.css";
import logs from "../assets/imges/logs.png";

/**
 * Hero Section Component
 * @component
 * @description Main hero section featuring site branding and introductory content
 * @returns {JSX.Element} Rendered hero section
 */
function Hero() {
  return (
    <section
      className="hero-section"
      role="banner"
      aria-labelledby="hero-heading"
    >
      {/* Logo Container */}
      <div className="hero-logo-container ">
        <img
          src={logs}
          alt="Gender Evolution Philippines - Site Logo"
          className="hero-logo"
          width={320}
          height={260}
          loading="eager"
        />
      </div>

      {/* Content Container */}
      <div className="hero-content">
        <h1 id="hero-heading" className="hero-title">
          Gender Evolution in the
          <span style={{ color: "#D4AF37" }}> P</span>
          <span style={{ color: "#7D4F2D" }}>hi</span>
          <span style={{ color: "#8B4513" }}>lip</span>
          <span style={{ color: "#654321" }}>pines</span>
        </h1>

        <p className="hero-description" style={{ color: "#5D4037" }}>
          A journey through the shifting gender roles that shaped Filipino
          identity— from pre-colonial equality to colonial transformations and
          modern movements for diversity and inclusion.
        </p>
      </div>
    </section>
  );
}

export default Hero;
