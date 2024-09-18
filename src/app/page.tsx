// src/pages/Home.jsx
import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../pages/Hero";
import FeaturedSection from "../pages/Feature";
import Footer from "../pages/Footer";
import AboutUs from "../pages/AboutUs";
import CallToAction from "../pages/CallToAction";
import ContactUs from "../pages/ContactUs";
import Testimonials from "../pages/Testimonials";

export default function Home() {
  return (
    <>
      <NavBar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="featured">
        <FeaturedSection />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <CallToAction />
      <Footer />
    </>
  );
}
