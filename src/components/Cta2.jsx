import { Play } from "lucide-react";
import React from 'react'

export default function cta2() {
  return (
 <section className="w-full h-screen flex justify-center items-center px-4 font-bricolage">
      <div className="relative w-full h-[70vh] bg-[#D0E8F6]/80 rounded-3xl overflow-hidden px-12 py-16 mx-16 flex items-center">
        
        {/* Background C Shape */}
        <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 opacity-40">
          <div className="w-[400px] h-[400px] rounded-full border-[40px] border-[#145DA2]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-xl ">
          
          {/* Heading */}
          <h1 className="text-h3 font-semibold leading-tight tracking-tight text-black mb-6">
            Are we the right fit for you?
          </h1>

          {/* Paragraph */}
          <p className="text-h6 text-neutral-700 mb-6">
            We’re best <i>ALIGNED</i> with organisations that:
          </p>

          <p className="text-paragraph text-neutral-700 mb-4 pl-4 leading-relaxed">
            <li>Are scaling and need sharper market positioning</li>
            <li>Want their identity to reflect real ambition</li>
            <li>Understand that leadership visibility builds trust</li>
            <li>Value structure over short-term campaigns</li>
            <li>Are building for long-term authority, not quick attention</li>
          </p>

          <p className="text-paragraph text-black mb-8">
            <br />
            We don’t operate as a marketing vendor.We work as strategic partners.
          </p>

          {/* C Section */}
          <div className="flex items-center gap-6">
            
            {/* CTA Button */}
            <button className="p-4 rounded-full bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-center shadow-md hover:scale-105 transition">
              Book a Call
            </button>

          </div>
        </div>
      </div>
    </section>    
  )
}
