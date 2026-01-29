import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Instagram,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { CONTENT } from "../data";

/* ---------------- SHARED ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const SectionHeader = ({ title, subtitle, light = false, align = "left" }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    className={`mb-24 max-w-3xl ${
      align === "center" ? "mx-auto text-center" : ""
    }`}
  >
    <h2
      className={`font-display text-7xl md:text-8xl mb-6 ${
        light ? "text-white" : "text-ink"
      }`}
    >
      {title}
    </h2>
    <div
      className={`h-1 w-24 bg-accent mb-6 ${
        align === "center" ? "mx-auto" : ""
      }`}
    />
    <p
      className={`text-lg uppercase tracking-widest ${
        light ? "text-white/60" : "text-ink/60"
      }`}
    >
      {subtitle}
    </p>
  </motion.div>
);

/* ---------------- HERO ---------------- */

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -200]);
  const rotate = useTransform(scrollY, [0, 500], [0, 5]);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-canvas">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <div className="w-[90vw] h-[90vw] border-[100px] border-ink rounded-full" />
      </div>

      <div className="relative z-10 text-center">
        <motion.div style={{ y: y2, rotate }}>
          <h1 className="font-display text-[18vw] leading-[0.8] text-ink mix-blend-difference">
            KALA
          </h1>
        </motion.div>

        <motion.div style={{ y: y1 }} className="-mt-[4vw]">
          <h1 className="font-display text-[18vw] leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-ink to-transparent">
            VRINDAM
          </h1>
        </motion.div>

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

/* ---------------- GALLERY ---------------- */

export const Gallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-ink">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-20 px-20">
          <div className="flex-shrink-0 w-[40vw]">
            <h2 className="font-display text-8xl text-white mb-6">
              The <span className="italic text-accent">Gallery</span>
            </h2>
            <p className="text-white/60 text-xl">
              {CONTENT.gallery.subtitle}
            </p>
            <ArrowRight className="text-white mt-12 w-12 h-12" />
          </div>

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

          <div className="flex-shrink-0 w-[40vw] flex items-center justify-center">
            <span className="font-display text-9xl text-white/5">FIN</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ---------------- EVENTS (FROM 2nd CODE) ---------------- */

export const Events = () => (
  <section id="events" className="py-40 bg-stone-50">
    <div className="container mx-auto px-6">
      <SectionHeader
        title={CONTENT.events.title}
        subtitle={CONTENT.events.subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {CONTENT.events.items.map((event, idx) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -12 }}
            className="relative bg-white p-10 shadow-xl transition-all"
          >
            <div className="absolute left-0 top-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 origin-top transition-transform" />

            <div className="flex justify-between mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-ink/50">
                {event.audience}
              </span>
              {event.upcoming && (
                <Sparkles className="text-accent animate-pulse" />
              )}
            </div>

            <h3 className="font-display text-3xl mb-4">
              {event.title}
            </h3>
            <p className="text-ink/60 text-sm">{event.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- ABOUT ---------------- */

export const About = () => (
  <section className="py-40 bg-ink text-canvas">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2">
          <h2 className="font-display text-8xl mb-12 text-white">
            Our <span className="text-accent">Vision</span>
          </h2>

          <div className="grid grid-cols-2 gap-8">
            {CONTENT.about.stats.map((stat, idx) => (
              <div key={idx}>
                <span className="font-display text-5xl text-accent">
                  {stat.number}
                </span>
                <span className="text-sm uppercase tracking-widest text-white/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 text-xl font-light text-white/80">
          <p className="mb-10">{CONTENT.about.text}</p>
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- FOUNDERS ---------------- */

export const Founders = () => (
  <section className="py-40 bg-stone-100">
    <div className="container mx-auto px-6 text-center mb-20">
      <SectionHeader
        title="THE MINDS"
        subtitle="Orchestrators"
        align="center"
      />
    </div>

    <div className="flex justify-center gap-10 flex-wrap">
      {CONTENT.founders.items.map((founder, idx) => (
        <motion.div
          key={founder.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="w-80 bg-white p-6 shadow-xl"
        >
          <div className="aspect-[4/5] bg-stone-200 mb-6 flex items-center justify-center text-5xl text-ink/30">
            {founder.name.charAt(0)}
          </div>
          <h3 className="font-display text-2xl">{founder.name}</h3>
          <p className="text-xs uppercase tracking-widest text-accent">
            {founder.role}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

/* ---------------- FOOTER (FROM 2nd CODE) ---------------- */

export const Footer = () => (
  <footer id="contact" className="bg-canvas pt-32 pb-12 border-t">
    <div className="container mx-auto px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-display text-[15vw] leading-[0.8] text-ink/5"
      >
        CONNECT
      </motion.h2>

      <div className="relative -mt-20 bg-canvas/90 backdrop-blur py-16">
        <div className="flex justify-center gap-16 mb-16">
          <a href={`mailto:${CONTENT.brand.contact.email}`}>
            <Mail />
          </a>
          <a href="#">
            <Instagram />
          </a>
          <div className="opacity-50">
            <MapPin />
          </div>
        </div>

        <div className="flex justify-between max-w-4xl mx-auto text-xs uppercase tracking-widest text-ink/40">
          <span>© 2026 {CONTENT.brand.name}</span>
          <span>Students of CIRS</span>
        </div>
      </div>
    </div>
  </footer>
);
