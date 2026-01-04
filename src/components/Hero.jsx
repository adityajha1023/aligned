import CircularGallery from "./CircularGallery";
import heroImg from "../assets/hero_image.png";

function Hero() {
  return (
    <div className="w-full">
      {/* Hero Content */}
      <div className="pt-36 md:pt-26 sm:pt-32 px-4 sm:px-6 flex flex-col items-start md:items-center gap-3 text-center font-bricolage">
        {/* Badge */}
        <p className="border border-[#ccc/70] px-3 py-1 rounded-full text-sm">with ALN'D</p>
        {/* Heading */}
        <h1 className="text-h2 md:text-h1 text-left md:text-center font-[500] leading-tight max-w-[100%] sm:max-w-3xl lg:max-w-4xl">
          <span className="text-[#3A4DA7]">Strategic </span>
          in thought.{" "}
          <span className="inline-flex items-center gap-2">
            Artful
            <img src={heroImg} alt="hero" className="h-9 sm:h-10 md:h-12 rounded-full object-cover"/>
          </span>{" "}
          in execution. Always
          <span className="text-[#3A4DA7]"> ALIGNED.</span>
        </h1>
        {/* CTA */}
        <a href="#" className="bg-black rounded-full mt-4 px-5 sm:px-6 py-2.5 sm:py-3 text-white text-paragraph font-[500] shadow-md hover:scale-105 transition">
          Get in Touch
        </a>
      </div>

      {/* Circular Gallery */}
      <div
        className="
          relative w-full
          h-[350px]
          sm:h-[450px]
          md:h-[500px]
          lg:h-[600px]
          mt-4 sm:mt-6
        "
      >
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.18}
        />
      </div>
    </div>
  );
}

export default Hero;
