import { Play } from "lucide-react";
import React, { useState } from "react";

function Cta() {
  return (
    <section className="w-full h-[100vh] max-h-[100vh] flex justify-center items-center px-4 font-bricolage">
      <div className="relative w-full h-[70vh] bg-[#D0E8F6]/80 rounded-3xl overflow-hidden px-12 py-16 mx-16 flex items-center">
        
        {/* Background C Shape */}
        <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 opacity-40">
          <div className="w-[400px] h-[400px] rounded-full border-[40px] border-[#145DA2]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-xl ">
          
          {/* Heading */}
          <h1 className="text-h3 font-semibold leading-tight tracking-tight text-black mb-6">
            Strong brands are built through <br />
            structure - not just marketing.
          </h1>

          {/* Paragraph */}
          <p className="text-h6 text-neutral-700 mb-6">
            Most agencies focus on campaigns.
          </p>

          <p className="text-paragraph text-neutral-700 mb-8 leading-relaxed">
            We work with founders and executive teams to define market
            positioning, build identity systems, and strengthen leadership
            presence — so the company and its leadership move in the same
            direction.
          </p>

          <p className="text-paragraph text-black mb-10">
            <span className="font-semibold">
              Positioning. Identity. Executive authority.
            </span>
            <br />
            Built as one connected system.
          </p>

          {/* C Section */}
          <div className="flex items-center gap-6">
            
            {/* Play Button */}
            <button className="p-4 rounded-full bg-black flex items-center justify-center shadow-md hover:scale-105 transition">
              <Play className="w-6 h-6 text-white" fill="white" />
            </button>

            {/* CTA Button */}
            <button className="border-2 border-black rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-black text-paragraph font-[500] shadow-md hover:scale-105 transition-transform duration-200">
              Build your Identity
            </button>

          </div>
        </div>
      </div>
    </section>    
  )
}
export default Cta;