import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import project1 from "../assets/project1.png";
import { ArrowUpRight } from "lucide-react";

/* =========================
   CUSTOM WORK CURSOR
========================= */
const WorkCursor = ({ active }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!active) return;

    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [active]);

  if (!active) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2"
      style={{ left: position.x, top: position.y }}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="h-16 w-16 rounded-full border border-white/40 backdrop-blur-md flex items-center justify-center">
          <ArrowUpRight size={45} strokeWidth={0.8} color="white" />
        </div>

        <div className="px-4 py-1 rounded-full border border-white/30 backdrop-blur-md text-white text-sm font-bricolage">
          View Work
        </div>
      </div>
    </div>
  );
};

/* =========================
   MAIN COMPONENT
========================= */
const Example = () => {
  const [cursorActive, setCursorActive] = useState(false);

  return (
    <div>
      <WorkCursor active={cursorActive} />

      <div className="flex h-48 items-center justify-center font-bricolage">
        <div className="flex flex-col justify-center items-center">
          <span className="border-2 border-[#A8A8A8] px-3 py-1 rounded-full text-sm">
            Showcase
          </span>
          <h2 className="text-h2 font-[500] mt-3">Our Work</h2>
          <p className="text-paragraph">
            A selection of brands we’ve brought into alignment
          </p>
        </div>
      </div>

      <HorizontalScrollCarousel setCursorActive={setCursorActive} />
    </div>
  );
};

const HorizontalScrollCarousel = ({ setCursorActive }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["1%", isMobile ? "-67.5%" : "-66.5%"]
  );

  return (
    <section ref={targetRef} className="relative -mt-16 h-[300vh]">
      <div className="sticky top-8 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 md:gap-16">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              setCursorActive={setCursorActive}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card, setCursorActive }) => {
  return (
    <Link
      to={card.link}
      onMouseEnter={() => setCursorActive(true)}
      onMouseLeave={() => setCursorActive(false)}
      className="group relative h-[83vh] w-[95vw] rounded-xl overflow-hidden bg-neutral-200 cursor-none"
    >
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.5)",
        }}
        className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105"
      />

      {/* Text Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 pointer-events-none">
        <p className="text-h4 font-bricolage text-white">
          {card.title}
        </p>
        <p className="text-paragraph font-bricolage max-w-[80%] text-white">
          {card.description}
        </p>
      </div>

      {/* Arrow Indicator */}
      <div className="absolute inset-0 z-10 flex justify-end items-end p-6 pointer-events-none">
        <div className="h-16 w-16 rounded-full border border-white/40 backdrop-blur-md flex items-center justify-center">
          <ArrowUpRight size={45} strokeWidth={0.8} color="white" />
        </div>
      </div>
    </Link>
  );
};

export default Example;

/* =========================
   DATA
========================= */
const cards = [
  {
    url: project1,
    title: "Project Name",
    description: "Project description Project description Project description ",
    id: 1,
    link: "/project1",
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    description: "Project description Project description Project description ",
    id: 2,
    link: "/project2",
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    description: "Project description Project description Project description ",
    id: 3,
    link: "/project3",
  },
];
