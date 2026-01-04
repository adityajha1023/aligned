import React, { useState } from "react";

function Contact() {
  const [service, setService] = useState("");

  return (
    <section className="flex justify-center items-center min-h-[90vh] mt-12 md:mt-0 px-4">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full max-w-[1400px] font-bricolage gap-12">

        {/* Left: Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-h3 md:text-h2 font-medium">Have questions?</h2>
          <span className="text-h4 md:text-h3 font-medium block mt-2">
            We're listening
          </span>

          <form className="flex flex-col mt-8">
            <input required type="text" placeholder="Your Name" className="outline-none bg-transparent border-b-2 border-gray-200 w-full max-w-[25rem] py-4 px-1 text-gray-500 text-paragraph"/>
            <input required type="email" placeholder="Your Email" className="outline-none bg-transparent border-b-2 border-gray-200 w-full max-w-[25rem] mt-8 py-4 px-1 text-gray-500 text-paragraph"/>
            <select
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="outline-none bg-transparent border-b-2 border-gray-200 w-full max-w-[25rem] mt-8 py-4 text-gray-500 text-paragraph">
              <option value="">Select Service</option>
              <option value="Creative Visualisation">Creative Visualisation</option>
              <option value="Personal Branding">Personal Branding</option>
              <option value="Social Media Marketing">Social Media Marketing</option>
              <option value="Packaging & Branding">Packaging & Branding</option>
              <option value="Growth Marketing">Growth Marketing</option>
            </select>

            <button type="submit" className="mt-10 w-full max-w-[25rem] bg-black rounded-full py-3 text-white text-paragraph font-medium shadow-md hover:scale-105 transition-all"> 
                Start the Conversation
            </button>
          </form>
        </div>

        {/* Right: Gradient Card */}
        <div className=" w-full lg:w-[22vw] h-[60vh] p-6 flex justify-end items-end text-right font-medium text-h6 bg-gradient-to-b from-white to-[#D0E8F6] rounded-xl  ">
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
