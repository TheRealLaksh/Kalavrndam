import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Mail, MapPin, Sparkles } from 'lucide-react';
import { CONTENT } from '../data';

// --- Animation Config ---
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const SectionHeader = ({ title, subtitle, light = false }) => (
  <motion.div 
    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
    className="mb-16 max-w-2xl"
  >
    <h2 className={`font-display text-5xl md:text-6xl mb-4 ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
    <div className="h-1 w-24 bg-accent mb-6" />
    <p className={`text-lg ${light ? 'text-white/60' : 'text-ink/60'}`}>{subtitle}</p>
  </motion.div>
);

// --- 1. Hero ---
export const Hero = () => (
  <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-canvas">
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ink rounded-full blur-[120px]" />
    </div>
    <div className="container mx-auto px-6 z-10 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
        className="font-display text-7xl md:text-9xl font-bold text-ink mb-6 tracking-tight"
      >
        {CONTENT.brand.name}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
        className="font-body text-xl md:text-2xl font-light text-ink/70 mb-12 italic"
      >
        {CONTENT.hero.subtitle}
      </motion.p>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}>
        <a href="#gallery" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-ink text-canvas rounded-full overflow-hidden transition-all hover:pr-10">
          <span className="relative z-10 font-medium tracking-wide">{CONTENT.hero.cta}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </div>
  </section>
);

// --- 2. Gallery ---
export const Gallery = () => (
  <section id="gallery" className="py-32 bg-white">
    <div className="container mx-auto px-6">
      <SectionHeader title={CONTENT.gallery.title} subtitle={CONTENT.gallery.subtitle} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {CONTENT.gallery.items.map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden aspect-[4/5] bg-stone-100 mb-4 rounded-sm">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 saturate-0 group-hover:saturate-100" />
            </div>
            <div className="flex justify-between items-end border-b border-ink/10 pb-2">
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <span className="font-body text-xs font-bold text-accent uppercase tracking-widest">{item.artist}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- 3. Events ---
export const Events = () => (
  <section id="events" className="py-32 bg-stone-50">
    <div className="container mx-auto px-6">
      <SectionHeader title={CONTENT.events.title} subtitle={CONTENT.events.subtitle} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CONTENT.events.items.map((event, idx) => (
          <motion.div 
            key={event.id}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -8 }}
            className={`p-8 bg-white border-l-4 transition-all duration-300 shadow-sm hover:shadow-xl ${event.upcoming ? 'border-accent' : 'border-ink/20'}`}
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs font-bold text-ink/40 uppercase tracking-widest">{event.audience}</span>
              {event.upcoming && <Sparkles className="w-5 h-5 text-accent animate-pulse" />}
            </div>
            <h3 className="font-display text-2xl text-ink mb-3 leading-tight">{event.title}</h3>
            <p className="font-body text-ink/70 text-sm leading-relaxed">{event.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- 4. About & Mentors ---
export const About = () => (
  <section id="about" className="py-32 bg-ink text-canvas relative">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="font-display text-5xl mb-8 text-white">{CONTENT.about.title}</h2>
          <p className="text-xl font-light leading-relaxed opacity-80 mb-12 border-l-2 border-accent pl-6">{CONTENT.about.text}</p>
          <div className="grid grid-cols-3 gap-8 mb-12">
            {CONTENT.about.stats.map((stat, idx) => (
              <div key={idx}>
                <span className="block font-display text-4xl text-accent mb-1">{stat.number}</span>
                <span className="text-xs uppercase tracking-widest opacity-60">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <div id="mentors" className="bg-white/5 p-10 rounded-2xl backdrop-blur-sm border border-white/10">
          <h3 className="font-display text-3xl mb-8 text-white">{CONTENT.mentors.title}</h3>
          <div className="grid grid-cols-2 gap-6">
            {CONTENT.mentors.items.map((mentor) => (
              <div key={mentor.id} className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 mx-auto bg-stone-200 rounded-full mb-3 opacity-80" />
                <h4 className="font-display text-lg text-white">{mentor.name}</h4>
                <p className="text-xs text-accent uppercase tracking-widest">{mentor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- 5. Footer ---
export const Footer = () => (
  <footer id="contact" className="bg-canvas pt-24 pb-12 border-t border-ink/5">
    <div className="container mx-auto px-6 text-center">
      <h2 className="font-display text-4xl mb-12">Get in Touch</h2>
      <div className="flex flex-wrap justify-center gap-12 mb-20">
        {[
            { icon: Mail, text: CONTENT.brand.contact.email },
            { icon: Instagram, text: CONTENT.brand.contact.instagram },
            { icon: MapPin, text: CONTENT.brand.contact.location }
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
            <item.icon className="w-5 h-5" /> <span>{item.text}</span>
          </div>
        ))}
      </div>
      <div className="text-xs font-bold text-ink/30 uppercase tracking-[0.2em]">&copy; 2024 {CONTENT.brand.name}</div>
    </div>
  </footer>
);