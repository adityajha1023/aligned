import React from "react";
import RightFit from "../assets/RightFit.webp";

export default function Cta2() {
  return (
    <section
      className="
        w-full
        min-h-[90vh] lg:min-h-screen
        flex items-center justify-between
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
          flex
          flex-col lg:flex-row justify-center
          items-center
          gap-8 lg:gap-12
        "
      >
        {/* Image */}
        <div className="w-screen px-4 relative lg:w-1/2 flex justify-center">
          <img
            src={RightFit}
            alt=""
            className="
               w-full
               h-auto
               object-cover
               lg:object-contain"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full lg:w-1/2 max-w-md md:max-w-xl lg:max-w-2xl text-center lg:text-left">
          {/* 
          <h1 className="text-h4 md:text-h3 lg:text-h2 font-medium tracking-tight mb-6">
            Are we the right fit for you?
          </h1>

          <p className="text-h6 text-[#F3F7CD] mb-4">
            We’re best <i>ALIGNED</i> with organisations that:
          </p>

          <ul className="text-paragraph text-[neutral-700] space-y-2 mb-6 pl-4 list-disc">
            <li>Are scaling and need sharper market positioning</li>
            <li>Want their identity to reflect real ambition</li>
            <li>Understand that leadership visibility builds trust</li>
            <li>Value structure over short-term campaigns</li>
            <li>Are building for long-term authority, not quick attention</li>
          </ul>

          <p className="text-paragraph text-[#F7F3CD] mb-8">
            We don’t operate as a marketing vendor.  
            We work as strategic partners.
          </p> 
          */}

          <button className="bg-[#145DA1] text-[#F7F3CD] rounded-full px-6 py-3 text-paragraph font-medium shadow-md hover:scale-105 transition">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
}