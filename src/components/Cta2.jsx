import React from "react";
import RightFit from "../assets/RightFit.webp";

export default function Cta2() {
  return (
    <section
      data-reveal
      className="
        w-full
        min-h-[90vh] lg:min-h-screen
        flex items-center justify-center
        px-4 sm:px-6 lg:px-12
        font-bricolage
      "
    >
      <div
        className="
          relative
          w-full
          max-w-7xl
          h-fit
          rounded-3xl
          overflow-hidden
          px-6 sm:px-10 lg:px-12
          py-12 lg:py-16
          flex flex-col
          lg:flex-row
          items-center
          justify-center
          gap-8
        "
      >
        {/* Image */}
        <div className="w-full max-w-lg flex justify-center">
          <img
            src={RightFit}
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Button */}
        <a href="https://calendly.com/shreya-aligned/30min" className="bg-[#145DA1] text-[#F7F3CD] rounded-full px-6 py-3 text-paragraph font-medium shadow-md hover:scale-105 transition">
          Book a Call
        </a>
      </div>
    </section>
  );
}