import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-lg border-b border-[#ccc] font-bricolage">
      {/* Navbar */}
      <div className="h-[80px] flex justify-between items-center px-6 md:px-32">
        {/* Logo */}
        <img src="./logo.webp" alt="Logo" className="h-[48px]" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center">
          {["Home", "Services", "Projects", "FAQs"].map((item) => (
            <li
              key={item}
              className="text-paragraph opacity-65 cursor-pointer hover:opacity-100 hover:scale-110 transition-all duration-300">
              {item}
            </li>
          ))}

          {/* Contact Button */}
          <li className="relative px-[1.5px] py-[1.5px] rounded-full cursor-pointer">
            <span className="absolute inset-0 rounded-full bg-gradient-to-b from-black via-white to-[#7795CC]" />
            <span className="relative block px-4 py-2 bg-white rounded-full text-[16px] font-medium">
              Contact Us
            </span>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={22} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute rounded-b-[50px] top-[80px] left-0 w-full bg-white backdrop-blur-lg border-b border-[#ccc] transition-all duration-300 overflow-hidden
        ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-center gap-6 py-8">
          {["Home", "Services", "Projects", "FAQs"].map((item) => (
            <li
              key={item}
              onClick={() => setOpen(false)}
              className="text-[18px] opacity-70 hover:opacity-100 transition"
            >
              {item}
            </li>
          ))}

          {/* Mobile Contact Button */}
          <li className="relative px-[1.5px] py-[1.5px] rounded-full cursor-pointer">
            <span className="absolute inset-0 rounded-full bg-gradient-to-b from-black via-white to-[#7795CC]" />
            <span className="relative block px-6 py-2 bg-white rounded-full text-[16px] font-medium">
              Contact Us
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
