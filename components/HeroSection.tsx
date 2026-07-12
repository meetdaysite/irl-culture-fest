"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import DecorativeStar from "@/components/DecorativeStar";

// Subculture card items from public/images/subculture
const cardPool = [
  { id: "1", image: "/images/subculture/cullinary-and-beverages.webp", label: "Culinary & Beverage", vertical: "IRL FESTIVAL", badge: "CULINARY" },
  { id: "2", image: "/images/subculture/active-lifestyle.png", label: "Active Lifestyle", vertical: "IRL FESTIVAL", badge: "ACTIVE" },
  { id: "3", image: "/images/subculture/independent-sound.webp", label: "Independent Sound", vertical: "IRL FESTIVAL", badge: "MUSIC" },
  { id: "4", image: "/images/subculture/mindfullness.webp", label: "Mindfulness & Wellbeing", vertical: "IRL FESTIVAL", badge: "WELLNESS" },
  { id: "5", image: "/images/subculture/analog-art.webp", label: "Analog Arts & Culture", vertical: "IRL FESTIVAL", badge: "ART" },
  { id: "6", image: "/images/subculture/pet-culture.webp", label: "Pet Culture", vertical: "IRL FESTIVAL", badge: "PETS" },
  { id: "7", image: "/images/subculture/next-gen-families.webp", label: "Next-Gen Families", vertical: "IRL FESTIVAL", badge: "PLAY" },
  { id: "8", image: "/images/subculture/slow-travel.webp", label: "Slow Travel", vertical: "IRL FESTIVAL", badge: "TRAVEL" },
];

const cities = [
  { city: "Delhi", day: "28", month: "NOV", bg: "#FF2B2B", text: "#FFFFFF" },
  { city: "Mumbai", day: "05", month: "DEC", bg: "#FFFFFF", text: "#1A1A1A" },
  { city: "Bangalore", day: "12", month: "DEC", bg: "#f2af29", text: "#1A1A1A" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const ticketVariants = {
  hidden: { opacity: 0, x: 60, rotateY: 90 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      type: "spring" as const,
      stiffness: 110,
      damping: 14
    }
  },
};

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Maintain active cards for visible slots
  const [activeCards, setActiveCards] = useState([
    cardPool[0],
    cardPool[1],
    cardPool[2],
    cardPool[3],
    cardPool[4],
  ]);

  const [nextPoolIndex, setNextPoolIndex] = useState(5);

  // Responsive mobile listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint in Tailwind
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Conveyor shift animation loop (runs every 2 seconds unless hovered)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveCards((prev) => {
        const next = [...prev];
        next.shift(); // remove top/leftmost card
        next.push(cardPool[nextPoolIndex]); // add new card to the end/bottom
        return next;
      });
      setNextPoolIndex((prev) => (prev + 1) % cardPool.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered, nextPoolIndex]);

  // Compute dynamic slot styling configurations for the active cards remaining in the DOM
  // Desktop: circular fan pivoting off the right edge (X_c = right edge, Y_c = middle)
  const getSlotConfig = (slotIndex: number) => {
    if (isMobile) {
      // Mobile Flat Fallback: 3 visible slots, W=170px, equal gaps edge-to-edge
      switch (slotIndex) {
        case 0:
          return { x: "calc(-45vw)", y: 15, scale: 0.92, rotate: -8, zIndex: 10, opacity: 0.9 };
        case 1:
          return { x: "calc(-50%)", y: 0, scale: 1.06, rotate: 0, zIndex: 20, opacity: 1 };
        case 2:
          return { x: "calc(45vw - 170px)", y: 15, scale: 0.92, rotate: 8, zIndex: 10, opacity: 0.9 };
        default:
          return { x: "calc(-50%)", y: 0, scale: 1, rotate: 0, zIndex: 0, opacity: 0 };
      }
    } else {
      // Desktop Radial Math: 5 cards arranged on a circle
      const R = 440;
      const W = 220;
      const H = 270;
      const Y_c = 250;

      // Calculate angle relative to center-left (180deg)
      const alphaDeg = (slotIndex - 2) * 16; // Angles: -32, -16, 0, 16, 32
      const alphaRad = (alphaDeg * Math.PI) / 180;

      const rightVal = R * Math.cos(alphaRad) - W / 2;
      const yVal = R * Math.sin(alphaRad);
      const topVal = Y_c + yVal - H / 2;

      return {
        right: `${rightVal}px`,
        top: `${topVal}px`,
        scale: 1 - Math.abs(slotIndex - 2) * 0.08,
        rotate: alphaDeg,
        zIndex: 30 - Math.abs(slotIndex - 2) * 10,
        opacity: 1 - Math.abs(slotIndex - 2) * 0.05,
      };
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden"
      style={{ background: "#F5F0E8", paddingTop: 90, paddingBottom: 0 }}
    >
      {/* Decorative background stars */}
      <DecorativeStar size={170} color="#FF2B2B" opacity={0.1} top="70px" left="5%" spin spinDuration={45} />
      <DecorativeStar size={110} color="#f2af29" opacity={0.12} top="18%" right="4%" rotate={20} />
      <DecorativeStar size={60} color="#1A1A1A" opacity={0.06} top="40%" left="3%" rotate={10} />
      <DecorativeStar size={130} color="#FF2B2B" opacity={0.08} bottom="25%" right="6%" spin spinDuration={35} />

      {/* Main Restructured Grid */}
      <div className="relative z-10 max-w-7xl px-8 mx-auto w-full mt-6 mb-12 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

        {/* Left Column: Copy Area (7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start text-left">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block font-body text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border-2 border-[#FF2B2B] text-[#FF2B2B] mb-6"
          >
            India's first IRL Festival
          </motion.div>

          {/* Compact Headline (Celebrating the IRL...) */}
          <h1 className="font-display select-none flex flex-col items-start mb-6 max-w-4xl leading-[0.9] tracking-tight text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="block text-[#1A1A1A] font-black"
              style={{ fontSize: "clamp(30px, 4.5vw, 56px)" }}
            >
              CELEBRATING THE
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="block text-[#FF2B2B] font-black"
              style={{ fontSize: "clamp(30px, 4.5vw, 56px)" }}
            >
              IRL CULTURE BUILDERS
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="block text-[#1A1A1A] font-black mt-1"
              style={{ fontSize: "clamp(30px, 4.5vw, 56px)" }}
            >
              &amp; THE ECOSYSTEM MAKING IT HAPPEN.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="block text-[#FF2B2B] font-black"
              style={{ fontSize: "clamp(30px, 4.5vw, 56px)" }}
            >

            </motion.span>
          </h1>

          {/* Subhead & Compact Body Paragraph (People are done doomscrolling...) */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="font-body text-[#1A1A1A] font-bold leading-snug mb-8 max-w-xl text-left"
            style={{ fontSize: "clamp(14px, 1.2vw, 16px)" }}
          >
            People are done doomscrolling. They want to feel something real.
          </motion.p>

          {/* Compact CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="flex flex-wrap justify-start items-center gap-3 w-full"
          >
            <Link
              href="#contact"
              className="bg-[#FF2B2B] text-white hover:bg-[#1A1A1A] font-body font-black uppercase text-sm tracking-wider px-8 py-3 rounded-full border-2 border-transparent transition-all hover:scale-105 shadow-[4px_4px_0px_#1A1A1A] cursor-pointer text-center w-full sm:w-auto"
            >
              Partner With Us
            </Link>
            {/* <Link
              href="#contact"
              className="border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white font-body font-black uppercase text-sm tracking-wider px-8 py-3 rounded-full transition-all hover:scale-105 cursor-pointer text-center w-full sm:w-auto"
            >
              Partner With Us
            </Link> */}
          </motion.div>
        </div>

        {/* Right Column: Ticket Stub City List & Mobile Fallback Cards (5 cols on desktop) */}
        <div className="lg:col-span-5 w-full flex flex-col items-center lg:items-end justify-start gap-8 relative z-20 lg:-mt-12">

          {/* Staggered City Tickets list */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full justify-center lg:justify-end items-center lg:items-end overflow-visible"
          >
            {cities.map((item) => (
              <motion.div
                key={item.city}
                variants={ticketVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center border-2 border-[#1A1A1A] rounded-xl overflow-hidden shadow-[4px_4px_0px_#1A1A1A] w-[240px] bg-white transition-shadow"
                style={{ background: item.bg, color: item.text }}
              >
                {/* Left Date Block */}
                <div
                  className="flex flex-col items-center justify-center px-4 py-2.5 border-r-2 border-dashed border-[#1A1A1A] min-w-[72px]"
                  style={{ borderColor: item.text }}
                >
                  <span className="font-display text-xl font-black leading-none">{item.day}</span>
                  <span className="font-body text-[9px] font-black tracking-wider uppercase mt-1 opacity-90">{item.month}</span>
                </div>
                {/* Right City Block */}
                <div className="px-4 py-2.5 flex-1 flex flex-col justify-center text-left">
                  <span className="font-display text-base font-black tracking-wide uppercase leading-none">{item.city}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Fallback Card Stack (visible only on mobile) */}
          {isMobile && (
            <div
              className="relative w-full flex justify-center items-end mt-12 overflow-visible"
              style={{ height: "260px" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative w-full h-full overflow-visible">
                <AnimatePresence initial={false}>
                  {activeCards.slice(0, 3).map((card, i) => {
                    const slotConfig = getSlotConfig(i);

                    return (
                      <motion.div
                        key={card.id}
                        initial={{ x: "calc(-50% + 180%)", y: 50, scale: 0.75, rotate: 18, opacity: 0, zIndex: 0 }}
                        animate={{
                          x: slotConfig.x,
                          y: slotConfig.y ?? 0,
                          scale: slotConfig.scale,
                          rotate: slotConfig.rotate,
                          opacity: slotConfig.opacity ?? 1,
                          zIndex: slotConfig.zIndex,
                        }}
                        exit={{ x: "calc(-50% - 180%)", y: 50, scale: 0.75, rotate: -18, opacity: 0, zIndex: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        style={{
                          position: "absolute",
                          left: "50%",
                          transformOrigin: "bottom center",
                          background: "#FFFFFF",
                        }}
                        className="w-[160px] sm:w-[190px] aspect-[1/1.22] rounded-[18px] overflow-hidden border-2 border-[#1A1A1A] flex flex-col justify-between shadow-xl"
                      >
                        <div className="relative flex-1 overflow-hidden bg-white p-1.5">
                          <div className="w-full h-full rounded-t-[10px] overflow-hidden border border-[#1A1A1A]/10">
                            <img src={card.image} alt={card.label} className="w-full h-full object-cover" />
                          </div>
                        </div>
                        <div className="px-3 py-2 border-t-2 border-[#1A1A1A] min-h-[48px] bg-white text-[#1A1A1A] flex items-center text-left">
                          <span className="leading-tight">
                            <span className="font-display font-black text-[11px] sm:text-[12px] uppercase tracking-tight mr-1.5 inline">
                              {card.label}
                            </span>
                            <span className="font-body text-[7px] uppercase tracking-widest font-bold text-[#FF2B2B] inline whitespace-nowrap">
                              {card.badge}
                            </span>
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* Desktop Circular Fan Carousel (Absolute positioned relative to centered content grid) */}
          {!isMobile && (
            <div
              className="absolute right-[6px] lg:right-[0px] xl:right-[-12px] top-1/2 -translate-y-[45%] w-[480px] h-[500px] pointer-events-none overflow-visible z-10 origin-right scale-[0.8] xl:scale-100 transition-all duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative w-full h-full overflow-visible">
                <AnimatePresence initial={false}>
                  {activeCards.map((card, i) => {
                    const slotConfig = getSlotConfig(i);

                    // Entrance and exit configurations centered along the 45deg/ -45deg radial trajectories
                    const R = 440;
                    const W = 220;
                    const H = 270;
                    const Y_c = 250;

                    const enterRight = R * Math.cos((45 * Math.PI) / 180) - W / 2;
                    const enterTop = Y_c + R * Math.sin((45 * Math.PI) / 180) - H / 2;

                    const exitRight = R * Math.cos((-45 * Math.PI) / 180) - W / 2;
                    const exitTop = Y_c + R * Math.sin((-45 * Math.PI) / 180) - H / 2;

                    return (
                      <motion.div
                        key={card.id}
                        initial={{
                          right: `${enterRight}px`,
                          top: `${enterTop}px`,
                          scale: 0.8,
                          rotate: 45,
                          opacity: 0,
                          zIndex: 0,
                        }}
                        animate={{
                          right: slotConfig.right,
                          top: slotConfig.top,
                          scale: slotConfig.scale,
                          rotate: slotConfig.rotate,
                          opacity: slotConfig.opacity,
                          zIndex: slotConfig.zIndex,
                        }}
                        exit={{
                          right: `${exitRight}px`,
                          top: `${exitTop}px`,
                          scale: 0.8,
                          rotate: -45,
                          opacity: 0,
                          zIndex: 0,
                        }}
                        transition={{
                          duration: 0.6,
                          ease: "easeInOut",
                        }}
                        style={{
                          position: "absolute",
                          transformOrigin: "bottom center",
                          background: "#FFFFFF",
                          pointerEvents: "auto", // enable interaction (hover pause) on individual cards
                        }}
                        className="w-[220px] h-[270px] rounded-[22px] overflow-hidden border-2 border-[#1A1A1A] flex flex-col justify-between shadow-2xl transition-shadow hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.3)] cursor-pointer"
                      >
                        {/* Image */}
                        <div className="relative flex-1 overflow-hidden bg-white p-2">
                          <div className="w-full h-full rounded-t-[14px] overflow-hidden border border-[#1A1A1A]/10">
                            <img
                              src={card.image}
                              alt={card.label}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {/* Card Label */}
                        <div className="px-3.5 py-2 border-t-2 border-[#1A1A1A] min-h-[56px] bg-white text-[#1A1A1A] flex items-center text-left">
                          <span className="leading-snug">
                            <span className="font-display font-black text-[13px] uppercase tracking-tight mr-2 inline">
                              {card.label}
                            </span>
                            <span className="font-body text-[8px] uppercase tracking-widest font-bold text-[#FF2B2B] inline whitespace-nowrap">
                              {card.badge}
                            </span>
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Torn Paper Divider -> StatsBar #FF2B2B */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100%",
          height: "60px",
          position: "relative",
          bottom: "-2px",
          left: 0,
          pointerEvents: "none",
          zIndex: 40, // overlay above cards so they clip cleanly under this boundary
        }}
      >
        <path
          d="M0,25 L15,18 L30,28 L45,16 L60,26 L75,14 L90,24 L105,12 L120,22 L135,14 L150,25 L165,16 L180,28 L195,18 L210,30 L225,20 L240,32 L255,22 L270,34 L285,24 L300,36 L315,26 L330,38 L345,28 L360,40 L375,30 L390,42 L405,32 L420,44 L435,34 L450,45 L465,35 L480,46 L495,36 L510,48 L525,38 L540,49 L555,39 L570,50 L585,40 L600,52 L615,42 L630,53 L645,43 L660,54 L675,44 L690,55 L705,45 L720,55 L735,46 L750,54 L765,44 L780,52 L795,42 L810,50 L825,40 L840,48 L855,38 L870,46 L885,36 L900,44 L915,34 L930,42 L945,32 L960,40 L975,30 L990,38 L1005,28 L1020,36 L1035,26 L1050,34 L1065,24 L1080,32 L1095,22 L1110,30 L1125,20 L1140,28 L1155,18 L1170,26 L1185,16 L1200,24 L1215,14 L1230,22 L1245,12 L1260,20 L1275,10 L1290,18 L1305,8 L1320,16 L1335,6 L1350,14 L1365,4 L1380,12 L1395,2 L1410,10 L1425,2 L1440,8 L1440,60 L0,60 Z"
          fill="#DCD6CD"
          transform="translate(0, -3)"
        />
        <path
          d="M0,25 L15,18 L30,28 L45,16 L60,26 L75,14 L90,24 L105,12 L120,22 L135,14 L150,25 L165,16 L180,28 L195,18 L210,30 L225,20 L240,32 L255,22 L270,34 L285,24 L300,36 L315,26 L330,38 L345,28 L360,40 L375,30 L390,42 L405,32 L420,44 L435,34 L450,45 L465,35 L480,46 L495,36 L510,48 L525,38 L540,49 L555,39 L570,50 L585,40 L600,52 L615,42 L630,53 L645,43 L660,54 L675,44 L690,55 L705,45 L720,55 L735,46 L750,54 L765,44 L780,52 L795,42 L810,50 L825,40 L840,48 L855,38 L870,46 L885,36 L900,44 L915,34 L930,42 L945,32 L960,40 L975,30 L990,38 L1005,28 L1020,36 L1035,26 L1050,34 L1065,24 L1080,32 L1095,22 L1110,30 L1125,20 L1140,28 L1155,18 L1170,26 L1185,16 L1200,24 L1215,14 L1230,22 L1245,12 L1260,20 L1275,10 L1290,18 L1305,8 L1320,16 L1335,6 L1350,14 L1365,4 L1380,12 L1395,2 L1410,10 L1425,2 L1440,8 L1440,60 L0,60 Z"
          fill="#FF2B2B"
        />
      </svg>
    </section>
  );
}
