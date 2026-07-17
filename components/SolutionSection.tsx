"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const steps = [
  {
    number: "01",
    label: "CELEBRATE",
    desc: "Elevating offline curation from a side hustle into a respected, monetizable discipline.",
  },
  {
    number: "02",
    label: "ENGAGE",
    desc: "Providing top subcultures their own physical micro-neighborhoods to program, own, and run live.",
  },
  {
    number: "03",
    label: "THRIVE",
    desc: "Building the commercial infrastructure and corporate networks required to turn hosting into a viable career.",
  },
];

export default function SolutionSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % 3;
        if (next === 0) {
          // Immediately highlight the first step
          setHighlightedIndex(0);
        } else {
          // Delay highlighting node 2 & 3 until line reaches them (450ms)
          setTimeout(() => {
            setHighlightedIndex(next);
          }, 450);
        }
        return next;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNodeClick = (idx: number) => {
    setActiveIndex(idx);
    setHighlightedIndex(idx);
  };

  return (
    <section
      id="solution"
      className="relative overflow-hidden"
      style={{ background: "#0D0D0D", paddingTop: 80, paddingBottom: 60 }}
    >
      <div
        className="mx-auto relative z-[2]"
        style={{ maxWidth: 1200, paddingLeft: 48, paddingRight: 48 }}
      >
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
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
          <div className="max-w-[640px] text-left">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-[#F5F0E8] leading-none mb-3"
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
              className="font-body text-[#FF2B2B] uppercase font-bold text-xs tracking-wider"
            >
              THE PHYSICAL HOME OF INDIA'S OFFLINE MOVEMENT.
            </motion.p>
          </div>

          {/* Cards container */}
          <div className="flex items-center gap-3 sm:gap-4 self-start lg:self-center pr-2">
            {/* Solution Image Card */}
            <motion.div
              animate={{ rotate: 8 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative bg-white p-1.5 rounded-xl border border-black shadow-[4px_4px_0px_#FF2B2B] w-[150px] sm:w-[200px] flex-shrink-0 cursor-pointer"
            >
              {/* Tape graphic */}
              <div
                className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-2.5 bg-[#FF2B2B]/60 backdrop-blur-[0.5px] border border-black/5 rotate-[-2deg] z-30"
                style={{
                  clipPath: "polygon(5% 5%, 95% 10%, 98% 90%, 2% 95%)",
                }}
              />
              <div className="overflow-hidden rounded-lg w-full h-auto aspect-[3/4]">
                <img
                  src="/images/solution.png"
                  alt="Solution"
                  className="w-full h-full object-cover scale-[1.15]"
                />
              </div>
            </motion.div>

            {/* Logo Card */}
            <motion.div
              animate={{ rotate: -8 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative bg-white p-2 rounded-xl border border-black shadow-[4px_4px_0px_#FF2B2B] w-[140px] sm:w-[190px] aspect-[4/3] flex-shrink-0 flex items-center justify-center cursor-pointer -top-8 sm:-top-12"
            >
              {/* Tape graphic */}
              <div
                className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-2.5 bg-[#FF2B2B]/60 backdrop-blur-[0.5px] border border-black/5 rotate-[2deg] z-30"
                style={{
                  clipPath: "polygon(5% 5%, 95% 10%, 98% 90%, 2% 95%)",
                }}
              />
              <img
                src="/logo.svg"
                alt="IRL Logo"
                className="w-[92%] h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* Connected Timeline */}
        <div className="relative mt-20 mb-20">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-[28px] left-[16.66%] w-[66.66%] h-[2px] bg-white/10 z-0">
            <motion.div
              animate={{
                width: activeIndex === 0 ? "0%" : activeIndex === 1 ? "50%" : "100%",
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="h-full bg-[#FF2B2B]"
            />
          </div>

          {/* Connecting Line (Mobile only) */}
          <div className="md:hidden absolute left-[28px] top-6 bottom-6 w-[2px] bg-white/10 z-0">
            <motion.div
              animate={{
                height: activeIndex === 0 ? "0%" : activeIndex === 1 ? "50%" : "100%",
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full bg-[#FF2B2B]"
            />
          </div>

          {/* Steps list */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12 relative z-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {steps.map((step, idx) => {
              const isHighlighted = highlightedIndex === idx;

              return (
                <div
                  key={step.number}
                  className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-4 relative animate-scale-text cursor-pointer select-none"
                  onMouseEnter={() => {
                    setActiveIndex(idx);
                    setHighlightedIndex(idx);
                  }}
                  onClick={() => handleNodeClick(idx)}
                >
                  {/* Circular Node */}
                  <motion.div
                    animate={{
                      scale: isHighlighted ? 1.2 : 1.0,
                      backgroundColor: isHighlighted ? "#FF2B2B" : "#F5F0E8",
                      color: isHighlighted ? "#F5F0E8" : "#FF2B2B",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                    }}
                    className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center font-display text-lg font-bold border-2 border-black relative z-10 shadow-lg cursor-pointer"
                  >
                    {step.number}
                  </motion.div>

                  {/* Content (Label & Desc) */}
                  <motion.div
                    animate={{
                      scale: isHighlighted ? 1.05 : 1.0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                    }}
                    className="pt-1.5 md:pt-0 origin-top md:origin-center"
                  >
                    <motion.h3
                      animate={{
                        color: isHighlighted ? "#FFFFFF" : "rgba(255, 255, 255, 0.6)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="font-body font-bold text-lg md:text-xl uppercase tracking-wider mb-2"
                    >
                      {step.label}
                    </motion.h3>
                    <motion.p
                      animate={{
                        color: isHighlighted ? "#F5F0E8" : "#8C8C8C",
                      }}
                      transition={{ duration: 0.3 }}
                      className="font-body text-sm md:text-base leading-relaxed max-w-xs md:max-w-none"
                    >
                      {step.desc}
                    </motion.p>
                  </motion.div>
                </div>
              );
            })}
          </div>
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
        {/* Layer 1: Underlay shadow */}
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
