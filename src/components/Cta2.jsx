import React from "react";
import RightFit from "../assets/RightFit.webp";

export default function Cta2() {
  return (
    <section
      data-reveal
      className="
        w-full
        flex items-center justify-center
        px-0 sm:px-6 lg:px-12
        py-12 sm:py-16 lg:py-20
        font-bricolage
      "
    >
      <div
        className="
          relative
          w-full
          max-w-7xl
          rounded-3xl
          overflow-hidden
          px-4 md:px-6 lg:px-12
          py-10 lg:py-16
          flex flex-col lg:flex-row
          items-center
          justify-evenly
          gap-10 lg:gap-16
        "
      >
        {/* Image */}
        <img
            src={RightFit}
            alt="Brand alignment illustration"
            className="w-full object-cover"
          />

        {/* Content */}
        <div className="flex flex-col lg:flex-col items-center lg:items-start gap-6 text-center lg:text-left">

          {/* Cards wrapper */}
          <div className="flex flex-row md:flex-row lg:flex-col gap-6 w-full justify-center lg:justify-start">

            <div className="bg-[#145DA1] text-[#F7F3CD] flex flex-col rounded-md px-6 py-2 lg:py-6 text-sm sm:text-base font-medium shadow-md text-center w-[10rem] lg:w-[15rem] md:w-[17rem]">
              <span className="text-2xl sm:text-3xl font-bold">40+</span>
              brands aligned, <br /> and counting
            </div>

            <div className="bg-[#145DA1] text-[#F7F3CD] flex flex-col rounded-md px-6 py-2 lg:py-6 text-sm sm:text-base font-medium shadow-md text-center w-[10rem] lg:w-[15rem] md:w-[17rem]">
              <span className="text-2xl sm:text-3xl font-bold">3X</span>
              engagement lift <br /> for our clients
            </div>

          </div>

          {/* Button (always below) */}
          <a
            href="https://calendly.com/shreya-aligned/30min"
            className="
            lg:w-[15rem] w-fit text-center
            border-2 border-[#145DA1]
            bg-[#F7F3CD]
            text-[#145DA1]
            rounded-full
            px-6 py-3
            text-sm sm:text-base
            font-medium
            shadow-md
            hover:scale-105
            transition-all duration-200
            hover:bg-[#145DA1]
            hover:text-[#F7F3CD]"
          >
            Start the Conversation
          </a>

        </div>
      </div>
    </section>
  );
}