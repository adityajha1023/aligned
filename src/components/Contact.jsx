import React from 'react';
import { useState } from 'react';

function Contact() {
    const[service, setService] = useState("");
    return (
        <div className='flex justify-center items-center h-[90vh]'>
            <div className='flex justify-between w-[90vw] items-center font-bricolage'>
                <div>
                    <h2 className="text-4xl  mt-3">Have questions?</h2> <br /> 
                    <span className="text-3xl font-normal mt-3">We're listening</span>
                    <div>
                        <form action="#" className='flex flex-col'> 
                            <input type="text" className='outline-none bg-transparent border-b-2 border-gray-200 w-[25rem] my-8 py-4 px-1 text-gray-500 font-normal text-lg' placeholder='Your Name'/>
                            <input type="email" className='outline-none bg-transparent border-b-2 border-gray-200 w-[25rem] py-4 px-1 text-gray-500 font-normal text-lg' placeholder='Your Email'/>
                            <select onChange={(e)=>setService(e.target.value)} name="Services" value={service} id="services" className='outline-none bg-transparent border-b-2 border-gray-200 w-[25rem] my-8 py-4 text-gray-500 font-normal text-lg'>
                                <option value="" disabled>Select Service</option>
                                <option value="Creative Visualisation">Creative Visualisation</option>
                                <option value="Personal Branding">Personal Branding</option>
                                <option value="Social Media Marketing">Social Media Marketing</option>
                                <option value="Packaging & Branding">Packaging & Branding</option>
                                <option value="Growth Marketing">Growth Marketing</option>
                            </select>
                        </form>
                        <a href="#" className="inline-block text-center w-[25rem] bg-black rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-white sm:text-lg font-medium shadow-md hover:scale-105 transition-all">
                        Start the Conversation</a>

                    </div>
                </div>
                <div className='flex justify-end items-end p-4 font-medium text-xl text-right h-[50vh] w-[20vw] bg-gradient-to-b from-white to-[#A4C6EC] rounded-xl'>
                    <h3>Make your brand <br />ALN'D. <br />Recognised. <br />Remembered.</h3>
                </div>
            </div>
        </div>
    )
}

export default Contact
