import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
// Updated import to include Founders
import { Hero, Gallery, Events, About, Founders, Footer } from './components/Sections';
import { CONTENT } from './data';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-canvas text-ink selection:bg-accent selection:text-white min-h-screen">
      {/* Top Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[100]" style={{ scaleX }} />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-canvas/90 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex flex-col group">
            <span className="font-display text-2xl font-bold tracking-tight group-hover:text-accent transition-colors">{CONTENT.brand.name}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">{CONTENT.brand.subtitle}</span>
          </a>
          <ul className="hidden md:flex gap-8">
            {CONTENT.nav.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm font-medium hover:text-accent transition-colors relative group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <Gallery />
        <Events />
        <About />
        {/* Founders Section Added Here */}
        <Founders />
      </main>
      <Footer />
    </div>
  );
}