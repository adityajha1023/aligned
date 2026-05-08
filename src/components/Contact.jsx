import React, { useState } from "react";
import contactImg from "../assets/contact.webp";
import { useForm } from "@formspree/react";
import { ChevronDown } from "lucide-react";

function Contact() {
  const [service, setService] = useState("");
  const [state, handleSubmit] = useForm("mzdkgeqj");

  if (state.succeeded) {
    return (
      <section className="flex justify-center items-center h-[100vh] px-4 sm:px-6 lg:px-12 font-bricolage">
        <div className="max-w-xl text-center">
          <h2 className="text-h3 md:text-h2 font-medium text-[#145DA1]">
            You're in.
          </h2>

          <p className="mt-4 text-paragraph text-[#145DA1] opacity-80">
            Your request just landed in our pipeline.
          </p>

          <p className="mt-2 text-paragraph text-[#145DA1] opacity-70">
            We’ll review it and get back with something meaningful, not generic.
          </p>

          <div className="mt-8">
            <button
              onClick={() => window.location.reload()}
              className="
                border-2 border-[#145DA1]
                rounded-full
                px-6 py-3
                text-[#145DA1]
                hover:bg-[#145DA1]
                hover:text-[#F7F3CD]
                transition-all
              "
            >
              Send another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  const inputClasses = `
    h-[56px]
    w-full
    outline-none
    bg-transparent
    border-b-2 border-[#145DA1]
    px-0
    text-paragraph
    text-[#145DA1]
    placeholder:text-[#145DA1]
    opacity-70
    appearance-none
    rounded-none
    leading-normal
  `;

  return (
    <section
      data-reveal
      id="contact"
      className="
        flex justify-center items-center
        h-[120vh] md:h-[50vh] lg:h-[80vh]
        px-4 sm:px-6 lg:px-12
      "
    >
      <div
        className="
          flex flex-col md:flex-row lg:flex-row
          justify-between
          items-start md:items-start lg:items-center
          gap-10 md:gap-12 lg:gap-20
          w-full
          max-w-7xl
          font-bricolage
        "
      >
        {/* Left: Form */}
        <div className="w-full md:w-1/2 lg:w-1/2">
          <h2 className="text-h4 md:text-h3 lg:text-h2 font-medium text-[#145DA1]">
            Have questions?
          </h2>

          <span className="text-h5 md:text-h4 lg:text-h3 font-medium block mt-2">
            Let's Talk!
          </span>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6 mt-8 max-w-md"
          >
            <input
              required
              type="text"
              placeholder="Drop Your Name"
              name="name"
              className={inputClasses}
            />

            <input
              required
              type="email"
              placeholder="Drop Your Email"
              name="email"
              className={inputClasses}
            />

            <div className="relative">
              <select
                required
                value={service}
                name="service"
                onChange={(e) => setService(e.target.value)}
                className={`${inputClasses} font-medium pr-10 cursor-pointer`}
              >
                <option value="">Book Your Free Audit</option>

                <option value="Brand & Positioning">
                  Brand & Positioning
                </option>

                <option value="Business & Communication Assets">
                  Business & Communication Assets
                </option>

                <option value="Content & Authority">
                  Content & Authority
                </option>

                <option value="Growth & Distribution">
                  Growth & Distribution
                </option>

                <option value="Growth Marketing">
                  Growth Marketing
                </option>
              </select>

              {/* Custom Arrow */}
              <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#145DA1] opacity-70">
                <ChevronDown />
              </div>
            </div>

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

        {/* Right: Contact Image */}
        <img
          src={contactImg}
          alt="Contact"
          className="w-full md:w-[45%] lg:w-[30%] object-cover"
        />
      </div>
    </section>
  );
}

export default Contact;