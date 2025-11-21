import React from 'react';
import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Education from '@/components/portfolio/Education';
import Experience from '@/components/portfolio/Experience';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Contact from '@/components/portfolio/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
