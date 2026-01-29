import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Hero Section
 * Features a parallax typography effect and a scroll indicator.
 */
export const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax offsets for the "KALA" and "VRINDAM" text layers
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -200]);
  const rotate = useTransform(scrollY, [0, 500], [0, 5]);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-canvas">
      {/* Background Decorative Circle */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <div className="w-[90vw] h-[90vw] border-[100px] border-ink rounded-full" />
      </div>

      <div className="relative z-10 text-center">
        {/* Top Text Layer */}
        <motion.div style={{ y: y2, rotate }}>
          <h1 className="font-display text-[18vw] leading-[0.8] text-ink mix-blend-difference">
            KALA
          </h1>
        </motion.div>

        {/* Bottom Text Layer (Gradient) */}
        <motion.div style={{ y: y1 }} className="-mt-[4vw]">
          <h1 className="font-display text-[18vw] leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-ink to-transparent">
            VRINDAM
          </h1>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent">
            Scroll to Explore
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-12 bg-ink/20"
          />
        </motion.div>
      </div>
    </section>
  );
};