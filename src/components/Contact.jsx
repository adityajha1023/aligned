import React from 'react';
import { useState } from 'react';

function Contact() {
    const[service, setService] = useState("");
    


    return (
        <div className='flex justify-center items-center h-[90vh]'>
            <div className='flex justify-between w-[90vw] items-center font-bricolage'>
                <div>
                    <h2 className="text-h2 font-[500] ">Have questions?</h2>
                    <span className="text-h3 font-[500]">We're listening</span>
                    <div>
                        <form action="#" className='flex flex-col'> 
                            <input required type="text" className='outline-none bg-transparent border-b-2 border-gray-200 w-[25rem] my-8 py-4 px-1 text-gray-500 font-normal text-paragraph' placeholder='Your Name'/>
                            
                            <input required type="email" className='outline-none bg-transparent border-b-2 border-gray-200 w-[25rem] py-4 px-1 text-gray-500 font-normal text-paragraph' placeholder='Your Email'/>
                            
                            <select required name="Services" id="services" className='outline-none bg-transparent border-b-2 border-gray-200 w-[25rem] my-8 py-4 text-gray-500 font-normal text-paragraph'>
                                <option value="">Select Service</option>
                                <option value="Creative Visualisation">Creative Visualisation</option>
                                <option value="Personal Branding">Personal Branding</option>
                                <option value="Social Media Marketing">Social Media Marketing</option>
                                <option value="Packaging & Branding">Packaging & Branding</option>
                                <option value="Growth Marketing">Growth Marketing</option>
                            </select>
                            <button type="submit" className='cursor-pointer inline-block text-center w-[25rem] bg-black rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-white text-paragraph font-medium shadow-md hover:scale-105 transition-all'>
                            Start the Conversation
                        </button>
                        </form>
                    </div>
                </div>
                <div className='flex justify-end items-end p-4 font-medium text-h6 text-right h-[60vh] w-[22vw] bg-gradient-to-b from-white to-[#A4C6EC] rounded-xl'>
                    <h3>Make your brand <br />ALN'D. <br />Recognised. <br />Remembered.</h3>
                </div>
            </div>
        </div>
    )
}

export default Contact
