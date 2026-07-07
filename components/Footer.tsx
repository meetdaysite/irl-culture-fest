"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Team", href: "#team" },
  { label: "Partner", href: "/partner" },
  { label: "Attend", href: "/attend" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      if (href === "#top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer
      className="pt-16 pb-8 px-8"
      style={{ background: "#1A1A1A", borderTop: "2px solid #333" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Columns Grid - Using a 4-column span for wider distribution */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Logo & Tagline (spans 2 columns on desktop for wider footprint) */}
          <div className="flex flex-col items-start space-y-4 md:col-span-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center cursor-pointer"
            >
              <Image
                src="/footer-logo.png"
                alt="IRL Culture Fest Logo"
                width={120}
                height={34}
                style={{ width: "auto", height: "auto" }}
                className="h-8 object-contain"
              />
            </button>
            <p className="font-[family-name:var(--font-space-grotesk)] text-base text-white/80 max-w-md leading-relaxed">
              Celebrating the IRL Culture Builders & the ecosystem making it happen.
            </p>
          </div>

          {/* Column 2: Navigation (shifted to the right slightly by the 4-column layout) */}
          <div className="flex flex-col space-y-3 md:pl-8">
            <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold uppercase tracking-wider text-white/40">
              Navigation
            </span>
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="w-fit text-left font-[family-name:var(--font-space-grotesk)] text-base text-white/80 hover:text-[#FF2B2B] transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Follow (positioned in the extreme right column) */}
          <div className="flex flex-col space-y-4 md:items-end md:text-right">
            <div className="w-full max-w-[120px] md:text-right flex flex-col space-y-4 md:ml-auto">
              <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold uppercase tracking-wider text-white/40 block">
                Follow
              </span>
              {/* Social Icons */}
              <div className="flex items-center gap-5 md:justify-end">
                {/* Instagram */}
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-white/80 hover:text-[#FF2B2B] transition-colors"
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
                  className="text-white/80 hover:text-[#FF2B2B] transition-colors"
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
                  className="text-white/80 hover:text-[#FF2B2B] transition-colors"
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
        </div>

        {/* Divider Line */}
        <div className="border-t border-white/10 my-6"></div>

        {/* Bottom Bar: Links, Powered by, Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Clickable Domain & Email */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center">
            <a
              href="https://www.irlculturefest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-space-grotesk)] text-sm text-white/80 hover:text-[#FF2B2B] transition-colors"
            >
              www.irlculturefest.com
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <a
              href="tel:+918130339180"
              className="font-[family-name:var(--font-space-grotesk)] text-sm text-white/80 hover:text-[#FF2B2B] transition-colors"
            >
              +91 81303 39180
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <a
              href="mailto:info@meetday.ai"
              className="font-[family-name:var(--font-space-grotesk)] text-sm text-white/80 hover:text-[#FF2B2B] transition-colors"
            >
              info@meetday.ai
            </a>
          </div>

          {/* Copyright & Powered By */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center">
            <p className="font-[family-name:var(--font-space-grotesk)] text-xs text-white/40">
              © 2026 IRL Culture Fest. All rights reserved.
            </p>
            <span className="hidden sm:inline text-white/20">|</span>
            <p className="font-[family-name:var(--font-space-grotesk)] text-xs text-white/40">
              Powered by{" "}
              <a
                href="https://meetday.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF2B2B] transition-colors underline"
              >
                meetday.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
