"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DecorativeStar from "@/components/DecorativeStar";

const JaggedDivider = ({ color, top = false }: { color: string; top?: boolean }) => {
  const step = 15;
  const height = 12;
  const base = 25;

  let pathD = `M 0 ${base}`;
  for (let x = step; x <= 1440; x += step) {
    const isPeak = (x / step) % 2 !== 0;
    const y = isPeak ? (base - height) : base;
    pathD += ` L ${x} ${y}`;
  }
  pathD += ` L 1440 60 L 0 60 Z`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      style={{
        display: "block",
        width: "100%",
        height: "60px",
        position: "absolute",
        left: 0,
        pointerEvents: "none",
        zIndex: 20,
        ...(top ? { top: "-2px", transform: "rotate(180deg)" } : { bottom: "-2px" })
      }}
    >
      <path d={pathD} fill={color} />
    </svg>
  );
};

const podcastBrands = [
  { name: "Google", logo: "/images/podcast/gagaan-logos/Google.svg", url: "https://www.google.com" },
  { name: "Meta", logo: "/images/podcast/gagaan-logos/Meta.svg", url: "https://www.meta.com" },
  { name: "WPP", logo: "/images/podcast/gagaan-logos/WPP.svg", url: "https://www.wpp.com" },
  { name: "IPG", logo: "/images/podcast/gagaan-logos/IPG.svg", url: "https://www.interpublic.com" },
  { name: "OMG", logo: "/images/podcast/gagaan-logos/OMG.svg", url: "https://www.omnicommediagroup.com" },
  { name: "P&G", logo: "/images/podcast/gagaan-logos/PandG.svg", url: "https://www.pg.com" },
  { name: "Unilever", logo: "/images/podcast/gagaan-logos/Unilever.svg", url: "https://www.unilever.com" },
  { name: "Samsung", logo: "/images/podcast/gagaan-logos/Samsung.svg", url: "https://www.samsung.com" },
  { name: "Mercedes-Benz", logo: "/images/podcast/gagaan-logos/Mercedes-Benz.svg", url: "https://www.mercedes-benz.co.in" },
  { name: "Nestlé", logo: "/images/podcast/gagaan-logos/Nestle.svg", url: "https://www.nestle.com" },
  { name: "IBM", logo: "/images/podcast/gagaan-logos/IBM.svg", url: "https://www.ibm.com" },
  { name: "Microsoft", logo: "/images/podcast/gagaan-logos/Microsoft.svg", url: "https://www.microsoft.com" },
  { name: "Deloitte", logo: "/images/podcast/gagaan-logos/Deloitte.svg", url: "https://www.deloitte.com" },
  { name: "DLF", logo: "/images/podcast/gagaan-logos/DLF.svg", url: "https://www.dlf.in" },
  { name: "Volkswagen", logo: "/images/podcast/gagaan-logos/Volkswagen.svg", url: "https://www.volkswagen.com" },
  { name: "Yamaha", logo: "/images/podcast/gagaan-logos/Yamaha.svg", url: "https://www.yamaha.com" },
];

export default function PodcastPage() {
  const [copied, setCopied] = useState(false);
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [hoverBenefit, setHoverBenefit] = useState<number | null>(null);
  const [hoveredFormatCard, setHoveredFormatCard] = useState<number | null>(null);
  const [hoveredPillarCard, setHoveredPillarCard] = useState<number | null>(null);
  const [hoveredChapterCard, setHoveredChapterCard] = useState<number | null>(null);
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [hoveredProcessStep, setHoveredProcessStep] = useState<number | null>(null);

  useEffect(() => {
    if (hoverBenefit !== null) return;
    const interval = setInterval(() => {
      setActiveBenefit((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, [hoverBenefit]);

  useEffect(() => {
    if (hoveredProcessStep !== null) return;
    const interval = setInterval(() => {
      setActiveProcessStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, [hoveredProcessStep]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@meetday.ai");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&display=swap" rel="stylesheet" />
      <Navbar />
      <main className="bg-[#F5F0E8] text-[#1A1A1A] overflow-x-hidden min-h-screen">

        {/* 1. HERO SECTION */}
        <section id="hero" className="relative pt-12 pb-0 md:pt-16 md:pb-0 bg-[#FF2B2B] overflow-hidden">

          {/* Inner Cream Band with Jagged Paper Cut transitions */}
          <div className="relative bg-[#F5F0E8] text-[#1A1A1A] pt-16 pb-6 md:pt-20 md:pb-8 overflow-hidden">
            <JaggedDivider color="#FF2B2B" top />



            <DecorativeStar size={200} color="#FF2B2B" opacity={0.07} top="8%" right="8%" spin spinDuration={40} useStar4={true} />
            <DecorativeStar size={110} color="#f2af29" opacity={0.07} bottom="12%" left="6%" rotate={35} spin spinDuration={35} useStar4={true} />
            <DecorativeStar size={100} color="#FF2B2B" opacity={0.07} top="35%" left="20%" spin spinDuration={45} useStar4={true} />
            <DecorativeStar size={125} color="#f2af29" opacity={0.07} bottom="25%" right="18%" spin spinDuration={38} useStar4={true} />
            <DecorativeStar size={90} color="#FF2B2B" opacity={0.07} top="50%" right="40%" rotate={15} spin spinDuration={42} useStar4={true} />
            <DecorativeStar size={105} color="#f2af29" opacity={0.07} bottom="5%" left="45%" spin spinDuration={25} useStar4={true} />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                {/* Left Side: Content */}
                <div className="md:col-span-7 text-left">
                  {/* Superhead */}
                  <motion.span
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block font-body text-xs md:text-sm font-black uppercase tracking-widest px-4 py-1.5 rounded-full border-2 border-[#FF2B2B] text-[#FF2B2B] bg-[#FF2B2B]/5 mb-6"
                  >
                    ✦ LAUNCHING JULY 2026
                  </motion.span>

                  {/* Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="font-display leading-none tracking-tight text-[#1A1A1A] mb-6 text-[32px] sm:text-[44px] md:text-[56px] uppercase"
                  >
                    STORIES BEHIND THE PEOPLE <br className="hidden md:inline" />
                    BUILDING <span className="text-[#FF2B2B]"><br></br>OFFLINE CULTURE.</span>
                  </motion.h1>

                  {/* Subhead */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="font-body text-lg md:text-2xl text-black/80 max-w-2xl mb-10 font-medium"
                  >
                    An initiative to promote IRL culture in India.
                  </motion.p>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-start"
                  >
                    <button
                      onClick={() => {
                        const element = document.getElementById("collaborate");
                        if (element) element.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="font-body text-sm font-black uppercase tracking-wider py-4.5 px-10 rounded-full border-2 border-black bg-[#FF2B2B] text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                      style={{
                        boxShadow: "3px 4px 0px #1A1A1A",
                      }}
                    >
                      Pitch Your Story
                    </button>
                  </motion.div>
                </div>

                {/* Right Side: Image */}
                <div className="md:col-span-5 flex justify-center md:justify-end">
                  <div className="relative">
                    {/* Gagaan Podcast Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, delay: 0.25 }}
                      className="w-full max-w-[270px] sm:max-w-[320px] md:max-w-[360px] aspect-[4/5] rounded-2xl border-2 border-black overflow-hidden shadow-[6px_6px_0px_#1A1A1A] group cursor-pointer"
                    >
                      <img
                        src="/images/podcast/Gagaan podcast 2.png"
                        alt="Gagaan Podcast Host"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </motion.div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </section>

        {/* 2. THE MISSION SECTION */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-[#FF2B2B] text-white relative overflow-hidden">
          <JaggedDivider color="#F5F0E8" top />
          <DecorativeStar size={150} color="#FFFFFF" opacity={0.07} top="15%" left="4%" spin spinDuration={38} useStar4={true} />
          <DecorativeStar size={100} color="#f2af29" opacity={0.07} bottom="20%" right="45%" spin spinDuration={42} useStar4={true} />
          <DecorativeStar size={115} color="#FFFFFF" opacity={0.07} top="30%" right="10%" spin spinDuration={30} useStar4={true} />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

              {/* Left Column: Content */}
              <div className="md:col-span-7 text-left">
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-block font-body text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border-2 border-white text-white bg-white/10 mb-6"
                >
                  ✦ THE MISSION
                </motion.span>

                {/* Sentence 1: Separate, bigger, different color, no italics, upper+lower case */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="font-display leading-tight text-[#1A1A1A] text-2xl sm:text-3xl md:text-4xl mb-6"
                >
                  Urban Loneliness is <br></br>Quietly Rising.
                </motion.h2>

                {/* Remaining Sentences: Smaller, white text, no italics */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-body text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-semibold"
                >
                  Yet, thousands of community hosts are quietly creating corners where strangers become close friends. This podcast exists to honor their craft.
                </motion.p>
              </div>

              {/* Right Column: Mission Image */}
              <div className="md:col-span-5 flex justify-center md:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                  className="w-full max-w-[420px] h-[300px] overflow-hidden rounded-2xl border-2 border-black bg-transparent group cursor-pointer"
                  style={{ boxShadow: "6px 6px 0px #1A1A1A" }}
                >
                  <img
                    src="/images/podcast/mission.png"
                    alt="The Mission"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. OUR MANIFESTO TO HOSTS */}
        <section id="manifesto" className="bg-[#1A1A1A] relative overflow-hidden">
          <JaggedDivider color="#FF2B2B" top />

          <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[500px] md:min-h-[700px]">
            {/* Left Column: Text Stack */}
            <div
              className="bg-[#1A1A1A] flex flex-col justify-center items-start p-8 sm:p-12 md:py-16 md:pr-16 text-left relative overflow-hidden"
              style={{
                paddingLeft: "calc(max(1.5rem, 50vw - 576px))",
              }}
            >
              <DecorativeStar size={70} color="#FF2B2B" opacity={0.08} top="10%" right="10%" useStar4={true} />
              <DecorativeStar size={55} color="#f2af29" opacity={0.1} bottom="10%" left="5%" spin spinDuration={20} useStar4={true} />

              <span className="inline-block font-body text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border-2 border-[#f2af29] text-[#f2af29] mb-6">
                ✦ OUR MANIFESTO TO HOSTS
              </span>

              <p className="font-body text-sm sm:text-base md:text-lg leading-relaxed font-medium tracking-wide text-white/80 mb-8">
                You do not just host experiences.
                <span className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#f2af29] block mt-3 leading-none">
                  You sculpt belonging.
                </span>
              </p>

              {/* Red Conclusion Box */}
              <div
                className="w-full border-2 border-black rounded-2xl p-6 md:p-8 relative overflow-hidden text-white"
                style={{
                  background: "repeating-linear-gradient(-45deg, #FF2B2B, #FF2B2B 15px, #E52222 15px, #E52222 30px)",
                  boxShadow: "5px 5px 0px #000000",
                }}
              >
                <DecorativeStar size={60} color="#FFFFFF" opacity={0.15} bottom="-10px" right="-10px" useStar4={true} />
                <p className="font-body text-sm sm:text-base md:text-lg leading-relaxed font-medium tracking-wide text-white mb-6">
                  You build safe harbors that transform everyday urban survival into vibrant real-world connection.
                </p>
                <div
                  className="bg-white border-2 border-black rounded-xl p-4 w-full"
                  style={{ boxShadow: "4px 4px 0px 0px #1A1A1A" }}
                >
                  <p className="font-body text-sm sm:text-base md:text-lg leading-relaxed font-bold tracking-wide text-[#1A1A1A]">
                    We want to record, archive, and honor your story.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: The Polaroid Board */}
            <div
              className="bg-[#1A1A1A] flex flex-col justify-center items-center p-8 md:py-16 md:pl-16 min-h-[450px] md:min-h-0 relative"
              style={{
                paddingRight: "calc(max(1.5rem, 50vw - 576px))"
              }}
            >
              <DecorativeStar size={60} color="#FF2B2B" opacity={0.1} top="10%" left="10%" spin spinDuration={35} useStar4={true} />
              <DecorativeStar size={75} color="#f2af29" opacity={0.12} bottom="15%" right="10%" rotate={15} useStar4={true} />

              <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 md:gap-4 lg:gap-6 w-full max-w-2xl relative z-10">

                {/* Polaroid 1 (Left) */}
                <motion.div
                  initial={{ rotate: 4, y: 15 }}
                  whileInView={{ y: 0 }}
                  whileHover={{ scale: 1.1, rotate: 0, zIndex: 30 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="relative bg-white p-2.5 pb-6 sm:pb-8 rounded-xl w-[190px] sm:w-[260px] md:w-[240px] lg:w-[280px] aspect-[3/4] cursor-pointer group border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.4)] z-10"
                >
                  {/* Polaroid Tape Graphic */}
                  <div
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-22 h-6.5 bg-[#f2af29]/40 backdrop-blur-[0.5px] border border-black/5 rotate-[3deg] z-30"
                    style={{
                      clipPath: "polygon(2% 10%, 98% 5%, 95% 95%, 5% 90%)",
                    }}
                  />
                  <div className="w-full h-full overflow-hidden rounded bg-gray-100 border border-black/10">
                    <img
                      src="/images/podcast/manifesto-1.jpg"
                      alt="Manifesto 1"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </motion.div>

                {/* Polaroid 2 (Right) */}
                <motion.div
                  initial={{ rotate: -4, y: 15 }}
                  whileInView={{ y: 0 }}
                  whileHover={{ scale: 1.1, rotate: 0, zIndex: 30 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="relative bg-white p-2.5 pb-6 sm:pb-8 rounded-xl w-[190px] sm:w-[260px] md:w-[240px] lg:w-[280px] aspect-[3/4] cursor-pointer group border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.4)] z-20"
                >
                  {/* Polaroid Tape Graphic */}
                  <div
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-[#FF2B2B]/40 backdrop-blur-[0.5px] border border-black/5 rotate-[-3deg] z-30"
                    style={{
                      clipPath: "polygon(5% 5%, 95% 10%, 98% 90%, 2% 95%)",
                    }}
                  />
                  <div className="w-full h-full overflow-hidden rounded bg-gray-100 border border-black/10">
                    <img
                      src="/images/podcast/manifesto-2.png"
                      alt="Manifesto 2"
                      className="w-full h-full object-cover scale-[1.3] transition-transform duration-500 group-hover:scale-[1.4]"
                    />
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
          <JaggedDivider color="#F5F0E8" />
        </section>

        {/* 4. THE EXPERIENCE SECTION */}
        <section id="experience" className="pt-12 pb-24 md:pt-16 md:pb-32 bg-[#F5F0E8] relative overflow-hidden">
          <DecorativeStar size={105} color="#FF2B2B" opacity={0.07} top="40%" left="15%" spin spinDuration={44} useStar4={true} />
          <DecorativeStar size={120} color="#f2af29" opacity={0.07} bottom="35%" right="15%" spin spinDuration={36} useStar4={true} />
          <DecorativeStar size={95} color="#1A1A1A" opacity={0.07} top="15%" right="35%" spin spinDuration={25} useStar4={true} />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            {/* Floating Corner Cards (Aligned to Margins) */}
            <motion.div
              initial={{ rotate: -4, opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={hoveredFormatCard === 1 ? { y: 0, rotate: 0, scale: 1.05 } : { y: [0, -8, 0], rotate: -4, scale: 1 }}
              transition={{
                opacity: { duration: 0.5 },
                y: { repeat: hoveredFormatCard === 1 ? 0 : Infinity, duration: 4.2, ease: "easeInOut" }
              }}
              onMouseEnter={() => setHoveredFormatCard(1)}
              onMouseLeave={() => setHoveredFormatCard(null)}
              viewport={{ once: true }}
              className="absolute top-0 left-2 xl:left-4 hidden xl:block w-48 h-56 md:w-56 md:h-64 bg-white p-2.5 pb-6 border-2 border-black rounded-xl shadow-[4px_4px_0px_#1a1a1a] z-10 cursor-pointer group"
            >
              <div
                className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-[#f2af29]/40 backdrop-blur-[0.5px] border border-black/5 rotate-[-2deg] z-30"
                style={{
                  clipPath: "polygon(2% 10%, 98% 5%, 95% 95%, 5% 90%)",
                }}
              />
              <div className="w-full h-full overflow-hidden rounded bg-gray-100 border border-black/10">
                <img src="/images/podcast/format/20.png" alt="Format 20" className="w-full h-full object-cover scale-[1.25] transition-transform duration-500 group-hover:scale-[1.35]" />
              </div>
            </motion.div>

            <motion.div
              initial={{ rotate: 3, opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={hoveredFormatCard === 2 ? { y: 0, rotate: 0, scale: 1.05 } : { y: [0, -6, 0], rotate: 3, scale: 1 }}
              transition={{
                opacity: { duration: 0.5 },
                y: { repeat: hoveredFormatCard === 2 ? 0 : Infinity, duration: 4.8, ease: "easeInOut" }
              }}
              onMouseEnter={() => setHoveredFormatCard(2)}
              onMouseLeave={() => setHoveredFormatCard(null)}
              viewport={{ once: true }}
              className="absolute top-0 right-2 xl:right-4 hidden xl:block w-48 h-56 md:w-56 md:h-64 bg-white p-2.5 pb-6 border-2 border-black rounded-xl shadow-[4px_4px_0px_#1a1a1a] z-10 cursor-pointer group"
            >
              <div
                className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-[#FF2B2B]/40 backdrop-blur-[0.5px] border border-black/5 rotate-[3deg] z-30"
                style={{
                  clipPath: "polygon(5% 5%, 95% 10%, 98% 90%, 2% 95%)",
                }}
              />
              <div className="w-full h-full overflow-hidden rounded bg-gray-100 border border-black/10">
                <img src="/images/podcast/format/A platform that brands.png" alt="Format Brands" className="w-full h-full object-cover scale-[1.25] transition-transform duration-500 group-hover:scale-[1.35]" />
              </div>
            </motion.div>

            <motion.div
              initial={{ rotate: 4, opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={hoveredFormatCard === 3 ? { y: 0, rotate: 0, scale: 1.05 } : { y: [0, -7, 0], rotate: 4, scale: 1 }}
              transition={{
                opacity: { duration: 0.5 },
                y: { repeat: hoveredFormatCard === 3 ? 0 : Infinity, duration: 4.5, ease: "easeInOut" }
              }}
              onMouseEnter={() => setHoveredFormatCard(3)}
              onMouseLeave={() => setHoveredFormatCard(null)}
              viewport={{ once: true }}
              className="absolute bottom-0 left-2 xl:left-4 hidden xl:block w-48 h-56 md:w-56 md:h-64 bg-white p-2.5 pb-6 border-2 border-black rounded-xl shadow-[4px_4px_0px_#1a1a1a] z-10 cursor-pointer group"
            >
              <div
                className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-[#FF2B2B]/40 backdrop-blur-[0.5px] border border-black/5 rotate-[-3deg] z-30"
                style={{
                  clipPath: "polygon(2% 10%, 98% 5%, 95% 95%, 5% 90%)",
                }}
              />
              <div className="w-full h-full overflow-hidden rounded bg-gray-100 border border-black/10">
                <img src="/images/podcast/format/23.png" alt="Format 23" className="w-full h-full object-cover scale-[1.25] transition-transform duration-500 group-hover:scale-[1.35]" />
              </div>
            </motion.div>

            <motion.div
              initial={{ rotate: -3, opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={hoveredFormatCard === 4 ? { y: 0, rotate: 0, scale: 1.05 } : { y: [0, -9, 0], rotate: -3, scale: 1 }}
              transition={{
                opacity: { duration: 0.5 },
                y: { repeat: hoveredFormatCard === 4 ? 0 : Infinity, duration: 5.0, ease: "easeInOut" }
              }}
              onMouseEnter={() => setHoveredFormatCard(4)}
              onMouseLeave={() => setHoveredFormatCard(null)}
              viewport={{ once: true }}
              className="absolute bottom-0 right-2 xl:right-4 hidden xl:block w-48 h-56 md:w-56 md:h-64 bg-white p-2.5 pb-6 border-2 border-black rounded-xl shadow-[4px_4px_0px_#1a1a1a] z-10 cursor-pointer group"
            >
              <div
                className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-[#f2af29]/40 backdrop-blur-[0.5px] border border-black/5 rotate-[2deg] z-30"
                style={{
                  clipPath: "polygon(5% 5%, 95% 10%, 98% 90%, 2% 95%)",
                }}
              />
              <div className="w-full h-full overflow-hidden rounded bg-gray-100 border border-black/10">
                <img src="/images/podcast/format/21.png" alt="Format 21" className="w-full h-full object-cover scale-[1.25] transition-transform duration-500 group-hover:scale-[1.35]" />
              </div>
            </motion.div>
            <div className="text-center mb-16">
              <span className="inline-block font-body text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border-2 border-[#FF2B2B] text-[#FF2B2B] mb-4">
                ✦ THE FORMAT
              </span>
              <h2 className="font-display text-[#1A1A1A] leading-none mb-4" style={{ fontSize: "clamp(24px, 3.2vw, 42px)", letterSpacing: "0.01em" }}>
                The Podcast Experience
              </h2>
              <p className="font-body text-lg text-black/60 max-w-md mx-auto">
                We step away from performance scripts to uncover honest human truths on:
              </p>
            </div>

            <div className="flex flex-col gap-6 items-center max-w-xl mx-auto w-full relative z-20">
              {[
                {
                  title: "The Call to Build",
                  desc: "Why you answered the call to start your community, the early signs, and initial sparks.",
                  color: "#f2af29",
                },
                {
                  title: "The Invisible Disasters",
                  desc: "The hardest, unseen moments behind the scenes where things went completely sideways.",
                  color: "#FF2B2B",
                },
                {
                  title: "The Magical Nights",
                  desc: "The milestone experiences that completely changed people's lives and proved the vision.",
                  color: "#1A1A1A",
                  textColor: "#FFFFFF",
                },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="w-full rounded-xl border-2 border-[#1A1A1A] p-5 flex flex-col justify-between items-start gap-3"
                  style={{
                    backgroundColor: card.color,
                    color: card.textColor || "#1A1A1A",
                    boxShadow: "5px 5px 0px #1A1A1A",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-block font-body text-[9px] font-black uppercase tracking-widest opacity-60 px-2 py-0.5 border border-current rounded-full">
                      PILLAR 0{idx + 1}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl leading-none">
                      {card.title}
                    </h3>
                  </div>
                  <p className="font-body text-xs sm:text-sm leading-relaxed opacity-90 text-left">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <JaggedDivider color="#1A1A1A" />
        </section>

        {/* 5. THE STORIES WE SEEK */}
        <section id="pillars" className="pt-8 pb-0 bg-[#1A1A1A] relative overflow-hidden">
          <DecorativeStar size={140} color="#FF2B2B" opacity={0.07} top="10%" left="5%" spin spinDuration={40} useStar4={true} />
          <DecorativeStar size={100} color="#f2af29" opacity={0.07} bottom="25%" right="5%" spin spinDuration={30} useStar4={true} />
          <DecorativeStar size={115} color="#FFFFFF" opacity={0.07} top="5%" right="25%" spin spinDuration={30} useStar4={true} />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="mb-6">
              <span className="inline-block font-body text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border-2 border-[#FF2B2B] text-[#FF2B2B] mb-3">
                ✦ EDITORIAL PILLARS
              </span>
              <h2 className="font-display text-white leading-none mb-3" style={{ fontSize: "clamp(24px, 3.2vw, 42px)", letterSpacing: "0.01em" }}>
                The Stories We Seek
              </h2>
              <p className="font-body text-lg text-white/70 max-w-2xl">
                We look for depth over hype. Our episodes focus on three distinct pillars of your community building journey:
              </p>
            </div>

            {/* 3 Cards at the top */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 relative z-15">
              {[
                {
                  name: "The Origin",
                  desc: "That initial day you put up a banner, nervous that nobody would arrive, and the leap of faith required to begin.",
                  bg: "#f2af29",
                  text: "#1A1A1A",
                },
                {
                  name: "The Struggle",
                  desc: "The silent, unseen moments where you felt entirely overwhelmed, financially stretched, or alone in the project.",
                  bg: "#FF2B2B",
                  text: "#FFFFFF",
                },
                {
                  name: "The Spark",
                  desc: "The specific stranger who walked in, found a home, and ultimately built family bonds inside your community.",
                  bg: "#FFFFFF",
                  text: "#1A1A1A",
                },
              ].map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  animate={hoveredPillarCard === idx ? { y: 0, scale: 1.03 } : { y: [0, -8, 0], scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    opacity: { duration: 0.5, delay: idx * 0.1 },
                    y: {
                      repeat: hoveredPillarCard === idx ? 0 : Infinity,
                      duration: 4.5 + idx * 0.5,
                      ease: "easeInOut",
                      delay: idx * 0.1
                    }
                  }}
                  onMouseEnter={() => setHoveredPillarCard(idx)}
                  onMouseLeave={() => setHoveredPillarCard(null)}
                  className="rounded-2xl border-2 border-black p-6 flex flex-col justify-between"
                  style={{
                    backgroundColor: pillar.bg,
                    color: pillar.text,
                    boxShadow: "5px 5px 0px #555555",
                  }}
                >
                  <div>
                    <span className="block font-body text-[10px] font-black uppercase tracking-widest opacity-60 mb-4">
                      FOCUS 0{idx + 1}
                    </span>
                    <h3 className="font-display text-2xl mb-3 leading-tight">
                      {pillar.name}
                    </h3>
                    <p className="font-body text-sm leading-relaxed opacity-90">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Card-formatted image aligned to margins */}
            <div className="relative w-full h-[180px] md:h-[300px] overflow-hidden rounded-2xl border-2 border-black mt-8 group cursor-pointer">
              <img
                src="/images/podcast/pillars.png"
                alt="Editorial Pillars Banner"
                className="w-full h-full object-cover scale-[1.05] transition-transform duration-700 group-hover:scale-[1.1]"
              />
            </div>
          </div>

        </section>

        {/* 6. WHAT YOU RECEIVE (PERKS) */}
        <section
          id="benefits"
          className="pt-12 pb-24 md:pt-16 md:pb-32 relative overflow-hidden moving-stripes-benefits"
        >
          <style>{`
            @keyframes move-stripes-benefits {
              0% { background-position: 0 0; }
              100% { background-position: 56.57px 0; }
            }
            .moving-stripes-benefits {
              background: repeating-linear-gradient(-45deg, #F5F0E8, #F5F0E8 20px, #EBE5D8 20px, #EBE5D8 40px);
              background-size: 56.57px 56.57px;
              animation: move-stripes-benefits 3.5s linear infinite;
            }
          `}</style>
          <JaggedDivider color="#1A1A1A" top />
          <DecorativeStar size={80} color="#FF2B2B" opacity={0.07} top="20%" right="8%" useStar4={true} />
          <DecorativeStar size={110} color="#f2af29" opacity={0.09} bottom="10%" left="10%" useStar4={true} />
          <DecorativeStar size={70} color="#1A1A1A" opacity={0.07} top="40%" left="40%" useStar4={true} />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block font-body text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border-2 border-[#FF2B2B] text-[#FF2B2B] mb-4">
                ✦ HOST BENEFITS
              </span>
              <h2 className="font-display text-[#1A1A1A] leading-none mb-4" style={{ fontSize: "clamp(24px, 3.2vw, 42px)", letterSpacing: "0.01em" }}>
                What You Receive
              </h2>
              <p className="font-body text-lg text-black/60 max-w-2xl mx-auto">
                We turn one honest, beautifully captured conversation into a collection of pristine digital assets to celebrate your community's legacy:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  num: "01",
                  title: "Podcast Release",
                  desc: "A multi-channel distribution across premier audio and video platforms (Spotify, YouTube, Apple Podcasts).",
                },
                {
                  num: "02",
                  title: "Targeted Marketing",
                  desc: "Amplified reach promoted directly through our specialized newsletter, networks, and ecosystem partners.",
                },
                {
                  num: "03",
                  title: "High-Fi Reels",
                  desc: "Professionally edited, high-definition short narrative clips and stories optimized for social media impact.",
                },
                {
                  num: "04",
                  title: "Host Feature",
                  desc: "A dedicated, deeply researched and written editorial profile spotlight published in the IRL Culture Blog.",
                },
              ].map((perk, idx) => {
                const cardColors = [
                  { bg: "#f2af29", text: "#1A1A1A", num: "#1A1A1A" },
                  { bg: "#FF2B2B", text: "#FFFFFF", num: "#FFFFFF" },
                  { bg: "#1A1A1A", text: "#FFFFFF", num: "#f2af29" },
                  { bg: "#FFFFFF", text: "#1A1A1A", num: "#FF2B2B" },
                ][idx];

                const isScaled = hoverBenefit !== null ? hoverBenefit === idx : activeBenefit === idx;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    animate={{
                      scale: isScaled ? 1.08 : 1,
                      boxShadow: isScaled ? "8px 8px 0px #000000" : "4px 4px 0px #1A1A1A",
                    }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 220, damping: 22 }}
                    onMouseEnter={() => setHoverBenefit(idx)}
                    onMouseLeave={() => setHoverBenefit(null)}
                    className="rounded-2xl border-2 border-[#1A1A1A] p-6 flex flex-col justify-between cursor-pointer"
                    style={{
                      backgroundColor: cardColors.bg,
                      color: cardColors.text,
                    }}
                  >
                    <div>
                      <span
                        className="block font-display text-4xl font-black mb-4"
                        style={{ color: cardColors.num }}
                      >
                        {perk.num}
                      </span>
                      <h3 className="font-display text-xl mb-2">
                        {perk.title}
                      </h3>
                      <p className="font-body text-sm leading-relaxed opacity-90">
                        {perk.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <JaggedDivider color="#0D0D0D" />
        </section>

        {/* 7. PART OF A GLOBAL MOVEMENT */}
        <section className="pt-12 pb-24 md:pt-16 md:pb-32 bg-[#0D0D0D] text-white relative overflow-hidden">
          <DecorativeStar size={180} color="#FF2B2B" opacity={0.07} bottom="8%" right="3%" spin spinDuration={35} useStar4={true} />
          <DecorativeStar size={125} color="#f2af29" opacity={0.07} bottom="15%" left="5%" spin spinDuration={38} useStar4={true} />
          <DecorativeStar size={105} color="#FFFFFF" opacity={0.07} bottom="20%" right="30%" spin spinDuration={45} useStar4={true} />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="mb-16">
              <span className="inline-block font-body text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border-2 border-[#FF2B2B] text-[#FF2B2B] mb-4">
                ✦ THE NEXT CHAPTER
              </span>
              <h2 className="font-display text-white leading-none mb-4" style={{ fontSize: "clamp(24px, 3.2vw, 42px)", letterSpacing: "0.01em" }}>
                Part of a Global Movement
              </h2>
              <p className="font-body text-lg text-white/70 max-w-3xl leading-relaxed">
                Together, we are archiving and building the collective catalog of India's offline cultural revival. This platform spans across content, infrastructure, and experiential gatherings to support and sustain creators:
              </p>
            </div>

            {/* Podcast card left (centered), two secondary cards stacked on right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

              {/* Primary Card: IRL Culture Podcast — left, vertically centered */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={hoveredChapterCard === 0 ? { y: 0, scale: 1.02 } : { y: [0, -8, 0], scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  opacity: { duration: 0.5 },
                  y: {
                    repeat: hoveredChapterCard === 0 ? 0 : Infinity,
                    duration: 4.5,
                    ease: "easeInOut",
                  }
                }}
                onMouseEnter={() => setHoveredChapterCard(0)}
                onMouseLeave={() => setHoveredChapterCard(null)}
                className="rounded-2xl p-6 bg-[#F5F0E8] flex flex-col gap-4 text-left"
                style={{ borderTop: "3px solid #FF2B2B", borderLeft: "2px solid #1A1A1A", borderRight: "2px solid #1A1A1A", borderBottom: "2px solid #1A1A1A" }}
              >
                {/* Role pill */}
                <span className="inline-block font-body text-[10px] font-black uppercase tracking-wider text-[#FF2B2B] px-2.5 py-1 rounded bg-[#FF2B2B]/10 border border-[#FF2B2B]/20 self-start">
                  We Archive Your Story
                </span>
                {/* Logo + description side by side */}
                <div className="flex items-center gap-5">
                  <img
                    src="/images/podcast/IRL Podcast white bg.svg"
                    alt="IRL Culture Podcast Logo"
                    className="h-20 w-auto shrink-0 object-contain"
                  />
                  <p className="font-body text-black/70 text-sm leading-relaxed">
                    A dedicated content platform to showcase and immortalize the stories of IRL culture builders.
                  </p>
                </div>
                {/* CTA */}
                <a
                  href="#collaborate"
                  className="w-full font-body text-xs font-black uppercase tracking-wider py-3.5 px-8 rounded-full border-2 border-[#FF2B2B] bg-[#FF2B2B] text-white transition-all duration-300 hover:scale-105 hover:bg-[#cc2222] active:scale-95 text-center cursor-pointer mt-1"
                >
                  Pitch Now →
                </a>
              </motion.div>

              {/* Right column: meetday + fest stacked */}
              <div className="flex flex-col gap-5">
                {[
                  {
                    idx: 1,
                    comp: "meetday™",
                    role: "We Infrastructure Your Growth",
                    logo: "/meetday-red.svg",
                    logoClass: "h-8 w-auto shrink-0",
                    mission: "An intelligent infrastructure built to help hosts discover premium brand sponsorships for IRL experiences.",
                    link: "https://meetday.ai",
                    linkLabel: "Explore meetday →",
                    external: true,
                  },
                  {
                    idx: 2,
                    comp: "IRL Culture Fest 2026",
                    role: "We Celebrate the Collective Movement",
                    logo: "/footer-logo.png",
                    logoClass: "h-20 w-auto shrink-0",
                    mission: "A massive live festival platform to engage IRL communities, brands, and the broader ecosystem.",
                    link: "/#passes",
                    linkLabel: "Get Passes →",
                  },
                ].map((row) => (
                  <motion.div
                    key={row.idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    animate={hoveredChapterCard === row.idx ? { y: 0, scale: 1.03 } : { y: [0, -8, 0], scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      opacity: { duration: 0.5, delay: row.idx * 0.1 },
                      y: {
                        repeat: hoveredChapterCard === row.idx ? 0 : Infinity,
                        duration: 4.5 + row.idx * 0.4,
                        ease: "easeInOut",
                        delay: row.idx * 0.1
                      }
                    }}
                    onMouseEnter={() => setHoveredChapterCard(row.idx)}
                    onMouseLeave={() => setHoveredChapterCard(null)}
                    className="rounded-2xl p-5 bg-[#F5F0E8] flex flex-col gap-3 text-left"
                    style={{ borderTop: "3px solid #FF2B2B", borderLeft: "2px solid #1A1A1A", borderRight: "2px solid #1A1A1A", borderBottom: "2px solid #1A1A1A" }}
                  >
                    {/* Role pill */}
                    <span className="inline-block font-body text-[10px] font-black uppercase tracking-wider text-[#FF2B2B] px-2.5 py-1 rounded bg-[#FF2B2B]/10 border border-[#FF2B2B]/20 self-start">
                      {row.role}
                    </span>
                    {/* Logo + description side by side */}
                    <div className="flex items-center gap-4">
                      <img
                        src={row.logo}
                        alt={`${row.comp} Logo`}
                        className={`${row.logoClass} object-contain`}
                      />
                      <p className="font-body text-black/70 text-xs leading-relaxed">
                        {row.mission}
                      </p>
                    </div>
                    {/* CTA */}
                    <a
                      href={row.link}
                      target={row.external ? "_blank" : "_self"}
                      rel={row.external ? "noopener noreferrer" : ""}
                      className="w-full font-body text-xs font-black uppercase tracking-wider py-2.5 px-5 rounded-full border-2 border-[#1A1A1A] bg-transparent text-[#1A1A1A] transition-all duration-300 hover:scale-105 hover:bg-[#1A1A1A] hover:text-white active:scale-95 text-center cursor-pointer"
                    >
                      {row.linkLabel}
                    </a>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
          <JaggedDivider color="#F5F0E8" />
        </section>

        {/* 8. MEET YOUR HOST */}
        <section id="host" className="pt-8 pb-16 md:pt-12 md:pb-24 bg-[#F5F0E8] relative overflow-hidden">
          <DecorativeStar size={150} color="#FF2B2B" opacity={0.07} top="12%" left="4%" spin spinDuration={32} useStar4={true} />
          <DecorativeStar size={100} color="#f2af29" opacity={0.07} bottom="8%" right="6%" spin spinDuration={38} useStar4={true} />
          <DecorativeStar size={115} color="#FF2B2B" opacity={0.07} top="30%" right="35%" spin spinDuration={30} useStar4={true} />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-left mb-8 w-full">
              <span className="inline-block font-body text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border-2 border-[#FF2B2B] text-[#FF2B2B] mb-4">
                ✦ THE MICROPHONE
              </span>
              <h2 className="font-display text-[#1A1A1A] leading-none mb-2" style={{ fontSize: "clamp(24px, 3.2vw, 42px)", letterSpacing: "0.01em" }}>
                Meet Your Host
              </h2>
            </div>

            {/* Gagaan's Polaroid & Biography Details */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full mb-8">
              {/* Left: Polaroid Image */}
              <div className="md:col-span-5 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, rotate: -4, y: 30 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -4 }}
                  whileHover={{ scale: 1.08, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="relative bg-white p-2 pb-4 rounded-2xl w-full max-w-[280px] md:max-w-[320px] cursor-pointer group"
                >
                  {/* Polaroid Tape Graphic */}
                  <div
                    className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 w-24 h-7 bg-[#f2af29]/35 backdrop-blur-[0.5px] border border-black/5 rotate-[-1deg] z-30 flex items-center justify-center"
                    style={{
                      clipPath: "polygon(2% 10%, 98% 5%, 95% 95%, 5% 90%)",
                    }}
                  />

                  <div className="aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 mb-2">
                    <img
                      src="/images/team/Gagaan.png"
                      alt="Gagaan Singh Nagi"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p
                    className="text-center text-3xl text-[#1A1A1A] mt-2 font-medium leading-none"
                    style={{ fontFamily: "'Caveat', cursive" }}
                  >
                    Gagaan S. Nagi
                  </p>
                </motion.div>
              </div>

              {/* Right: Content details (not in a card) */}
              <div className="md:col-span-7 text-left space-y-6">
                <div>
                  <span className="block font-body text-[11px] font-bold tracking-widest text-[#FF2B2B] mb-2">
                    PODCAST HOST &amp; CEO, meetday.ai
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl text-[#1A1A1A] leading-none mb-4">
                    Gagaan Singh Nagi
                  </h3>
                  <p className="font-body text-[#1A1A1A] text-base leading-relaxed text-black/80 font-medium">
                    Gagaan brings more than 20 years of expertise in experiential marketing to the microphone. Having engineered deep social and corporate experiences across 15+ countries, he has collaborated with over 100+ global brands.
                  </p>
                  {/* Pull Quote */}
                  <div className="border-l-4 border-[#FF2B2B] pl-4 my-5 py-2 bg-black/[0.03] rounded-r-lg">
                    <p className="font-body text-[#1A1A1A] text-lg font-bold italic leading-snug text-black/85">
                      &ldquo;My goal is a sustainable IRL ecosystem—empowering a new generation of curators and community builders across India.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Experiential Strategy", "Community Design", "Host Ecosystems"].map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-black/35 text-black bg-black/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Logo Grid under content */}
                <div className="text-left mt-4 w-full border-t border-black/10 pt-4">
                  <span className="block font-body text-[10px] font-black uppercase tracking-widest text-black/40 mb-2">
                    TRUSTED BY LEADERS FROM
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 items-center">
                    {podcastBrands.map((brand, i) => (
                      <motion.div
                        key={brand.name}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="flex items-center justify-center border border-black/10 rounded-xl p-2 bg-white cursor-pointer h-[58px] shadow-sm hover:scale-105 transition-transform"
                      >
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="max-h-[38px] max-w-[90%] object-contain"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <JaggedDivider color="#FFFFFF" />
        </section>

        <section id="process" className="pt-8 pb-12 md:pt-12 md:pb-16 bg-[#FFFFFF] relative overflow-hidden">
          <DecorativeStar size={160} color="#f2af29" opacity={0.07} top="-40px" right="4%" rotate={18} spin spinDuration={40} useStar4={true} />
          <DecorativeStar size={125} color="#FF2B2B" opacity={0.07} bottom="15%" left="8%" spin spinDuration={35} useStar4={true} />
          <DecorativeStar size={100} color="#f2af29" opacity={0.07} top="45%" right="45%" spin spinDuration={42} useStar4={true} />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Column: Heading and stacked cards */}
              <div className="lg:col-span-7 flex flex-col justify-start text-left">
                <div className="mb-6">
                  <span className="inline-block font-body text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border-2 border-[#FF2B2B] text-[#FF2B2B] mb-3">
                    ✦ THE PROCESS
                  </span>
                  <h2 className="font-display text-[#1A1A1A] leading-none mb-3" style={{ fontSize: "clamp(24px, 3.2vw, 42px)", letterSpacing: "0.01em" }}>
                    How We Collaborate
                  </h2>
                  <p className="font-body text-base text-black/60 max-w-2xl">
                    A simple, unhurried timeline to capture and launch your community story to the ecosystem:
                  </p>
                </div>

                <div className="flex flex-col gap-4 w-full">
                  {[
                    {
                      step: "01",
                      title: "The Intro Call",
                      duration: "20 Mins",
                      desc: "We connect casually over a video chat to uncover your unique community narrative arc and focus areas.",
                    },
                    {
                      step: "02",
                      title: "The Studio",
                      duration: "60–90 Mins",
                      desc: "A relaxed, cozy, and completely unhurried recording session at our professional local studio.",
                    },
                    {
                      step: "03",
                      title: "Co-Design",
                      duration: "Edit Review",
                      desc: "We review the initial edits and narrative cuts together, ensuring ultimate peace of mind.",
                    },
                    {
                      step: "04",
                      title: "Celebration",
                      duration: "Episode Launch",
                      desc: "We launch the episode and reels out to India's leading creators and host ecosystem.",
                    },
                  ].map((proc, idx) => {
                    const isHighlighted = hoveredProcessStep !== null
                      ? hoveredProcessStep === idx
                      : activeProcessStep === idx;

                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          opacity: { duration: 0.4, delay: idx * 0.08 },
                          y: { duration: 0.4, delay: idx * 0.08 },
                          default: { type: "tween", duration: 0.15, ease: "easeOut" }
                        }}
                        animate={{
                          scale: isHighlighted ? 1.04 : 1,
                          backgroundColor: isHighlighted ? "#FF2B2B" : "#F5F0E8",
                          color: isHighlighted ? "#FFFFFF" : "#1A1A1A",
                          boxShadow: isHighlighted ? "6px 6px 0px #000000" : "4px 4px 0px #1A1A1A"
                        }}
                        onMouseEnter={() => setHoveredProcessStep(idx)}
                        onMouseLeave={() => {
                          setActiveProcessStep((idx + 1) % 4);
                          setHoveredProcessStep(null);
                        }}
                        className="rounded-2xl border-2 border-[#1A1A1A] p-4 relative z-10 flex flex-row items-center gap-6 cursor-pointer"
                      >
                        <span className={`font-display text-4xl font-black shrink-0 ${isHighlighted ? "text-[#f2af29]" : "text-[#FF2B2B]"}`}>
                          {proc.step}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className={`font-display text-lg font-bold ${isHighlighted ? "text-white" : "text-[#1A1A1A]"}`}>
                              {proc.title}
                            </h3>
                            <span className={`font-body text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${isHighlighted ? "bg-white/20 text-white" : "bg-black/5 text-black/70"}`}>
                              {proc.duration}
                            </span>
                          </div>
                          <p className={`font-body text-xs sm:text-sm leading-relaxed ${isHighlighted ? "text-white/90" : "text-black/70"}`}>
                            {proc.desc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Clean, border-shadow image card */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30, rotate: 3 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 3 }}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="w-full max-w-[380px] aspect-[3/4] overflow-hidden rounded-2xl border-2 border-black shadow-[6px_6px_0px_#1A1A1A] bg-white cursor-pointer group"
                >
                  <img
                    src="/images/podcast/process.png"
                    alt="Process Timeline"
                    className="w-full h-full object-cover scale-[1.2] transition-transform duration-500 group-hover:scale-[1.3]"
                  />
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* 10. FOOTER / FINAL CTA */}
        <section id="collaborate" className="pt-24 pb-24 md:pt-32 md:pb-32 text-white text-center relative overflow-hidden moving-stripes-section">
          <style>{`
            @keyframes move-stripes {
              0% { background-position: 0 0; }
              100% { background-position: 42.42px 0; }
            }
            .moving-stripes-section {
              background: repeating-linear-gradient(-45deg, #FF2B2B, #FF2B2B 15px, #E52222 15px, #E52222 30px);
              background-size: 42.42px 42.42px;
              animation: move-stripes 2.5s linear infinite;
            }
          `}</style>

          <JaggedDivider color="#FFFFFF" top />
          <DecorativeStar size={190} color="#0D0D0D" opacity={0.07} top="15%" left="5%" spin spinDuration={40} useStar4={true} />
          <DecorativeStar size={110} color="#f2af29" opacity={0.07} bottom="12%" right="8%" spin spinDuration={32} useStar4={true} />
          <DecorativeStar size={135} color="#FFFFFF" opacity={0.07} top="35%" right="40%" spin spinDuration={35} useStar4={true} />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h2 className="font-display text-white leading-tight mb-4" style={{ fontSize: "clamp(24px, 3.2vw, 42px)", letterSpacing: "0.01em" }}>
              Let's Build Together. <br />
              Let Us Tell Your Story.
            </h2>
            <p className="font-body text-lg md:text-2xl text-white/85 max-w-2xl mx-auto mb-10">
              Are you a curator, host, or physical community builder in India? Let's talk.
            </p>

            <div className="flex items-center justify-center">
              <a
                href="mailto:info@meetday.ai"
                className="font-body text-sm font-black uppercase tracking-wider py-4 px-8 rounded-full border-2 border-black bg-[#0D0D0D] text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer inline-block"
                style={{
                  boxShadow: "3px 4px 0px #FFFFFF",
                }}
              >
                Mail Us
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
