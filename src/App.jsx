import React, { lazy, Suspense, useEffect, useState, memo } from "react";

const Hero = lazy(() => import("./components/Hero"));
const Features = lazy(() => import("./components/Features"));
const About = lazy(() => import("./components/About"));
const Cta = lazy(() => import("./components/Cta"));
const Work = lazy(() => import("./components/Work"));
const Contact = lazy(() => import("./components/Contact"));
const Bento = lazy(() => import("./components/Bento"));
const Questions = lazy(() => import("./components/Questions"));
const Challenges = lazy(() => import("./components/Challenges"));

/* Loading skeleton for sections */
function SectionLoader() {
  return (
    <div className="w-full h-96 bg-gradient-to-b from-[#F7F3CD]/40 to-[#F7F3CD] animate-pulse rounded-lg" />
  );
}

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
    <div className="h-auto w-full">
      {/* Hero Section - Priority load */}
      <Suspense fallback={<SectionLoader />}>
        <Hero />
      </Suspense>

      {/* Other sections with lazy loading */}
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Features />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Cta />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Work />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Bento />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Questions />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Challenges />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
    </div>
  );
}

export default memo(App);