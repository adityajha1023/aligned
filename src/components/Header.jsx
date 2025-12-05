import React from 'react'

function Header() {
  return (
    <div className='h-[80px] fixed flex justify-between items-center px-32 py-4 border-b border-[#ccc] w-full font-bricolage bg-white/50 backdrop-blur-lg z-50'>
      <img src="./logo.png" alt="" className='h-[48px]' />
      <ul className='flex flex-row gap-10 justify-center items-center'>
        <li className='text-[16px] opacity-65 cursor-pointer hover:opacity-100 hover:scale-110 transition-all duration-300'>Home</li>
        <li className='text-[16px] opacity-65 cursor-pointer hover:opacity-100 hover:scale-110 transition-all duration-300'>Projects</li>
        <li className='text-[16px] opacity-65 cursor-pointer hover:opacity-100 hover:scale-110 transition-all duration-300'>What do clients say?</li>
        <li className='text-[16px] opacity-65 cursor-pointer hover:opacity-100 hover:scale-110 transition-all duration-300'>FAQs</li>
      </ul>
        {/* Gradient Border Button */}
        <li className='relative px-[1.5px] list-none py-[1.5px] rounded-lg cursor-pointer'>
          <span className='absolute inset-0 rounded-full bg-gradient-to-b from-black via-white to-[#ff5900]'></span>
          <span className='relative block p-2 bg-white rounded-full text-[16px] text-black font-medium'>
            Contact Us
          </span>
        </li>
    </div>
  )
}

export default Header
