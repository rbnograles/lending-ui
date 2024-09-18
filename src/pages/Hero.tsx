// src/components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-hero-pattern bg-cover bg-center h-[500px] flex items-center justify-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content on top of the overlay */}
      <div className="relative z-10 text-center text-white max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">
          Facility & Equipment Management
        </h1>
        <p className="text-lg mb-6">
          Seamlessly manage and rent out your facilities and equipment with our
          comprehensive platform, built for modern businesses.
        </p>
        <button className="bg-blue-500 px-6 py-3 rounded text-white font-semibold hover:bg-blue-400 mb-4">
          <a href="#featured">Get Started</a>
        </button>
        <p>
          <a href="#about" className="text-blue-300 hover:text-blue-400">
            Learn more about our platform
          </a>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
