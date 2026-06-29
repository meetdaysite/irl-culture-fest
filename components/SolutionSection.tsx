"use client";

import { motion } from "framer-motion";

const cards = [
  {
    number: "01",
    title: "CELEBRATE",
    body: "A curated stage for IRL culture builders — the first-ever national platform to spotlight subculture hosts, community leaders, and offline experience creators.",
    bg: "#F5F0E8",
    textColor: "#0D0D0D",
    numberColor: "#FF2D2D",
    hoverBorder: "#FF2D2D",
  },
  {
    number: "02",
    title: "ENGAGE",
    body: "An immersive, brand-integrated festival where high-intent audiences, creators, and partners come together for unforgettable live experiences and collaborations.",
    bg: "#FF2D2D",
    textColor: "#FFFFFF",
    numberColor: "rgba(255,255,255,0.3)",
    hoverBorder: "#FF6B35",
  },
  {
    number: "03",
    title: "THRIVE",
    body: "A launchpad for sustainable growth — giving IRL builders the tools, networks, and institutional validation to monetize, scale, and build lasting impact.",
    bg: "#0D0D0D",
    textColor: "#FFFFFF",
    numberColor: "#8FFB2B",
    hoverBorder: "#8FFB2B",
  },
];

export default function SolutionSection() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-6"
      style={{ background: "#FFFFFF" }}
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
          The Solution ————
        </motion.p>

        {/* Header Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-abril-fatface)] text-3xl sm:text-4xl md:text-5xl text-[#0D0D0D] leading-tight"
          >
            INTRODUCING THE IRL CULTURE FESTIVAL.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-[family-name:var(--font-space-grotesk)] text-[#555] text-base sm:text-lg leading-relaxed self-center"
          >
            A first-of-its-kind festival that brings together India&apos;s most
            influential IRL culture builders, brands, and audiences under one
            roof — to celebrate, collaborate, and reshape the experience economy.
          </motion.p>
        </div>

        {/* 3 Numbered Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ 
                opacity: { duration: 0.6, delay: 0.15 * i },
                y: { type: "spring", stiffness: 400, damping: 17, delay: 0.15 * i },
                scale: { type: "spring", stiffness: 400, damping: 17 }
              }}
              className="relative rounded-2xl p-8 sm:p-10 overflow-hidden transition-all duration-150 hover:shadow-2xl cursor-default border-2 border-transparent"
              style={{
                background: card.bg,
                color: card.textColor,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = card.hoverBorder;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "transparent";
              }}
            >
              {/* Ghost Number */}
              <span
                className="absolute top-2 right-4 font-[family-name:var(--font-abril-fatface)] text-[80px] sm:text-[100px] leading-none opacity-10 pointer-events-none select-none"
                style={{ color: card.numberColor }}
              >
                {card.number}
              </span>
              <div className="relative z-10">
                <span
                  className="font-[family-name:var(--font-abril-fatface)] text-4xl block mb-1"
                  style={{ color: card.numberColor }}
                >
                  {card.number}
                </span>
                <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-lg uppercase tracking-wider mb-4">
                  {card.title}
                </h3>
                <p className="font-[family-name:var(--font-space-grotesk)] text-sm leading-relaxed opacity-90">
                  {card.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
