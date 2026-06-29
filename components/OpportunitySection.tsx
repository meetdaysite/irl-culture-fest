"use client";

import { motion } from "framer-motion";

export default function OpportunitySection() {
  const lines = [
    { text: "CURATION IS THE", className: "text-white" },
    { text: "NEW CREATION.", className: "gradient-text-red-orange" },
    { text: "BUT THE BRIDGE IS BROKEN.", className: "text-white" },
  ];

  return (
    <section
      id="opportunity"
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
      style={{ background: "#0D0D0D" }}
    >
      {/* Decorative Rotating Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] pointer-events-none">
        <div className="rotating-circle w-full h-full rounded-full border-2 border-[#FF2D2D]/20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label text-[#F5F0E8]/60 font-[family-name:var(--font-space-grotesk)] mb-16"
        >
          The Macro Opportunity ————
        </motion.p>

        {/* Giant Quote */}
        <div className="mb-16">
          {lines.map((line, i) => (
            <motion.h2
              key={i}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`font-[family-name:var(--font-abril-fatface)] text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight ${line.className}`}
            >
              {line.text}
            </motion.h2>
          ))}
        </div>

        {/* Two Body Text Blocks */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-[family-name:var(--font-space-grotesk)] text-[#F5F0E8]/80 text-base sm:text-lg leading-relaxed"
          >
            India is witnessing an unprecedented explosion of offline culture —
            from underground gig nights and rooftop raves to niche community
            meetups and wellness circles. Yet the builders behind these movements
            remain invisible.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-[family-name:var(--font-space-grotesk)] text-[#F5F0E8]/80 text-base sm:text-lg leading-relaxed"
          >
            The market needs a bridge between high-intent offline audiences and
            brands craving authentic connection. That bridge is the IRL Culture
            Fest — India&apos;s first platform to celebrate, monetize, and scale the
            offline economy.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
