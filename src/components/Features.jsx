import React, { useState } from "react";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";
import feature5 from "../assets/feature5.png";

export default function Services() {
  // default active = 2 (Social Media Marketing)
  const [active, setActive] = useState(2);

  const services = [
    { id: 1, title: "Creative Visualisation", img: feature1 },
    { id: 2, title: "Personal Branding", img: feature2 },
    { id: 3, title: "Social Media Marketing", img: feature3 },
    { id: 4, title: "Packaging & Branding", img: feature4 },
    { id: 5, title: "Growth Marketing", img: feature5 },
  ];

  // helper to get left and right neighbors for the active index (circular)
  const idx = (id) => services.findIndex((s) => s.id === id);
  const left = services[(idx(active) + services.length - 1) % services.length].id;
  const right = services[(idx(active) + 1) % services.length].id;

  return (

    <div className="w-full min-h-[120vh] font-bricolage flex justify-center gap-48 items-center p-16">
      {/* LEFT SIDE - TEXT */}
      <div className="flex flex-col gap-8 z-10">
        <h3 className="text-sm border border-gray-400 px-4 py-1 rounded-full w-fit">Services</h3>
        <h1 className="text-5xl font-regular -mt-2">How can we help you?</h1>

        <div className="mt-8 flex flex-col gap-6 ml-12">
          {services.map((s) => (
            <div
              key={s.id}
              onMouseEnter={() => setActive(s.id)}
              className={`cursor-pointer transition-all duration-300 flex items-center gap-6`}>
              <span
                className={`text-[32px] font-regular transition-all duration-300 ${
                  active === s.id ? "text-black" : "text-gray-300"
                }`}>
                {`0${s.id}`}
              </span>
              <h2 className={`text-[32px] font-regular transition-all duration-300 ${
                  active === s.id ? "text-black" : "text-gray-400 opacity-40"
                }`}>{s.title}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE - STACKED IMAGES */}
      <div className="relative mt-24 w-[520px] h-[420px] flex items-center justify-center">
        {services.map((s) => {
          // position: left / middle(active) / right
          const position = s.id === left ? "left" : s.id === right ? "right" : "middle";

          // apply transforms so that the 'middle' image is visually centered and sits BETWEEN left and right
          const baseClasses =
            "absolute w-[260px] h-[320px] object-cover rounded-xl transition-all duration-500 ease-out";

          let transformClasses = "";
          let zClass = "";
          let opacityClass = "";
          let shadowClass = "";

          if (position === "left") {
            transformClasses = "-translate-x-28 -translate-y-6 scale-95";
            zClass = "z-10"; // behind
            opacityClass = "opacity-30 scale-95";
            shadowClass = "";
          } else if (position === "right") {
            transformClasses = "translate-x-28 translate-y-6 scale-95";
            zClass = "z-20"; // behind middle but above left
            opacityClass = "opacity-30 scale-95";
            shadowClass = "";
          } else {
            // middle (active)
            transformClasses = "translate-x-0 translate-y-0 scale-105";
            zClass = "z-30"; // ON TOP so it visually covers others
            opacityClass = "opacity-100"; // full opacity
            shadowClass = "shadow-xl"; // stronger shadow
          }

          // ensure the active id corresponds to the middle position (so hovering swaps correctly)
          return (
            <img
              key={s.id}
              src={s.img}
              alt={s.title}
              className={`${baseClasses} ${transformClasses} ${zClass} ${opacityClass} ${shadowClass}`}
            />
          );
        })}
      </div>
    </div>
  );
}