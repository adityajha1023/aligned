import React from "react";

export default function Cta2() {
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
        {/* Background shape */}
        <div className="absolute right-[-80px] sm:right-[-120px] top-1/2 -translate-y-1/2 opacity-40 pointer-events-none">
          <div className="w-[240px] sm:w-[320px] lg:w-[420px] h-[240px] sm:h-[320px] lg:h-[420px] rounded-full border-[24px] sm:border-[32px] lg:border-[40px] border-[#145DA2]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-md md:max-w-xl lg:max-w-2xl">

          <h1 className="text-h4 md:text-h3 lg:text-h2 font-medium tracking-tight mb-6">
            Are we the right fit for you?
          </h1>

          <p className="text-h6 text-neutral-700 mb-4">
            We’re best <i>ALIGNED</i> with organisations that:
          </p>

          <ul className="text-paragraph text-neutral-700 space-y-2 mb-6 pl-4 list-disc">
            <li>Are scaling and need sharper market positioning</li>
            <li>Want their identity to reflect real ambition</li>
            <li>Understand that leadership visibility builds trust</li>
            <li>Value structure over short-term campaigns</li>
            <li>Are building for long-term authority, not quick attention</li>
          </ul>

          <p className="text-paragraph text-black mb-8">
            We don’t operate as a marketing vendor.  
            We work as strategic partners.
          </p>

          <button className="bg-black text-white rounded-full px-6 py-3 text-paragraph font-medium shadow-md hover:scale-105 transition">
            Book a Call
          </button>

        </div>
      </div>
    </section>
  );
}