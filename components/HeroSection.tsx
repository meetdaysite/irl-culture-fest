"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import DecorativeStar from "@/components/DecorativeStar";

// 10 card items from public/image-scroll
const cardPool = [
  { id: "1", image: "/image-scroll/pexels-bertellifotografia-15141482.jpg", label: "Supper Clubs", vertical: "Culinary & Bev", badge: "18+" },
  { id: "2", image: "/image-scroll/pexels-rdne-7335257.jpg", label: "Run Clubs", vertical: "Active Lifestyle", badge: "ACTIVE" },
  { id: "3", image: "/image-scroll/pexels-bertellifotografia-3856033.jpg", label: "Tactile Design", vertical: "Analog Arts", badge: "DESIGN" },
  { id: "4", image: "/image-scroll/6.webp", label: "Underground Sound", vertical: "Music Labels", badge: "LIVE" },
  { id: "5", image: "/image-scroll/5.webp", label: "Pet Meetups", vertical: "Pet Culture", badge: "PETS" },
  { id: "6", image: "/image-scroll/4.jpg", label: "Wellness Circles", vertical: "Mindfulness", badge: "WELLNESS" },
  { id: "7", image: "/image-scroll/2.webp", label: "Digital Detox", vertical: "Mindfulness", badge: "IRL" },
  { id: "8", image: "/image-scroll/12.webp", label: "Tactile Play", vertical: "Next-Gen Families", badge: "PLAY" },
  { id: "9", image: "/image-scroll/11.webp", label: "Independent Roasters", vertical: "Culinary & Bev", badge: "ROAST" },
  { id: "10", image: "/image-scroll/1.jpg", label: "Vinyl Listening", vertical: "Analog Arts", badge: "VINYL" },
];

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Maintain active cards for visible slots
  const [activeCards, setActiveCards] = useState([
    cardPool[0], // Slot 1: outermost left
    cardPool[1], // Slot 2: inner left
    cardPool[2], // Slot 3: center (largest)
    cardPool[3], // Slot 4: inner right
    cardPool[4], // Slot 5: outermost right
  ]);

  const [nextPoolIndex, setNextPoolIndex] = useState(5);

  // Responsive mobile listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
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
        next.shift(); // remove leftmost card
        next.push(cardPool[nextPoolIndex]); // add new card to the right
        return next;
      });
      setNextPoolIndex((prev) => (prev + 1) % cardPool.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered, nextPoolIndex]);

  // Compute dynamic slot styling configurations for the active cards remaining in the DOM
  const getSlotConfig = (slotIndex: number) => {
    if (isMobile) {
      // 3 visible slots mapped over the activeCards array (length 3 when active)
      switch (slotIndex) {
        case 0: // Left card
          return { x: "calc(-50% - 80%)", y: 15, scale: 0.92, rotate: -8, zIndex: 10, opacity: 1 };
        case 1: // Center card (focus)
          return { x: "-50%", y: 0, scale: 1.06, rotate: 0, zIndex: 20, opacity: 1 };
        case 2: // Right card
          return { x: "calc(-50% + 80%)", y: 15, scale: 0.92, rotate: 8, zIndex: 10, opacity: 1 };
        default:
          return { x: "-50%", y: 0, scale: 1, rotate: 0, zIndex: 0, opacity: 0 };
      }
    } else {
      // 5 visible slots mapped over the activeCards array (length 5 when active)
      switch (slotIndex) {
        case 0: // Outermost Left (brought closer to Slot 1 to make gap equal)
          return { x: "calc(-50% - 150%)", y: 35, scale: 0.86, rotate: -12, zIndex: 10, opacity: 0.9 };
        case 1: // Inner Left
          return { x: "calc(-50% - 80%)", y: 12, scale: 0.95, rotate: -6, zIndex: 20, opacity: 1 };
        case 2: // Center Card (largest)
          return { x: "-50%", y: -8, scale: 1.08, rotate: 0, zIndex: 30, opacity: 1 };
        case 3: // Inner Right
          return { x: "calc(-50% + 80%)", y: 12, scale: 0.95, rotate: 6, zIndex: 20, opacity: 1 };
        case 4: // Outermost Right (brought closer to Slot 3 to make gap equal)
          return { x: "calc(-50% + 150%)", y: 35, scale: 0.86, rotate: 12, zIndex: 10, opacity: 0.9 };
        default:
          return { x: "-50%", y: 0, scale: 1, rotate: 0, zIndex: 0, opacity: 0 };
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden"
      style={{ background: "#F5F0E8", paddingTop: 48, paddingBottom: 0 }}
    >
      {/* Decorative background stars */}
      <DecorativeStar size={170} color="#FF2B2B" opacity={0.1} top="70px" left="5%" spin spinDuration={45} />
      <DecorativeStar size={110} color="#f2af29" opacity={0.12} top="18%" right="4%" rotate={20} />
      <DecorativeStar size={60}  color="#1A1A1A" opacity={0.06} top="40%" left="3%" rotate={10} />
      <DecorativeStar size={130} color="#FF2B2B" opacity={0.08} bottom="25%" right="6%" spin spinDuration={35} />

      {/* Main Copy Area - Centered & Highly Spaced */}
      <div className="relative z-10 max-w-4xl px-6 w-full text-center mt-4 flex-1 flex flex-col justify-center items-center">
        {/* Compact Eyebrow Info Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4"
        >
          <span className="font-body text-xs sm:text-sm font-black text-[#FF2B2B] tracking-wider uppercase">
            November &amp; December 2026
          </span>
          <span className="hidden sm:inline text-[#1A1A1A]/20">|</span>
          <span className="font-body text-xs sm:text-sm font-black text-[#1A1A1A] tracking-wider uppercase">
            Delhi (Nov 28) | Pune (Dec 5) | Bangalore (Dec 12)
          </span>
        </motion.div>

        {/* Compact Headline */}
        <h1 className="font-display select-none flex flex-col items-center mb-2 max-w-3xl leading-[0.9] tracking-tight">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="block text-[#1A1A1A] font-black"
            style={{ fontSize: "clamp(30px, 4.5vw, 56px)" }}
          >
            PEOPLE ARE DONE
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="block text-[#FF2B2B] font-black"
            style={{ fontSize: "clamp(30px, 4.5vw, 56px)" }}
          >
            DOOMSCROLLING.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="block text-[#1A1A1A] font-black mt-1"
            style={{ fontSize: "clamp(30px, 4.5vw, 56px)" }}
          >
            THEY WANT TO FEEL
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="block text-[#FF2B2B] font-black"
            style={{ fontSize: "clamp(30px, 4.5vw, 56px)" }}
          >
            SOMETHING REAL.
          </motion.span>
        </h1>

        {/* Subhead & Compact Body Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="font-body text-[#1A1A1A] font-bold leading-snug mb-2 max-w-xl"
          style={{ fontSize: "clamp(14px, 1.2vw, 16px)" }}
        >
          Celebrating the IRL culture builders &amp; the ecosystem making it happen.
        </motion.p>

        {/*
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="font-body text-[#555] leading-relaxed mb-5 text-sm sm:text-base max-w-[560px]"
        >
          The internet spent a decade optimizing for digital creators, leaving physical community hosts completely invisible. Meanwhile, a premium audience is actively demanding highly curated, offline experiences. We are bridging that gap to make the offline economy sustainable.
        </motion.p>
        */}

        {/* Compact CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-3 w-full mb-4"
        >
          <Link
            href="#passes"
            className="bg-[#FF2B2B] text-white hover:bg-[#1A1A1A] font-body font-black uppercase text-sm tracking-wider px-8 py-3 rounded-full border-2 border-transparent transition-all hover:scale-105 shadow-[4px_4px_0px_#1A1A1A] cursor-pointer text-center w-full sm:w-auto"
          >
            Secure Your Pass
          </Link>
          <Link
            href="#contact"
            className="border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white font-body font-black uppercase text-sm tracking-wider px-8 py-3 rounded-full transition-all hover:scale-105 cursor-pointer text-center w-full sm:w-auto"
          >
            Partner With Us
          </Link>
        </motion.div>
      </div>

      {/* Horizontal Carousel Shift fanned cards container */}
      <div
        className="relative w-full flex justify-center items-end z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ height: "300px", marginTop: "30px", marginBottom: "-10px" }}
      >
        <div className="relative w-full max-w-[1400px] h-full overflow-visible">
          <AnimatePresence initial={false}>
            {activeCards.map((card, i) => {
              const slotConfig = getSlotConfig(i);

              return (
                <motion.div
                  key={card.id}
                  initial={
                    isMobile
                      ? { x: "calc(-50% + 180%)", y: 50, scale: 0.75, rotate: 18, opacity: 0, zIndex: 0 }
                      : { x: "calc(-50% + 240%)", y: 65, scale: 0.75, rotate: 18, opacity: 0, zIndex: 0 }
                  }
                  animate={{
                    x: slotConfig.x,
                    y: slotConfig.y,
                    scale: slotConfig.scale,
                    rotate: slotConfig.rotate,
                    opacity: slotConfig.opacity,
                    zIndex: slotConfig.zIndex,
                  }}
                  exit={
                    isMobile
                      ? { x: "calc(-50% - 180%)", y: 50, scale: 0.75, rotate: -18, opacity: 0, zIndex: 0 }
                      : { x: "calc(-50% - 240%)", y: 65, scale: 0.75, rotate: -18, opacity: 0, zIndex: 0 }
                  }
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    left: "50%",
                    transformOrigin: "bottom center",
                    background: "#FFFFFF",
                  }}
                  className="w-[170px] sm:w-[210px] md:w-[245px] aspect-[1/1.22] rounded-t-[22px] overflow-hidden border-2 border-[#1A1A1A] border-b-0 flex flex-col justify-between shadow-2xl transition-all"
                >
                  {/* Floating Yellow Badge over Image */}
                  <span
                    className="absolute top-3.5 right-3.5 z-20 bg-[#f2af29] text-[#1A1A1A] border-2 border-[#1A1A1A] rounded-full px-2.5 py-0.5 font-display font-black text-[9px] sm:text-[10px] uppercase tracking-wider shadow-[2px_2px_0px_#1A1A1A]"
                  >
                    {card.badge}
                  </span>

                  {/* Image shifted all the way to the top */}
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

                  {/* Bottom title block */}
                  <div
                    className="px-3.5 py-2.5 border-t-2 border-[#1A1A1A] flex flex-col justify-center min-h-[56px] bg-white text-[#1A1A1A]"
                  >
                    <span className="font-display font-black text-[12px] sm:text-[14px] uppercase tracking-wide truncate">
                      {card.label}
                    </span>
                    <span className="font-body text-[8px] uppercase tracking-widest block font-bold text-[#FF2B2B] truncate mt-0.5">
                      {card.vertical}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
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
          zIndex: 3,
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
