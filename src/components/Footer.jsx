import React, { memo, useState, useEffect } from "react";
import footer1 from "../assets/footer1.webp";
import footer2 from "../assets/footer2.webp";
import footer3 from "../assets/footer3.webp";
import footer4 from "../assets/footer4.webp";
import footer5 from "../assets/footer5.webp";


const images = [
  footer1,
  footer2,
  footer3,
  footer4,
  footer5
];

const ImageSlideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="inline-block relative overflow-hidden rounded-[6px] align-middle -rotate-12 mx-3 sm:mx-6"
      style={{
        width: "clamp(70px,10vw,140px)",
        height: "clamp(70px,10vw,140px)",
      }}
    >
      <img
        src={images[current]}
        alt="slideshow"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </span>
  );
};

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="font-bricolage py-12 px-4 sm:px-6 lg:px-16 text-[#145DA1] mt-10">
      <div className="max-w-7xl mx-auto">

        {/* Top Navigation */}
        <div className="flex flex-col sm:flex-row justify-between gap-10">

          {/* Menu */}
          <div className="flex flex-col gap-1">
            <h4 className="text-h6 font-[500] py-2">Menu</h4>
            <a href="#work" className="text-paragrap text-[#145DA1] transition">
              Work
            </a>
            <a href="#contact" className="text-paragrap text-[#145DA1] transition">
              Contact
            </a>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-1 sm:text-right">
            <h4 className="text-h6 font-[500] py-2">Socials</h4>
            <a href="/" className="text-paragraph text-[#145DA1] transition">
              Instagram
            </a>
            <a href="mailto:connect@byaligned.com" className="text-paragraph text-[#145DA1] transition">
              Email
            </a>
          </div>

        </div>

        {/* Brand Statement */}
        <div className="flex justify-center items-center pt-16 pb-24">
          <h1 className="font-medium text-[clamp(48px,8vw,120px)] flex items-center leading-none">
            <span>Get</span>
            <ImageSlideshow />
            <span>Aligned</span>
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-paragraph">
          <p>©{currentYear} Aligned. All rights reserved.</p>
          <p className="text-center w-[90%] md:w-[50%]">
            6th floor, Hiranandani Business Park, Saki Vihar Rd, Tunga Village, Chandivali, Powai, Mumbai, Maharashtra 400072
          </p>
          <a
            href="mailto:connect@byaligned.com"
            className="underline underline-offset-2 hover:text-[#145DA1] transition"
          >
            connect@byaligned.com
          </a>
        </div>

      </div>
    </footer>
  );
});

export default Footer;