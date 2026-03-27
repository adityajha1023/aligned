import React, { useState, useEffect, useRef } from "react";

function About() {
  const textContent =
    "Strong brands are shaped from the top down. We ALIGN company positioning with executive presence - as one system.";

  const words = textContent.split(" ");

  const breakIndex = words.findIndex(
    (word) => word.includes("down.")
  ) + 1;

  const [wordOpacities, setWordOpacities] = useState(
    Array(words.length).fill(0.3)
  );

  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;

      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (windowHeight - sectionRect.top) /
            (windowHeight + sectionHeight)
        )
      );

      const opacities = words.map((_, index) => {
        const wordSlotSize = 0.75 / words.length;
        const wordStart = index * wordSlotSize;
        const wordEnd = wordStart + wordSlotSize;

        if (scrollProgress < wordStart) return 0.3;
        if (scrollProgress >= wordEnd) return 1;

        const wordProgress =
          (scrollProgress - wordStart) / wordSlotSize;

        return 0.3 + wordProgress * 0.7;
      });

      setWordOpacities(opacities);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [words.length]);

  return (
    <section
      data-reveal
      ref={sectionRef}
      id="about"
      className="
        min-h-[70vh]
        px-4 sm:px-6
        flex flex-col
        items-center
        justify-center
        text-center
        gap-4 md:gap-6
        font-bricolage
      "
    >
      <h2
        className="
          text-h4
          md:text-h3
          lg:text-h2
          max-w-xl
          md:max-w-3xl
          lg:max-w-5xl
          tracking-tight
          leading-[1.2]
          font-medium
          text-balance
        "
      >
        {words.map((word, index) => {
          const isFirstSentence = index < breakIndex;
          const isAlignWord = word === "ALIGN";

          const colorStyle =
            isFirstSentence || isAlignWord
              ? { color: "#145DA1" }
              : {};

          if (index === breakIndex) {
            return (
              <React.Fragment key={index}>
                <br />
                <span
                  className="text-h6 md:text-h6 lg:text-h5"
                  style={{
                    ...colorStyle,
                    opacity: wordOpacities[index],
                    transition: "opacity 0.3s ease-out",
                  }}
                >
                  {word}{" "}
                </span>
              </React.Fragment>
            );
          }

          return (
            <span
              key={index}
              className={
                index >= breakIndex
                  ? "text-h6 md:text-h6 lg:text-h5"
                  : ""
              }
              style={{
                ...colorStyle,
                opacity: wordOpacities[index],
                transition: "opacity 0.3s ease-out",
              }}
            >
              {word}{" "}
            </span>
          );
        })}
      </h2>
    </section>
  );
}

export default About;