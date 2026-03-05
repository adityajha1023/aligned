import React, { lazy, Suspense, useEffect, useState } from "react";

const Hero = lazy(() => import("./components/Hero"));
const Features = lazy(() => import("./components/Features"));
const About = lazy(() => import("./components/About"));
const Cta = lazy(() => import("./components/Cta"));
const Work = lazy(() => import("./components/Work"));
const Contact = lazy(() => import("./components/Contact"));
const Bento = lazy(() => import("./components/Bento"));
const Questions = lazy(() => import("./components/Questions"));

// const SmoothCursor = lazy(() =>
//   import("@/components/ui/smooth-cursor").then((module) => ({
//     default: module.SmoothCursor,
//   }))
// );

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen(); // run on mount
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="h-auto">
      {/* <Suspense fallback={null}>
        {!isMobile && <SmoothCursor style={{ zIndex: 9999 }} />}
      </Suspense> */}

      <Suspense fallback={null}>
        <Hero />
        <About />
        <Features />
        <Cta />
        <Work />
        <Bento />
        <Questions />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;