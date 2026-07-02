"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/image-scroll/1.jpg",
  "/image-scroll/2.webp",
  "/image-scroll/3.webp",
  "/image-scroll/4.jpg",
  "/image-scroll/5.webp",
  "/image-scroll/6.webp",
  "/image-scroll/7.webp",
  "/image-scroll/8.webp",
  "/image-scroll/9.webp",
  "/image-scroll/10.webp",
  "/image-scroll/11.webp",
  "/image-scroll/12.webp",
  "/image-scroll/13.webp",
  "/image-scroll/14.webp",
];

const doubledImages = [...images, ...images];

const labels = [
  "Delhi Vibes ✦",
  "Mumbai Nights ✦",
  "Bangalore Crew ✦",
  "Pune Culture ✦",
  "IRL Moment ✦",
  "The Community ✦",
];

const rotationDegrees = [-6, 4, -2, 7, -5, 3, -8, 5, -3, 6];

export default function GallerySection() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="gallery"
      className="relative bg-white overflow-hidden"
      style={{ paddingTop: 60, paddingBottom: 140 }}
    >

      {/* Decorative Corner Stars */}
      <div className="absolute top-8 left-8 font-display text-red text-[120px] opacity-[0.06] select-none pointer-events-none z-0 leading-none">
        ✦
      </div>
      <div className="absolute bottom-8 right-8 font-display text-[#f2af29] text-[100px] opacity-[0.06] select-none pointer-events-none z-0 leading-none">
        ✦
      </div>

      {/* Scattered Dot Cluster */}
      <div className="absolute top-0 left-0 w-full h-1/2 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[15%] w-2 h-2 rounded-full bg-red opacity-30"></div>
        <div className="absolute top-[25%] left-[30%] w-2 h-2 rounded-full bg-red opacity-30"></div>
        <div className="absolute top-[15%] left-[55%] w-2 h-2 rounded-full bg-[#f2af29] opacity-30"></div>
        <div className="absolute top-[30%] left-[75%] w-2 h-2 rounded-full bg-[#f2af29] opacity-30"></div>
        <div className="absolute top-[8%] left-[88%] w-2 h-2 rounded-full bg-[#f2af29] opacity-30"></div>
      </div>

      {/* Section Header */}
      <div className="mx-auto text-center relative z-10" style={{ maxWidth: 1200, paddingLeft: 48, paddingRight: 48, marginBottom: 48 }}>

        <h2
          className="font-display text-[#1A1A1A] tracking-tight"
          style={{
            fontSize: "clamp(32px, 4.5vw, 64px)",
            lineHeight: 1.0,
            letterSpacing: "0.01em",
            marginBottom: 20,
          }}
        >
          REAL PEOPLE. REAL SPACES. REAL CULTURE.
        </h2>
        <p className="font-body text-[#666] text-base sm:text-[18px] max-w-xl mx-auto leading-relaxed">
          Moments from India's most vibrant offline communities.
        </p>

        {/* Decorative divider rule with center star */}
        <div className="relative my-10 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#1A1A1A]/10"></div>
          </div>
          <div className="relative bg-white px-6 text-red text-xl">
            ✦
          </div>
        </div>
      </div>

      {/* Marquee Viewport Container */}
      <div
        className="w-full overflow-hidden relative z-10 py-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Edge Fades */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-20"></div>
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-20"></div>

        {/* Scrolling Inner Track */}
        <div
          className={`marquee-track gap-8 px-4 ${
            isPaused ? "marquee-paused" : ""
          }`}
        >
          {doubledImages.map((src, index) => {
            const label = labels[index % labels.length];
            const initialRotation = rotationDegrees[index % rotationDegrees.length];

            return (
              <motion.div
                key={`${src}-${index}`}
                className="flex-shrink-0 bg-white rounded-sm select-none"
                style={{
                  padding: "12px 12px 40px 12px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  rotate: initialRotation,
                  transformOrigin: "center",
                }}
                whileHover={{
                  rotate: 0,
                  scale: 1.06,
                  zIndex: 10,
                  boxShadow: "0 16px 48px rgba(0,0,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative w-[240px] h-[320px] bg-neutral-100 overflow-hidden">
                  <Image
                    src={src}
                    alt="IRL Culture Fest moment"
                    width={280}
                    height={340}
                    className="object-cover w-full h-full block"
                    draggable={false}
                  />
                </div>
                <div className="font-body text-[11px] text-[#888] text-center pt-2 font-medium tracking-wide">
                  {label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Torn Paper Divider → next section: Opportunity #FF2D2D */}
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
        {/* Layer 1: Underlay white/cream border shadow */}
        <path
          d="M0,25 L15,18 L30,28 L45,16 L60,26 L75,14 L90,24 L105,12 L120,22 L135,14 L150,25 L165,16 L180,28 L195,18 L210,30 L225,20 L240,32 L255,22 L270,34 L285,24 L300,36 L315,26 L330,38 L345,28 L360,40 L375,30 L390,42 L405,32 L420,44 L435,34 L450,45 L465,35 L480,46 L495,36 L510,48 L525,38 L540,49 L555,39 L570,50 L585,40 L600,52 L615,42 L630,53 L645,43 L660,54 L675,44 L690,55 L705,45 L720,55 L735,46 L750,54 L765,44 L780,52 L795,42 L810,50 L825,40 L840,48 L855,38 L870,46 L885,36 L900,44 L915,34 L930,42 L945,32 L960,40 L975,30 L990,38 L1005,28 L1020,36 L1035,26 L1050,34 L1065,24 L1080,32 L1095,22 L1110,30 L1125,20 L1140,28 L1155,18 L1170,26 L1185,16 L1200,24 L1215,14 L1230,22 L1245,12 L1260,20 L1275,10 L1290,18 L1305,8 L1320,16 L1335,6 L1350,14 L1365,4 L1380,12 L1395,2 L1410,10 L1425,2 L1440,8 L1440,60 L0,60 Z"
          fill="#FFFFFF"
          transform="translate(0, -3)"
        />
        {/* Layer 2: Main foreground color (Experience BG #F5F0E8) */}
        <path
          d="M0,25 L15,18 L30,28 L45,16 L60,26 L75,14 L90,24 L105,12 L120,22 L135,14 L150,25 L165,16 L180,28 L195,18 L210,30 L225,20 L240,32 L255,22 L270,34 L285,24 L300,36 L315,26 L330,38 L345,28 L360,40 L375,30 L390,42 L405,32 L420,44 L435,34 L450,45 L465,35 L480,46 L495,36 L510,48 L525,38 L540,49 L555,39 L570,50 L585,40 L600,52 L615,42 L630,53 L645,43 L660,54 L675,44 L690,55 L705,45 L720,55 L735,46 L750,54 L765,44 L780,52 L795,42 L810,50 L825,40 L840,48 L855,38 L870,46 L885,36 L900,44 L915,34 L930,42 L945,32 L960,40 L975,30 L990,38 L1005,28 L1020,36 L1035,26 L1050,34 L1065,24 L1080,32 L1095,22 L1110,30 L1125,20 L1140,28 L1155,18 L1170,26 L1185,16 L1200,24 L1215,14 L1230,22 L1245,12 L1260,20 L1275,10 L1290,18 L1305,8 L1320,16 L1335,6 L1350,14 L1365,4 L1380,12 L1395,2 L1410,10 L1425,2 L1440,8 L1440,60 L0,60 Z"
          fill="#F5F0E8"
        />
      </svg>
    </section>
  );
}
