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
      className="relative py-12 sm:py-16 px-8 overflow-visible"
      style={{ background: "#1A1A1A" }}
    >
      {/* Diagonal Section Divider */}
      <div
        className="absolute -top-[40px] left-0 right-0 h-[60px] pointer-events-none z-[1]"
        style={{
          backgroundColor: "#1A1A1A",
          clipPath: "polygon(0 40px, 100% 0, 100% 60px, 0 60px)",
        }}
      />
      <div className="max-w-7xl mx-auto relative z-[2]">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-white/50 mb-6"
          style={{
            fontSize: "clamp(10px, 1vw, 12px)",
            letterSpacing: "0.18em",
          }}
        >
          Value Proposition ————
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-white mb-16"
          style={{
            fontSize: "clamp(40px, 6vw, 88px)",
            lineHeight: 0.95,
            letterSpacing: "0.01em",
          }}
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
              className={`p-8 transition-colors hover:bg-white/5 cursor-default ${
                i < columns.length - 1 ? "md:border-r md:border-white/15" : ""
              }`}
            >
              <h3
                className="font-body font-bold uppercase tracking-wider text-white mb-4"
                style={{
                  fontSize: "clamp(18px, 2.2vw, 26px)",
                  letterSpacing: "0.03em",
                }}
              >
                {col.title}
              </h3>
              <p className="font-body text-white/70 text-sm leading-relaxed">
                {col.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
