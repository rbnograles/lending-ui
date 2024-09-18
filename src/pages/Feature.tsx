// src/components/FeaturedSection.jsx
import React from "react";

const FeaturedSection = () => {
  const features = [
    {
      name: "Conference Room",
      description:
        "A fully equipped and modern conference room with a capacity of up to 100 people, perfect for meetings and workshops.",
      img: "https://imgs.search.brave.com/zQkuvC4ZCP9UnzhsfTJhMg1z8YRUschHc2UWw7X_v4g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzcwLzA5Lzcw/LzM2MF9GXzc3MDA5/NzAwMF9ORjdaTWZL/NjNlYUJBZnU2Zncx/bWhFTEF6elREVWtY/Ry5qcGc",
      rating: 4.5,
    },
    {
      name: "Gym Equipment",
      description:
        "Top-tier gym equipment, including treadmills, weights, and more. Perfect for fitness centers and personal trainers.",
      img: "https://imgs.search.brave.com/bNsLR0XVyyt9fnuMor1Dz6DQwesesrz240RFsatC10E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzAzLzQ0Lzgy/LzM2MF9GXzMwMzQ0/ODI3NF8wTjdpWXBa/N0I4RXIzejdpRFJh/NzB6aHhpaEdmanBO/Wi5qcGc",
      rating: 4.8,
    },
    {
      name: "Event Hall",
      description:
        "A spacious event hall with audio-visual equipment, ideal for weddings, parties, and large corporate events.",
      img: "https://imgs.search.brave.com/lXU2jsa65pyd9zCXOfpipRAdQwmnukDMmjBw1Jg04rg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU2Lzdl/L2M5LzU2N2VjOWNi/NzY2YmI4NTk0ZWEz/MjA5MjNjMzNmNTRh/LmpwZw",
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
