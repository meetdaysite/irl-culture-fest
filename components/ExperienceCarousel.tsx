"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "SUBCULTURE HUBS",
    body: "Dedicated zones for each subculture — music, art, food, wellness, gaming, fitness, and more. Each hub is curated by real community leaders who know their scene inside out.",
    bg: "#1A1A1A",
    text: "#FFFFFF",
    dotColor: "#f2af29",
  },
  {
    title: "HOST SANDBOX",
    body: "An interactive playground where emerging and established hosts can demo their event formats, test new concepts, and receive live feedback from an audience of peers and brands.",
    bg: "#FF2B2B",
    text: "#FFFFFF",
    dotColor: "#f2af29",
  },
  {
    title: "CURATED MATCHMAKING",
    body: "AI-powered and human-curated matchmaking sessions that connect brands with the right hosts, venues, and communities for authentic, high-impact collaborations.",
    bg: "#f2af29",
    text: "#FFFFFF",
    dotColor: "#FF2B2B",
  },
  {
    title: "SOCIAL MODULE",
    body: "A high-energy, content-rich social layer featuring live performances, panel discussions, networking lounges, and surprise pop-up activations across the venue.",
    bg: "#FFFFFF",
    text: "#1A1A1A",
    dotColor: "#FF2B2B",
  },
];

const rotationDegrees = [-3, 2, -1.5, 3];

export default function ExperienceCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      role="region"
      aria-label="Festival experiences list"
      className="w-full max-w-6xl mx-auto mt-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => {
          const isHovered = hoveredIndex === i;
          const initialRotate = rotationDegrees[i % rotationDegrees.length];

          return (
            <motion.div
              key={card.title}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                background: card.bg,
                color: card.text,
                boxShadow: isHovered
                  ? "0 20px 40px -10px rgba(0, 0, 0, 0.3)"
                  : "0 10px 20px -5px rgba(0, 0, 0, 0.15)",
              }}
              animate={{
                scale: isHovered ? 1.05 : 1,
                rotate: isHovered ? 0 : initialRotate,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="w-full min-h-[340px] rounded-2xl p-6 sm:p-8 flex flex-col justify-start select-none cursor-pointer shadow-lg"
            >
              {/* Card Title & Icon */}
              <div className="flex items-center gap-3 mb-6">
                {/* Pulsing Icon Dot */}
                <span
                  className="inline-block w-3 h-3 rounded-full flex-shrink-0 animate-pulse"
                  style={{ background: card.dotColor }}
                />
                <h3
                  className="font-body font-bold uppercase"
                  style={{
                    fontSize: "20px",
                    letterSpacing: "0.03em",
                  }}
                >
                  {card.title}
                </h3>
              </div>

              {/* Card Body */}
              <p className="font-body text-[14px] sm:text-[15px] leading-relaxed opacity-90">
                {card.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
