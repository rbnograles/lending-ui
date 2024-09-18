// src/components/AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#111827] py-12 text-white">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl font-bold mb-6 text-blue-400">
          About Our Platform
        </h2>
        <p className="text-lg mb-4">
          Our Facility & Equipment Management platform is designed to help
          businesses streamline the management of their facilities and
          equipment. Whether you're in the event planning industry, managing a
          gym, or renting out venues, our platform offers comprehensive tools
          for scheduling, tracking, and optimizing resource usage.
        </p>
        <p className="text-lg mb-6">
          With intuitive interfaces, real-time availability tracking, and easy
          booking options, you'll experience reduced downtime and increased
          efficiency. Join us in transforming the way businesses manage their
          assets, and discover how effortless facility management can be!
        </p>
        <div className="flex justify-center mt-6">
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
