import CircularGallery from './CircularGallery'
import heroImg from '../assets/hero_image.png'
import { div } from 'framer-motion/client'

function Hero() {
  return (
    <div>
    <div className='pt-32 flex justify-center items-center flex-col font-bricolage gap-6 text-center'>
      <p className='border-2 border-[#ccc/70] px-3 py-1 rounded-full'>with <b>Aligned</b></p>
      <h1 className="text-6xl font-medium leading-tight max-w-4xl">
        <span className="text-[#3A4DA7]">Strategic </span> in thought. {" "}
        <span className="inline-flex items-center gap-2">
          Artful &nbsp;
          <img
            src={heroImg}
            alt="hero"
            className="h-12 rounded-full object-cover inline-block"
          />
        </span>
        &nbsp; in execution. Always
        <span className="text-[#3A4DA7]"> ALIGNED.</span>
      </h1>
      <a href="#" className='bg-black rounded-full px-6 py-3 text-white text-[20px] shadow-md'>Get in Touch</a>
      </div>
      {/* Circular Gallery */}
      <div style={{ height: '600px',  position: 'relative', marginTop: '0px' }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.18}/>
      </div>
      </div>
  )
}

export default Hero