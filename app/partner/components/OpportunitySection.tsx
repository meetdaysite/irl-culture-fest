"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "ZERO REPRESENTATION",
    body: "No centralized stage exists to validate and spotlight physical culture builders.",
    borderColor: "#FF2B2B",
  },
  {
    title: "THE SURVIVAL TRAP",
    body: "Without structural monetization tools or scale resources, offline communities struggle to survive.",
    borderColor: "#f2af29",
  },
  {
    title: "THE AUDIENCE ACQUISITION CRISIS",
    body: "Brands spend millions on digital ads but desperately need an alternative, authentic connection.",
    borderColor: "#0D0D0D",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
};

export default function OpportunitySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="partner-opportunity"
      className="relative overflow-hidden"
      style={{ background: "#F5F0E8", paddingTop: 96, paddingBottom: 156 }}
    >
      <div
        className="mx-auto relative z-10 w-full"
        style={{ maxWidth: 1200, paddingLeft: 48, paddingRight: 48 }}
      >
        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
          <h2
            className="font-display text-[#0D0D0D] leading-none"
            style={{
              fontSize: "clamp(24px, 3.5vw, 40px)",
            }}
          >
            THE INVISIBLE BACKBONE & THE BRAND DISCONNECT
          </h2>
          <p
            className="font-body text-[17px] text-[#444] leading-[1.8]"
          >
            Digital platforms monetize creators, but the IRL hosts keeping our cities alive operate in an operational and financial vacuum. Meanwhile, brands face sky-high digital ad fatigue and zero loyalty.
          </p>
        </div>

        {/* 3 Cards Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card, i) => {
            const isHovered = hoveredIndex === i;

            return (
              <motion.div
                key={i}
                variants={cardVariants}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  scale: isHovered ? 1.08 : 1,
                  y: isHovered ? -10 : 0,
                  backgroundColor: isHovered ? card.borderColor : "#FFFFFF",
                  borderLeftColor: isHovered ? "#FFFFFF" : card.borderColor,
                  boxShadow: isHovered
                    ? "0 20px 40px rgba(0,0,0,0.15)"
                    : "0 10px 20px rgba(0,0,0,0.05)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  backgroundColor: { duration: 0.25 },
                  borderLeftColor: { duration: 0.25 },
                }}
                className="rounded-2xl p-8 flex flex-col justify-between border-t-0 shadow-md cursor-pointer"
                style={{
                  borderLeftStyle: "solid",
                  borderLeftWidth: "8px",
                  minHeight: 220,
                }}
              >
                <h3
                  className="font-display text-xl transition-colors duration-250"
                  style={{
                    letterSpacing: "0.02em",
                    color: isHovered
                      ? (card.borderColor === "#f2af29" ? "#0D0D0D" : "#FFFFFF")
                      : "#0D0D0D",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-body text-sm sm:text-base leading-relaxed mt-4 transition-colors duration-250"
                  style={{
                    color: isHovered
                      ? (card.borderColor === "#f2af29" ? "#333333" : "rgba(255, 255, 255, 0.85)")
                      : "#555555",
                  }}
                >
                  {card.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Torn Paper Divider → next section: WhoYoullMeet #2A1A2E */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100%",
          height: "60px",
          position: "absolute",
          bottom: "-2px",
          left: 0,
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <path
          d="M0,25 L15,18 L30,28 L45,16 L60,26 L75,14 L90,24 L105,12 L120,22 L135,14 L150,25 L165,16 L180,28 L195,18 L210,30 L225,20 L240,32 L255,22 L270,34 L285,24 L300,36 L315,26 L330,38 L345,28 L360,40 L375,30 L390,42 L405,32 L420,44 L435,34 L450,45 L465,35 L480,46 L495,36 L510,48 L525,38 L540,49 L555,39 L570,50 L585,40 L600,52 L615,42 L630,53 L645,43 L660,54 L675,44 L690,55 L705,45 L720,55 L735,46 L750,54 L765,44 L780,52 L795,42 L810,50 L825,40 L840,48 L855,38 L870,46 L885,36 L900,44 L915,34 L930,42 L945,32 L960,40 L975,30 L990,38 L1005,28 L1020,36 L1035,26 L1050,34 L1065,24 L1080,32 L1095,22 L1110,30 L1125,20 L1140,28 L1155,18 L1170,26 L1185,16 L1200,24 L1215,14 L1230,22 L1245,12 L1260,20 L1275,10 L1290,18 L1305,8 L1320,16 L1335,6 L1350,14 L1365,4 L1380,12 L1395,2 L1410,10 L1425,2 L1440,8 L1440,60 L0,60 Z"
          fill="#F5F0E8"
          transform="translate(0, -3)"
        />
        <path
          d="M0,25 L15,18 L30,28 L45,16 L60,26 L75,14 L90,24 L105,12 L120,22 L135,14 L150,25 L165,16 L180,28 L195,18 L210,30 L225,20 L240,32 L255,22 L270,34 L285,24 L300,36 L315,26 L330,38 L345,28 L360,40 L375,30 L390,42 L405,32 L420,44 L435,34 L450,45 L465,35 L480,46 L495,36 L510,48 L525,38 L540,49 L555,39 L570,50 L585,40 L600,52 L615,42 L630,53 L645,43 L660,54 L675,44 L690,55 L705,45 L720,55 L735,46 L750,54 L765,44 L780,52 L795,42 L810,50 L825,40 L840,48 L855,38 L870,46 L885,36 L900,44 L915,34 L930,42 L945,32 L960,40 L975,30 L990,38 L1005,28 L1020,36 L1035,26 L1050,34 L1065,24 L1080,32 L1095,22 L1110,30 L1125,20 L1140,28 L1155,18 L1170,26 L1185,16 L1200,24 L1215,14 L1230,22 L1245,12 L1260,20 L1275,10 L1290,18 L1305,8 L1320,16 L1335,6 L1350,14 L1365,4 L1380,12 L1395,2 L1410,10 L1425,2 L1440,8 L1440,60 L0,60 Z"
          fill="#0D0D0D"
        />
      </svg>
    </section>
  );
}
