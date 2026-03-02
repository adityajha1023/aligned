import React from "react";
import Work1 from "../assets/feature1.webp";
import Work2 from "../assets/feature2.webp";
import Work3 from "../assets/feature3.webp";
import Work4 from "../assets/feature4.webp";
import Work5 from "../assets/feature5.webp";


function Work () {
    return (
        <div className="w-full h-[100vh] flex flex-col justify-center gap-40 items-center pt-10 px-4 font-bricolage">
          <div className="flex flex-col justify-center items-center">
          <span className="border-2 border-[#A8A8A8] px-3 py-1 rounded-full w-fit text-sm">Showcase</span>
          <h1 className="text-h2 font-[500] leading-tight tracking-tight capitalize mt-2">
            A selection of our work
          </h1>
          <p className="text-paragraph text-neutral-700">A selection of brands we've brought into alignment</p>
          </div> 
          <div className="w-full flex flex-row justify-center items-end gap-8 mt-0">
            <img src={Work1} className="max-h-[300px] border border-[#ccc] rounded-2xl" alt="Aligned" />
            <img src={Work2} className="max-h-[350px] border border-[#ccc] rounded-2xl" alt="Aligned" />
            <img src={Work3} className="max-h-[270px] border border-[#ccc] rounded-2xl" alt="Aligned" />
            <img src={Work4} className="max-h-[350px] border border-[#ccc] rounded-2xl" alt="Aligned" />
            <img src={Work5} className="max-h-[300px] border border-[#ccc] rounded-2xl" alt="Aligned" />

          </div>
        </div>
    )
}
export default Work;