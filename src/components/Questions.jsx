import React from 'react'
import questionspng from '../assets/question.png'

export default function Questions() {
  return (
    <div className="w-full h-[100vh] max-h-[100vh] flex-col justify-center items-start px-28 font-bricolage mt-20">
        <h2 className='text-h2 font-medium text-[#1F2455]'>
            The questions <span className='opacity-40 text-black'>founders and CXOs <br /> bring to us most often.</span>
        </h2>
      <style>
{`
.questions-h3 {
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}
.questions-h3::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  height: 100%;
  background: #b3ccfd;
  transition: width 0.4s ease;
  transform: translateX(-50%);
  z-index: -1;
}
.questions-h3:hover::before {
  width: 100%;
}
.questions-h3:hover {
  color: black;
}
`}
        </style>
        <div className='w-full flex flex-wrap justify-start items-center gap-12 mt-16 px-4'>
          <li className="relative px-[1.5px] py-[1.5px] list-none rounded-full cursor-pointer">
            <span className="absolute inset-0 rounded-full bg-gradient-to-b from-black via-white to-[#1F2455]" />
            <h3 className="relative block px-6 py-3 bg-[#F7F3CD] rounded-full text-[16px] font-medium">
            Are we positioned clearly enough in our market?
            </h3>
          </li>
          <li className="relative px-[1.5px] py-[1.5px] list-none rounded-full cursor-pointer">
            <span className="absolute inset-0 rounded-full bg-gradient-to-b from-black via-white to-[#1F2455]" />
            <h3 className="relative block px-6 py-3 bg-[#F7F3CD] rounded-full text-[16px] font-medium">
            Are we building long-term authority, or just short-term visibility?
            </h3>
          </li>
          <li className="relative px-[1.5px] py-[1.5px] list-none rounded-full cursor-pointer">
            <span className="absolute inset-0 rounded-full bg-gradient-to-b from-black via-white to-[#1F2455]" />
            <h3 className="relative block px-6 py-3 bg-[#F7F3CD] rounded-full text-[16px] font-medium">
            Why does our messaging feel inconsistent across teams?
            </h3>
          </li>
          <li className="relative px-[1.5px] py-[1.5px] list-none rounded-full cursor-pointer">
            <span className="absolute inset-0 rounded-full bg-gradient-to-b from-black via-white to-[#1F2455]" />
            <h3 className="relative block px-6 py-3 bg-[#F7F3CD] rounded-full text-[16px] font-medium">
            Should the founder be more visible  and if so, how?
            </h3>
          </li>
          <li className="relative px-[1.5px] py-[1.5px] list-none rounded-full cursor-pointer">
            <span className="absolute inset-0 rounded-full bg-gradient-to-b from-black via-white to-[#1F2455]" />
            <h3 className="relative block px-6 py-3 bg-[#F7F3CD] rounded-full text-[16px] font-medium">
            Why does the market not see us the way we see ourselves?
            </h3>
          </li>
          <li className="relative px-[1.5px] py-[1.5px] list-none rounded-full cursor-pointer">
            <span className="absolute inset-0 rounded-full bg-gradient-to-b from-black via-white to-[#1F2455]" />
            <h3 className="relative block px-6 py-3 bg-[#F7F3CD] rounded-full text-[16px] font-medium">
            Does our brand reflect the scale we’re building toward?
            </h3>
          </li>
        <img src={questionspng} alt="Questions" className="opacity-25 mt-44 h-[20rem] left-[70%] absolute" />
        </div>
        <div className='flex flex-col justify-center items-center gap-4 w-full mt-16'>
        <a href="/#contact" className="bg-black rounded-full mt-4 px-5 sm:px-6 py-3.5 sm:py-3 text-white text-paragraph font-[500] shadow-md hover:scale-105 transition-transform duration-200">
          Let's Work Together
        </a>
        <p className='text-paragraph'>Book a call and clear your doubts right away</p>
        </div>
    </div>
  )
}
