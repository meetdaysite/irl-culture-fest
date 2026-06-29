"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Cities", href: "#cities" },
  { label: "Team", href: "#team" },
  { label: "Partner", href: "#partner" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="pt-16 pb-8 px-6"
      style={{ background: "#0D0D0D", borderTop: "2px solid #FF2D2D" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-baseline gap-0.5 cursor-pointer"
          >
            <span className="font-[family-name:var(--font-abril-fatface)] text-2xl text-[#FF2D2D]">
              IRL
            </span>
            <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-medium text-white ml-1">
              Culture Fest
            </span>
            <sup className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold text-[#FF2D2D] ml-0.5">
              2026
            </sup>
          </button>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="font-[family-name:var(--font-space-grotesk)] text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Powered By */}
          <p className="font-[family-name:var(--font-space-grotesk)] text-xs text-white/40">
            Powered by meetday.ai
          </p>
        </div>

        {/* Second Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-center">
          <span className="font-[family-name:var(--font-space-grotesk)] text-sm text-white/60">
            www.irlculturefest.com
          </span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="font-[family-name:var(--font-space-grotesk)] text-sm text-white/60">
            info@meetday.ai
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-space-grotesk)] text-xs text-white/40">
            © 2026 IRL Culture Fest. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {/* Instagram */}
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-white/60 hover:text-[#FF2D2D] transition-colors"
              aria-label="Instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-white/60 hover:text-[#FF2D2D] transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </motion.a>

            {/* Twitter / X */}
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-white/60 hover:text-[#FF2D2D] transition-colors"
              aria-label="Twitter"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
