"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Footer() {
  const pathname = usePathname();
  const isPodcast = pathname === "/podcast";

  const scrollToSection = (href: string) => {
    if (href.startsWith("/")) {
      if (href.includes("#")) {
        const [path, hash] = href.split("#");
        if (pathname === path) {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
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

  const footerBg = isPodcast ? "#0D0D0D" : "#1A1A1A";
  const footerTextColor = "text-white/80";
  const footerTextMuted = "text-white/40";
  const footerLinkColor = "text-white hover:text-[#FF2B2B]";
  const footerDividerBg = "bg-white/10";

  const links = isPodcast
    ? [
        { label: "Manifesto", href: "/podcast/#manifesto" },
        { label: "Pillars", href: "/podcast/#pillars" },
        { label: "Benefits", href: "/podcast/#benefits" },
        { label: "Host", href: "/podcast/#host" },
        { label: "Process", href: "/podcast/#process" },
      ]
    : [
        { label: "The Manifesto", href: "#manifesto" },
        { label: "The Festival", href: "#solution" },
        { label: "Subcultures", href: "#subcultures" },
        { label: "Team & Partners", href: "#team" },
        { label: "Passes", href: "#passes" },
      ];

  return (
    <footer
      className="pt-16 pb-8 px-8"
      style={{
        background: footerBg,
        borderTop: isPodcast ? "2px solid #222" : "2px solid #333",
        backdropFilter: "none",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col items-start space-y-4 md:col-span-2">
            <button
              onClick={() => scrollToSection(isPodcast ? "/podcast/#hero" : "#top")}
              className="flex items-center cursor-pointer"
            >
              <img
                src={isPodcast ? "/images/podcast/IRL Podcast black bg.svg" : "/footer-logo.png"}
                alt={isPodcast ? "IRL Podcast Logo" : "IRL Culture Fest Logo"}
                className="h-16 sm:h-20 object-contain"
              />
            </button>
            <p className={`font-body text-base ${footerTextColor} max-w-md leading-relaxed`}>
              {isPodcast
                ? "Deep, honest conversations with the curators and community builders crafting offline culture in India."
                : "Celebrating the IRL Culture Builders & the ecosystem making it happen."}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col space-y-3 md:pl-8">
            <span className={`font-body text-xs font-bold uppercase tracking-wider ${footerTextMuted}`}>
              Navigation
            </span>
            <div className="flex flex-col space-y-2.5">
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className={`w-fit text-left font-body text-base ${footerLinkColor} transition-colors cursor-pointer`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Follow */}
          <div className="flex flex-col space-y-4 md:items-end md:text-right">
            <div className="w-full max-w-[120px] md:text-right flex flex-col space-y-4 md:ml-auto">
              <span className={`font-body text-xs font-bold uppercase tracking-wider ${footerTextMuted} block`}>
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
                  className={`${footerTextColor} hover:text-[#FF2B2B] transition-colors`}
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
                  className={`${footerTextColor} hover:text-[#FF2B2B] transition-colors`}
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
                  className={`${footerTextColor} hover:text-[#FF2B2B] transition-colors`}
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
        <div className={`h-[1px] w-full ${footerDividerBg} my-6`}></div>

        {/* Bottom Bar: Links, Powered by, Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Clickable Domain & Email */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center">
            <a
              href="https://www.irlculturefest.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-body text-sm ${footerTextColor} hover:text-[#FF2B2B] transition-colors`}
            >
              www.irlculturefest.com
            </a>
            <span className={isPodcast ? "hidden sm:inline text-black/20" : "hidden sm:inline text-white/20"}>|</span>
            <a
              href="mailto:info@meetday.ai"
              className={`font-body text-sm ${footerTextColor} hover:text-[#FF2B2B] transition-colors`}
            >
              info@meetday.ai
            </a>
          </div>

          {/* Copyright & Powered By */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center">
            <p className={`font-body text-xs ${footerTextMuted}`}>
              © 2026 IRL Culture Fest. All rights reserved.
            </p>
            <span className={isPodcast ? "hidden sm:inline text-black/20" : "hidden sm:inline text-white/20"}>|</span>
            <p className={`font-body text-xs ${footerTextMuted}`}>
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
