import React from "react";
import "../assets/Style/Hero.css";

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
      {/* Content Container */}
      <div className="hero-content text-center">
        <h1 id="hero-heading" className="hero-title">
          Gender Evolution in the
          <span style={{ color: "white" }}> P</span>
          <span style={{ color: "yellow" }}>hi</span>
          <span style={{ color: "red" }}>lip</span>
          <span style={{ color: "blue" }}>pines</span>
        </h1>

        <p
          className="hero-description"
          style={{ color: "black", maxWidth: "700px", margin: "1rem auto" }}
        >
          A journey through the shifting gender roles that shaped Filipino
          identity—from pre-colonial equality to colonial transformations and
          modern movements for diversity and inclusion.
        </p>

        {/* Members Section */}
        <div className="hero-members mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Members
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Roberto Sintos, BSIT-3B",
              "Rolando Abayon, BSIT-3B",
              "Jayjay Commendor, BSIT-3B",
              "Jomil Gruta, BSIT-3B",
              "Dennis Chan, BSIT-3B",
            ].map((member) => (
              <span
                key={member}
                className="bg-amber-700 text-white px-4 py-2 rounded-full shadow-lg text-sm md:text-base font-semibold hover:bg-amber-800 transition"
              >
                {member}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
