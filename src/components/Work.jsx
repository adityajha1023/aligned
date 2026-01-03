import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import {Link} from 'react-router-dom';
import project1 from "../assets/project1.png";
import { ArrowUpRight } from "lucide-react";

const Example = () => {
  return (
    <div>
      <div className="flex h-48 items-center justify-center font-bricolage">
        <div className="flex flex-col justify-center items-center">
        <span className="border-2 border-[#ccc/70] px-3 py-1 rounded-full text-sm">Showcase</span>
        <h2 className="text-h2 font-[500] mt-3">Our Work</h2>
        </div>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-66.5%"]);

  return (
    <section ref={targetRef} className="relative -mt-16 h-[300vh]">
      <div className="sticky top-8 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-16">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[83vh] w-[95vw] rounded-xl overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.5)",
        }}
        className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105"></div>
      <div className="absolute inset-0 z-10 gap-0 flex items-start flex-col justify-end p-6">
        <p className="text-h4 font-bricolage text-white">
          {card.title}
        </p>
        <p className="text-paragraph font-bricolage text-white">
          {card.description}
        </p>
      </div>
      <div className="absolute inset-0 z-10 gap-0 flex items-end flex-col justify-end p-6">
        <Link to="#" className="text-white underline bg-white/20 rounded-full  p-2 backdrop-blur-xl">
        <ArrowUpRight size={60} strokeWidth={0.8}/>
        </Link>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: project1,
    title: "Project Name",
    description: "Project description Project description Project description ",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    description: "Project description Project description Project description ",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    description: "Project description Project description Project description ",
    id: 3,
  },
];