import React from 'react'

export default function Challenges() {
  return (
    <div className="w-full h-[100vh] max-h-[100vh] flex flex-col justify-start items-center px-28 font-bricolage mt-20">
        <h1 className='text-h2 font-medium'>Key brand challenges at each stage of growth</h1>
        <div className='flex flex-row justify-center items-center gap-8 flex-wrap mt-12'>
          <div className='bg-[#888] w-[25rem] h-[25rem] rounded-3xl'></div>
          <div className='bg-[#888] w-[25rem] h-[25rem] rounded-3xl'></div>
          <div className='bg-[#888] w-[25rem] h-[25rem] rounded-3xl'></div>
        </div>
    </div>
  )
}
