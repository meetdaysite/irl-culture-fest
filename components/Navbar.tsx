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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
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

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-black/8 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#top")}
            className="flex items-center justify-center cursor-pointer bg-white px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-108 hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] active:scale-95 shadow-sm"
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
                className="nav-link font-body text-sm font-medium transition-colors cursor-pointer text-[#1A1A1A]/80 hover:text-[#1A1A1A]"
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
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: 45, y: 6, background: "#1A1A1A" }
                  : { rotate: 0, y: 0, background: "#1A1A1A" }
              }
              className="block w-6 h-0.5 rounded-full"
              style={{ background: "#1A1A1A" }}
            />
            <motion.span
              animate={
                mobileOpen
                  ? { opacity: 0 }
                  : { opacity: 1, background: "#1A1A1A" }
              }
              className="block w-6 h-0.5 rounded-full"
              style={{ background: "#1A1A1A" }}
            />
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: -45, y: -6, background: "#1A1A1A" }
                  : { rotate: 0, y: 0, background: "#1A1A1A" }
              }
              className="block w-6 h-0.5 rounded-full"
              style={{ background: "#1A1A1A" }}
            />
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
