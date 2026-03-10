import React from 'react'

export default function Challenges() {
  return (
    <div className="w-full h-auto mb-20 flex flex-col justify-start items-center px-28 font-bricolage mt-20">
        <h1 className='text-h2 font-medium'>Key brand challenges at each stage of growth</h1>
        <div className='flex flex-row justify-center items-center gap-8 flex-wrap mt-16'>
          <div className='bg-[#f8f9fa]/70 w-[25rem] h-auto py-12 rounded-3xl flex flex-col justify-center items-start gap-10 pl-8 text-left shadow-md'>
            <h2 className='text-h4 font-medium'>Early Traction</h2>
            <p className='text-neutral-700'>Clarifying core positioning <br />
               Defining what the brand stands for <br />
               Building a cohesive identity system <br />
               Structuring foundational messaging <br />
               Establishing founder voice in the market
            </p>
            <p className='font-medium text-h6'>
              <span className='font-normal'>The focus: </span>Direction and clarity.</p>
          </div>
          <div className='bg-[#f8f9fa]/70 w-[25rem] h-auto py-12 rounded-3xl flex flex-col justify-center items-start gap-10 pl-8 text-left shadow-md'>
          <h2 className='text-h4 font-medium'>Expansion</h2>
            <p className='text-neutral-700'>Strengthening category differentiation <br />
              Aligning teams around a unified narrative <br />
              Formalising brand guidelines and governance <br />
              Elevating executive visibility <br />
              Ensuring identity reflects growing scale
            </p>
            <p className='font-medium text-h6'>
              <span className='font-normal'>The focus: </span>Consistency and authority.</p>
          </div>
          <div className='bg-[#f8f9fa]/70 w-[25rem] h-auto py-12 rounded-3xl flex flex-col justify-center items-start gap-10 pl-8 text-left shadow-md'>
          <h2 className='text-h4 font-medium'>Institutional Scale</h2>
            <p className='text-neutral-700'>Maintaining clarity across markets and teams <br />
              Strengthening leadership credibility externally <br />
              Avoiding brand dilution during rapid growth <br />
              Embedding brand into internal culture <br />
              Sustaining long-term market authority
            </p>
            <p className='font-medium text-h6'>
              <span className='font-normal'>The focus: </span>Structure and longevity.</p>
          </div>
        </div>
    </div>
  )
}
