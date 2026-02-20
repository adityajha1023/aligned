import React, { lazy, Suspense, memo } from "react";
import heroImg from "../assets/hero_image.webp";

/* Lazy load heavy gallery */
const CircularGallery = lazy(() => import("./CircularGallery"));

function Hero() {
  return (
    <div className="w-full">

      {/* Hero Content */}
      <div className="pt-36 md:pt-26 sm:pt-32 px-4 sm:px-6 flex flex-col items-start md:items-center gap-3 text-center font-bricolage">

        {/* Badge */}
        <p className="border border-[#ccc/70] px-3 py-1 rounded-full text-sm">
          with ALN'D
        </p>

        {/* Heading */}
        <h1 className="text-h2 md:text-h1 text-left md:text-center font-[500] leading-tight max-w-[100%] lg:max-w-4xl">

          <span className="text-[#3A4DA7]">Strategic </span>
          in thought.{" "}

          <span className="inline-flex items-center gap-2">
            Artful
            <img
              src={heroImg}
              alt="hero"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-9 sm:h-10 md:h-12 rounded-full object-cover"
            />
          </span>{" "}

          in execution. Always
          <span className="text-[#3A4DA7]"> ALIGNED.</span>

        </h1>

        {/* CTA */}
        <a
          href="/#contact"
          className="bg-black rounded-full mt-4 px-5 sm:px-6 py-2.5 sm:py-3 text-white text-paragraph font-[500] shadow-md hover:scale-105 transition-transform duration-200"
        >
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