"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "SUBCULTURE HUBS",
    body: "Dedicated zones for each subculture — music, art, food, wellness, gaming, fitness, and more. Each hub is curated by real community leaders who know their scene inside out.",
    bg: "#0D0D0D",
    bgHover: "#1a1a1a",
    text: "#FFFFFF",
    dotColor: "#8FFB2B",
  },
  {
    title: "HOST SANDBOX",
    body: "An interactive playground where emerging and established hosts can demo their event formats, test new concepts, and receive live feedback from an audience of peers and brands.",
    bg: "#FF2D2D",
    bgHover: "#ff4545",
    text: "#FFFFFF",
    dotColor: "#FFD600",
  },
  {
    title: "CURATED MATCHMAKING",
    body: "AI-powered and human-curated matchmaking sessions that connect brands with the right hosts, venues, and communities for authentic, high-impact collaborations.",
    bg: "#BF5FFF",
    bgHover: "#cc77ff",
    text: "#FFFFFF",
    dotColor: "#00C2FF",
  },
  {
    title: "SOCIAL MODULE",
    body: "A high-energy, content-rich social layer featuring live performances, panel discussions, networking lounges, and surprise pop-up activations across the venue.",
    bg: "#FFFFFF",
    bgHover: "#f5f5f5",
    text: "#0D0D0D",
    dotColor: "#FF6B35",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32 px-6"
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
          className="font-[family-name:var(--font-abril-fatface)] text-3xl sm:text-4xl md:text-5xl text-[#0D0D0D] leading-tight mb-4"
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

        {/* 2×2 Card Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ 
                opacity: { duration: 0.6, delay: 0.12 * i },
                y: { type: "spring", stiffness: 450, damping: 18, delay: 0.12 * i },
                scale: { type: "spring", stiffness: 450, damping: 18 }
              }}
              className="group rounded-2xl p-8 sm:p-10 transition-all duration-150 cursor-default"
              style={{ background: card.bg, color: card.text }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = card.bgHover;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = card.bg;
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                {/* Pulsing Icon Dot */}
                <span
                  className="pulse-dot inline-block w-3 h-3 rounded-full"
                  style={{ background: card.dotColor }}
                />
                <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-base uppercase tracking-wider">
                  {card.title}
                </h3>
              </div>
              <p className="font-[family-name:var(--font-space-grotesk)] text-sm leading-relaxed opacity-90">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
