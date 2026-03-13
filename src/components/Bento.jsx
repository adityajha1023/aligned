import React from "react";

export default function Bento() {

  const sections = [
    {
      title: "Positioning",
      items: [
        "Market positioning frameworks",
        "Category narrative development",
        "Messaging architecture",
        "Brand architecture",
        "Go-to-market articulation"
      ]
    },
    {
      title: "Identity",
      items: [
        "Corporate identity systems",
        "Visual language design",
        "Brand guidelines & governance",
        "Investor & board decks",
        "Institutional collateral"
      ]
    },
    {
      title: "Leadership",
      items: [
        "Founder positioning strategy",
        "Executive narrative development",
        "Thought leadership frameworks",
        "LinkedIn authority systems",
        "Leadership films"
      ]
    },
    {
      title: "Governance & Scale",
      items: [
        "Brand governance structures",
        "Internal brand alignment",
        "Executive visibility strategy",
        "Campaign architecture (advisory)",
        "Long-term brand stewardship"
      ]
    },
    {
      title: "Communication",
      items: [
        "Brand storytelling systems",
        "Website architecture",
        "Corporate communication frameworks",
        "Strategic content direction",
        "Brand films"
      ]
    },
    {
      title: "Leadership",
      items: [
        "Founder positioning strategy",
        "Executive narrative development",
        "Thought leadership frameworks",
        "LinkedIn authority systems",
        "Leadership films"
      ]
    }
  ];

  return (
    <section
      className="
        w-full
        min-h-[90vh] lg:min-h-screen
        flex flex-col
        justify-center
        items-center
        gap-12 md:gap-16
        px-4 sm:px-6
        font-bricolage
        mt-16
      "
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center max-w-2xl">

        <h1 className="text-h4 md:text-h3 lg:text-h2 font-[500] tracking-tight">
          Strategic expertise you can build on
        </h1>

        <p className="text-paragraph text-neutral-700 mt-2">
          Based on your stage and ambition, we design a structured brand and leadership system.
        </p>

      </div>

      {/* Bento Grid */}
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
        {sections.map((section, i) => (
          <div
            key={i}
            className="
              border border-[#a8a8a8]
              rounded-2xl
              p-6 sm:p-7
              min-h-[200px]
              transition
              hover:shadow-lg
            "
          >
            <h3 className="text-h6 md:text-h5 font-medium mb-3">
              {section.title}
            </h3>

            <ul className="space-y-1.5 opacity-70 text-sm md:text-paragraph">
              {section.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}