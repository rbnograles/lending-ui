// src/components/FeaturedSection.jsx
import React from "react";

const FeaturedSection = () => {
  const features = [
    {
      name: "Conference Room",
      description:
        "A fully equipped and modern conference room with a capacity of up to 100 people, perfect for meetings and workshops.",
      img: "/img/conference-room.jpg",
      rating: 4.5,
    },
    {
      name: "Gym Equipment",
      description:
        "Top-tier gym equipment, including treadmills, weights, and more. Perfect for fitness centers and personal trainers.",
      img: "/img/gym-equipment.jpg",
      rating: 4.8,
    },
    {
      name: "Event Hall",
      description:
        "A spacious event hall with audio-visual equipment, ideal for weddings, parties, and large corporate events.",
      img: "/img/event-hall.jpg",
      rating: 4.7,
    },
  ];

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Featured Facilities & Equipment
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-[#1f2937] text-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={feature.img}
              alt={feature.name}
              className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-yellow-400 font-bold">
                  {feature.rating} ★
                </span>
                <button className="text-blue-400 hover:text-blue-500 underline">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
