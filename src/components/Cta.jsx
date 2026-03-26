import { Play } from "lucide-react";
import React from "react";

function Cta() {
  return (
    <section
      className="
        w-full
        py-16 sm:py-20 lg:py-28
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
          bg-[#145DA1]
          rounded-3xl
          overflow-hidden
          px-6 sm:px-10 lg:px-16
          py-12 sm:py-14 lg:py-20
          flex items-center
        "
      >
        {/* Background Image */}
        <div
          className="
            absolute
            right-[-40px] sm:right-[0px] lg:right-[40px]
            bottom-[-40px] sm:bottom-auto
            sm:top-1/2 sm:-translate-y-1/2
            opacity-20 sm:opacity-30
            pointer-events-none
          "
        >
          <img
            src="/favicon-light.png"
            alt="background shape"
            className="
              w-[160px]
              sm:w-[240px]
              lg:w-[360px]
              xl:w-[420px]
              h-auto
            "
          />
        </div>

        {/* Content */}
        <div
          className="
            relative z-10
            max-w-md sm:max-w-lg lg:max-w-2xl
          "
        >
          {/* Heading */}
          <h1
            className="
              text-h4
              sm:text-h3
              lg:text-h2
              font-medium
              leading-[1.2]
              tracking-tight
              text-[#F7F3CD]
              mb-5 sm:mb-6
            "
          >
            Strong brands are built through <br />
            structure — not just marketing.
          </h1>

          {/* Sub */}
          <p className="text-h6 text-[#F7F3CD] mb-3 sm:mb-4 opacity-90">
            Most agencies focus on campaigns.
          </p>

          {/* Body */}
          <p className="text-paragraph text-[#F7F3CD] mb-5 sm:mb-6 leading-relaxed opacity-90">
            We work with founders and executive teams to define market
            positioning, build identity systems, and strengthen leadership
            presence — so the company and its leadership move in the same
            direction.
          </p>

          <p className="text-paragraph text-[#F7F3CD] mb-8 sm:mb-10">
            <span className="font-semibold">
              Positioning. Identity. Executive authority.
            </span>
            <br />
            Built as one connected system.
          </p>

          {/* CTA */}
          <div
            className="
              flex
              items-center
              gap-4 sm:gap-6
            "
          >
            {/* Play */}
            <button className="p-3 sm:p-4 rounded-full bg-[#F7F3CD] flex items-center justify-center shadow-md hover:scale-105 transition">
              <Play className="w-5 h-5 sm:w-6 sm:h-6 text-[#145DA1]" fill="#145DA1" />
            </button>

            {/* Button */}
            <button className="border-2 bg-[#F7F3CD] rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-[#145DA1] text-paragraph font-[500] shadow-md hover:scale-105 transition-transform duration-200 whitespace-nowrap">
              Build your Identity
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;