import React, { useState } from "react";
import feature1 from "../assets/feature1.webp";
import feature2 from "../assets/feature2.webp";
import feature3 from "../assets/feature3.webp";
import feature4 from "../assets/feature4.webp";
import feature5 from "../assets/feature5.webp";

export default function Services() {
  const [active, setActive] = useState(3);

  const services = [
    { id: 1, title: "Brand & Positioning", img: feature1 },
    { id: 2, title: "Identity & Communication Assets", img: feature2 },
    { id: 3, title: "Content & Authority System", img: feature5 },
    { id: 4, title: "Distribution & Visibility", img: feature4 },
    { id: 5, title: "Growth Marketing", img: feature3 },
  ];

  const getPosition = (serviceId) => {
    const activeIdx = services.findIndex((s) => s.id === active);
    const currentIdx = services.findIndex((s) => s.id === serviceId);
    const total = services.length;

    let diff = currentIdx - activeIdx;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  };

  return (
    <section
      data-reveal
      id="services"
      className="
        w-full
        h-screen md:h-[50vh] lg:h-[80vh]
        flex items-center justify-center
        font-bricolage mb-16 lg:mb-0
        px-6 md:px-16 lg:px-12
        text-[#145DA1]
      "
    >
      <div
        className="
          max-w-7xl
          w-full
          flex flex-col md:flex-row lg:flex-row justify-center
          items-center
          gap-8 md:gap-14 lg:gap-24
          py-12 md:py-0 lg:py-24
        "
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-4 w-full lg:max-w-xl">

          <h1 className="text-h4 md:text-h3 lg:text-h2 font-[500] leading-tight tracking-tight">
            How we align your brand for growth
          </h1>

          {/* SERVICES LIST */}
          <div className="mt-4 md:mt-6 flex flex-col gap-3 md:gap-4 lg:gap-5">
            {services.map((s) => (
              <div
                key={s.id}
                onMouseEnter={() => setActive(s.id)}
                onTouchStart={() => setActive(s.id)}
                onClick={() => setActive(s.id)}
                className="cursor-pointer flex items-center gap-4 transition-all"
              >
                <span
                  className={`text-h6 md:text-h6 lg:text-h4 transition-all ${
                    active === s.id
                      ? "text-[#145DA1] font-medium"
                      : "text-[#145DA1]/30"
                  }`}
                >
                  {`0${s.id}`}
                </span>

                <h2
                  className={`text-h5 md:text-h5 lg:text-h4 tracking-tight transition-all duration-300 ${
                    active === s.id
                      ? "text-[#145DA1] font-medium"
                      : "text-[#145DA1]/30"
                  }`}
                >
                  {s.title}
                </h2>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE STACK */}
        <div
          className="
            relative
            w-full
            max-w-[300px]
            md:max-w-[400px]
            lg:max-w-[520px]
            h-[260px]
            md:h-[320px]
            lg:h-[420px]
            flex items-center justify-center
          "
        >
          {services.map((s) => {
            const position = getPosition(s.id);

            if (Math.abs(position) > 1) return null;

            const base =
              "absolute w-[180px] md:w-[220px] lg:w-[260px] h-[240px] md:h-[280px] lg:h-[320px] object-cover rounded-2xl transition-all duration-500 ease-out border border-[#ccc]";

            let transform = "";
            let z = "";
            let opacity = "";
            let shadow = "";

            if (position === -1) {
              transform =
                "-translate-x-14 md:-translate-x-20 lg:-translate-x-32 -translate-y-4 md:-translate-y-5 lg:-translate-y-6 scale-90";
              z = "z-10";
              opacity = "opacity-40";
              shadow = "shadow-md";
            } else if (position === 0) {
              transform = "scale-100";
              z = "z-30";
              opacity = "opacity-100";
              shadow = "shadow-2xl";
            } else if (position === 1) {
              transform =
                "translate-x-14 md:translate-x-20 lg:translate-x-32 translate-y-4 md:translate-y-5 lg:translate-y-6 scale-90";
              z = "z-20";
              opacity = "opacity-40";
              shadow = "shadow-md";
            }

            return (
              <img
                key={s.id}
                src={s.img}
                alt={s.title}
                loading="lazy"
                decoding="async"
                className={`${base} ${transform} ${z} ${opacity} ${shadow}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}