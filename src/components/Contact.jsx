import React, { useState } from "react";

function Contact() {
  const [service, setService] = useState("");

  return (
    <section
      id="contact"
      className="
        flex justify-center items-center
        h-[100vh]
        px-4 sm:px-6 lg:px-12
      "
    >
      <div
        className="
          flex flex-col lg:flex-row
          justify-between
          items-start lg:items-center
          gap-12 lg:gap-20
          w-full
          max-w-7xl
          font-bricolage
        "
      >
        {/* Left: Form */}
        <div className="w-full lg:w-1/2">

          <h2 className="text-h4 md:text-h3 lg:text-h2 font-medium text-[#145DA1]">
            Have questions?
          </h2>

          <span className="text-h5 md:text-h4 lg:text-h3 font-medium block mt-2">
            We're listening
          </span>

          <form className="flex flex-col space-y-6 mt-8 max-w-md">

            <input
              required
              type="text"
              placeholder="Drop Your Name"
              className="
                outline-none
                placeholder:text-[#145DA1]
                bg-transparent
                border-b-2 border-[#145DA1]
                py-3
                opacity-70
                text-paragraph
              "
            />

            <input
              required
              type="email"
              placeholder="Drop Your Email"
              className="
                outline-none
                placeholder:text-[#145DA1]
                bg-transparent
                border-b-2 border-[#145DA1]
                py-3
                opacity-70
                text-paragraph
              "
            />

            <select
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="
                outline-none
                bg-transparent
                border-b-2 border-[#145DA1]
                py-3
                opacity-70
                text-paragraph
                text-[#145DA1]
              "
            >
              <option value="">Book You Free Audit</option>
              <option value="Brand & Positioning">
                Brand & Positioning 
              </option>
              <option value="Business & Communication Assets">Business & Communication Assets</option>
              <option value="Content & Authority">
                Content & Authority
              </option>
              <option value="Growth & Distribution">
                Growth & Distribution
              </option>
              <option value="Growth Marketing">Growth Marketing</option>
            </select>

            <button
              type="submit"
              className="
                mt-4
                border-2 border-[#145DA1]
                rounded-full
                py-3
                text-[#145DA1]
                text-paragraph
                font-medium
                shadow-md
                hover:scale-105
                transition-transform
                duration-200
                hover:bg-[#145DA1]
                hover:text-[#F7F3CD]
              "
            >
              Start the Conversation
            </button>

          </form>
        </div>

        {/* Right: Gradient Card */}
        <div
          className="
            w-full
            lg:w-[360px]
            min-h-[220px]
            lg:min-h-[420px]
            p-6 sm:p-8
            flex justify-end items-end
            text-right
            font-medium
            text-h6
            bg-gradient-to-b
            from-white
            to-[#D0E8F6]
            rounded-xl
          "
        >
          <h3>
            Make your brand <br />
            ALN'D. <br />
            Recognised. <br />
            Remembered.
          </h3>
        </div>

      </div>
    </section>
  );
}

export default Contact;