import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
} from "framer-motion";
import { CONTENT } from "../../data";

/**
 * Ultra-High-End Artistic Gallery
 * Cleaned for standard JSX usage.
 */
export const Gallery = () => {
  const targetRef = useRef(null);

  // 1. Capture Raw Scroll
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // 2. Smooth the scroll for that "liquid" feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001,
  });

  // 3. Calculate Velocity for Skew Effects
  const scrollVelocity = useVelocity(smoothProgress);
  const skew = useTransform(scrollVelocity, [-0.5, 0.5], [5, -5]);
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[800vh] bg-[#050505] overflow-clip">
      {/* Background Ambient Noise/Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Abstract Background Text (Moves slower than cards) */}
        <motion.div 
          style={{ x: useTransform(smoothProgress, [0, 1], ["10%", "-20%"]) }}
          className="absolute inset-0 flex items-center whitespace-nowrap pointer-events-none"
        >
          <span className="text-[40vh] font-display text-white/[0.02] uppercase tracking-tighter">
            Curated Vision — Aesthetic Depth — Motion Art — 
          </span>
        </motion.div>

        <motion.div 
          style={{ x, skewX: skew }} 
          className="flex gap-[25vw] px-[15vw] items-center"
        >
          {/* Kinetic Intro */}
          <IntroSlide progress={smoothProgress} />

          {/* Artistic Gallery Items */}
          {CONTENT.gallery.items.map((item, idx) => (
            <ArtCard 
              key={item.id} 
              item={item} 
              index={idx} 
              globalProgress={smoothProgress} 
            />
          ))}

          {/* Cinematic Outro */}
          <OutroSlide progress={smoothProgress} />
        </motion.div>
      </div>
    </section>
  );
};

/**
 * Section title slide with scaling and opacity fade-out
 */
const IntroSlide = ({ progress }) => {
  const opacity = useTransform(progress, [0, 0.1], [1, 0]);
  const scale = useTransform(progress, [0, 0.1], [1, 0.8]);

  return (
    <motion.div style={{ opacity, scale }} className="flex-shrink-0 w-[40vw] relative">
      <div className="overflow-hidden">
        <motion.h2 className="font-display text-[12vw] leading-[0.8] text-white flex flex-col">
          <span className="block">THE</span>
          <span className="block italic text-accent ml-[4vw]">GALLERY</span>
        </motion.h2>
      </div>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        className="h-1 bg-accent my-10" 
      />
      <p className="text-white/40 text-2xl font-light max-w-md leading-relaxed uppercase tracking-widest">
        {CONTENT.gallery.subtitle}
      </p>
    </motion.div>
  );
};

/**
 * Individual Art Card with Focus-Blur and Parallax
 */
const ArtCard = ({ item, index, globalProgress }) => {
  const cardRef = useRef(null);
  
  // Staggered trigger points based on item index
  const start = index * 0.15;
  const end = start + 0.3;

  // Cinematic transformations mapped to scroll
  const imageScale = useTransform(globalProgress, [start, (start + end) / 2, end], [1.4, 1, 1.4]);
  const opacity = useTransform(globalProgress, [start, (start + end) / 2, end], [0.3, 1, 0.3]);
  const titleY = useTransform(globalProgress, [start, end], [100, -100]);
  
  // Use string template for filter to ensure smooth CSS interpolation
  const blurValue = useTransform(globalProgress, [start, (start + end) / 2, end], [15, 0, 15]);
  const filter = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity }}
      className="relative flex-shrink-0 w-[80vh] h-[60vh]"
      style={{ perspective: "1000px", opacity }}
    >
      {/* Floating Index Number */}
      <motion.span 
        style={{ y: useTransform(globalProgress, [start, end], [-50, 50]) }}
        className="absolute -top-20 -left-10 font-display text-8xl text-accent/20 z-10"
      >
        0{index + 1}
      </motion.span>

      <div className="relative w-full h-full overflow-hidden shadow-2xl shadow-black/50">
        <motion.img
          src={item.img}
          alt={item.title}
          style={{ 
            scale: imageScale, 
            filter: filter
          }}
          className="w-full h-full object-cover"
        />
        
        {/* Visual Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent" />
        
        <motion.div 
          style={{ y: titleY }}
          className="absolute -right-16 top-1/2 -translate-y-1/2 flex flex-col gap-2 pointer-events-none"
        >
          <h3 className="font-display text-7xl text-white mix-blend-difference uppercase leading-none">
            {item.title}
          </h3>
          <span className="text-accent font-mono tracking-[0.5em] text-sm italic">
            {item.artist}
          </span>
        </motion.div>
      </div>

      {/* Animated accent line */}
      <motion.div 
        style={{ scaleX: useTransform(globalProgress, [start, end], [0, 1.5]) }}
        className="absolute -bottom-8 left-0 h-[1px] bg-white/20 w-full origin-left" 
      />
    </motion.div>
  );
};

/**
 * Final slide to conclude the gallery experience
 */
const OutroSlide = ({ progress }) => {
  const opacity = useTransform(progress, [0.85, 1], [0, 1]);
  const textScale = useTransform(progress, [0.85, 1], [0.5, 1.5]);

  return (
    <motion.div 
      style={{ opacity, scale: textScale }} 
      className="flex-shrink-0 w-[60vw] flex items-center justify-center"
    >
      <h2 className="font-display text-[25vw] text-white/5 tracking-tighter select-none">
        FIN
      </h2>
    </motion.div>
  );
};