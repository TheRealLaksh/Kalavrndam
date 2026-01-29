import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CONTENT } from "../../data";

/**
 * Gallery Section
 * Implements a horizontal scroll effect tied to the vertical scroll progress.
 */
export const Gallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  // Maps vertical scroll (0 to 1) to horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-ink">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-20 px-20">
          {/* Section Intro */}
          <div className="flex-shrink-0 w-[40vw]">
            <h2 className="font-display text-8xl text-white mb-6">
              The <span className="italic text-accent">Gallery</span>
            </h2>
            <p className="text-white/60 text-xl">
              {CONTENT.gallery.subtitle}
            </p>
            <ArrowRight className="text-white mt-12 w-12 h-12" />
          </div>

          {/* Horizontal Items */}
          {CONTENT.gallery.items.map((item, idx) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[60vh] h-[70vh] bg-stone-900 overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 p-8 flex flex-col justify-end">
                <span className="text-accent text-xs uppercase tracking-widest mb-2">
                  0{idx + 1} — {item.artist}
                </span>
                <h3 className="font-display text-4xl text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

          {/* Ending Indicator */}
          <div className="flex-shrink-0 w-[40vw] flex items-center justify-center">
            <span className="font-display text-9xl text-white/5">FIN</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};