"use client";

import { motion } from "framer-motion";

const cards = [
  {
    number: "01",
    title: "CELEBRATE",
    body: "A curated stage for IRL culture builders — the first-ever national platform to spotlight subculture hosts, community leaders, and offline experience creators.",
    bg: "#F5F0E8",
    textColor: "#1A1A1A",
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
    hoverBorder: "#FF2B2B",
  },
  {
    number: "03",
    title: "THRIVE",
    body: "A launchpad for sustainable growth — giving IRL builders the tools, networks, and institutional validation to monetize, scale, and build lasting impact.",
    bg: "#1A1A1A",
    textColor: "#FFFFFF",
    numberColor: "#FFD600",
    hoverBorder: "#FFD600",
  },
];

export default function SolutionSection() {
  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 px-8 overflow-visible"
      style={{ background: "#FFFFFF" }}
    >
      {/* Diagonal Section Divider */}
      <div
        className="absolute -top-[40px] left-0 right-0 h-[60px] pointer-events-none z-[1]"
        style={{
          backgroundColor: "#FFFFFF",
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
          className="font-body text-[#FF2D2D] mb-10"
          style={{
            fontSize: "clamp(10px, 1vw, 12px)",
            letterSpacing: "0.18em",
          }}
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
            className="font-display text-[#1A1A1A]"
            style={{
              fontSize: "clamp(40px, 6vw, 88px)",
              lineHeight: 0.95,
              letterSpacing: "0.01em",
            }}
          >
            INTRODUCING THE <span className="text-[#FF2D2D]">IRL CULTURE</span> FESTIVAL.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-[#555] text-base sm:text-lg leading-relaxed self-center"
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
                className="absolute top-2 right-4 font-display text-[80px] sm:text-[100px] leading-none opacity-10 pointer-events-none select-none"
                style={{ color: card.numberColor }}
              >
                {card.number}
              </span>
              <div className="relative z-10">
                <span
                  className="font-display text-4xl block mb-1"
                  style={{ color: card.numberColor }}
                >
                  {card.number}
                </span>
                <h3
                  className="font-body font-bold uppercase tracking-wider mb-4"
                  style={{
                    fontSize: "clamp(18px, 2.2vw, 26px)",
                    letterSpacing: "0.03em",
                  }}
                >
                  {card.title}
                </h3>
                <p className="font-body text-sm leading-relaxed opacity-90">
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
