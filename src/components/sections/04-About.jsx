import React from "react";
import { CONTENT } from "../../data";

/**
 * About Section
 * Cinematic, artistic, premium vision section
 */
export const About = () => (
  <section
    id="about"
    className="relative overflow-hidden bg-ink text-canvas py-48"
  >
    {/* ===== Ambient Background Layers ===== */}
    <div className="absolute inset-0">
      {/* Gradient glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-accent/20 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[200px] rounded-full" />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.035] bg-[url('/noise.png')] pointer-events-none" />
    </div>

    <div className="relative container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-24 items-start">
        {/* ===== Left: Vision & Stats ===== */}
        <div className="lg:w-1/2">
          <h2 className="font-display text-[clamp(4rem,8vw,7rem)] leading-[0.95] mb-20 text-white">
            Our
            <span className="block text-accent italic tracking-tight">
              Vision
            </span>
          </h2>

          <div className="grid grid-cols-2 gap-10">
            {CONTENT.about.stats.map((stat, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl border border-white/10 backdrop-blur-md bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
              >
                {/* Accent line */}
                <div className="absolute left-0 top-0 h-full w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />

                <span className="font-display text-6xl text-accent block mb-3">
                  {stat.number}
                </span>

                <span className="text-xs uppercase tracking-[0.35em] text-white/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Right: Manifesto Text ===== */}
        <div className="lg:w-1/2">
          <div className="relative">
            {/* Vertical editorial line */}
            <div className="absolute -left-10 top-0 h-full w-px bg-white/10 hidden lg:block" />

            <p className="text-[1.35rem] leading-relaxed font-light text-white/80 mb-12">
              {CONTENT.about.text}
            </p>

            <p className="text-sm uppercase tracking-[0.4em] text-white/40">
              Business × Technology × Culture
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
