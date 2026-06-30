"use client";

import { motion } from "framer-motion";
import ExperienceCarousel from "./ExperienceCarousel";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-12 sm:py-16 px-8"
      style={{ background: "#FFD600" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label text-[#0D0D0D] font-[family-name:var(--font-space-grotesk)] mb-6"
        >
          The Event Experience ————
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-archivo-black)] text-3xl sm:text-4xl md:text-5xl text-[#0D0D0D] leading-tight mb-4"
        >
          WHAT HAPPENS INSIDE THE FEST?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-[family-name:var(--font-space-grotesk)] font-bold text-sm sm:text-base uppercase tracking-wider text-[#FF2D2D] mb-14"
        >
          A DAY DESIGNED FOR THOSE WHO BUILD THE CULTURE.
        </motion.p>

        {/* Animated 3D Coverflow Carousel */}
        <ExperienceCarousel />
      </div>
    </section>
  );
}
