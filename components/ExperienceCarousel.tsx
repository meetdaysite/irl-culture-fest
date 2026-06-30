"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "SUBCULTURE HUBS",
    body: "Dedicated zones for each subculture — music, art, food, wellness, gaming, fitness, and more. Each hub is curated by real community leaders who know their scene inside out.",
    bg: "#0D0D0D",
    text: "#DCDCDC",
    dotColor: "#8FFB2B",
  },
  {
    title: "HOST SANDBOX",
    body: "An interactive playground where emerging and established hosts can demo their event formats, test new concepts, and receive live feedback from an audience of peers and brands.",
    bg: "#FF2D2D",
    text: "#DCDCDC",
    dotColor: "#FFD600",
  },
  {
    title: "CURATED MATCHMAKING",
    body: "AI-powered and human-curated matchmaking sessions that connect brands with the right hosts, venues, and communities for authentic, high-impact collaborations.",
    bg: "#6700a2",
    text: "#DCDCDC",
    dotColor: "#00C2FF",
  },
  {
    title: "SOCIAL MODULE",
    body: "A high-energy, content-rich social layer featuring live performances, panel discussions, networking lounges, and surprise pop-up activations across the venue.",
    bg: "#DCDCDC",
    text: "#0D0D0D",
    dotColor: "#FF2B2B",
  },
];

const getOffset = (index: number, activeIndex: number, total: number) => {
  let diff = index - activeIndex;
  while (diff < -total / 2) diff += total;
  while (diff > total / 2) diff -= total;
  return diff;
};

export default function ExperienceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const lastInteractionRef = useRef(0);
  const [width, setWidth] = useState(1200);

  // Monitor window resize to handle responsiveness
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  // Track the timestamp of the last manual interaction safely after mount/renders
  useEffect(() => {
    if (interactionCount > 0) {
      lastInteractionRef.current = Date.now();
    }
  }, [interactionCount]);

  // Auto-rotate logic:
  // - Auto-advance every 4 seconds unless hovered
  // - Pause for 6 seconds after manual interaction
  useEffect(() => {
    if (isHovered) return;

    const handleAutoPlay = () => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    };

    const timeSinceInteraction = Date.now() - lastInteractionRef.current;
    const delay = timeSinceInteraction < 6000 ? (6000 - timeSinceInteraction) : 4000;

    const timer = setTimeout(() => {
      handleAutoPlay();
    }, delay);

    return () => clearTimeout(timer);
  }, [activeIndex, isHovered, interactionCount]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
    setInteractionCount((c) => c + 1);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev + cards.length - 1) % cards.length);
    setInteractionCount((c) => c + 1);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setInteractionCount((c) => c + 1);
  };

  const handleCardClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      setInteractionCount((c) => c + 1);
    }
  };

  const getCardStyle = (offset: number) => {
    if (isMobile) {
      // Swipeable single card layout for screens under 640px
      if (offset === 0) {
        return {
          x: 0,
          scale: 1,
          rotateY: 0,
          opacity: 1,
          zIndex: 30,
          pointerEvents: "auto" as const,
        };
      } else {
        return {
          x: offset > 0 ? 300 : -300,
          scale: 0.9,
          rotateY: 0,
          opacity: 0,
          zIndex: 10,
          pointerEvents: "none" as const,
        };
      }
    }

    if (isTablet) {
      // Tablet perspective coverflow layout
      if (offset === 0) {
        return {
          x: 0,
          scale: 1,
          rotateY: 0,
          opacity: 1,
          zIndex: 30,
          pointerEvents: "auto" as const,
        };
      } else if (offset === 1) {
        return {
          x: 160,
          scale: 0.85,
          rotateY: -20,
          opacity: 0.7,
          zIndex: 20,
          pointerEvents: "auto" as const,
        };
      } else if (offset === -1) {
        return {
          x: -160,
          scale: 0.85,
          rotateY: 20,
          opacity: 0.7,
          zIndex: 20,
          pointerEvents: "auto" as const,
        };
      } else {
        return {
          x: offset > 0 ? 300 : -300,
          scale: 0.7,
          rotateY: 0,
          opacity: 0,
          zIndex: 10,
          pointerEvents: "none" as const,
        };
      }
    }

    // Standard Desktop 3D Coverflow layout
    if (offset === 0) {
      return {
        x: 0,
        scale: 1,
        rotateY: 0,
        opacity: 1,
        zIndex: 30,
        pointerEvents: "auto" as const,
      };
    } else if (offset === 1) {
      return {
        x: 260,
        scale: 0.8,
        rotateY: -35,
        opacity: 0.6,
        zIndex: 20,
        pointerEvents: "auto" as const,
      };
    } else if (offset === -1) {
      return {
        x: -260,
        scale: 0.8,
        rotateY: 35,
        opacity: 0.6,
        zIndex: 20,
        pointerEvents: "auto" as const,
      };
    } else {
      return {
        x: offset > 0 ? 400 : -400,
        scale: 0.6,
        rotateY: 0,
        opacity: 0,
        zIndex: 10,
        pointerEvents: "none" as const,
      };
    }
  };

  return (
    <div
      role="region"
      aria-label="Festival experience carousel"
      className="relative w-full max-w-6xl mx-auto flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Coverflow Wrapper */}
      <div
        className="relative w-full h-[480px] sm:h-[500px] flex items-center justify-center overflow-visible"
        style={{ perspective: "1200px" }}
      >
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-[#FF2D2D] focus:outline-none focus:ring-2 focus:ring-[#FF2D2D] cursor-pointer"
          aria-label="Previous experience"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-[#FF2D2D] focus:outline-none focus:ring-2 focus:ring-[#FF2D2D] cursor-pointer"
          aria-label="Next experience"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* 3D Transform Track */}
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {cards.map((card, i) => {
            const offset = getOffset(i, activeIndex, cards.length);
            const style = getCardStyle(offset);
            const isCenter = offset === 0;

            return (
              <motion.div
                key={card.title}
                style={{
                  pointerEvents: style.pointerEvents,
                  zIndex: style.zIndex,
                  transformStyle: "preserve-3d",
                  background: card.bg,
                  color: card.text,
                  boxShadow: isCenter
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                    : "0 10px 20px -5px rgba(0, 0, 0, 0.3)",
                }}
                animate={{
                  x: style.x,
                  scale: style.scale,
                  rotateY: style.rotateY,
                  opacity: style.opacity,
                  z: isMobile ? 0 : offset === 0 ? 0 : -150,
                }}
                transition={{
                  type: "tween",
                  ease: [0.25, 1, 0.5, 1], // premium cubic-bezier transition
                  duration: 0.6,
                }}
                drag={isCenter ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(event, info) => {
                  if (!isCenter) return;
                  const threshold = 50;
                  if (info.offset.x < -threshold) {
                    handleNext();
                  } else if (info.offset.x > threshold) {
                    handlePrev();
                  }
                }}
                onClick={() => handleCardClick(i)}
                className={`absolute w-[290px] sm:w-[340px] h-[380px] sm:h-[440px] rounded-2xl p-8 flex flex-col justify-start select-none cursor-pointer`}
              >
                {/* Card Title & Icon */}
                <div className="flex items-center gap-3 mb-6">
                  {/* Pulsing Icon Dot */}
                  <span
                    className="inline-block w-3 h-3 rounded-full flex-shrink-0 animate-pulse"
                    style={{ background: card.dotColor }}
                  />
                  <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-base sm:text-lg uppercase tracking-wider">
                    {card.title}
                  </h3>
                </div>

                {/* Card Body */}
                <p className="font-[family-name:var(--font-space-grotesk)] text-[14px] sm:text-[15px] leading-relaxed opacity-90">
                  {card.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dot Indicators */}
      <div className="flex justify-center items-center gap-3 mt-4">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === i
                ? "w-8 bg-[#FF2D2D]"
                : "w-3 bg-black/30 hover:bg-black/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
