import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/sample1.webp";
import img2 from "../assets/sample2.webp";
import img3 from "../assets/sample3.webp";
import img4 from "../assets/sample4.webp";
import img5 from "../assets/sample5.webp";


gsap.registerPlugin(ScrollTrigger);

export default function HorizontalInfiniteBentGallery() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    const items = itemsRef.current;

    if (!wrapper || !track) return;

    let isMobile = window.innerWidth < 768;
    let viewportCenter = window.innerWidth / 2;
    let totalWidth = track.scrollWidth / 2;
    let wrapX = gsap.utils.wrap(-totalWidth, 0);

    // ✅ Cache offsetLeft + offsetWidth once — never read inside the animation loop
    let cachedOffsets = items.map((item) => ({
      left: item.offsetLeft,
      halfWidth: item.offsetWidth / 2,
    }));

    let currentX = 0;
    let rafId = null;

    function applyBend(x) {
      const radius = isMobile ? 600 : 1400;
      const rotMul = isMobile ? 0.6 : 1;

      // ✅ All reads first, then all writes — no interleaving
      const transforms = cachedOffsets.map(({ left, halfWidth }) => {
        const itemCenter = left + halfWidth + x;
        const distance = itemCenter - viewportCenter;
        const angle = distance / radius;
        const y = radius * (1 - Math.cos(angle));
        const rotation = angle * (180 / Math.PI) * rotMul;
        return { y, rotation };
      });

      // ✅ Write directly to style.transform — bypass GSAP overhead entirely
      items.forEach((item, i) => {
        if (!item) return;
        const { y, rotation } = transforms[i];
        item.style.transform = `translateY(${y}px) rotate(${rotation}deg)`;
        item.style.transformOrigin = "center center";
      });
    }

    function onTick() {
      const wrappedX = wrapX(currentX);
      // ✅ Write track position directly too
      track.style.transform = `translateX(${wrappedX}px)`;
      applyBend(wrappedX);
      rafId = null;
    }

    gsap.set(track, { x: 0 });

    const st = ScrollTrigger.create({
      trigger: wrapper,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        // Map scroll progress [0,1] → [0, -totalWidth]
        currentX = -self.progress * totalWidth;

        // ✅ Debounce via rAF — never run more than once per frame
        if (!rafId) {
          rafId = requestAnimationFrame(onTick);
        }
      },
    });

    applyBend(0);

    const handleResize = () => {
      isMobile = window.innerWidth < 768;
      viewportCenter = window.innerWidth / 2;
      totalWidth = track.scrollWidth / 2;
      wrapX = gsap.utils.wrap(-totalWidth, 0);

      // Recache offsets after layout settles
      cachedOffsets = items.map((item) => ({
        left: item.offsetLeft,
        halfWidth: item.offsetWidth / 2,
      }));

      st.refresh();
      applyBend(currentX);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafId) cancelAnimationFrame(rafId);
      st.kill();
    };
  }, []);

  const images = [
    img1, img2, img3, img4, img5,
    img1, img2, img3, img4, img5,
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <div
        ref={wrapperRef}
        className="relative w-full h-[380px] sm:h-[420px] md:h-fit pt-12 pb-16 sm:pb-20 md:pb-48 flex items-center overflow-hidden"
      >
        <div
          ref={trackRef}
          className="flex gap-6 sm:gap-10 md:gap-16 will-change-transform"
          style={{ willChange: "transform" }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className="
                flex-shrink-0
                w-[180px] h-[260px]
                sm:w-[220px] sm:h-[320px]
                md:w-[250px] md:h-[350px]
                border border-[#ccc] rounded-2xl
              "
              style={{ willChange: "transform" }}
            >
              <img
                src={img}
                alt=""
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 250px"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}