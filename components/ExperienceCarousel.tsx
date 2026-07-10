"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "KNOWLEDGE SHARING",
    body: "A professional track where the attendees participate in panel discussions, fire-side chats and keynotes by celebrated community leaders, founders and ecosystem providers.",
    image: "/images/inside-the-fest/knowledge-sharing.png",
    bg: "#1A1A1A",
    text: "#FFFFFF",
    dotColor: "#f2af29",
  },
  {
    title: "INTERACTIVE BRAND EXPO",
    body: "Immersive, highly sensory brand spaces designed for tactile interaction, direct product testing, and organic culture alignment, not passive logo placement.",
    image: "/images/inside-the-fest/interactive-brand.jpg",
    bg: "#FF2B2B",
    text: "#FFFFFF",
    dotColor: "#f2af29",
  },
  {
    title: "SUBCULTURE HUBS",
    body: "Curated physical spaces where communities, analog arts, independent culinary concepts, wellness, and music directly take over and program their own zones.",
    image: "/images/inside-the-fest/subculture-hubs.png",
    bg: "#f2af29",
    text: "#1A1A1A",
    dotColor: "#FF2B2B",
  },
  {
    title: "LIVE PITCHING",
    body: "A high-stakes, rapid-fire pitch session hosted live within the Host Sandbox. A curated board of forward-thinking brand marketers and ecosystem enablers ready to deploy capital.",
    image: "/images/inside-the-fest/live-pitching.jpg",
    bg: "#f2af29",
    text: "#FFFFFF",
    dotColor: "#FF2B2B",
  },
  {
    title: "NETWORKING LOUNGE",
    body: "A limited access lounge for communities, brands, speakers to network, pitch and engage.",
    image: "/images/inside-the-fest/networking-lounges.png",
    bg: "#FF2B2B",
    text: "#FFFFFF",
    titleColor: "#FFFFFF",
    dotColor: "#f2af29",
  },
  {
    title: "CURATED DINNER",
    body: "An exclusive dinner hosted to network and strengthen the bond between the attendees in a non formal setup..",
    image: "/images/inside-the-fest/curated-dinners.png",
    bg: "#1A1A1A",
    text: "#FFFFFF",
    dotColor: "#f2af29",
  },
];

export default function ExperienceCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      role="region"
      aria-label="Festival experiences list"
      className="w-full max-w-6xl mx-auto mt-8"
    >
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card, i) => {
          const isHovered = hoveredIndex === i;

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
                border: card.bg === "#FFFFFF" ? "2px solid #1A1A1A" : "none",
              }}
              animate={{
                scale: isHovered ? 1.03 : 1,
                rotate: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] min-h-[380px] rounded-2xl p-6 flex flex-col justify-between select-none cursor-pointer shadow-lg"
            >
              <div>
                {/* Card Title & Icon */}
                <div className="flex items-center gap-3 mb-4">
                  {/* Pulsing Icon Dot */}
                  <span
                    className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0 animate-pulse"
                    style={{ background: card.dotColor }}
                  />
                  <h3
                    className="font-body font-bold uppercase"
                    style={{
                      fontSize: "16px",
                      letterSpacing: "0.03em",
                      color: (card as any).titleColor || card.text,
                    }}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Card Body */}
                <p className="font-body text-[13px] sm:text-[14px] leading-relaxed opacity-90">
                  {card.body}
                </p>
              </div>

              <motion.div
                animate={{
                  rotate: isHovered ? 0 : (i % 2 === 0 ? -4 : 4),
                  scale: isHovered ? 1.02 : 1
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-full aspect-[16/10] mt-5 p-1.5 bg-white rounded-xl overflow-hidden shadow-md flex items-center justify-center"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-lg transition-all duration-300"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
