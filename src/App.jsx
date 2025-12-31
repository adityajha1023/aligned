import React from 'react'
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="h-auto">
      <Hero />
      <Features />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App; 
