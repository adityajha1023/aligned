import {Link} from 'react-router-dom'
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import { ChevronLeft } from 'lucide-react';

function Project() {
  return (
    <div className="h-auto font-bricolage mx-4 md:mx-16 my-28">
      <SmoothCursor />

        <div className='flex justify-center items-start flex-col'>
            <span className="relative px-[1.5px] py-[1.5px] rounded-full cursor-pointer shadow-md">
            <span className="absolute inset-0 rounded-full bg-gradient-to-b from-black via-white to-[#7795CC]" />
            <Link to="/" className="relative flex justify-center items-center px-4 py-2 bg-[#faf9f6] rounded-full text-sm font-[500]">
              <ChevronLeft strokeWidth={1.4} /> Back to Home
            </Link>
          </span>
            <h2 className='text-h3 md:text-h3 font-[500] leading-tight mt-5 md:mt-6 mb-2'>Overview</h2>
            <p className='text-paragraph font-[400]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus similique saepe in ea id dolorum consequatur voluptas quasi recusandae, iure sapiente alias est assumenda ab cupiditate placeat eveniet tempore obcaecati magni, non quae delectus!</p>
        </div>
        <div className='image-grid'>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
    </div>
    );
}
export default Project;
