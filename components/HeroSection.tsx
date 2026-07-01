"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ConfettiBurst() {
  const [particles, setParticles] = useState<
    { id: number; x: number; color: string; delay: number; size: number; duration: number }[]
  >([]);

  useEffect(() => {
    const colors = ["#FF2D2D", "#6700a2", "#FF2B2B", "#8FFB2B", "#FFD600", "#00C2FF"];
    const items = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 1.5,
      size: 4 + Math.random() * 8,
      duration: 2.5 + Math.random(),
    }));
    setTimeout(() => {
      setParticles(items);
    }, 0);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -20, opacity: 1, scale: 1 }}
          animate={{ y: "100vh", opacity: 0, rotate: 720 }}
          transition={{ duration: p.duration, delay: p.delay, ease: "easeIn" }}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            background: p.color,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const words1 = ["INDIA'S", "FIRST"];
  const words2 = ["IRL", "FESTIVAL"];

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [floatingDots, setFloatingDots] = useState<
    { id: number; x: number; y: number; size: number; color: string; parallax: number; duration: number }[]
  >([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 60;
      const y = (e.clientY / window.innerHeight - 0.5) * 60;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const colors = ["#FF2D2D", "#6700a2", "#FF2B2B", "#8FFB2B", "#FFD600", "#00C2FF"];
    const items = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 4 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      parallax: 0.3 + Math.random() * 1.2,
      duration: 10 + Math.random() * 20,
    }));
    setTimeout(() => {
      setFloatingDots(items);
    }, 0);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#F8F5F0" }}
    >
      {/* Floating Orbs (Parallax smoke background) */}
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
          transition={{ type: "spring", stiffness: 35, damping: 18 }}
          className="absolute inset-0"
        >
          <div className="orb orb-orange" />
        </motion.div>
        <motion.div
          animate={{ x: mousePos.x * -0.9, y: mousePos.y * -0.9 }}
          transition={{ type: "spring", stiffness: 50, damping: 25 }}
          className="absolute inset-0"
        >
          <div className="orb orb-green" />
        </motion.div>
      </div>

      {/* Floating Interactive Parallax Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {floatingDots.map((dot) => (
          <motion.div
            key={dot.id}
            animate={{
              x: mousePos.x * dot.parallax,
              y: mousePos.y * dot.parallax,
            }}
            transition={{ type: "spring", stiffness: 60, damping: 25 }}
            className="absolute"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: dot.size,
                height: dot.size,
                background: dot.color,
                opacity: 0.5,
                boxShadow: `0 0 10px ${dot.color}60`,
                animation: `float-slow-${dot.id % 3} ${dot.duration}s ease-in-out infinite alternate`,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Confetti Burst */}
      <ConfettiBurst />

      {/* Main Content */}
      <div className="relative z-20 text-center px-8 max-w-5xl mx-auto pt-24 pb-12 sm:pt-32">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-body text-[#888] uppercase mb-8"
          style={{
            fontSize: "clamp(11px, 1.2vw, 14px)",
            letterSpacing: "0.2em",
          }}
        >
          NOVEMBER 2026 &nbsp;·&nbsp; DELHI &nbsp;·&nbsp; MUMBAI &nbsp;·&nbsp;
          BANGALORE &nbsp;·&nbsp; PUNE
        </motion.p>

        {/* H1 Line 1 — INDIA'S FIRST */}
        <h1 className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6">
          {words1.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.7, ease: "easeOut" }}
              className="font-display text-[#1A1A1A]"
              style={{
                fontSize: "clamp(72px, 12vw, 148px)",
                lineHeight: 0.92,
                letterSpacing: "0.02em",
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* H1 Line 2 — IRL FESTIVAL */}
        <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 mt-2">
          {words2.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.74 + i * 0.12, duration: 0.7, ease: "easeOut" }}
              className="font-display text-[#FF2D2D]"
              style={{
                fontSize: "clamp(72px, 12vw, 148px)",
                lineHeight: 0.92,
                letterSpacing: "0.02em",
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-body text-[#555] max-w-xl mx-auto mt-8 leading-relaxed"
          style={{
            fontSize: "clamp(16px, 1.8vw, 22px)",
          }}
        >
          Celebrating the IRL Culture Builders &amp; the ecosystem making it
          happen.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <button
            onClick={() => scrollToSection("#partner")}
            className="bg-[#FF2D2D] text-white font-body font-semibold text-xl px-8 py-3.5 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,45,45,0.4)] cursor-pointer"
          >
            Become a Partner
          </button>
          <button
            onClick={() => scrollToSection("#partner")}
            className="border-2 border-[#1A1A1A] text-[#1A1A1A] font-body font-semibold text-xl px-8 py-3.5 rounded-full transition-all hover:bg-[#1A1A1A] hover:text-white cursor-pointer"
          >
            Attend the Fest
          </button>
        </motion.div>
      </div>

      {/* Powered by */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-6 font-[family-name:var(--font-space-grotesk)] text-xs text-[#999] z-20"
      >
        Powered by meetday.ai
      </motion.p>
    </section>
  );
}
