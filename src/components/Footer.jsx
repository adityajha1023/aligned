import React, { memo, useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
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
      className="inline-block relative overflow-hidden rounded-[6px] align-middle -rotate-12 mx-8"
      style={{
        width: "clamp(80px, 10vw, 140px)",
        height: "clamp(80px, 10vw, 140px)",
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
    <footer className="mx-28 font-bricolage py-12">
      {/* Top Navigation */}
      <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-0">
        {/* Menu */}
        <div className="flex flex-col gap-1">
          <h4 className="text-h6 font-[500] py-2">Menu</h4>
          <a href="#" className="text-paragraph hover:text-black transition text-[#606060]">
            Work
          </a>
          <a href="#" className="text-paragraph hover:text-black transition text-[#606060]">
            Contact
          </a>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-1 sm:text-right">
          <h4 className="text-h6 font-[500] py-2">Socials</h4>
          <a href="#" className="text-paragraph hover:text-black transition text-[#606060]">
            Instagram
          </a>
          <a href="#" className="text-paragraph hover:text-black transition text-[#606060]">
            Email
          </a>
        </div>
      </div>

      {/* Brand */}
      <div className="flex justify-center items-center py-16 my-2">
        <h1 className="font-medium font-bricolage text-[120px] flex items-center leading-none">
          <span className="opacity-80">Get</span>
          <ImageSlideshow />
          <span className="opacity-80">Aligned</span>
        </h1>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row mb-1 justify-between items-center gap-2 sm:gap-0 text-paragraph">
        <p>©{currentYear} Aligned. All rights reserved.</p>
        <a href="mailto:info@aligned.com" className="underline underline-offset-2 hover:text-black transition">
          info@aligned.com
        </a>
      </div>
    </footer>
  );
});

export default Footer;