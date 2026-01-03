import React, { useState } from "react";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";
import feature5 from "../assets/feature5.png";

export default function Services() {
  const [active, setActive] = useState(3);

  const services = [
    { id: 1, title: "Creative Visualisation", img: feature1 },
    { id: 2, title: "Personal Branding", img: feature2 },
    { id: 3, title: "Social Media Marketing", img: feature3 },
    { id: 4, title: "Packaging & Branding", img: feature4 },
    { id: 5, title: "Growth Marketing", img: feature5 },
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
    <section className="w-full min-h-screen font-bricolage bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-48 px-4 sm:px-8 py-20">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 lg:gap-8 z-10 w-full lg:w-auto">
          <span className="border-2 border-[#ccc/70] px-3 py-1 rounded-full w-fit text-sm">Services</span>
          <h1 className="text-h2 -mt-3 font-[500] leading-tight">
            How can we help you?
          </h1>

          {/* SERVICES LIST */}
          <div className="mt-6 lg:mt-8 flex flex-col gap-4 sm:gap-6 lg:ml-12">
            {services.map((s) => (
              <div
                key={s.id}
                onMouseEnter={() => setActive(s.id)}
                onClick={() => setActive(s.id)} // mobile support
                className="cursor-pointer flex items-center gap-4 sm:gap-6 transition-all font-normal">
                <span
                  className={`text-h4 transition-all ${
                    active === s.id ? "text-black" : "text-gray-300"
                  }`}>
                  {`0${s.id}`}
                </span>

                <h2
                  className={`text-xl sm:text-2xl lg:text-3xl transition-all ${
                    active === s.id
                      ? "text-black"
                      : "text-gray-400 opacity-40"
                  }`}>
                  {s.title}
                </h2>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE STACK */}
        <div className="relative w-full max-w-[420px] sm:mt-40 mt-0 sm:max-w-[480px] lg:w-[520px] h-[320px] sm:h-[360px] lg:h-[420px] flex items-center justify-center">
          {services.map((s) => {
            const position = getPosition(s.id);

            if (Math.abs(position) > 1) return null;

            const base =
              "absolute w-[200px] sm:w-[220px] lg:w-[260px] h-[260px] sm:h-[300px] lg:h-[320px] object-cover rounded-xl transition-all duration-500 ease-out";

            let transform = "";
            let z = "";
            let opacity = "";
            let shadow = "";

            if (position === -1) {
              transform =
                "-translate-x-20 sm:-translate-x-28 lg:-translate-x-32 -translate-y-6 sm:-translate-y-8 scale-90";
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
                "translate-x-20 sm:translate-x-28 lg:translate-x-32 translate-y-6 sm:translate-y-8 scale-90";
              z = "z-20";
              opacity = "opacity-40";
              shadow = "shadow-md";
            }

            return (
              <img
                key={s.id}
                src={s.img}
                alt={s.title}
                className={`${base} ${transform} ${z} ${opacity} ${shadow}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
