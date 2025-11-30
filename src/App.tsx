import React from 'react';
import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Education from '@/components/portfolio/Education';
import Experience from '@/components/portfolio/Experience';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Certificates from '@/components/portfolio/Certificates';
import ResearchPaper from '@/components/portfolio/ResearchPaper';
import Photography from '@/components/portfolio/Photography';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/common/Footer';
import ScrollToTop from '@/components/portfolio/ScrollToTop';
import CursorMeteor from '@/components/ui/CursorMeteor';

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-24">
      <CursorMeteor />
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <ResearchPaper />
      <Photography />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
