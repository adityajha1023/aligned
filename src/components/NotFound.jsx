import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react';

function NotFound() {
  return (
    <div className="h-screen font-bricolage mx-4 md:mx-16 flex justify-center items-center">
      <div className='flex justify-center items-center flex-col gap-6'>
        <div className="text-center">
          <h1 className='text-6xl md:text-7xl font-[700] mb-4'>404</h1>
          <h2 className='text-h2 md:text-h2 font-[500] leading-tight mb-2'>Page Not Found</h2>
          <p className='text-paragraph font-[400] text-gray-600 mb-8'>Sorry, the page you're looking for doesn't exist.</p>
        </div>
        <span className="relative px-[1.5px] py-[1.5px] rounded-full cursor-pointer shadow-md">
          <span className="absolute inset-0 rounded-full bg-gradient-to-b from-black via-white to-[#1F2455]" />
          <Link to="/" className="relative flex justify-center items-center px-4 py-2 bg-[#faf9f6] rounded-full text-sm font-[500]">
            <ChevronLeft strokeWidth={1.4} /> Back to Home
          </Link>
        </span>
      </div>
    </div>
  );
}

export default NotFound;
