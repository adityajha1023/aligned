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
    <div className="w-full min-h-screen font-bricolage flex justify-center gap-48 items-center p-16 bg-gray-50">
      <div className="flex flex-col gap-8 z-10">
        <h3 className="text-sm border border-gray-400 px-4 py-1 rounded-full w-fit">Services</h3>
        <h1 className="text-5xl font-normal -mt-2 leading-tight max-w-4xl">How can we help you?</h1>

        <div className="mt-8 flex flex-col gap-6 ml-12">
          {services.map((s) => (
            <div
              key={s.id}
              onMouseEnter={() => setActive(s.id)}
              className="cursor-pointer transition-all duration-300 flex items-center gap-6"
            >
              <span
                className={`text-3xl font-normal transition-all duration-300 ${
                  active === s.id ? "text-black" : "text-gray-300"
                }`}
              >
                {`0${s.id}`}
              </span>
              <h2
                className={`text-3xl font-normal transition-all duration-300 ${
                  active === s.id ? "text-black" : "text-gray-400 opacity-40"
                }`}
              >
                {s.title}
              </h2>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-[520px] h-[420px] flex items-center justify-center">
        {services.map((s) => {
          const position = getPosition(s.id);
          
          if (position === -2 || position === 2) {
            return null;
          }

          const baseClasses = "absolute w-[260px] h-[320px] object-cover rounded-xl transition-all duration-500 ease-out";

          let transformClasses = "";
          let zClass = "";
          let opacityClass = "";
          let shadowClass = "";

          if (position === -1) {
            transformClasses = "-translate-x-32 -translate-y-8 scale-90 ";
            zClass = "z-10";
            opacityClass = "opacity-40";
            shadowClass = "shadow-md";
          } else if (position === 0) {
            transformClasses = "translate-x-0 translate-y-0 scale-100 rotate-0";
            zClass = "z-30";
            opacityClass = "opacity-100";
            shadowClass = "shadow-2xl";
          } else if (position === 1) {
            transformClasses = "translate-x-32 translate-y-8 scale-90 ";
            zClass = "z-20";
            opacityClass = "opacity-40";
            shadowClass = "shadow-md";
          }

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