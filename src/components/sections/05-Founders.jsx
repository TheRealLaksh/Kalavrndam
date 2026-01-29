import React from "react";
import { motion } from "framer-motion";
import { CONTENT } from "../../data";
import { SectionHeader } from "./Shared";

/**
 * Founders Section
 * Showcases the individuals behind the collective.
 */
export const Founders = () => (
  <section id="mentors" className="py-40 bg-stone-100">
    <div className="container mx-auto px-6 text-center mb-20">
      <SectionHeader
        title="THE MINDS"
        subtitle="Orchestrators"
        align="center"
      />
    </div>

    <div className="flex justify-center gap-10 flex-wrap px-6">
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