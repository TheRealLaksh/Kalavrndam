import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
} from "framer-motion";
import { CONTENT } from "../../data";

export const Gallery = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollVelocity = useVelocity(smoothProgress);
  const skew = useTransform(scrollVelocity, [-0.5, 0.5], [5, -5]);
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[800vh] bg-[#050505] overflow-clip"
    >
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{
            x: useTransform(smoothProgress, [0, 1], ["10%", "-20%"]),
          }}
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
          <IntroSlide progress={smoothProgress} />

          {CONTENT.gallery.items.map((item, idx) => (
            <ArtCard
              key={item.id}
              item={item}
              index={idx}
              globalProgress={smoothProgress}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ================= INTRO ================= */

const IntroSlide = ({ progress }) => {
  const opacity = useTransform(progress, [0, 0.1], [1, 0]);
  const scale = useTransform(progress, [0, 0.1], [1, 0.8]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="flex-shrink-0 w-[40vw] relative"
    >
      <motion.h2 className="font-display text-[12vw] leading-[0.8] text-white flex flex-col">
        <span>THE</span>
        <span className="italic text-accent ml-[4vw]">GALLERY</span>
      </motion.h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        className="h-1 bg-accent my-10"
      />

      <p className="text-white/40 text-2xl font-light max-w-md uppercase tracking-widest">
        {CONTENT.gallery.subtitle}
      </p>
    </motion.div>
  );
};

/* ================= ART CARD ================= */

const ArtCard = ({ item, index, globalProgress }) => {
  // One full card occupies ~0.22 of scroll progress
  const CARD_SPAN = 0.22;
  const GAP = 0.04;

  const start = index * (CARD_SPAN + GAP);
  const mid = start + CARD_SPAN / 2;
  const end = start + CARD_SPAN;

  const imageScale = useTransform(
    globalProgress,
    [start, mid, end],
    [1.4, 1, 1.4]
  );

  const opacity = useTransform(
    globalProgress,
    [start, mid, end],
    [0.3, 1, 0.3]
  );

  const blur = useTransform(
    globalProgress,
    [start, mid, end],
    [18, 0, 18]
  );

  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  const titleY = useTransform(globalProgress, [start, end], [80, -80]);

  return (
    <motion.div
      style={{ opacity, perspective: "1000px" }}
      className="relative flex-shrink-0 w-[80vh] h-[60vh]"
    >
      <motion.span
        style={{ y: useTransform(globalProgress, [start, end], [-40, 40]) }}
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
            filter,
            transform: "translateZ(0)",
            willChange: "transform, filter",
            backfaceVisibility: "hidden",
          }}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/10 to-transparent" />

        <motion.div
          style={{ y: titleY }}
          className="absolute right-6 bottom-6 left-6 pointer-events-none"
        >
          <h3
            className="font-display uppercase text-white mix-blend-difference"
            style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)" }}
          >
            {item.title}
          </h3>

          <span className="text-accent font-mono tracking-[0.3em] text-xs italic">
            {item.artist}
          </span>
        </motion.div>
      </div>

      <motion.div
        style={{
          scaleX: useTransform(globalProgress, [start, end], [0, 1.2]),
        }}
        className="absolute -bottom-8 left-0 h-[1px] bg-white/20 w-full origin-left"
      />
    </motion.div>
  );
};
