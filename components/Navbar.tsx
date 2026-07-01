"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Cities", href: "#cities" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Progressive interpolation between 20–80px scroll
  const progress = Math.min(Math.max((scrollY - 20) / 60, 0), 1); // 0 at top, 1 at 80px+

  const navBg = `rgba(255,255,255,${(0.05 + progress * 0.35).toFixed(2)})`;
  const blurPx = `${(3 + progress * 11).toFixed(1)}px`;
  const borderOpacity = progress * 0.06;
  const shadowOpacity = progress * 0.06;

  // Text color: black at start (with 0.45 opacity) transitioning to fully opaque black (#1A1A1A) when scrolled
  const textOpacity = (0.45 + (progress * 0.55)).toFixed(2);
  const linkColor = `rgba(26, 26, 26, ${textOpacity})`;
  const linkHoverColor = "#FF2D2D";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: navBg,
          backdropFilter: `blur(${blurPx})`,
          WebkitBackdropFilter: `blur(${blurPx})`,
          boxShadow: `0 1px 24px rgba(0,0,0,${shadowOpacity.toFixed(3)})`,
          transition: "background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        <div className="mx-auto max-w-7xl px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#top")}
            className="flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Image
              src="/navbar-logo.png"
              alt="IRL Culture Fest Logo"
              width={360}
              height={102}
              style={{ width: "auto", height: "auto" }}
              className="h-[90px] sm:h-[108px] object-contain"
            />
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="nav-link font-body text-sm font-medium cursor-pointer"
                style={{
                  color: linkColor,
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = linkHoverColor;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = linkColor;
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#partner")}
              className="bg-[#FF2D2D] text-white font-body text-base font-semibold px-6 py-2.5 rounded-full transition-all hover:scale-105 hover:bg-[#e02525] hover:shadow-lg cursor-pointer"
            >
              Partner With Us
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 cursor-pointer z-[60]"
            aria-label="Toggle menu"
          >
            {[
              mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 },
              mobileOpen ? { opacity: 0 } : { opacity: 1 },
              mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 },
            ].map((anim, idx) => (
              <motion.span
                key={idx}
                animate={{ ...anim, background: linkColor }}
                className="block w-6 h-0.5 rounded-full"
                style={{ background: linkColor }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-white flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                onClick={() => scrollToSection(link.href)}
                className="font-display text-4xl text-[#1A1A1A] hover:text-[#FF2D2D] transition-colors cursor-pointer"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => scrollToSection("#partner")}
              className="mt-4 bg-[#FF2D2D] text-white font-body text-xl font-semibold px-10 py-4 rounded-full hover:scale-105 transition-transform cursor-pointer"
            >
              Partner With Us
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
