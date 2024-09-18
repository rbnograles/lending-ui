import React from "react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
// @ts-ignore
import logo from "../assets/logoDevEngine.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#featured", label: "Featured" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact Us" },
];

const socialLinks = [
  {
    href: "https://github.com/yourprofile", // Replace with your GitHub profile
    label: "Github",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/in/yourprofile/", // Replace with your LinkedIn profile
    label: "Linkedin",
    icon: <FaLinkedin />,
  },
  {
    href: "https://www.facebook.com/yourprofile", // Replace with your Facebook profile
    label: "Facebook",
    icon: <FaFacebook />,
  },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pb-12 relative z-10 py-20">
      <div className="absolute h-[500px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-gray-800/70 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Upper section with logo and links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Logo and Brand Information */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="DevEngine Logo"
                className="w-8 h-8 object-contain"
              />
              <h2 className="text-2xl font-semibold">DevEngine</h2>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Turning your ideas into working web applications. Developing
              scalable and manageable web systems that help your business grow.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
            {/* General Column */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400">
                General
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-emerald-500">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Column */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400">
                Social
              </h3>
              <ul className="space-y-2">
                {socialLinks.map((social) => (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-500 flex items-center gap-2"
                    >
                      {social.icon} {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Lower section with privacy and documentation */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="space-x-4 text-sm text-gray-400">
            <p>&copy; 2024. All rights reserved.</p>
          </div>
          <div className="space-x-4 text-sm text-gray-400 mt-4 md:mt-0">
            Ryan Nograles | DevEngine
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
