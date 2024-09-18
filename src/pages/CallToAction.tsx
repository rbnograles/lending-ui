// src/components/CallToAction.jsx
import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-black/65 text-white py-12 text-center z-50 relative">
      <h2 className="text-4xl font-bold mb-4">
        Ready to Manage Your Facilities & Equipment?
      </h2>
      <p className="text-lg mb-6">
        Get started today and take your operations to the next level with our
        intuitive platform.
      </p>
      <button className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-200">
        Get Started Now
      </button>
    </section>
  );
};

export default CallToAction;
