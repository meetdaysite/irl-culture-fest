"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Gagaan Singh Nagi",
    org: "meetday.ai",
    initials: "GN",
    gradient: "linear-gradient(135deg, #FF2D2D, #FF6B35)",
    glowColor: "#FF2D2D",
    image: "https://picsum.photos/seed/gagaan/280/380"
  },
  {
    name: "Tumul Rishabh",
    org: "meetday.ai",
    initials: "TR",
    gradient: "linear-gradient(135deg, #FF6B35, #FFD600)",
    glowColor: "#FF6B35",
    image: "https://picsum.photos/seed/tumul/280/380"
  },
  {
    name: "Madhur Mohan",
    org: "StartupNews.fyi",
    initials: "MM",
    gradient: "linear-gradient(135deg, #FFD600, #8FFB2B)",
    glowColor: "#FFD600",
    image: "https://picsum.photos/seed/madhur/280/380"
  },
  {
    name: "Vanshikaa Oberoi",
    org: "The Fingerprint Lab",
    initials: "VO",
    gradient: "linear-gradient(135deg, #BF5FFF, #00C2FF)",
    glowColor: "#BF5FFF",
    image: "https://picsum.photos/seed/vanshikaa/280/380"
  },
  {
    name: "Aaquib Hussain",
    org: "Freeflow Ventures",
    initials: "AH",
    gradient: "linear-gradient(135deg, #00C2FF, #8FFB2B)",
    glowColor: "#00C2FF",
    image: "https://picsum.photos/seed/aaquib/280/380"
  }
];

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [isPaused, setIsPaused] = useState(false);
  
  const autoRotateInterval = useRef<NodeJS.Timeout | null>(null);
  const manualPauseTimeout = useRef<NodeJS.Timeout | null>(null);

  const startAutoRotation = () => {
    if (autoRotateInterval.current) clearInterval(autoRotateInterval.current);
    autoRotateInterval.current = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prev) => (prev + 1) % 5);
      }
    }, 3000);
  };

  useEffect(() => {
    startAutoRotation();
    return () => {
      if (autoRotateInterval.current) clearInterval(autoRotateInterval.current);
      if (manualPauseTimeout.current) clearTimeout(manualPauseTimeout.current);
    };
  }, [isPaused]);

  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    
    if (manualPauseTimeout.current) clearTimeout(manualPauseTimeout.current);
    
    manualPauseTimeout.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  const handleImageError = (name: string) => {
    setImageErrors((prev) => ({ ...prev, [name]: true }));
  };

  // Helper to render card media with correct size properties
  const renderCardMedia = (person: typeof team[0], isLarge: boolean) => {
    const hasError = imageErrors[person.name];
    if (hasError) {
      return (
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ background: person.gradient }}
        >
          <span
            className="font-display text-white select-none"
            style={{ fontSize: isLarge ? "64px" : "32px" }}
          >
            {person.initials}
          </span>
        </div>
      );
    }

    return (
      <div className="relative w-full h-full">
        <Image
          src={person.image}
          alt={person.name}
          fill
          sizes={isLarge ? "320px" : "220px"}
          className="object-cover"
          onError={() => handleImageError(person.name)}
        />
      </div>
    );
  };

  // Dynamic layout values for haphazard placing
  const getCardStyle = (offset: number) => {
    switch (offset) {
      case 0: // Center spotlight
        return {
          x: 0,
          y: 0,
          scale: 1.15,
          rotate: 0,
          zIndex: 30,
          opacity: 1.0,
          width: 320,
          height: 440,
        };
      case -1: // Immediate Left
        return {
          x: -280,
          y: 35,
          scale: 0.9,
          rotate: -7,
          zIndex: 20,
          opacity: 0.85,
          width: 220,
          height: 290,
        };
      case -2: // Far Left
        return {
          x: -500,
          y: -15,
          scale: 0.75,
          rotate: -14,
          zIndex: 10,
          opacity: 0.65,
          width: 180,
          height: 240,
        };
      case 1: // Immediate Right
        return {
          x: 280,
          y: 45,
          scale: 0.95,
          rotate: 9,
          zIndex: 20,
          opacity: 0.85,
          width: 230,
          height: 310,
        };
      case 2: // Far Right
        return {
          x: 500,
          y: -25,
          scale: 0.78,
          rotate: 16,
          zIndex: 10,
          opacity: 0.65,
          width: 190,
          height: 250,
        };
      default:
        return {
          x: 0,
          y: 0,
          scale: 0,
          rotate: 0,
          zIndex: 0,
          opacity: 0,
          width: 200,
          height: 300,
        };
    }
  };

  return (
    <section
      id="team"
      className="relative py-24 px-8 overflow-hidden bg-[#F5F0E8]"
    >
      {/* Decorative Star Elements */}
      <span className="absolute top-8 right-8 font-display text-[#FF2D2D] opacity-[0.06] text-[160px] pointer-events-none select-none leading-none">
        ✦
      </span>
      <span className="absolute bottom-8 left-8 font-display text-[#BF5FFF] opacity-[0.06] text-[120px] pointer-events-none select-none leading-none">
        ✦
      </span>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <p
          className="font-body text-[#FF2D2D] mb-6"
          style={{
            fontSize: "clamp(10px, 1vw, 12px)",
            letterSpacing: "0.18em",
          }}
        >
          The Team ————
        </p>

        <h2
          className="font-display text-[#0D0D0D] mb-3"
          style={{
            fontSize: "clamp(40px, 6vw, 88px)",
            lineHeight: 0.95,
            letterSpacing: "0.01em",
          }}
        >
          TEAM BUILDING THE IRL CULTURE FEST.
        </h2>

        <p className="font-body text-[#555] text-base sm:text-lg mb-8 max-w-3xl">
          Designed by a team curating experiences for 20+ years with 100+ global brands.
        </p>

        {/* Thin Red Horizontal Divider */}
        <div className="w-[120px] h-[1px] bg-[#FF2D2D] opacity-20 mb-16" />

        {/* Carousel Zone Wrapper */}
        <div
          className="relative flex items-center justify-center min-h-[520px] pb-10 overflow-visible w-full max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            if (!manualPauseTimeout.current) {
              setIsPaused(false);
            }
          }}
        >
          {team.map((person, idx) => {
            // Calculate wrapping index difference (-2, -1, 0, 1, 2)
            let offset = (idx - activeIndex + 5) % 5;
            if (offset > 2) offset -= 5;

            const cardStyle = getCardStyle(offset);
            const isCenter = offset === 0;

            return (
              <motion.div
                key={person.name}
                onClick={() => handleManualSelect(idx)}
                style={{
                  width: cardStyle.width,
                  height: cardStyle.height,
                  boxShadow: isCenter ? `0 0 60px 10px ${person.glowColor}40` : "none",
                  zIndex: cardStyle.zIndex,
                }}
                animate={{
                  x: cardStyle.x,
                  y: cardStyle.y,
                  scale: cardStyle.scale,
                  rotate: cardStyle.rotate,
                  opacity: cardStyle.opacity,
                }}
                transition={{ type: "spring", stiffness: 280, damping: 28 }}
                className="absolute flex flex-col justify-between rounded-[20px] overflow-hidden bg-[#0D0D0D] cursor-pointer group select-none shadow-none origin-center"
              >
                {/* Photo Area */}
                <div className="relative w-full h-full overflow-hidden bg-zinc-800 flex-grow">
                  {renderCardMedia(person, isCenter)}
                </div>

                {/* Info strip */}
                <div
                  style={{ height: isCenter ? 80 : 60 }}
                  className="px-4 flex flex-col justify-center bg-[#0D0D0D] w-full shrink-0 border-t border-white/5"
                >
                  <span
                    style={{ fontSize: isCenter ? "18px" : "13px" }}
                    className="font-display text-white tracking-wide block truncate"
                  >
                    {person.name}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-ping"
                      style={{ backgroundColor: person.glowColor }}
                    />
                    <span
                      style={{
                        color: isCenter ? person.glowColor : "#999",
                        fontSize: isCenter ? "12px" : "10px",
                      }}
                      className="font-body uppercase tracking-wider font-semibold truncate block"
                    >
                      {person.org}
                    </span>
                  </div>
                </div>

                {/* Arrow hint on hover for non-active cards */}
                {!isCenter && (
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-2 transition-all duration-200 pointer-events-none text-white text-[10px] font-body bg-black/60 px-2 py-0.5 rounded">
                    ↑ click to spotlight
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Progress Dot Indicators */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {team.map((person, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={`dot-${person.name}`}
                onClick={() => handleManualSelect(idx)}
                className="relative h-2 cursor-pointer focus:outline-none"
              >
                <motion.div
                  className="rounded-full h-full"
                  initial={false}
                  animate={{
                    width: isActive ? 28 : 8,
                    backgroundColor: isActive ? person.glowColor : "#0D0D0D",
                    opacity: isActive ? 1.0 : 0.25,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
