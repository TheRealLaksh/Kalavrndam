import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { CONTENT } from "../../data";
import { SectionHeader } from "./Shared";

/**
 * Events Section
 * Displays a grid of workshop cards with entrance animations.
 */
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
            className="relative bg-white p-10 shadow-xl transition-all group"
          >
            {/* Hover Accent Border */}
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