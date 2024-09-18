// src/components/Testimonials.jsx
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      review:
        "This platform has completely transformed how we manage our equipment rentals. The interface is easy to use and has saved us so much time!",
      company: "Event Planners Inc.",
    },
    {
      name: "Jane Smith",
      review:
        "We’ve seen a massive improvement in how we book and organize our facilities. Our customers are happier and the system is seamless!",
      company: "Corporate Events Ltd.",
    },
    {
      name: "Michael Johnson",
      review:
        "The best tool we’ve used so far for managing our gym equipment bookings. It’s reliable and user-friendly!",
      company: "Fitness World",
    },
  ];

  return (
    <section className="bg-[#111827] py-12 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1f2937] p-6 rounded-lg shadow-md text-white"
            >
              <p className="italic mb-4">"{testimonial.review}"</p>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-gray-400">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
