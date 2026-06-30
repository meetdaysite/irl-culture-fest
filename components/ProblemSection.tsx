"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "ZERO REPRESENTATION",
    body: "No centralized stage exists to validate and spotlight physical culture builders.",
    borderColor: "#FF2D2D",
  },
  {
    title: "THE SURVIVAL TRAP",
    body: "Without structural monetization tools or scale resources, offline communities struggle to survive.",
    borderColor: "#FF2B2B",
  },
  {
    title: "THE AUDIENCE ACQUISITION CRISIS",
    body: "Brands spend millions on digital ads but desperately need an alternative, authentic connection.",
    borderColor: "#8FFB2B",
  },
];

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="py-12 sm:py-16 px-8"
      style={{ background: "#F5F0E8" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label text-[#FF2D2D] font-[family-name:var(--font-space-grotesk)] mb-10"
        >
          The Core Problem ————
        </motion.p>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-archivo-black)] text-3xl sm:text-4xl md:text-5xl text-[#0D0D0D] leading-tight"
          >
            THE INVISIBLE BACKBONE &amp; THE BRAND DISCONNECT
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-[family-name:var(--font-space-grotesk)] text-[#333] text-base sm:text-lg leading-relaxed self-center"
          >
            Digital platforms monetize creators, but the IRL hosts keeping our
            cities alive operate in an operational and financial vacuum.
            Meanwhile, brands face sky-high digital ad fatigue and zero loyalty.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ 
                opacity: { duration: 0.6, delay: 0.15 * i },
                y: { type: "spring", stiffness: 400, damping: 17, delay: 0.15 * i },
                scale: { type: "spring", stiffness: 400, damping: 17 }
              }}
              className="bg-white rounded-xl shadow-md p-6 sm:p-8 transition-shadow duration-150 hover:shadow-2xl cursor-default"
              style={{ borderLeft: `4px solid ${card.borderColor}` }}
            >
              <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-sm uppercase tracking-wider text-[#0D0D0D] mb-3">
                {card.title}
              </h3>
              <p className="font-[family-name:var(--font-space-grotesk)] text-[#555] text-sm leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
