"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PartnerHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 60;
      const y = (e.clientY / window.innerHeight - 0.5) * 60;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScrollToForm = () => {
    const el = document.getElementById("partner-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="partner-hero"
      className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#FF2B2B", paddingTop: 100, paddingBottom: 100 }}
    >
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: mousePos.x * 0.8, y: mousePos.y * 0.8 }}
          transition={{ type: "spring", stiffness: 40, damping: 20 }}
          className="absolute inset-0"
        >
          <div className="orb orb-red" />
        </motion.div>
        <motion.div
          animate={{ x: mousePos.x * -1.2, y: mousePos.y * -1.2 }}
          transition={{ type: "spring", stiffness: 45, damping: 22 }}
          className="absolute inset-0"
        >
          <div className="orb orb-purple" />
        </motion.div>
        <motion.div
          animate={{ x: mousePos.x * 1.5, y: mousePos.y * 1.5 }}
          transition={{ type: "spring", stiffness: 50, damping: 25 }}
          className="absolute inset-0"
        >
          <div className="orb orb-orange" />
        </motion.div>
        <motion.div
          animate={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5 }}
          transition={{ type: "spring", stiffness: 35, damping: 18 }}
          className="absolute inset-0"
        >
          <div className="orb orb-green" />
        </motion.div>
        <motion.div
          animate={{ x: mousePos.x * 1.0, y: mousePos.y * -1.0 }}
          transition={{ type: "spring", stiffness: 30, damping: 15 }}
          className="absolute inset-0"
        >
          <div className="orb orb-blue" />
        </motion.div>
      </div>

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Main Content */}
      <div className="text-center relative z-10 max-w-4xl px-6 flex flex-col items-center">
        {/* Floating Date Badge */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 0, y: 0, rotate: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: [0, 4, -4, 0],
              y: [0, -3, 3, 0],
              rotate: 0
            }}
            transition={{
              delay: 0.5,
              x: {
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut"
              },
              y: {
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }
            }}
            className="flex items-center justify-center bg-[#f2af29] border-[2px] border-[#1A1A1A] rounded-xl px-6 py-2 select-none"
            style={{
              boxShadow: "2px 2px 0px #1A1A1A",
            }}
          >
            <span className="font-display text-[10px] font-black text-[#0D0D0D] uppercase tracking-wider">
              HAPPENING NOVEMBER 2026
            </span>
          </motion.div>
        </div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-body text-[#F5F0E8] uppercase"
          style={{
            fontSize: 11,
            letterSpacing: "0.2em",
            marginBottom: 28,
          }}
        >
          DELHI &nbsp;·&nbsp; MUMBAI &nbsp;·&nbsp; BANGALORE &nbsp;·&nbsp; PUNE
        </motion.p>

        {/* H1 Headline */}
        <h1
          className="font-display leading-[0.95] text-white uppercase text-center select-none"
          style={{
            fontSize: "clamp(36px, 5.5vw, 68px)",
            letterSpacing: "0.02em",
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="block"
          >
            LET'S MAKE THE
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="block text-[#f2af29]"
          >
            OFFLINE ECONOMY
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="block text-white"
          >
            SUSTAINABLE.
          </motion.span>
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="font-body text-[#F5F0E8] max-w-[600px] leading-relaxed opacity-95"
          style={{
            fontSize: "clamp(16px, 1.8vw, 22px)",
            marginTop: 20,
          }}
        >
          Digital ads are expensive and forgotten in 24 hours. IRL Culture Fest puts your brand in the room with 150+ community leaders and thousands of their most loyal members — across four cities in November 2026.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center"
          style={{ marginTop: 48 }}
        >
          <button
            onClick={handleScrollToForm}
            className="w-full sm:w-auto bg-[#0D0D0D] text-white font-body text-base font-semibold px-8 py-3.5 rounded-full transition-all cursor-pointer hover:scale-104 hover:shadow-[0_0_24px_rgba(13,13,13,0.4)]"
          >
            Send Partnership Inquiry →
          </button>
          <a
            href="#"
            className="w-full sm:w-auto text-center border-2 border-white text-white bg-transparent font-body text-base font-semibold px-8 py-3 rounded-full transition-all hover:bg-white hover:text-[#FF2B2B]"
          >
            Download Deck
          </a>
        </motion.div>
      </div>

      {/* Powered by strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-20 left-6 font-[family-name:var(--font-space-grotesk)] text-xs text-white/80 z-20"
      >
        Powered by{" "}
        <a
          href="https://meetday.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-[#f2af29] transition-colors"
        >
          meetday.ai
        </a>
      </motion.div>

      {/* Torn Paper Divider → next section: OpportunitySection #F5F0E8 */}
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
          fill="#FF2B2B"
          transform="translate(0, -3)"
        />
        <path
          d="M0,25 L15,18 L30,28 L45,16 L60,26 L75,14 L90,24 L105,12 L120,22 L135,14 L150,25 L165,16 L180,28 L195,18 L210,30 L225,20 L240,32 L255,22 L270,34 L285,24 L300,36 L315,26 L330,38 L345,28 L360,40 L375,30 L390,42 L405,32 L420,44 L435,34 L450,45 L465,35 L480,46 L495,36 L510,48 L525,38 L540,49 L555,39 L570,50 L585,40 L600,52 L615,42 L630,53 L645,43 L660,54 L675,44 L690,55 L705,45 L720,55 L735,46 L750,54 L765,44 L780,52 L795,42 L810,50 L825,40 L840,48 L855,38 L870,46 L885,36 L900,44 L915,34 L930,42 L945,32 L960,40 L975,30 L990,38 L1005,28 L1020,36 L1035,26 L1050,34 L1065,24 L1080,32 L1095,22 L1110,30 L1125,20 L1140,28 L1155,18 L1170,26 L1185,16 L1200,24 L1215,14 L1230,22 L1245,12 L1260,20 L1275,10 L1290,18 L1305,8 L1320,16 L1335,6 L1350,14 L1365,4 L1380,12 L1395,2 L1410,10 L1425,2 L1440,8 L1440,60 L0,60 Z"
          fill="#F5F0E8"
        />
      </svg>
    </section>
  );
}
