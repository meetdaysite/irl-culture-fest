"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DecorativeStar from "@/components/DecorativeStar";

const tracks = [
  {
    eyebrow: "Track 01",
    title: "Event Media",
    body: "High-production video syndication of B2B tracks and viral vertical clip distribution across private, high-intent communication loops.",
    bg: "#FFFFFF",
    textColor: "#1A1A1A",
    accentColor: "#FF2B2B",
    border: "2px solid #1A1A1A",
    shadow: "4px 4px 0px #1A1A1A",
  },
  {
    eyebrow: "Track 02",
    title: "The Podcast",
    body: "Title integrations, narrative mid-rolls, and guest spotlights across the \"Host Sandbox\" audio series — reaching founders, curators, and brand leads.",
    bg: "#1A1A1A",
    textColor: "#FFFFFF",
    accentColor: "#f2af29",
    border: "none",
    shadow: "4px 4px 0px rgba(0,0,0,0.4)",
  },
  {
    eyebrow: "Track 03",
    title: "Thought Leadership",
    body: "Co-authored post-event consumer trend reports and high-authority market whitepapers — cementing your brand as a serious player in the offline economy.",
    bg: "#FF2B2B",
    textColor: "#FFFFFF",
    accentColor: "#FFFFFF",
    border: "2px solid #1A1A1A",
    shadow: "4px 4px 0px #1A1A1A",
  },
];

const rotationDegrees = [-1.5, 2, -2];

export default function SponsorImpact() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="sponsor-roi"
      className="relative overflow-hidden"
      style={{ background: "#FFFFFF", paddingTop: 80, paddingBottom: 140 }}
    >
      {/* Decorative stars */}
      <DecorativeStar size={130} color="#FF2B2B" opacity={0.06} top="40px" right="8%" spin spinDuration={40} />
      <DecorativeStar size={70}  color="#f2af29" opacity={0.08} top="45%" left="3%" rotate={12} />
      <DecorativeStar size={110} color="#1A1A1A" opacity={0.05} bottom="15%" right="2%" spin spinDuration={30} />
      <div
        className="mx-auto relative z-10"
        style={{ maxWidth: 1200, paddingLeft: 48, paddingRight: 48 }}
      >
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block font-body text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border-2 border-[#FF2B2B] text-[#FF2B2B] mb-4"
        >
          ✦ SPONSOR ROI &amp; IMPACT
        </motion.span>

        {/* Heading + description row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-[#1A1A1A] tracking-tight leading-none"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", letterSpacing: "0.01em" }}
            >
              6 Months of Relevance.{" "}
              <span className="text-[#FF2B2B]">Zero Algorithmic Waste.</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-body text-[#555] text-base leading-relaxed border-l-4 border-[#FF2B2B] pl-4"
            >
              Stop wasting money on low-yield impressions. IRL Culture Fest plugs your brand directly into private, high-intent communication loops (WhatsApp, Discord) via a sustained 6-month content pipeline.
            </motion.p>
          </div>
        </div>

        {/* Three track cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {tracks.map((track, i) => {
            const isHovered = hoveredIndex === i;
            const initialRotate = rotationDegrees[i % rotationDegrees.length];

            return (
              <motion.div
                key={track.title}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: track.bg,
                  color: track.textColor,
                  border: track.border,
                  boxShadow: isHovered
                    ? "0 24px 48px -10px rgba(0,0,0,0.28)"
                    : track.shadow,
                }}
                animate={{
                  scale: isHovered ? 1.04 : 1,
                  rotate: isHovered ? 0 : initialRotate,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full rounded-2xl p-7 flex flex-col justify-between select-none cursor-pointer min-h-[280px]"
              >
                {/* Eyebrow + title */}
                <div>
                  <span
                    className="block font-body text-[10px] uppercase font-bold tracking-widest mb-3"
                    style={{ color: track.accentColor, opacity: 0.85 }}
                  >
                    {track.eyebrow}
                  </span>
                  <h3
                    className="font-display text-[26px] sm:text-[28px] font-black leading-tight mb-4"
                    style={{ letterSpacing: "0.01em" }}
                  >
                    {track.title}
                  </h3>
                  <p className="font-body text-[14px] sm:text-[15px] leading-relaxed opacity-85">
                    {track.body}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className="mt-6 h-0.5 w-12 rounded-full"
                  style={{ background: track.accentColor, opacity: 0.5 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Ecosystem callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          animate={{ y: [0, -10, 0] }}
          className="rounded-2xl p-8 sm:p-10 border-2 border-[#1A1A1A] bg-[#F5F0E8] relative overflow-hidden"
          style={{
            boxShadow: "6px 6px 0px #1A1A1A, 0 20px 60px rgba(242,175,41,0.35)",
            animation: "float 5s ease-in-out infinite",
          }}
        >
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-12px); }
            }
          `}</style>
          {/* Emoji + label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl sm:text-3xl">💰</span>
            <h3
              className="font-display text-[26px] sm:text-[28px] font-black leading-tight text-[#1A1A1A]"
              style={{ letterSpacing: "0.01em" }}
            >
              Fueling the Ecosystem
            </h3>
          </div>

          <p className="font-body text-[#1A1A1A]/80 text-base sm:text-lg leading-relaxed mb-10 max-w-3xl">
            <span className="text-[#FF2B2B] font-bold">We practice what we preach.</span> Alongside our community grant pool, Meetday is actively backing highly curated experiences with technology, capital, and infrastructure to guarantee a sustainable, 12-month physical supply line.
          </p>

          {/* Two stats with hover effects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.2)", backgroundColor: "#333" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="border border-white/10 rounded-xl p-6 bg-[#1A1A1A] cursor-pointer transition-colors duration-300"
            >
              <span className="font-display text-[42px] sm:text-[52px] text-[#FF2B2B] leading-none block mb-2 font-black">
                25%
              </span>
              <p className="font-body text-white/70 text-sm leading-relaxed">
                of all <span className="text-[#f2af29] font-bold">festival revenue</span> is converted directly into <span className="text-[#f2af29] font-bold">community grants</span>.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.2)", backgroundColor: "#333" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="border border-white/10 rounded-xl p-6 bg-[#1A1A1A] cursor-pointer transition-colors duration-300"
            >
              <span className="font-display text-[42px] sm:text-[52px] text-[#f2af29] leading-none block mb-2 font-black">
                20+
              </span>
              <p className="font-body text-white/70 text-sm leading-relaxed">
                highly curated <span className="text-[#FF2B2B] font-bold">experiences</span> backed with technology, capital &amp; infrastructure over <span className="text-[#FF2B2B] font-bold">12 months</span>.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Torn Paper Divider → next section #F5F0E8 */}
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
          fill="#F5F0E8"
        />
      </svg>
    </section>
  );
}
