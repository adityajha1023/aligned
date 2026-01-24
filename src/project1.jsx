import {Link} from 'react-router-dom'
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import { ChevronLeft } from 'lucide-react';
import p1 from "./assets/project-p1.png";
import p2 from "./assets/project-p2.png";
import p3 from "./assets/project-p3.png";


function Project() {
  return (
    <div className="h-auto font-bricolage mx-4 md:mx-16 my-28">
      <SmoothCursor />
        <div className='flex justify-center items-start flex-col'>
            <span className="relative px-[1.5px] py-[1.5px] rounded-full cursor-pointer shadow-md">
            <span className="absolute inset-0 rounded-full bg-gradient-to-b from-black via-white to-[#1F2455]" />
            <Link to="/" className="relative flex justify-center items-center px-4 py-2 bg-[#faf9f6] rounded-full text-sm font-[500]">
              <ChevronLeft strokeWidth={1.4} /> Back to Home
            </Link>
          </span>
            <h2 className='text-h3 md:text-h3 font-[500] leading-tight mt-5 md:mt-6 mb-2'>Overview</h2>
            <p className='text-paragraph font-[400]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus similique saepe in ea id dolorum consequatur voluptas quasi recusandae, iure sapiente alias est assumenda ab cupiditate placeat eveniet tempore obcaecati magni, non quae delectus!</p>
        </div>
        {/* Project Images */}
        <div className="min-h-screen bg-[#f7f3cd] flex justify-center items-start">
      <div className="w-full py-10">
        {/* Top large card */}
        <div className="bg-[#000] rounded-2xl h-[360px] mb-6" />
          {/* Bottom row */}
          <div className="grid grid-cols-12 gap-6">
          {/* Left small card */}
          <div className="col-span-12 md:col-span-4 bg-[#000] rounded-2xl h-[260px]" />
          {/* Right wide card */}
          <div className="col-span-12 md:col-span-8 bg-[#000] rounded-2xl h-[260px]" />
        </div>

      </div>
    </div>
    </div>
    );
}
export default Project;
