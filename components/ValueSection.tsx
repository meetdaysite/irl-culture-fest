"use client";

import { motion } from "framer-motion";

const columns = [
  {
    title: "DIRECT MONETIZATION",
    body: "Brand partnerships, sponsored hubs, premium matchmaking sessions, and co-branded activations that convert culture into revenue for every stakeholder.",
  },
  {
    title: "CROSS-POLLINATION",
    body: "A melting pot where subcultures collide — wellness meets music, gaming meets food, art meets fitness — creating new creative formats and untapped business models.",
  },
  {
    title: "INSTITUTIONAL VALIDATION",
    body: "Industry-first awards, media spotlights, and official recognition that transforms grassroots community builders into credentialed culture leaders.",
  },
];

export default function ValueSection() {
  return (
    <section
      id="value"
      className="py-24 sm:py-32 px-6"
      style={{ background: "#FF2D2D" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label text-white/60 font-[family-name:var(--font-space-grotesk)] mb-6"
        >
          Value Proposition ————
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-abril-fatface)] text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-16"
        >
          THE HIGH-VALUE EXCHANGE FOR IRL BUILDERS.
        </motion.h2>

        {/* 3 Columns with Dividers */}
        <div className="grid md:grid-cols-3 gap-0">
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className={`p-8 transition-colors hover:bg-white/10 cursor-default ${
                i < columns.length - 1 ? "md:border-r md:border-white/20" : ""
              }`}
            >
              <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-sm uppercase tracking-wider text-white mb-4">
                {col.title}
              </h3>
              <p className="font-[family-name:var(--font-space-grotesk)] text-white/80 text-sm leading-relaxed">
                {col.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
