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
      className="relative bg-white py-24 overflow-visible"
    >
      {/* Diagonal Section Divider */}
      <div
        className="absolute -top-[40px] left-0 right-0 h-[60px] pointer-events-none z-[1]"
        style={{
          backgroundColor: "#FFFFFF",
          clipPath: "polygon(0 40px, 100% 0, 100% 60px, 0 60px)",
        }}
      />

      {/* Decorative Corner Stars */}
      <div className="absolute top-8 left-8 font-display text-red text-[120px] opacity-[0.06] select-none pointer-events-none z-0 leading-none">
        ✦
      </div>
      <div className="absolute bottom-8 right-8 font-display text-[#FFD600] text-[100px] opacity-[0.06] select-none pointer-events-none z-0 leading-none">
        ✦
      </div>

      {/* Scattered Dot Cluster */}
      <div className="absolute top-0 left-0 w-full h-1/2 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[15%] w-2 h-2 rounded-full bg-red opacity-30"></div>
        <div className="absolute top-[25%] left-[30%] w-2 h-2 rounded-full bg-green opacity-30"></div>
        <div className="absolute top-[15%] left-[55%] w-2 h-2 rounded-full bg-yellow opacity-30"></div>
        <div className="absolute top-[30%] left-[75%] w-2 h-2 rounded-full bg-purple opacity-30"></div>
        <div className="absolute top-[8%] left-[88%] w-2 h-2 rounded-full bg-blue opacity-30"></div>
      </div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 mb-12">
        <p
          className="font-body uppercase text-red font-semibold mb-3"
          style={{
            fontSize: "clamp(10px, 1vw, 12px)",
            letterSpacing: "0.18em",
          }}
        >
          THE CULTURE IN MOTION ————
        </p>
        <h2
          className="font-display text-[#1A1A1A] mb-4 tracking-tight"
          style={{
            fontSize: "clamp(40px, 6vw, 88px)",
            lineHeight: 0.95,
            letterSpacing: "0.01em",
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
    </section>
  );
}
