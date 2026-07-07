"use client";

import { motion } from "framer-motion";

const cards = [
  {
    number: "01",
    title: "CELEBRATE",
    body: "Elevating offline curation from a side hustle into a respected, monetizable discipline.",
    bg: "#F5F0E8",
    textColor: "#1A1A1A",
    numberColor: "#FF2B2B",
    hoverBorder: "#FF2B2B",
  },
  {
    number: "02",
    title: "ENGAGE",
    body: "Providing top subcultures their own physical micro-neighborhoods to program, own, and run live.",
    bg: "#FF2B2B",
    textColor: "#FFFFFF",
    numberColor: "rgba(255,255,255,0.3)",
    hoverBorder: "#FF2B2B",
  },
  {
    number: "03",
    title: "THRIVE",
    body: "Building the commercial infrastructure and corporate networks required to turn hosting into a viable career.",
    bg: "#1A1A1A",
    textColor: "#FFFFFF",
    numberColor: "#f2af29",
    hoverBorder: "#f2af29",
  },
];

export default function SolutionSection() {
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
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body font-bold text-xs sm:text-sm uppercase tracking-wider text-[#FF2B2B] mb-4"
        >
          ✦ THE SOLUTION
        </motion.p>

        {/* Header Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
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
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-[#555] text-base sm:text-lg leading-relaxed self-end"
          >
            This isn’t a trade show, and it’s definitely not a corporate conference. For one weekend across three cities, we are building a dedicated ecosystem where real-world curation meets commercial viability.
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
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{
                opacity: { duration: 0.6, delay: 0.15 * i },
                y: { type: "spring", stiffness: 400, damping: 20, delay: 0.15 * i },
                scale: { type: "spring", stiffness: 400, damping: 20 }
              }}
              className="relative rounded-2xl p-8 sm:p-10 overflow-hidden transition-all duration-150 hover:shadow-2xl cursor-default border-2 border-transparent shadow-md min-h-[260px] flex flex-col justify-start"
              style={{ background: card.bg, color: card.textColor }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = card.hoverBorder;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "transparent";
              }}
            >
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
