"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DecorativeStar from "@/components/DecorativeStar";

const manifestoCards = [
  {
    title: "Invisible Backbone",
    body: "Run clubs, supper clubs, and design collectives keep our cities alive, yet they have zero institutional recognition, no platform, and no shared stage.",
    bg: "#1A1A1A",
    text: "#FFFFFF",
    dotColor: "#FF2B2B",
  },
  {
    title: "The Survival Trap",
    body: "Operating purely on passion and personal savings, world-class hosts face burnout and extinction before they can ever scale. Passion doesn't pay the rent.",
    bg: "#FF2B2B",
    text: "#FFFFFF",
    dotColor: "#f2af29",
  },
  {
    title: "The Brand Disconnect",
    body: "Enterprises burn crores on programmatic digital ads only to combat ad fatigue. They are missing the most powerful channel available: already-assembled, hyper-loyal, high-trust offline communities.",
    bg: "#f2af29",
    text: "#FFFFFF",
    dotColor: "#FF2B2B",
  },
];

const actionCards = [
  {
    title: "Celebrate",
    body: "Giving offline culture builders the recognition and stage they deserve.",
    bg: "#FFFFFF",
    text: "#0D0D0D",
    dotColor: "#FF2B2B",
  },
  {
    title: "Engage",
    body: "Connecting brands with active, highly targeted offline communities directly.",
    bg: "#1A1A1A",
    text: "#FFFFFF",
    dotColor: "#f2af29",
  },
  {
    title: "Thrive",
    body: "Transforming passion projects into a sustainable, long-term ecosystem.",
    bg: "#FF2B2B",
    text: "#FFFFFF",
    dotColor: "#FFFFFF",
  },
];

const rotationDegrees = [-2.5, 2, -1.5, 3];

export default function ManifestoSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredActionIndex, setHoveredActionIndex] = useState<number | null>(null);

  return (
    <section
      id="manifesto"
      className="relative overflow-hidden"
      style={{ background: "#0D0D0D", paddingTop: 80, paddingBottom: 140 }}
    >
      {/* Decorative stars */}
      <DecorativeStar size={180} color="#f2af29" opacity={0.06} top="-40px" right="5%" spin spinDuration={30} />
      <DecorativeStar size={80}  color="#FFFFFF"  opacity={0.05} top="30%"  left="2%"  rotate={20} />
      <DecorativeStar size={120} color="#FF2B2B" opacity={0.07} bottom="10%" right="3%" spin spinDuration={40} />
      <DecorativeStar size={50}  color="#FFFFFF"  opacity={0.04} bottom="25%" left="8%" rotate={45} />
      <div
        className="mx-auto relative z-10"
        style={{ maxWidth: 1200, paddingLeft: 48, paddingRight: 48 }}
      >
        {/* Eyebrow Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block font-body text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border-2 border-[#FF2B2B] text-[#FF2B2B] mb-4"
        >
          ✦ THE MANIFESTO
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-white tracking-tight leading-none mb-12"
          style={{
            fontSize: "clamp(32px, 4.5vw, 56px)",
            letterSpacing: "0.01em",
          }}
        >
          The Problem: <span className="text-[#FF2B2B]">Great Culture</span>, Fragile Business.
        </motion.h2>

        {/* Left-Right Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Stacked Manifesto Cards (Wider & Longer & Straight) */}
          <div className="lg:col-span-6 flex flex-col gap-6 w-full">
            {manifestoCards.map((card, i) => {
              const isHovered = hoveredIndex === i;

              return (
                <motion.div
                  key={card.title}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    background: isHovered ? "#FFFFFF" : card.bg,
                    color: isHovered ? "#0D0D0D" : card.text,
                    border: card.bg === "#1A1A1A" && !isHovered ? "1px solid #333" : "none",
                    boxShadow: isHovered
                      ? "0 20px 40px -10px rgba(0, 0, 0, 0.5)"
                      : "0 10px 20px -5px rgba(0, 0, 0, 0.3)",
                  }}
                  animate={{
                    scale: isHovered ? 1.02 : 1,
                    rotate: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="w-full min-h-[190px] rounded-2xl p-6 flex flex-col justify-start select-none cursor-pointer shadow-lg transition-colors duration-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0 animate-pulse"
                      style={{ background: card.dotColor }}
                    />
                    <h3
                      className="font-body font-bold uppercase text-[16px]"
                      style={{ letterSpacing: "0.03em" }}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <p className="font-body text-[13px] sm:text-[14px] leading-relaxed opacity-90">
                    {card.body}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Two Larger, Stacked Angled Manifesto Images (Haphazard Layout) */}
          <div className="lg:col-span-6 flex flex-col gap-8 items-center justify-start w-full py-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              viewport={{ once: true }}
              transition={{
                rotate: { type: "spring", stiffness: 200, damping: 15 },
                scale: { type: "spring", stiffness: 300, damping: 20 },
                opacity: { duration: 0.5 }
              }}
              className="relative overflow-hidden rounded-2xl border-2 border-[#1A1A1A] bg-[#1A1A1A] shadow-[4px_4px_0px_#FF2B2B] aspect-[4/3] w-[300px] sm:w-[360px] lg:-translate-x-8 cursor-pointer"
            >
              <img
                src="/images/manifesto/12.png"
                alt="IRL Culture Curation"
                className="w-full h-full object-cover transition-all duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              viewport={{ once: true }}
              transition={{
                rotate: { type: "spring", stiffness: 200, damping: 15 },
                scale: { type: "spring", stiffness: 300, damping: 20 },
                opacity: { duration: 0.5 }
              }}
              className="relative overflow-hidden rounded-2xl border-2 border-[#1A1A1A] bg-[#1A1A1A] shadow-[4px_4px_0px_#f2af29] aspect-[4/3] w-[300px] sm:w-[360px] lg:translate-x-8 cursor-pointer"
            >
              <img
                src="/images/manifesto/pexels-rdne-7335257.jpg"
                alt="Community Curation"
                className="w-full h-full object-cover transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Torn Paper Divider → next section: SolutionSection #FFFFFF */}
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
          fill="#0D0D0D"
          transform="translate(0, -3)"
        />
        <path
          d="M0,25 L15,18 L30,28 L45,16 L60,26 L75,14 L90,24 L105,12 L120,22 L135,14 L150,25 L165,16 L180,28 L195,18 L210,30 L225,20 L240,32 L255,22 L270,34 L285,24 L300,36 L315,26 L330,38 L345,28 L360,40 L375,30 L390,42 L405,32 L420,44 L435,34 L450,45 L465,35 L480,46 L495,36 L510,48 L525,38 L540,49 L555,39 L570,50 L585,40 L600,52 L615,42 L630,53 L645,43 L660,54 L675,44 L690,55 L705,45 L720,55 L735,46 L750,54 L765,44 L780,52 L795,42 L810,50 L825,40 L840,48 L855,38 L870,46 L885,36 L900,44 L915,34 L930,42 L945,32 L960,40 L975,30 L990,38 L1005,28 L1020,36 L1035,26 L1050,34 L1065,24 L1080,32 L1095,22 L1110,30 L1125,20 L1140,28 L1155,18 L1170,26 L1185,16 L1200,24 L1215,14 L1230,22 L1245,12 L1260,20 L1275,10 L1290,18 L1305,8 L1320,16 L1335,6 L1350,14 L1365,4 L1380,12 L1395,2 L1410,10 L1425,2 L1440,8 L1440,60 L0,60 Z"
          fill="#FFFFFF"
        />
      </svg>
    </section>
  );
}
