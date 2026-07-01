"use client";

import { motion } from "framer-motion";
import ExperienceCarousel from "./ExperienceCarousel";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-12 sm:py-16 px-8 overflow-visible"
      style={{ background: "#2A1A2E" }}
    >
      {/* Diagonal Section Divider */}
      <div
        className="absolute -top-[40px] left-0 right-0 h-[60px] pointer-events-none z-[1]"
        style={{
          backgroundColor: "#2A1A2E",
          clipPath: "polygon(0 0, 100% 40px, 100% 60px, 0 60px)",
        }}
      />
      <div className="max-w-7xl mx-auto relative z-[2]">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-white/60 mb-6"
          style={{
            fontSize: "clamp(10px, 1vw, 12px)",
            letterSpacing: "0.18em",
          }}
        >
          The Event Experience ————
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-white mb-4"
          style={{
            fontSize: "clamp(40px, 6vw, 88px)",
            lineHeight: 0.95,
            letterSpacing: "0.01em",
          }}
        >
          WHAT HAPPENS INSIDE THE FEST?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body font-bold text-sm sm:text-base uppercase tracking-wider text-[#FFD600] mb-14"
        >
          A DAY DESIGNED FOR THOSE WHO BUILD THE CULTURE.
        </motion.p>

        {/* Animated 3D Coverflow Carousel */}
        <ExperienceCarousel />
      </div>
    </section>
  );
}
