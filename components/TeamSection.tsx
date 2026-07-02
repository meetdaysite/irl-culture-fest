"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  {
    name: "Gagaan Singh Nagi",
    org: "meetday.ai",
    initials: "GN",
    gradient: "linear-gradient(135deg, #FF2B2B, #f2af29)",
    glowColor: "#FF2B2B",
    image: "https://picsum.photos/seed/gagaan/280/380",
    borderColor: "#FF2B2B",
    shadowColor: "#0D0D0D",
    accentDot: "#f2af29",
  },
  {
    name: "Tumul Rishabh",
    org: "meetday.ai",
    initials: "TR",
    gradient: "linear-gradient(135deg, #f2af29, #FF2B2B)",
    glowColor: "#f2af29",
    image: "https://picsum.photos/seed/tumul/280/380",
    borderColor: "#f2af29",
    shadowColor: "#0D0D0D",
    accentDot: "#FF2B2B",
  },
  {
    name: "Madhur Mohan",
    org: "StartupNews.fyi",
    initials: "MM",
    gradient: "linear-gradient(135deg, #f2af29, #FF2B2B)",
    glowColor: "#f2af29",
    image: "https://picsum.photos/seed/madhur/280/380",
    borderColor: "#f2af29",
    shadowColor: "#0D0D0D",
    accentDot: "#FF2B2B",
  },
  {
    name: "Vanshikaa Oberoi",
    org: "The Fingerprint Lab",
    initials: "VO",
    gradient: "linear-gradient(135deg, #FF2B2B, #f2af29)",
    glowColor: "#FF2B2B",
    image: "https://picsum.photos/seed/vanshikaa/280/380",
    borderColor: "#FF2B2B",
    shadowColor: "#0D0D0D",
    accentDot: "#f2af29",
  },
  {
    name: "Aaquib Hussain",
    org: "Freeflow Ventures",
    initials: "AH",
    gradient: "linear-gradient(135deg, #FF2B2B, #f2af29)",
    glowColor: "#FF2B2B",
    image: "https://picsum.photos/seed/aaquib/280/380",
    borderColor: "#FF2B2B",
    shadowColor: "#0D0D0D",
    accentDot: "#f2af29",
  },
];

export default function TeamSection() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const lastInteractionRef = useRef(0);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
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
  const maxIndex = isMobile ? 4 : isTablet ? 3 : 2;

  // Track manual interaction
  useEffect(() => {
    if (interactionCount > 0) {
      lastInteractionRef.current = Date.now();
    }
  }, [interactionCount]);

  // Autoplay loop every 1.5 seconds
  useEffect(() => {
    if (isHovered) return;

    const handleAutoPlay = () => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const timeSinceInteraction = Date.now() - lastInteractionRef.current;
    const delay = timeSinceInteraction < 5000 ? (5000 - timeSinceInteraction) : 3000;

    const timer = setTimeout(() => {
      handleAutoPlay();
    }, delay);

    return () => clearTimeout(timer);
  }, [activeIndex, isHovered, interactionCount, maxIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setInteractionCount((c) => c + 1);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    setInteractionCount((c) => c + 1);
  };

  const handleImageError = (name: string) => {
    setImageErrors((prev) => ({ ...prev, [name]: true }));
  };

  const renderCardMedia = (person: typeof team[0]) => {
    const hasError = imageErrors[person.name];
    if (hasError) {
      return (
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ background: person.gradient }}
        >
          <span
            className="font-display text-white select-none text-4xl"
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
          sizes="280px"
          className="object-cover"
          onError={() => handleImageError(person.name)}
        />
      </div>
    );
  };

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#F5F0E8]"
      style={{ paddingTop: 60, paddingBottom: 140 }}
    >
      {/* Decorative Star Elements */}
      <span className="absolute top-8 right-8 font-display text-[#FF2B2B] opacity-[0.06] text-[160px] pointer-events-none select-none leading-none">
        ✦
      </span>
      <span className="absolute bottom-8 left-8 font-display text-[#f2af29] opacity-[0.06] text-[120px] pointer-events-none select-none leading-none">
        ✦
      </span>

      <div
        className="mx-auto relative z-10"
        style={{ maxWidth: 1200, paddingLeft: 48, paddingRight: 48 }}
      >
        <h2
          className="font-display text-[#0D0D0D]"
          style={{
            fontSize: "clamp(24px, 3.5vw, 40px)",
            lineHeight: 1.0,
            letterSpacing: "0.01em",
            marginBottom: 20,
          }}
        >
          TEAM BUILDING THE IRL CULTURE FEST.
        </h2>

        <p className="font-body text-[#555] text-base sm:text-lg mb-8 max-w-3xl">
          Designed by a team curating experiences for 20+ years with 100+ global brands.
        </p>

        {/* Thin Red Horizontal Divider */}
        <div className="w-[120px] h-[1px] bg-[#FF2B2B] opacity-20 mb-6" />

        {/* Carousel Container */}
        <div
          role="region"
          aria-label="Team members carousel"
          className="relative w-full max-w-[980px] mx-auto flex items-center justify-center overflow-visible"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-12 lg:-left-16 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-[#FF2B2B] focus:outline-none focus:ring-2 focus:ring-[#FF2B2B] cursor-pointer"
            aria-label="Previous team member"
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

          {/* Viewport Window for exactly 3 cards on desktop (912px width including margins/shadows) */}
          <div className="overflow-hidden w-[304px] sm:w-[608px] md:w-[912px] py-6 px-3">
            <motion.div
              className="flex gap-[24px]"
              animate={{ x: -activeIndex * (280 + 24) }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {team.map((person, i) => {
                const cardBg = i % 2 === 0 ? "#FF2B2B" : "#f2af29";

                const isCardHovered = hoveredCardIndex === i;

                return (
                  <motion.div
                    key={person.name}
                    onMouseEnter={() => setHoveredCardIndex(i)}
                    onMouseLeave={() => setHoveredCardIndex(null)}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: `6px 6px 0px 0px #0D0D0D`,
                      transition: { duration: 0.2, ease: "easeOut" },
                    }}
                    style={{
                      width: 280,
                      height: 280,
                      background: cardBg,
                      border: `7px solid ${cardBg}`,
                      borderRadius: 14,
                      padding: 0,
                      boxShadow: `4px 4px 0px 0px ${person.shadowColor}`,
                      position: "relative",
                      overflow: "visible",
                      flexShrink: 0,
                      cursor: "pointer",
                    }}
                  >
                    {/* Accent dot (yellow for red cards, red for yellow cards) */}
                    <div
                      style={{
                        position: "absolute",
                        top: -5,
                        right: -5,
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        background: cardBg === "#FF2B2B" ? "#f2af29" : "#FF2B2B",
                        border: "2.5px solid #FFFFFF",
                        zIndex: 10,
                      }}
                    />

                    {/* Inner white square (visible from bottom & right card background) */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: 220,
                        height: 220,
                        background: "#FFFFFF",
                        padding: 8,
                        borderRadius: "7px 0 8px 0",
                        overflow: "hidden",
                      }}
                    >
                      <motion.div
                        className="relative w-full h-full rounded-md overflow-hidden"
                        animate={{ rotate: isCardHovered ? 0 : -3 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        style={{ transformOrigin: "top left" }}
                      >
                        {renderCardMedia(person)}
                      </motion.div>
                    </div>

                    {/* Name tag overlaid at bottom */}
                    <motion.div
                      animate={{ rotate: isCardHovered ? 0 : 3 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      style={{
                        position: "absolute",
                        bottom: 12,
                        right: 12,
                        background: "#FFFFFF",
                        border: `2.5px solid ${cardBg}`,
                        borderRadius: 6,
                        paddingTop: 4,
                        paddingBottom: 4,
                        paddingLeft: 10,
                        paddingRight: 10,
                        zIndex: 15,
                        textAlign: "right",
                        transformOrigin: "bottom right",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 12,
                          color: "#0D0D0D",
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                          fontWeight: 900,
                          lineHeight: 1.2,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {person.name}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 10,
                          color: cardBg,
                          lineHeight: 1.2,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {person.org}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-12 lg:-right-16 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-[#FF2B2B] focus:outline-none focus:ring-2 focus:ring-[#FF2B2B] cursor-pointer"
            aria-label="Next team member"
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
        </div>
      </div>

      {/* Torn Paper Divider → next section: PartnerCTA #FF2D2D */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100%",
          height: "60px",
          position: "absolute",
          bottom: "-2px",
          left: 0,
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <path
          d="M0,25 L15,18 L30,28 L45,16 L60,26 L75,14 L90,24 L105,12 L120,22 L135,14 L150,25 L165,16 L180,28 L195,18 L210,30 L225,20 L240,32 L255,22 L270,34 L285,24 L300,36 L315,26 L330,38 L345,28 L360,40 L375,30 L390,42 L405,32 L420,44 L435,34 L450,45 L465,35 L480,46 L495,36 L510,48 L525,38 L540,49 L555,39 L570,50 L585,40 L600,52 L615,42 L630,53 L645,43 L660,54 L675,44 L690,55 L705,45 L720,55 L735,46 L750,54 L765,44 L780,52 L795,42 L810,50 L825,40 L840,48 L855,38 L870,46 L885,36 L900,44 L915,34 L930,42 L945,32 L960,40 L975,30 L990,38 L1005,28 L1020,36 L1035,26 L1050,34 L1065,24 L1080,32 L1095,22 L1110,30 L1125,20 L1140,28 L1155,18 L1170,26 L1185,16 L1200,24 L1215,14 L1230,22 L1245,12 L1260,20 L1275,10 L1290,18 L1305,8 L1320,16 L1335,6 L1350,14 L1365,4 L1380,12 L1395,2 L1410,10 L1425,2 L1440,8 L1440,60 L0,60 Z"
          fill="#FFFFFF"
          transform="translate(0, -3)"
        />
        <path
          d="M0,25 L15,18 L30,28 L45,16 L60,26 L75,14 L90,24 L105,12 L120,22 L135,14 L150,25 L165,16 L180,28 L195,18 L210,30 L225,20 L240,32 L255,22 L270,34 L285,24 L300,36 L315,26 L330,38 L345,28 L360,40 L375,30 L390,42 L405,32 L420,44 L435,34 L450,45 L465,35 L480,46 L495,36 L510,48 L525,38 L540,49 L555,39 L570,50 L585,40 L600,52 L615,42 L630,53 L645,43 L660,54 L675,44 L690,55 L705,45 L720,55 L735,46 L750,54 L765,44 L780,52 L795,42 L810,50 L825,40 L840,48 L855,38 L870,46 L885,36 L900,44 L915,34 L930,42 L945,32 L960,40 L975,30 L990,38 L1005,28 L1020,36 L1035,26 L1050,34 L1065,24 L1080,32 L1095,22 L1110,30 L1125,20 L1140,28 L1155,18 L1170,26 L1185,16 L1200,24 L1215,14 L1230,22 L1245,12 L1260,20 L1275,10 L1290,18 L1305,8 L1320,16 L1335,6 L1350,14 L1365,4 L1380,12 L1395,2 L1410,10 L1425,2 L1440,8 L1440,60 L0,60 Z"
          fill="#0D0D0D"
        />
      </svg>
    </section>
  );
}
