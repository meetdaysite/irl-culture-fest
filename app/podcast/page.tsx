"use client";

import { motion } from "framer-motion";
import { useState } from "react";
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
        zIndex: 10,
        ...(top ? { top: "-2px", transform: "rotate(180deg)" } : { bottom: "-2px" })
      }}
    >
      <path d={pathD} fill={color} />
    </svg>
  );
};

const podcastBrands = [
  { name: "Google", logo: "/images/partner-logos/Google.svg", url: "https://www.google.com" },
  { name: "Meta", logo: "/images/partner-logos/Meta.svg", url: "https://www.meta.com" },
  { name: "WPP", logo: "/images/partner-logos/WPP.svg", url: "https://www.wpp.com" },
  { name: "P&G", logo: "/images/partner-logos/PandG.svg", url: "https://www.pg.com" },
  { name: "Unilever", logo: "/images/partner-logos/Unilever.svg", url: "https://www.unilever.com" },
  { name: "Samsung", logo: "/images/partner-logos/Samsung.svg", url: "https://www.samsung.com" },
  { name: "Mercedes-Benz", logo: "/images/partner-logos/Mercedes-Benz.svg", url: "https://www.mercedes-benz.co.in" },
  { name: "Nestlé", logo: "/images/partner-logos/Nestle.svg", url: "https://www.nestle.com" },
  { name: "IBM", logo: "/images/partner-logos/IBM.svg", url: "https://www.ibm.com" },
];

export default function PodcastPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@meetday.ai");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#F5F0E8] text-[#1A1A1A] overflow-x-hidden min-h-screen">
        
        {/* 1. HERO SECTION */}
        <section id="hero" className="relative pt-12 pb-0 md:pt-16 md:pb-0 bg-[#FF2B2B] overflow-hidden">
          
          {/* Inner Cream Band with Jagged Paper Cut transitions */}
          <div className="relative bg-[#F5F0E8] text-[#1A1A1A] pt-16 pb-6 md:pt-20 md:pb-8 overflow-hidden">
            <JaggedDivider color="#FF2B2B" top />
            
            {/* Subtle audio waveform / asterisk backdrop inside the cream block */}
            <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 300 H1340" stroke="black" strokeWidth="2" strokeDasharray="8 8" />
                {[...Array(24)].map((_, i) => {
                  const height = 40 + Math.sin(i * 0.8) * 120 + Math.cos(i * 0.3) * 60;
                  const x = 150 + i * 50;
                  return (
                    <motion.line
                      key={i}
                      x1={x}
                      y1={300 - height / 2}
                      x2={x}
                      y2={300 + height / 2}
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      animate={{
                        y1: [300 - (height * 0.3) / 2, 300 - (height * 1.3) / 2, 300 - (height * 0.7) / 2],
                        y2: [300 + (height * 0.3) / 2, 300 + (height * 1.3) / 2, 300 + (height * 0.7) / 2],
                      }}
                      transition={{
                        duration: 1.2 + (i % 3) * 0.3,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                        delay: (i % 4) * 0.1,
                      }}
                    />
                  );
                })}
              </svg>
            </div>

            <DecorativeStar size={160} color="#FF2B2B" opacity={0.08} top="8%" right="8%" spin spinDuration={40} />
            <DecorativeStar size={80} color="#f2af29" opacity={0.12} bottom="12%" left="6%" rotate={35} />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Left Side: Content */}
                <div className="md:col-span-8 text-left">
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
                    BUILDING <span className="text-[#FF2B2B]">OFFLINE CULTURE.</span>
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

                {/* Right Side: Logo - Smaller raw rendering */}
                <div className="md:col-span-4 flex justify-center md:justify-end">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="w-full max-w-[140px] md:max-w-[180px] aspect-square flex items-center justify-center"
                  >
                    <img
                      src="/images/podcast/podcast-logo.png"
                      alt="IRL Culture Podcast Logo"
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </div>

              </div>
            </div>

          </div>
          
        </section>

        {/* 2. THE MISSION SECTION */}
        <section className="pt-24 pb-24 md:pt-32 md:pb-32 bg-[#FF2B2B] text-white relative overflow-hidden">
          <JaggedDivider color="#F5F0E8" top />
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
                  className="font-display leading-tight text-[#1A1A1A] text-3xl sm:text-4xl md:text-5xl mb-6"
                >
                  Urban Loneliness is Quietly Rising.
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
                  className="w-full max-w-[420px] h-[300px] overflow-hidden rounded-2xl border-2 border-black bg-transparent"
                  style={{ boxShadow: "6px 6px 0px #1A1A1A" }}
                >
                  <img
                    src="/images/podcast/mission.png"
                    alt="The Mission"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

            </div>
          </div>
          <JaggedDivider color="#1A1A1A" />
        </section>

        {/* 3. OUR MANIFESTO TO HOSTS */}
        <section id="manifesto" className="pt-12 pb-24 md:pt-16 md:pb-32 bg-[#1A1A1A] text-white relative overflow-hidden">
          <DecorativeStar size={110} color="#f2af29" opacity={0.06} top="-30px" left="5%" spin spinDuration={45} />
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="block font-body text-xs font-black uppercase tracking-widest text-[#f2af29] mb-8">
                ✦ OUR MANIFESTO TO HOSTS
              </span>
              <p className="font-body text-lg sm:text-xl md:text-2xl leading-relaxed font-medium tracking-wide">
                &ldquo;You do not just host experiences. You sculpt belonging. You build safe harbors that transform everyday urban survival into vibrant real-world connection. We want to record, archive, and honor your story.&rdquo;
              </p>
            </motion.div>
          </div>
          <JaggedDivider color="#F5F0E8" />
        </section>

        {/* 4. THE EXPERIENCE SECTION */}
        <section id="experience" className="pt-12 pb-24 md:pt-16 md:pb-32 bg-[#F5F0E8] relative">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block font-body text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border-2 border-[#FF2B2B] text-[#FF2B2B] mb-4">
                ✦ THE FORMAT
              </span>
              <h2 className="font-display text-[#1A1A1A] leading-none mb-4" style={{ fontSize: "clamp(24px, 3.2vw, 42px)", letterSpacing: "0.01em" }}>
                The Podcast Experience
              </h2>
              <p className="font-body text-lg text-black/60 max-w-2xl mx-auto">
                We step away from performance scripts to uncover honest human truths on:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  whileHover={{ scale: 1.03 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-2xl border-2 border-[#1A1A1A] p-8 flex flex-col justify-between"
                  style={{
                    backgroundColor: card.color,
                    color: card.textColor || "#1A1A1A",
                    boxShadow: "6px 6px 0px #1A1A1A",
                  }}
                >
                  <div>
                    <span className="block font-body text-xs font-black uppercase tracking-widest opacity-60 mb-6">
                      PILLAR 0{idx + 1}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl mb-4 leading-tight">
                      {card.title}
                    </h3>
                    <p className="font-body text-sm sm:text-base leading-relaxed opacity-90">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <JaggedDivider color="#FFFFFF" />
        </section>

        {/* 5. THE STORIES WE SEEK */}
        <section id="pillars" className="pt-12 pb-24 md:pt-16 md:pb-32 bg-[#FFFFFF] relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="mb-16">
              <span className="inline-block font-body text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border-2 border-[#FF2B2B] text-[#FF2B2B] mb-4">
                ✦ EDITORIAL PILLARS
              </span>
              <h2 className="font-display text-[#1A1A1A] leading-none mb-4" style={{ fontSize: "clamp(24px, 3.2vw, 42px)", letterSpacing: "0.01em" }}>
                The Stories We Seek
              </h2>
              <p className="font-body text-lg text-black/60 max-w-2xl">
                We look for depth over hype. Our episodes focus on three distinct pillars of your community building journey:
              </p>
            </div>

            <div className="overflow-x-auto w-full border-2 border-black rounded-2xl bg-white shadow-[6px_6px_0px_#1A1A1A]">
              <table className="min-w-full divide-y-2 divide-black text-left font-body">
                <thead className="bg-[#f2af29] text-black font-display font-black uppercase text-sm sm:text-base tracking-wider">
                  <tr>
                    <th scope="col" className="px-6 py-4 border-r-2 border-black w-[250px]">Focus Area</th>
                    <th scope="col" className="px-6 py-4">The Narrative Journey</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black bg-white text-black text-sm sm:text-base">
                  {[
                    {
                      name: "The Origin",
                      desc: "That initial day you put up a banner, nervous that nobody would arrive, and the leap of faith required to begin.",
                    },
                    {
                      name: "The Struggle",
                      desc: "The silent, unseen moments where you felt entirely overwhelmed, financially stretched, or alone in the project.",
                    },
                    {
                      name: "The Spark",
                      desc: "The specific stranger who walked in, found a home, and ultimately built family bonds inside your community.",
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-5 border-r-2 border-black font-bold uppercase whitespace-nowrap text-[#FF2B2B]">
                        {row.name}
                      </td>
                      <td className="px-6 py-5 leading-relaxed text-black/85">
                        {row.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <JaggedDivider color="#F5F0E8" />
        </section>

        {/* 6. WHAT YOU RECEIVE (PERKS) */}
        <section id="benefits" className="pt-12 pb-24 md:pt-16 md:pb-32 bg-[#F5F0E8] relative">
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
              ].map((perk, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.04 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white rounded-2xl border-2 border-[#1A1A1A] p-6 flex flex-col justify-between"
                  style={{
                    boxShadow: "4px 4px 0px #1A1A1A",
                  }}
                >
                  <div>
                    <span className="block font-display text-4xl text-[#FF2B2B] font-black mb-4">
                      {perk.num}
                    </span>
                    <h3 className="font-display text-xl mb-2 text-[#1A1A1A]">
                      {perk.title}
                    </h3>
                    <p className="font-body text-sm text-black/70 leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <JaggedDivider color="#0D0D0D" />
        </section>

        {/* 7. PART OF A GLOBAL MOVEMENT */}
        <section className="pt-12 pb-24 md:pt-16 md:pb-32 bg-[#0D0D0D] text-white relative">
          <DecorativeStar size={140} color="#FF2B2B" opacity={0.1} bottom="5%" right="3%" spin spinDuration={35} />
          
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

            <div className="overflow-x-auto w-full border-2 border-white/20 rounded-2xl bg-[#1A1A1A] shadow-xl">
              <table className="min-w-full text-left font-body">
                <thead className="bg-[#2D2D2D] text-white font-display font-black uppercase text-sm sm:text-base tracking-wider border-b-2 border-white/10">
                  <tr>
                    <th scope="col" className="px-6 py-4 border-r border-white/10 w-[240px]">Component</th>
                    <th scope="col" className="px-6 py-4 border-r border-white/10 w-[240px]">Our Role</th>
                    <th scope="col" className="px-6 py-4">Mission &amp; Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-transparent text-white/90 text-sm sm:text-base">
                  {[
                    {
                      comp: "IRL Culture Podcast",
                      role: "We Archive Your Story",
                      mission: "A dedicated content platform to showcase and immortalize the stories of IRL culture builders.",
                      link: "#collaborate",
                      linkLabel: "Pitch Now →",
                    },
                    {
                      comp: "meetday™",
                      role: "We Infrastructure Your Growth",
                      mission: "An intelligent infrastructure built to help hosts discover premium brand sponsorships for IRL experiences.",
                      link: "https://meetday.ai",
                      linkLabel: "Explore meetday →",
                      external: true,
                    },
                    {
                      comp: "IRL Culture Fest 2026",
                      role: "We Celebrate the Collective Movement",
                      mission: "A massive live festival platform to engage IRL communities, brands, and the broader ecosystem.",
                      link: "/#passes",
                      linkLabel: "Get Passes →",
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-5 border-r border-white/10 font-bold uppercase text-[#f2af29]">
                        {row.comp}
                      </td>
                      <td className="px-6 py-5 border-r border-white/10 font-semibold text-white/80">
                        {row.role}
                      </td>
                      <td className="px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <span className="text-white/70 leading-relaxed max-w-md">
                          {row.mission}
                        </span>
                        <a
                          href={row.link}
                          target={row.external ? "_blank" : "_self"}
                          rel={row.external ? "noopener noreferrer" : ""}
                          className="inline-block text-[#FF2B2B] hover:text-white font-bold transition-colors text-sm underline shrink-0"
                        >
                          {row.linkLabel}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <JaggedDivider color="#F5F0E8" />
        </section>

        {/* 8. MEET YOUR HOST */}
        <section id="host" className="pt-12 pb-24 md:pt-16 md:pb-32 bg-[#F5F0E8] relative">
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block font-body text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border-2 border-[#FF2B2B] text-[#FF2B2B] mb-4">
                ✦ THE MICROPHONE
              </span>
              <h2 className="font-display text-[#1A1A1A] leading-none mb-2" style={{ fontSize: "clamp(24px, 3.2vw, 42px)", letterSpacing: "0.01em" }}>
                Meet Your Host
              </h2>
            </div>

            {/* Gagaan's Expanded Card */}
            <div className="max-w-4xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="w-full flex flex-col md:flex-row rounded-2xl overflow-hidden border-2 border-[#1A1A1A] bg-[#f2af29]"
                style={{ boxShadow: "8px 8px 0px #1A1A1A" }}
              >
                {/* Image Container */}
                <div className="w-full md:w-2/5 aspect-[4/5] md:aspect-auto md:h-auto overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-[#1A1A1A] bg-white flex-shrink-0">
                  <img
                    src="/images/team/Gagaan.png"
                    alt="Gagaan Singh Nagi"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Details */}
                <div className="p-8 flex flex-col justify-between flex-1 text-left">
                  <div>
                    <span className="block font-body text-[10px] font-bold tracking-widest text-[#1A1A1A] opacity-60 mb-2 uppercase">
                      Podcast Host &amp; CEO, meetday.ai
                    </span>
                    <h3 className="font-display text-3xl font-black text-[#1A1A1A] leading-tight mb-4">
                      Gagaan Singh Nagi
                    </h3>
                    <p className="font-body text-[#1A1A1A] text-base leading-relaxed mb-6 font-medium">
                      Gagaan brings more than 20 years of expertise in experiential marketing to the microphone. Having engineered deep social and corporate experiences across 15+ countries, he has collaborated with over 100+ global brands.
                    </p>
                    {/* Pull Quote */}
                    <div className="border-l-4 border-[#FF2B2B] pl-4 my-6 py-1 bg-white/20 rounded-r-lg">
                      <p className="font-body text-[#1A1A1A] text-lg font-bold italic leading-snug">
                        &ldquo;My goal is a sustainable IRL ecosystem—empowering a new generation of young curators and community builders across India.&rdquo;
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Experiential Strategy", "Community Design", "Host Ecosystems"].map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-black/35 text-black bg-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Logo Grid */}
            <div className="text-center mt-20">
              <span className="block font-body text-xs font-black uppercase tracking-widest text-black/40 mb-6">
                TRUSTED BY LEADERS FROM
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-4 items-center justify-center">
                {podcastBrands.map((brand, i) => (
                  <motion.div
                    key={brand.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center justify-center border border-black/10 rounded-xl p-2 bg-white cursor-pointer h-[50px] shadow-sm hover:scale-105 transition-transform"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-[30px] max-w-[90%] object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <JaggedDivider color="#FFFFFF" />
        </section>

        {/* 9. HOW WE COLLABORATE */}
        <section id="process" className="pt-12 pb-24 md:pt-16 md:pb-32 bg-[#FFFFFF] relative overflow-hidden">
          <DecorativeStar size={120} color="#f2af29" opacity={0.06} top="-40px" right="4%" rotate={18} />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block font-body text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border-2 border-[#FF2B2B] text-[#FF2B2B] mb-4">
                ✦ THE PROCESS
              </span>
              <h2 className="font-display text-[#1A1A1A] leading-none mb-4" style={{ fontSize: "clamp(24px, 3.2vw, 42px)", letterSpacing: "0.01em" }}>
                How We Collaborate
              </h2>
              <p className="font-body text-lg text-black/60 max-w-2xl mx-auto">
                A simple, unhurried timeline to capture and launch your community story to the ecosystem:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Connector line on desktop */}
              <div className="hidden md:block absolute top-[50px] left-[10%] right-[10%] h-[2px] bg-black/10 z-0" />

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
              ].map((proc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#F5F0E8] rounded-2xl border-2 border-[#1A1A1A] p-6 relative z-10 flex flex-col justify-between"
                  style={{
                    boxShadow: "4px 4px 0px #1A1A1A",
                  }}
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-display text-2xl text-[#FF2B2B]">
                        {proc.step}
                      </span>
                      <span className="font-body text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/5 text-black/70">
                        {proc.duration}
                      </span>
                    </div>
                    <h3 className="font-display text-lg mb-2 text-[#1A1A1A]">
                      {proc.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-black/70 leading-relaxed">
                      {proc.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <JaggedDivider color="#FF2B2B" />
        </section>

        {/* 10. FOOTER / FINAL CTA */}
        <section className="pt-12 pb-24 md:pt-16 md:pb-32 bg-[#FF2B2B] text-white text-center relative overflow-hidden">
          <DecorativeStar size={150} color="#0D0D0D" opacity={0.1} top="10%" left="5%" spin spinDuration={40} />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="font-display text-white leading-tight mb-4" style={{ fontSize: "clamp(24px, 3.2vw, 42px)", letterSpacing: "0.01em" }}>
              Let's Build Together. <br />
              Let Us Tell Your Story.
            </h2>
            <p className="font-body text-lg md:text-2xl text-white/85 max-w-2xl mx-auto mb-10">
              Are you a curator, host, or physical community builder in India? Let's talk.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleCopyEmail}
                className="font-body text-sm font-black uppercase tracking-wider py-4 px-8 rounded-full border-2 border-black bg-[#0D0D0D] text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
                style={{
                  boxShadow: "3px 4px 0px #FFFFFF",
                }}
              >
                {copied ? "Email Copied!" : "info@meetday.ai ✦ Copy"}
              </button>
              <a
                href="mailto:info@meetday.ai"
                className="font-body text-sm font-black uppercase tracking-wider py-4 px-8 rounded-full border-2 border-black bg-white text-[#FF2B2B] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer inline-block"
                style={{
                  boxShadow: "3px 4px 0px #0D0D0D",
                }}
              >
                Open Mail Client
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
