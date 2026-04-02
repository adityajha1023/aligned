import React, { lazy, Suspense, memo } from "react";

const CircularGallery = lazy(() => import("./CircularGallery"));

const Hero = memo(function Hero() {
  return (
    <div className="w-full">

      {/* Hero Content */}
      <div className="pt-12 md:pt-16 lg:pt-20 px-6 md:px-16 lg:px-20 flex flex-col items-start md:items-center gap-4 md:gap-5 lg:gap-6 text-left md:text-center font-bricolage">

        {/* Heading */}
        <h1 className="
          text-h3
          md:text-h2
          lg:text-h1
          font-[500]
          leading-tight
          tracking-tight
          max-w-full
          md:max-w-2xl
          lg:max-w-4xl
          text-[#145DA1]
          animate-textReveal [animation-delay:0.5s]
        ">
          We Build Brands With Authority <br />
          And The Leaders Behind Them.
        </h1>

        {/* Paragraph */}
        <p className="
          text-paragraph
          max-w-md
          md:max-w-lg
          lg:max-w-xl
        ">
          Strategic positioning, identity systems, and brand communication built with founders and executive teams.
        </p>

        {/* CTA */}
        
        <a  href="https://calendly.com/shreya-aligned/30min"
          className="
            bg-[#145DA1]
            text-[#F7F3CD]
            text-paragraph
            font-[500]
            rounded-full
            px-6
            py-3
            shadow-md
            hover:scale-105
            transition-transform
            duration-200
          "
        >
          Get in Touch
        </a>

      </div>

      {/* Circular Gallery */}
      <div className="
        relative w-full
        h-[380px]
        sm:h-[420px]
        md:h-[500px]
        lg:h-[640px]
        mt-6
      ">
        <Suspense
          fallback={
            <div className="w-full h-full bg-gradient-to-b from-[#F7F3CD]/40 to-[#F7F3CD] animate-pulse" />
          }
        >
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
});

export default Hero;