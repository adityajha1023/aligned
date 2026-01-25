import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/feature1.png";
import img2 from "../assets/feature2.png";
import img3 from "../assets/feature3.png";
import img4 from "../assets/feature4.png";
import img5 from "../assets/feature5.png";

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

    wrapper.style.overflowX = "hidden";

    let isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      let totalWidth = track.scrollWidth / 2;

      gsap.set(track, { x: 0 });

      const tween = gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        modifiers: {
          x: (x) => `${parseFloat(x) % totalWidth}px`,
        },
        onUpdate: bendItems,
      });

      function bendItems() {
        const radius = isMobile ? 600 : 1400;
        const rotationMultiplier = isMobile ? 0.6 : 1;
        const viewportCenter = window.innerWidth / 2;

        items.forEach((item) => {
          if (!item) return;

          const rect = item.getBoundingClientRect();
          const itemCenter = rect.left + rect.width / 2;

          const distance = itemCenter - viewportCenter;
          const angle = distance / radius;

          const y = radius * (1 - Math.cos(angle));
          const rotation = angle * (180 / Math.PI) * rotationMultiplier;

          gsap.set(item, {
            y,
            rotation,
            transformOrigin: "center center",
          });
        });
      }

      bendItems();

      const handleResize = () => {
        isMobile = window.innerWidth < 768;
        totalWidth = track.scrollWidth / 2;
        tween.invalidate().restart();
        bendItems();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, wrapper);

    return () => {
      ctx.revert();
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
        className="relative w-full h-fit pt-10 pb-5 md:pb-48 flex items-center overflow-hidden"
      >
        <div
          ref={trackRef}
          className="flex gap-6 sm:gap-10 md:gap-16 will-change-transform"
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
