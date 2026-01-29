import React from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin } from "lucide-react";
import { CONTENT } from "../../data";

/**
 * Footer Section
 * Large decorative typography with contact information.
 */
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
          <a href={`mailto:${CONTENT.brand.contact.email}`} className="hover:text-accent transition-colors">
            <Mail />
          </a>
          <a href="#" className="hover:text-accent transition-colors">
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