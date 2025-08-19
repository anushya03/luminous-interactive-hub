import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Articles from '@/components/Articles';
import Contact from '@/components/Contact';
import BlurShapes from '@/components/BlurShapes';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BlurShapes />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Articles />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
