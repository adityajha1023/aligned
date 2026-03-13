import React from "react";
import Work1 from "../assets/feature1.webp";
import Work2 from "../assets/feature2.webp";
import Work3 from "../assets/feature3.webp";
import Work4 from "../assets/feature4.webp";
import Work5 from "../assets/feature5.webp";

function Work() {

  const works = [
    { img: Work1, h: "h-[220px] sm:h-[260px] lg:h-[300px]" },
    { img: Work2, h: "h-[240px] sm:h-[300px] lg:h-[350px]" },
    { img: Work3, h: "h-[200px] sm:h-[240px] lg:h-[270px]" },
    { img: Work4, h: "h-[240px] sm:h-[300px] lg:h-[350px]" },
    { img: Work5, h: "h-[220px] sm:h-[260px] lg:h-[300px]" }
  ];

  return (
    <section
      id="work"
      className="
        w-full
        min-h-[90vh] lg:min-h-screen
        flex flex-col
        justify-center
        items-center
        gap-12 md:gap-20
        px-4 sm:px-6
        font-bricolage
      "
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center max-w-xl">

        <span className="border border-[#A8A8A8] px-3 py-1 rounded-full text-sm">
          Showcase
        </span>

        <h1 className="text-h4 md:text-h3 lg:text-h2 font-[500] tracking-tight mt-3">
          A selection of our work
        </h1>

        <p className="text-paragraph text-neutral-700 mt-2">
          A selection of brands we've brought into alignment
        </p>

      </div>

      {/* Gallery */}
      <div
        className="
          w-full
          max-w-7xl
          flex
          items-end
          gap-10
          overflow-x-auto
          lg:overflow-visible
          pb-4
        "
      >
        {works.map((w, i) => (
          <img
            key={i}
            src={w.img}
            alt="Work"
            loading="lazy"
            className={`
              ${w.h}
              w-[180px] sm:w-[200px] lg:w-[220px]
              object-cover
              rounded-xl
              border border-[#ccc]
              flex-shrink-0
              transition-transform duration-300
              hover:scale-105
            `}
          />
        ))}
      </div>
    </section>
  );
}

export default Work;