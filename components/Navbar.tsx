"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isPartnerPage = pathname === "/partner";

  const [isNavbarWhite, setIsNavbarWhite] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["manifesto", "solution", "subcultures", "passes", "team"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-25% 0px -55% 0px",
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check if overlapping a section with a red background
      const redElements = ["partner-hero", "partner-form"];
      let isOverRed = false;
      for (const id of redElements) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Navbar height is around 100px. Overlap occurs if top of section <= 90px and bottom >= 10px.
          if (rect.top <= 90 && rect.bottom >= 10) {
            isOverRed = true;
            break;
          }
        }
      }
      setIsNavbarWhite(isOverRed);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);

    if (href.startsWith("#")) {
      if (pathname !== "/") {
        window.location.href = `/${href}`;
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
  };

  // Progressive interpolation between 20–80px scroll
  const progress = Math.min(Math.max((scrollY - 20) / 60, 0), 1); // 0 at top, 1 at 80px+

  const navBg = isNavbarWhite
    ? "rgba(255, 255, 255, 0.75)"
    : `rgba(255,255,255,${(0.05 + progress * 0.35).toFixed(2)})`;
  const blurPx = `${(3 + progress * 11).toFixed(1)}px`;
  const shadowOpacity = isNavbarWhite ? 0.12 : progress * 0.06;

  // Text color: black at start (with 0.45 opacity) transitioning to fully opaque black (#1A1A1A) when scrolled
  const textOpacity = (0.45 + (progress * 0.55)).toFixed(2);
  const linkColor = isNavbarWhite
    ? "#1A1A1A"
    : isPartnerPage
      ? (progress < 0.2 ? "rgba(255, 255, 255, 0.95)" : "#1A1A1A")
      : `rgba(26, 26, 26, ${textOpacity})`;

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

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 mr-6">
            <button
              onClick={() => scrollToSection("#manifesto")}
              className="font-body text-xs font-bold uppercase tracking-wider transition-colors hover:text-[#FF2B2B]"
              style={{ color: activeSection === "manifesto" ? "#FF2B2B" : linkColor }}
            >
              The Manifesto
            </button>
            <button
              onClick={() => scrollToSection("#solution")}
              className="font-body text-xs font-bold uppercase tracking-wider transition-colors hover:text-[#FF2B2B]"
              style={{ color: activeSection === "solution" ? "#FF2B2B" : linkColor }}
            >
              The Festival
            </button>
            <button
              onClick={() => scrollToSection("#subcultures")}
              className="font-body text-xs font-bold uppercase tracking-wider transition-colors hover:text-[#FF2B2B]"
              style={{ color: activeSection === "subcultures" ? "#FF2B2B" : linkColor }}
            >
              Subcultures
            </button>
            <button
              onClick={() => scrollToSection("#passes")}
              className="font-body text-xs font-bold uppercase tracking-wider transition-colors hover:text-[#FF2B2B]"
              style={{ color: activeSection === "passes" ? "#FF2B2B" : linkColor }}
            >
              Passes
            </button>
            <button
              onClick={() => scrollToSection("#team")}
              className="font-body text-xs font-bold uppercase tracking-wider transition-colors hover:text-[#FF2B2B]"
              style={{ color: activeSection === "team" ? "#FF2B2B" : linkColor }}
            >
              Team &amp; Partners
            </button>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection("#passes")}
              className="font-body text-xs font-black uppercase tracking-wider py-2 px-5 rounded-full border border-black transition-transform cursor-pointer hover:scale-105 active:scale-95 buzz-button"
              style={{
                backgroundColor: isNavbarWhite
                  ? "#FF2B2B"
                  : isPartnerPage && progress < 0.2 ? "#FFFFFF" : "#FF2B2B",
                color: isNavbarWhite
                  ? "#FFFFFF"
                  : isPartnerPage && progress < 0.2 ? "#FF2B2B" : "#FFFFFF",
                boxShadow: isNavbarWhite
                  ? "2px 2px 0px 0px #0D0D0D"
                  : isPartnerPage && progress < 0.2 ? "2px 2px 0px 0px #FFFFFF" : "2px 2px 0px 0px #0D0D0D",
                borderColor: isNavbarWhite
                  ? "#0D0D0D"
                  : isPartnerPage && progress < 0.2 ? "#FFFFFF" : "#0D0D0D",
              }}
            >
              Secure Your Pass
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
            {/* Mobile Navigation Links */}
            <div className="flex flex-col items-center gap-6 mt-16">
              <button
                onClick={() => scrollToSection("#manifesto")}
                className="font-body text-base font-bold uppercase tracking-wider transition-colors hover:text-[#FF2B2B]"
                style={{ color: activeSection === "manifesto" ? "#FF2B2B" : "#1A1A1A" }}
              >
                The Manifesto
              </button>
              <button
                onClick={() => scrollToSection("#solution")}
                className="font-body text-base font-bold uppercase tracking-wider transition-colors hover:text-[#FF2B2B]"
                style={{ color: activeSection === "solution" ? "#FF2B2B" : "#1A1A1A" }}
              >
                The Festival
              </button>
              <button
                onClick={() => scrollToSection("#subcultures")}
                className="font-body text-base font-bold uppercase tracking-wider transition-colors hover:text-[#FF2B2B]"
                style={{ color: activeSection === "subcultures" ? "#FF2B2B" : "#1A1A1A" }}
              >
                Subcultures
              </button>
              <button
                onClick={() => scrollToSection("#passes")}
                className="font-body text-base font-bold uppercase tracking-wider transition-colors hover:text-[#FF2B2B]"
                style={{ color: activeSection === "passes" ? "#FF2B2B" : "#1A1A1A" }}
              >
                Passes
              </button>
              <button
                onClick={() => scrollToSection("#team")}
                className="font-body text-base font-bold uppercase tracking-wider transition-colors hover:text-[#FF2B2B]"
                style={{ color: activeSection === "team" ? "#FF2B2B" : "#1A1A1A" }}
              >
                Team &amp; Partners
              </button>
            </div>

            {/* Mobile Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4 w-[80%] max-w-[260px]"
            >
              <button
                onClick={() => scrollToSection("#passes")}
                className="w-full text-center font-body text-sm font-black uppercase tracking-wider py-3.5 rounded-full border border-[#0D0D0D] transition-transform cursor-pointer hover:scale-103 active:scale-98"
                style={{
                  backgroundColor: "#FF2B2B",
                  color: "#FFFFFF",
                  boxShadow: "3px 3px 0px 0px #0D0D0D",
                }}
              >
                Secure Your Pass
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
