import React from 'react'

function Footer() {

  const currentYear = new Date().getFullYear();

    return (
        <div className='mt-32 px-8'>
            {/* Navigation links */}
            <div className="top flex justify-between items-center font-bricolage">
                <div className='flex flex-col'>
                <h4 className='font-semibold py-3'>Menu</h4>
                <a href="#">Work</a>
                <a href="#">Contact</a>
                </div>
                <div className='flex flex-col text-right'>
                <h4 className='font-semibold py-3'>Socials</h4>
                <a href="#">Instagram</a>
                <a href="#">Email</a>
                </div>
            </div>
            {/* Brand name */}
            <div className='flex justify-center items-center -my-12'>
            <h1 className='font-semibold text-[250px] opacity-10'>alnd.</h1>
            </div>
            {/* Copyright */}
            <div className='flex justify-between items-center font-bricolage'>
                <p>©{currentYear} ALND. All rights reserved.</p>
                <p>info@aligned.com</p>
            </div>
        </div>
    )
}

export default Footer
