import { Play } from "lucide-react";
import React from "react";

function Cta() {
  return (
    <section
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
          min-h-[60vh]
          bg-[#D0E8F6]/80
          rounded-3xl
          overflow-hidden
          px-6 sm:px-10 lg:px-12
          py-12 lg:py-16
          flex items-center
        "
      >
        {/* Background C Shape */}
        <div className="absolute right-[-80px] sm:right-[-120px] top-1/2 -translate-y-1/2 opacity-40 pointer-events-none">
          <div className="w-[240px] sm:w-[320px] lg:w-[420px] h-[240px] sm:h-[320px] lg:h-[420px] rounded-full border-[24px] sm:border-[32px] lg:border-[40px] border-[#145DA2]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-md md:max-w-xl lg:max-w-2xl">

          {/* Heading */}
          <h1 className="text-h4 md:text-h3 lg:text-h2 font-medium leading-tight tracking-tight text-black mb-6">
            Strong brands are built through <br />
            structure — not just marketing.
          </h1>

          {/* Paragraph */}
          <p className="text-h6 text-neutral-700 mb-4">
            Most agencies focus on campaigns.
          </p>

          <p className="text-paragraph text-neutral-700 mb-6 leading-relaxed">
            We work with founders and executive teams to define market
            positioning, build identity systems, and strengthen leadership
            presence — so the company and its leadership move in the same
            direction.
          </p>

          <p className="text-paragraph text-black mb-8">
            <span className="font-semibold">
              Positioning. Identity. Executive authority.
            </span>
            <br />
            Built as one connected system.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">

            {/* Play Button */}
            <button className="p-4 rounded-full bg-black flex items-center justify-center shadow-md hover:scale-105 transition">
              <Play className="w-6 h-6 text-white" fill="white" />
            </button>

            {/* CTA Button */}
            <button className="border-2 border-black rounded-full px-6 py-3 text-black text-paragraph font-[500] shadow-md hover:scale-105 transition-transform duration-200">
              Build your Identity
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;