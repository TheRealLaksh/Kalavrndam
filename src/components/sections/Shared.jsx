import React from "react";
import { motion } from "framer-motion";

/**
 * Shared Animation Variants
 */
export const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/**
 * Shared Header Component
 * Standardizes the appearance of section titles across the app.
 */
export const SectionHeader = ({ title, subtitle, light = false, align = "left" }) => (
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