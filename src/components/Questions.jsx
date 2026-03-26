import React from "react";
import questionspng from "../assets/question.png";

export default function Questions() {
  return (
    <section
      className="
        w-full
        min-h-[90vh] h-[100vh]
        flex flex-col
        justify-center
        items-start
        px-4 sm:px-6 lg:px-28
        font-bricolage
        my-20
        relative
      "
    >
      {/* Heading */}
      <h2 className="text-h4 md:text-h3 lg:text-h2 font-medium text-[#145DA1] max-w-3xl">
        The questions{" "}
        <span className="opacity-40 text-black">
          founders and CXOs <br className="hidden sm:block" />
          bring to us most often.
        </span>
      </h2>

      {/* Questions */}
      <div
        className="
          w-full
          flex flex-wrap
          items-center
          gap-4 sm:gap-6 md:gap-8
          mt-10 md:mt-14
        "
      >
        {[
          "Are we positioned clearly enough in our market?",
          "Are we building long-term authority, or just short-term visibility?",
          "Why does our messaging feel inconsistent across teams?",
          "Should the founder be more visible and if so, how?",
          "Why does the market not see us the way we see ourselves?",
          "Does our brand reflect the scale we’re building toward?",
        ].map((q, i) => (
          <li
            key={i}
            className="relative px-[1.5px] py-[1.5px] list-none rounded-full cursor-pointer"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-b from-black via-white to-[#1F2455]" />
            <h3 className="relative block px-5 sm:px-6 py-0.5 sm:py-3 bg-[#F7F3CD] rounded-full text-paragraph font-medium text-center">
              {q}
            </h3>
          </li>
        ))}
      </div>

      {/* Illustration */}
      <img
        src={questionspng}
        alt="Questions"
        className="
          hidden lg:block
          absolute
          right-20
          bottom-40
          opacity-20
          h-[18rem]
        "
      />

      {/* CTA */}
      <div className="flex flex-col items-center gap-4 w-full mt-16">
        <a
          href="/#contact"
          className="bg-[#145DA1] text-[#F7F3CD] rounded-full px-6 py-3 text-paragraph font-[500] shadow-md hover:scale-105 transition-transform duration-200">
          Let's Work Together
        </a>

        <p className="text-paragraph text-center">
          Book a call and clear your doubts right away
        </p>
      </div>
    </section>
  );
}