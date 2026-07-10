"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isPodcast = pathname === "/podcast";

  const [activeSection, setActiveSection] = useState("");
  const [clickedSection, setClickedSection] = useState("");
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);
  const [hoveredMobileTab, setHoveredMobileTab] = useState<number | null>(null);

  useEffect(() => {
    const sections = isPodcast
      ? ["benefits", "host", "process"]
      : ["experience", "passes"];

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
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleUserScroll = () => {
      setClickedSection("");
    };
    window.addEventListener("wheel", handleUserScroll, { passive: true });
    window.addEventListener("touchmove", handleUserScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("touchmove", handleUserScroll);
    };
  }, []);
  const scrollToSection = (href: string) => {
    setMobileOpen(false);

    const targetId = href.includes("#") ? href.split("#")[1] : "";
    if (targetId) {
      setClickedSection(targetId);
      setActiveSection(targetId);
    }

    if (href.startsWith("/")) {
      if (href.includes("#")) {
        const [path, hash] = href.split("#");
        if (pathname === path) {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          window.location.href = href;
        }
      } else {
        window.location.href = href;
      }
      return;
    }

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

  const navBg = "rgba(255, 255, 255, 0.7)";
  const blurPx = `${(3 + progress * 11).toFixed(1)}px`;
  const shadowOpacity = progress * 0.06;

  const linkColor = "rgba(26, 26, 26, 0.85)";

  const links = isPodcast
    ? [
      { label: "Benefits", href: "/podcast/#benefits" },
      { label: "Host", href: "/podcast/#host" },
      { label: "Process", href: "/podcast/#process" },
    ]
    : [
      { label: "Inside the Fest", href: "#experience" },
      { label: "Get Passes", href: "#passes" },
    ];

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
            onClick={() => scrollToSection(isPodcast ? "/podcast/#hero" : "#hero")}
            className="flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <img
              src={isPodcast ? "/images/podcast/IRL Podcast white bg.svg" : "/footer-logo.png?v=2"}
              alt={isPodcast ? "IRL Podcast Logo" : "IRL Culture Fest Logo"}
              className="h-[45px] sm:h-[50px] object-contain"
            />
          </button>

          <div className="hidden md:flex items-center gap-4 mr-6">
            {links.map((link, idx) => {
              const targetId = link.href.includes("#") ? link.href.split("#")[1] : "";
              const isActive = clickedSection ? clickedSection === targetId : activeSection === targetId;
              const isHovered = hoveredTab === idx;
              return (
                <div key={link.label} className="flex items-center gap-4">
                  <button
                    onClick={() => scrollToSection(link.href)}
                    onMouseEnter={() => setHoveredTab(idx)}
                    onMouseLeave={() => setHoveredTab(null)}
                    className="font-body text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    style={{ color: isActive || isHovered ? "#FF2B2B" : linkColor }}
                  >
                    {link.label}
                  </button>
                  {idx < links.length - 1 && (
                    <span className="text-[#1A1A1A]/30 text-xs font-light select-none">|</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://meetday.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs font-black tracking-wider py-2 px-5 rounded-full border border-black bg-white text-black transition-transform cursor-pointer hover:scale-105 active:scale-95 shadow-[2px_2px_0px_0px_#FF2B2B] text-center"
            >
              meetday.ai
            </a>
            {isPodcast ? (
              <button
                onClick={() => scrollToSection("/")}
                className="font-body text-xs font-black uppercase tracking-wider py-2 px-5 rounded-full border border-black bg-black text-white transition-transform cursor-pointer hover:scale-105 active:scale-95 shadow-[2px_2px_0px_0px_#0D0D0D]"
              >
                IRL Culture Fest
              </button>
            ) : (
              <button
                onClick={() => scrollToSection("/podcast")}
                className="font-body text-xs font-black uppercase tracking-wider py-2 px-5 rounded-full border border-black bg-black text-white transition-transform cursor-pointer hover:scale-105 active:scale-95 shadow-[2px_2px_0px_0px_#0D0D0D]"
              >
                IRL Culture Podcast
              </button>
            )}
            <button
              onClick={() => scrollToSection(isPodcast ? "/podcast/#collaborate" : "#passes")}
              className="font-body text-xs font-black uppercase tracking-wider py-2 px-5 rounded-full border border-black transition-transform cursor-pointer hover:scale-105 active:scale-95 buzz-button"
              style={{
                backgroundColor: "#FF2B2B",
                color: "#FFFFFF",
                boxShadow: "2px 2px 0px 0px #0D0D0D",
                borderColor: "#0D0D0D",
              }}
            >
              {isPodcast ? "Become Our Guest" : "Prtner With Us"}
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
            className="fixed inset-0 z-[55] flex flex-col items-center justify-center gap-8"
            style={{
              background: isPodcast ? "rgba(255, 255, 255, 0.85)" : "#ffffff",
              backdropFilter: isPodcast ? "blur(12px)" : "none",
            }}
          >
            {/* Mobile Navigation Links */}
            <div className="flex flex-col items-center gap-6 mt-16">
              {links.map((link, idx) => {
                const targetId = link.href.includes("#") ? link.href.split("#")[1] : "";
                const isActive = activeSection === targetId;
                const isHovered = hoveredMobileTab === idx;
                return (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    onMouseEnter={() => setHoveredMobileTab(idx)}
                    onMouseLeave={() => setHoveredMobileTab(null)}
                    className="font-body text-base font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    style={{ color: isActive || isHovered ? "#FF2B2B" : "#1A1A1A" }}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Mobile Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4 w-[80%] max-w-[260px]"
            >
              <a
                href="https://meetday.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center font-body text-sm font-black tracking-wider py-3.5 rounded-full border border-black bg-white text-black transition-transform cursor-pointer hover:scale-103 active:scale-98 shadow-[3px_3px_0px_0px_#FF2B2B]"
              >
                meetday.ai
              </a>
              {isPodcast ? (
                <button
                  onClick={() => scrollToSection("/")}
                  className="w-full text-center font-body text-sm font-black uppercase tracking-wider py-3.5 rounded-full border border-black bg-black text-white transition-transform cursor-pointer hover:scale-103 active:scale-98 shadow-[3px_3px_0px_0px_#0D0D0D]"
                >
                  IRL Culture Fest
                </button>
              ) : (
                <button
                  onClick={() => scrollToSection("/podcast")}
                  className="w-full text-center font-body text-sm font-black uppercase tracking-wider py-3.5 rounded-full border border-black bg-black text-white transition-transform cursor-pointer hover:scale-103 active:scale-98 shadow-[3px_3px_0px_0px_#0D0D0D]"
                >
                  Podcast
                </button>
              )}
              <button
                onClick={() => scrollToSection(isPodcast ? "/podcast/#collaborate" : "#passes")}
                className="w-full text-center font-body text-sm font-black uppercase tracking-wider py-3.5 rounded-full border border-[#0D0D0D] transition-transform cursor-pointer hover:scale-103 active:scale-98"
                style={{
                  backgroundColor: "#FF2B2B",
                  color: "#FFFFFF",
                  boxShadow: "3px 3px 0px 0px #0D0D0D",
                }}
              >
                {isPodcast ? "Pitch Your Story" : "Secure Your Pass"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
