"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const cards = [
  {
    number: "01",
    title: "CELEBRATE",
    body: "Elevating offline curation from a side hustle into a respected, monetizable discipline.",
    bg: "#F5F0E8",
    textColor: "#1A1A1A",
    numberColor: "#FF2B2B",
    ghostColor: "#FF2B2B",
    ghostOpacity: 0.08,
    hoverBorder: "#FF2B2B",
    icon: (color: string) => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    )
  },
  {
    number: "02",
    title: "ENGAGE",
    body: "Providing top subcultures their own physical micro-neighborhoods to program, own, and run live.",
    bg: "#FF2B2B",
    textColor: "#FFFFFF",
    numberColor: "#FFFFFF",
    ghostColor: "#FFFFFF",
    ghostOpacity: 0.08,
    hoverBorder: "#FFFFFF",
    icon: (color: string) => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  },
  {
    number: "03",
    title: "THRIVE",
    body: "Building the commercial infrastructure and corporate networks required to turn hosting into a viable career.",
    bg: "#1A1A1A",
    textColor: "#FFFFFF",
    numberColor: "#FF2B2B",
    ghostColor: "#FF2B2B",
    ghostOpacity: 0.08,
    hoverBorder: "#FF2B2B",
    icon: (color: string) => (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
        <path d="m22 7-8.5 8.5-5-5L2 17M22 7h-6M22 7v6" />
      </svg>
    )
  },
];

export default function SolutionSection() {
  const [wanderPos, setWanderPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const wander = () => {
      setWanderPos({
        x: (Math.random() - 0.5) * 40,  // -20px to +20px
        y: (Math.random() - 0.5) * 50,  // -25px to +25px
      });
    };
    wander();
    const id = setInterval(wander, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="solution"
      className="relative overflow-hidden"
      style={{ background: "#FFFFFF", paddingTop: 80, paddingBottom: 140 }}
    >
      <div
        className="mx-auto relative z-[2]"
        style={{ maxWidth: 1200, paddingLeft: 48, paddingRight: 48 }}
      >
        {/* Large Background Watermark Logo (Inner margin bound + random wander) */}
        <motion.div
          animate={{ x: wanderPos.x, y: wanderPos.y }}
          transition={{ duration: 3.5, ease: "easeInOut" }}
          className="absolute right-12 top-6 pointer-events-none select-none hidden md:block z-[0] opacity-[0.4] max-w-[200px] lg:max-w-[250px]"
        >
          <img
            src="/footer-logo.png"
            alt="IRL Culture Fest Watermark"
            className="w-full h-auto object-contain"
          />
        </motion.div>
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block font-body text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border-2 border-[#FF2B2B] text-[#FF2B2B] mb-4"
        >
          ✦ THE SOLUTION
        </motion.span>

        {/* Header Row */}
        <div className="mb-12 max-w-3xl text-left">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-[#1A1A1A] leading-none mb-3"
            style={{
              fontSize: "clamp(32px, 4.5vw, 56px)",
              letterSpacing: "0.01em",
            }}
          >
            Introducing IRL Culture Festival 2026
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-body text-[#FF2B2B] uppercase font-bold text-sm tracking-wider"
          >
            The Physical Home of India’s Offline Movement.
          </motion.p>
        </div>

        {/* 3 Numbered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.15 * i },
                y: { type: "spring", stiffness: 400, damping: 20, delay: 0.15 * i },
                scale: { type: "spring", stiffness: 400, damping: 20 }
              }}
              className="relative rounded-2xl p-8 sm:p-10 overflow-hidden transition-all duration-150 hover:shadow-2xl cursor-default border-2 border-transparent shadow-md min-h-[300px] flex flex-col justify-between items-start"
              style={{ background: card.bg, color: card.textColor }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = card.hoverBorder;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "transparent";
              }}
            >
              <span
                className="absolute top-4 right-4 font-display text-[80px] sm:text-[100px] leading-none pointer-events-none select-none"
                style={{
                  color: card.ghostColor,
                  opacity: card.ghostOpacity
                }}
              >
                {card.number}
              </span>
              <div className="relative z-10 w-full flex flex-col h-full justify-between items-start">
                <div className="w-full">
                  <div className="flex items-center justify-between w-full mb-4">
                    {card.icon(card.numberColor)}
                    <span
                      className="font-display text-4xl leading-none"
                      style={{ color: card.numberColor }}
                    >
                      {card.number}
                    </span>
                  </div>
                  <h3
                    className="font-body font-bold uppercase tracking-wider mb-4"
                    style={{
                      fontSize: "clamp(15px, 1.8vw, 20px)",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p className="font-body text-sm sm:text-[15px] leading-relaxed opacity-90">
                    {card.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Torn Paper Divider → next section: Experience #F5F0E8 */}
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
        {/* Layer 1: Underlay white/cream border shadow */}
        <path
          d="M0,25 L15,18 L30,28 L45,16 L60,26 L75,14 L90,24 L105,12 L120,22 L135,14 L150,25 L165,16 L180,28 L195,18 L210,30 L225,20 L240,32 L255,22 L270,34 L285,24 L300,36 L315,26 L330,38 L345,28 L360,40 L375,30 L390,42 L405,32 L420,44 L435,34 L450,45 L465,35 L480,46 L495,36 L510,48 L525,38 L540,49 L555,39 L570,50 L585,40 L600,52 L615,42 L630,53 L645,43 L660,54 L675,44 L690,55 L705,45 L720,55 L735,46 L750,54 L765,44 L780,52 L795,42 L810,50 L825,40 L840,48 L855,38 L870,46 L885,36 L900,44 L915,34 L930,42 L945,32 L960,40 L975,30 L990,38 L1005,28 L1020,36 L1035,26 L1050,34 L1065,24 L1080,32 L1095,22 L1110,30 L1125,20 L1140,28 L1155,18 L1170,26 L1185,16 L1200,24 L1215,14 L1230,22 L1245,12 L1260,20 L1275,10 L1290,18 L1305,8 L1320,16 L1335,6 L1350,14 L1365,4 L1380,12 L1395,2 L1410,10 L1425,2 L1440,8 L1440,60 L0,60 Z"
          fill="#DCD6CD"
          transform="translate(0, -3)"
        />
        {/* Layer 2: Main foreground color (Experience BG #F5F0E8) */}
        <path
          d="M0,25 L15,18 L30,28 L45,16 L60,26 L75,14 L90,24 L105,12 L120,22 L135,14 L150,25 L165,16 L180,28 L195,18 L210,30 L225,20 L240,32 L255,22 L270,34 L285,24 L300,36 L315,26 L330,38 L345,28 L360,40 L375,30 L390,42 L405,32 L420,44 L435,34 L450,45 L465,35 L480,46 L495,36 L510,48 L525,38 L540,49 L555,39 L570,50 L585,40 L600,52 L615,42 L630,53 L645,43 L660,54 L675,44 L690,55 L705,45 L720,55 L735,46 L750,54 L765,44 L780,52 L795,42 L810,50 L825,40 L840,48 L855,38 L870,46 L885,36 L900,44 L915,34 L930,42 L945,32 L960,40 L975,30 L990,38 L1005,28 L1020,36 L1035,26 L1050,34 L1065,24 L1080,32 L1095,22 L1110,30 L1125,20 L1140,28 L1155,18 L1170,26 L1185,16 L1200,24 L1215,14 L1230,22 L1245,12 L1260,20 L1275,10 L1290,18 L1305,8 L1320,16 L1335,6 L1350,14 L1365,4 L1380,12 L1395,2 L1410,10 L1425,2 L1440,8 L1440,60 L0,60 Z"
          fill="#F5F0E8"
        />
      </svg>
    </section>
  );
}
