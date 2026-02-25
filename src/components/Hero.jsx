import React, { lazy, Suspense, memo } from "react";
import heroImg from "../assets/hero_image.webp";

/* Lazy load heavy gallery */
const CircularGallery = lazy(() => import("./CircularGallery"));

function Hero() {
  return (
    <div className="w-full">

      {/* Hero Content */}
      <div className="pt-40 md:pt-26 sm:pt-32 px-4 sm:px-6 flex flex-col items-start md:items-center gap-3 text-center font-bricolage">

        {/* Heading */}
        <h1 className="text-h2 mt-2 md:text-h1 text-left md:text-center font-[500] leading-tight tracking-tight max-w-[100%] lg:max-w-4xl">
          We Build B2B Brands <br /> & The Leaders Behind Them.
        </h1>
        {/* Paragraph */}
        <p className="opacity-70 tracking-normal text-paragraph mt-2 w-[40%]">Strategic positioning and identity systems, built in partnership with founders and executive teams.</p>
        {/* CTA */}
        <a href="/#contact" className="bg-black rounded-full mt-4 px-5 sm:px-6 py-2.5 sm:py-3 text-white text-paragraph font-[500] shadow-md hover:scale-105 transition-transform duration-200">
          Get in Touch
        </a>

      </div>

      {/* Circular Gallery (lazy loaded) */}
      <div
        className="
          relative w-full
          h-[420px]
          sm:h-[420px]
          md:h-[500px]
          lg:h-[600px]
          mt-4 sm:mt-6
        "
      >
        <Suspense fallback={null}>
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.18}
          />
        </Suspense>
      </div>

    </div>
  );
}

export default memo(Hero);