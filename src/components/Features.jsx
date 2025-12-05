import React from 'react'
import { useState } from 'react'
import sample1 from '../assets/sample1.png'
import sample2 from '../assets/sample2.png'
import sample3 from '../assets/sample3.png'

function Features() {

    const [active, setActive] = useState(null);


const services = [
    {
    id: 1,
    title: "Creative Visualisation",
    img: sample1},
    {
    id: 2,
    title: "Social Media Marketing",
    img: sample2},
    {
    id: 3,
    title: "Packaging & Branding",
    img: sample3},
];

return (
    <div className="w-full min-h-screen font-bricolage flex items-center justify-center p-16">
        <div className="flex gap-20 w-full max-w-6xl">
        {/* Left Section */}
        <div className="flex flex-col gap-8 w-1/2">
            <div className="text-[16px] font-medium px-4 py-1 border border-gray-300 rounded-full w-fit">Services</div>
            <h1 className="text-5xl font-medium -mt-2">How can we help you?</h1>
        <div className="mt-8 flex flex-col gap-12">
        {services.map((service, index) => (
            <div key={service.id} onMouseEnter={() => setActive(service.id)} className="cursor-pointer transition duration-300 flex items-center gap-4 ml-10">
            <span className={`font-medium text-[32px] transition duration-300 ${
            active === service.id ? "opacity-100" : "opacity-30"}`}>0{index + 1}
            </span>
            <span className={`font-medium text-[32px] transition duration-300 ${
            active === service.id ? "opacity-100" : "opacity-30"}`}>
            {service.title}
            </span>
            </div>
        ))}
        </div>
        </div>
        {/* Right Images */}
        <div className="relative w-1/2 h-[350px] flex items-center justify-center mt-24">
        {services.map((service) => (
        <img key={service.id} src={service.img} className={`absolute h-[330px] w-1/2 object-cover rounded-xl shadow-lg transition-all duration-500 ${
        active === service.id
        ? "opacity-100 z-30 scale-100"
        : "opacity-70 z-10 scale-95"}`}/>
        ))}
        </div>
        </div>
    </div>
    )
}

export default Features
