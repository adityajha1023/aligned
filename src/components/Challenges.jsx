import { ChartNoAxesCombined, Sprout, TruckElectric } from "lucide-react";
import React from "react";

export default function Challenges() {
  const cards = [
    {
      icon: <TruckElectric className="opacity-50" size={40} strokeWidth={1.2} />,
      title: "Early Traction",
      focus: "Direction and clarity.",
      items: [
        "Clarifying core positioning",
        "Defining what the brand stands for",
        "Building a cohesive identity system",
        "Structuring foundational messaging",
        "Establishing founder voice in the market"
      ]
    },
    {
      icon: <Sprout className="opacity-50" size={40} strokeWidth={1.2} />,
      title: "Expansion",
      focus: "Consistency and authority.",
      items: [
        "Strengthening category differentiation",
        "Aligning teams around a unified narrative",
        "Formalising brand guidelines and governance",
        "Elevating executive visibility",
        "Ensuring identity reflects growing scale"
      ]
    },
    {
      icon: <ChartNoAxesCombined className="opacity-50" size={40} strokeWidth={1.2} />,
      title: "Institutional Scale",
      focus: "Structure and longevity.",
      items: [
        "Maintaining clarity across markets and teams",
        "Strengthening leadership credibility externally",
        "Avoiding brand dilution during rapid growth",
        "Embedding brand into internal culture",
        "Sustaining long-term market authority"
      ]
    }
  ];

  return (
    <section
      className="
        w-full
        mb-20
        flex flex-col
        items-center
        px-4 sm:px-6 lg:px-16
        font-bricolage
        mt-16
        gap-10 md:gap-14
      "
    >
      {/* Heading */}
      <h1 className="text-h4 md:text-h3 lg:text-h3 font-medium text-center max-w-3xl text-[#145DA1]">
        Key brand challenges at each stage of growth
      </h1>

      {/* Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          w-full
          max-w-7xl
        "
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="
              bg-[#145DA1]
              text-[#F7F3CD]
              rounded-3xl
              p-8
              flex flex-col
              gap-4
              text-left
              shadow-md
              transition
              hover:shadow-lg
            "
          >
            {card.icon}

            <h2 className="text-h6 md:text-h5 lg:text-h5 font-medium">
              {card.title}
            </h2>

            <ul className="list-disc text-[#F3F7CD] space-y-1.5 text-sm md:text-paragraph">
              {card.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>

            <p className="font-medium text-h6 mt-2">
              <span className="font-normal">The focus: </span>
              {card.focus}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}