"use client";

import { motion } from "framer-motion";

const width = 1440;
const height = 500;
const turns = 10;

// Generate double helix spiral paths
const spiralPath1 = (() => {
  let path = "";
  const points = 300;
  for (let i = 0; i <= points; i++) {
    const t = i / points;
    const x = t * width;
    const angle = t * turns * Math.PI * 2;
    const radiusX = 35;
    const radiusY = 130;
    const loopX = (x + Math.cos(angle) * radiusX).toFixed(2);
    const loopY = (height / 2 + Math.sin(angle) * radiusY).toFixed(2);

    if (i === 0) path += `M ${loopX} ${loopY}`;
    else path += ` L ${loopX} ${loopY}`;
  }
  return path;
})();

const spiralPath2 = (() => {
  let path = "";
  const points = 300;
  for (let i = 0; i <= points; i++) {
    const t = i / points;
    const x = t * width;
    const angle = t * turns * Math.PI * 2 + Math.PI; // Phase offset by 180 degrees
    const radiusX = 35;
    const radiusY = 130;
    const loopX = (x + Math.cos(angle) * radiusX).toFixed(2);
    const loopY = (height / 2 + Math.sin(angle) * radiusY).toFixed(2);

    if (i === 0) path += `M ${loopX} ${loopY}`;
    else path += ` L ${loopX} ${loopY}`;
  }
  return path;
})();

export default function OpportunitySection() {
  const lines = [
    { text: "CURATION IS THE", className: "text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl" },
    { text: "NEW CREATION.", className: "gradient-text-red-orange text-3xl sm:text-5xl md:text-6xl lg:text-7xl" },
    { text: "BUT THE BRIDGE IS BROKEN.", className: "text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl" },
  ];

  return (
    <section
      id="opportunity"
      className="relative py-12 sm:py-16 px-8 overflow-hidden"
      style={{ background: "#0D0D0D" }}
    >
      {/* Decorative Moving Spiral (Winding from Left to Right) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0">
        <svg
          className="w-full h-full min-w-[1440px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25"
          viewBox="0 0 1440 500"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="spiral-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF2D2D" />
              <stop offset="50%" stopColor="#6700a2" />
              <stop offset="100%" stopColor="#00C2FF" />
            </linearGradient>
          </defs>
          
          {/* Main Spiral path */}
          <motion.path
            d={spiralPath1}
            stroke="url(#spiral-grad)"
            strokeWidth="3.5"
            fill="none"
            animate={{
              strokeDashoffset: [1200, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            style={{
              strokeDasharray: "25 12",
            }}
          />

          {/* Intertwining Secondary spiral path */}
          <motion.path
            d={spiralPath2}
            stroke="url(#spiral-grad)"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
            animate={{
              strokeDashoffset: [0, 1200],
            }}
            transition={{
              repeat: Infinity,
              duration: 28,
              ease: "linear",
            }}
            style={{
              strokeDasharray: "15 15",
            }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label text-[#F5F0E8]/60 font-[family-name:var(--font-space-grotesk)] mb-16"
        >
          The Macro Opportunity ————
        </motion.p>

        {/* Giant Quote */}
        <div className="mb-16">
          {lines.map((line, i) => (
            <motion.h2
              key={i}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`font-[family-name:var(--font-archivo-black)] leading-tight ${line.className}`}
            >
              {line.text}
            </motion.h2>
          ))}
        </div>

        {/* Floating Boxes for Body Text */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Box 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl p-8 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden"
            style={{ background: "rgba(20, 20, 20, 0.6)" }}
          >
            {/* Soft Ambient Red Glow behind text */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#FF2D2D]/10 rounded-full blur-2xl pointer-events-none" />
            
            <motion.p
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="font-[family-name:var(--font-space-grotesk)] text-[#F5F0E8] text-base sm:text-lg leading-relaxed relative z-10"
            >
              India is witnessing an unprecedented explosion of offline culture —
              from underground gig nights and rooftop raves to niche community
              meetups and wellness circles. Yet the builders behind these movements
              remain invisible.
            </motion.p>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-2xl p-8 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden"
            style={{ background: "rgba(20, 20, 20, 0.6)" }}
          >
            {/* Soft Ambient Purple Glow behind text */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#6700a2]/15 rounded-full blur-2xl pointer-events-none" />

            <motion.p
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
              className="font-[family-name:var(--font-space-grotesk)] text-[#F5F0E8] text-base sm:text-lg leading-relaxed relative z-10"
            >
              The market needs a bridge between high-intent offline audiences and
              brands craving authentic connection. That bridge is the IRL Culture
              Fest — India&apos;s first platform to celebrate, monetize, and scale the
              offline economy.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
