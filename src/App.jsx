import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useMotionValue } from 'framer-motion';
import { 
  Hero, 
  Gallery, 
  Events, 
  About, 
  Founders, 
  Footer 
} from './components/sections'; // Importing from the new directory
import { CONTENT } from './data';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Custom Cursor Logic
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    const handleScroll = () => setScrolled(window.scrollY > 50);
    
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="relative min-h-screen bg-canvas text-ink selection:bg-accent selection:text-white">
      {/* Global Noise Overlay */}
      <div className="bg-noise" />

      {/* Artistic Custom Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 bg-ink rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      />

      {/* Top Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[100]" 
        style={{ scaleX }} 
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${scrolled ? 'py-4 bg-canvas/90 backdrop-blur-md border-b border-ink/5' : 'py-10 bg-transparent'}`}>
        <div className="container mx-auto px-8 flex justify-between items-center">
          <a href="#" className="relative group z-50">
            <span className="font-display text-3xl font-bold tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-ink transition-all duration-500">
              {CONTENT.brand.name}
            </span>
            <div className="h-0.5 w-0 bg-accent absolute -bottom-1 left-0 group-hover:w-full transition-all duration-500" />
          </a>
          
          <ul className="hidden md:flex gap-10">
            {CONTENT.nav.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className="text-sm font-medium tracking-wide hover:text-accent transition-colors relative group overflow-hidden block"
                >
                  <span className="block group-hover:-translate-y-full transition-transform duration-300 ease-[0.22, 1, 0.36, 1]">
                    {link.label}
                  </span>
                  <span className="absolute top-0 left-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[0.22, 1, 0.36, 1] text-accent">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Gallery />
        <Events />
        <About />
        <Founders />
      </main>
      <Footer />
    </div>
  );
}