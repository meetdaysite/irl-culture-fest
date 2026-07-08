"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DecorativeStar from "@/components/DecorativeStar";

const verticals = [
  {
    name: "Culinary & Beverage",
    curators: "Supper clubs, independent roasters, mixology innovators.",
    opportunity: "Premium alcobev, gourmet D2C, culinary tech.",
    image: "/images/subculture/cullinary-and-beverages.webp",
  },
  {
    name: "Active Lifestyle",
    curators: "Run clubs, community fitness squads, skate crews.",
    opportunity: "Athleisure, health-tech, wearable tech, hydration.",
    image: "/images/subculture/active-lifestyle.png",
  },
  {
    name: "Independent Sound",
    curators: "Community-first music tours, underground electronic labels.",
    opportunity: "Audio gear, streaming networks, youth lifestyle brands.",
    image: "/images/subculture/independent-sound.webp",
  },
  {
    name: "Mindfulness & Well-being",
    curators: "Digital detox collectives, wellness circles, sound baths.",
    opportunity: "Premium hospitality, insurance, clean-label D2C.",
    image: "/images/subculture/mindfullness.webp",
  },
  {
    name: "Analog Arts & Culture",
    curators: "Vinyl listening rooms, tactile design, indie publishing.",
    opportunity: "Consumer tech, luxury lifestyle, apparel, automotive.",
    image: "/images/subculture/analog-art.webp",
  },
  {
    name: "Pet Culture",
    curators: "Pet parent networks, breed-specific collectives.",
    opportunity: "Premium pet care, pet-tech, experiential travel.",
    image: "/images/subculture/pet-culture.webp",
  },
  {
    name: "Next-Gen Families",
    curators: "Alternative micro-learning circles, tactile play cohorts.",
    opportunity: "Sustainable toys, organic nutrition, premium kids' wear.",
    image: "/images/subculture/next-gen-families.webp",
  },
  {
    name: "Slow Travel & Hidden Trails",
    curators: "Motor-touring clubs, off-the-grid exploration groups.",
    opportunity: "Luggage, automotive, outdoor gear, hospitality.",
    image: "/images/subculture/slow-travel.webp",
  },
];

export default function SubculturesMatrix() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isTableView, setIsTableView] = useState(false);

  return (
    <section
      id="subcultures"
      className="relative overflow-hidden"
      style={{ background: "#FF2B2B", paddingTop: 80, paddingBottom: 140 }}
    >
      {/* Decorative stars */}
      <DecorativeStar size={160} color="#f2af29" opacity={0.12} top="50px" left="5%" spin spinDuration={45} />
      <DecorativeStar size={90}  color="#FFFFFF"  opacity={0.15} top="40%" right="4%" rotate={15} />
      <DecorativeStar size={140} color="#1A1A1A" opacity={0.15} bottom="15%" left="2%" spin spinDuration={35} />
      <DecorativeStar size={70}  color="#FFFFFF"  opacity={0.1} bottom="5%" right="12%" rotate={35} />
      <div
        className="mx-auto relative z-10"
        style={{ maxWidth: 1200, paddingLeft: 48, paddingRight: 48 }}
      >
        {/* Upper controls: Eyebrow + Switcher Toggle */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block font-body text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border-2 border-white text-white mb-3"
            >
              ✦ THE SUBCULTURES MATRIX
            </motion.span>
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-white tracking-tight leading-none"
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                letterSpacing: "0.01em",
              }}
            >
              Where Subcultures Meet Consumer Brands.
            </motion.h2>
          </div>

          {/* Toggle pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1 bg-[#1A1A1A] p-1.5 rounded-full border-2 border-white self-start md:self-center shadow-lg"
          >
            <button
              onClick={() => setIsTableView(false)}
              className={`font-body text-[10px] sm:text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                !isTableView
                  ? "bg-[#f2af29] text-black shadow-md"
                  : "bg-transparent text-white opacity-70 hover:opacity-100"
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setIsTableView(true)}
              className={`font-body text-[10px] sm:text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                isTableView
                  ? "bg-[#f2af29] text-black shadow-md"
                  : "bg-transparent text-white opacity-70 hover:opacity-100"
              }`}
            >
              Table View
            </button>
          </motion.div>
        </div>

        {/* View Switch Rendering */}
        <AnimatePresence mode="wait">
          {!isTableView ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start"
            >
              {verticals.map((v, i) => {
                const isHovered = hoveredIndex === i;

                return (
                  <motion.div
                    key={v.name}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    animate={{ scale: isHovered ? 1.04 : 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    style={{
                      background: isHovered ? "#1A1A1A" : "#f2af29",
                      boxShadow: isHovered
                        ? "0 25px 50px -12px rgba(0,0,0,0.5)"
                        : "4px 4px 0px 0px #1A1A1A",
                      borderColor: "#1A1A1A",
                      borderWidth: "2px",
                    }}
                    className="w-full rounded-2xl overflow-hidden select-none cursor-pointer flex flex-col"
                  >
                    {/* Solid title bar — always visible */}
                    <div className="px-4 py-3 flex-shrink-0" style={{ minHeight: "64px" }}>
                      <h3
                        className="font-display uppercase font-black leading-tight tracking-wide"
                        style={{
                          fontSize: "clamp(14px, 1.4vw, 18px)",
                          color: isHovered ? "#FFFFFF" : "#1A1A1A",
                        }}
                      >
                        {v.name}
                      </h3>
                    </div>

                    {/* White-mount image container — whole mount tilts */}
                    <div className="px-4 pb-4 pt-1">
                      <motion.div
                        animate={{
                          rotate: isHovered ? 0 : (i % 2 === 0 ? -4 : 4),
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 18 }}
                        className="relative w-full overflow-hidden rounded-xl bg-white shadow-md"
                        style={{ aspectRatio: "1/1" }}
                      >
                        {/* Image — only scales on hover, no rotate */}
                        <motion.img
                          src={v.image}
                          alt={v.name}
                          animate={{
                            scale: isHovered ? 1.06 : 1.01,
                          }}
                          transition={{ type: "spring", stiffness: 200, damping: 18 }}
                          className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-lg"
                        />

                        {/* Dark gradient overlay — slides up on hover */}
                        <motion.div
                          initial={{ y: "100%" }}
                          animate={{ y: isHovered ? "0%" : "100%" }}
                          transition={{ type: "spring", stiffness: 260, damping: 28 }}
                          className="absolute inset-0 z-10 px-3 py-3 flex flex-col justify-end gap-2"
                          style={{
                            background: "linear-gradient(to top, rgba(0,0,0,0.92) 55%, rgba(0,0,0,0))",
                          }}
                        >
                          <div>
                            <span className="block font-body text-[8px] uppercase font-bold tracking-widest text-[#f2af29] mb-0.5">
                              The Curators
                            </span>
                            <p className="font-body text-[12px] leading-snug text-white opacity-90">
                              {v.curators}
                            </p>
                          </div>
                          <div>
                            <span className="block font-body text-[8px] uppercase font-bold tracking-widest text-[#f2af29] mb-0.5">
                              Brand Alignment
                            </span>
                            <p className="font-body text-[12px] leading-snug text-white opacity-90">
                              {v.opportunity}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="table"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="overflow-x-auto w-full border-2 border-black rounded-2xl bg-white shadow-[6px_6px_0px_#1A1A1A]"
            >
              <table className="min-w-full divide-y-2 divide-black text-left font-body">
                <thead className="bg-[#f2af29] text-black font-display font-black uppercase text-sm sm:text-[16px] tracking-wider">
                  <tr>
                    <th scope="col" className="px-6 py-4 border-r-2 border-black">Subculture Vertical</th>
                    <th scope="col" className="px-6 py-4 border-r-2 border-black">The Curators</th>
                    <th scope="col" className="px-6 py-4">Brand Alignment Opportunity</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black bg-white text-black text-sm">
                  {verticals.map((v) => (
                    <tr key={v.name} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 border-r-2 border-black font-bold uppercase whitespace-nowrap">{v.name}</td>
                      <td className="px-6 py-4 border-r-2 border-black">{v.curators}</td>
                      <td className="px-6 py-4">{v.opportunity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Torn Paper Divider → next section (white background solution or section) */}
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
          fill="#FF2B2B"
          transform="translate(0, -3)"
        />
        <path
          d="M0,25 L15,18 L30,28 L45,16 L60,26 L75,14 L90,24 L105,12 L120,22 L135,14 L150,25 L165,16 L180,28 L195,18 L210,30 L225,20 L240,32 L255,22 L270,34 L285,24 L300,36 L315,26 L330,38 L345,28 L360,40 L375,30 L390,42 L405,32 L420,44 L435,34 L450,45 L465,35 L480,46 L495,36 L510,48 L525,38 L540,49 L555,39 L570,50 L585,40 L600,52 L615,42 L630,53 L645,43 L660,54 L675,44 L690,55 L705,45 L720,55 L735,46 L750,54 L765,44 L780,52 L795,42 L810,50 L825,40 L840,48 L855,38 L870,46 L885,36 L900,44 L915,34 L930,42 L945,32 L960,40 L975,30 L990,38 L1005,28 L1020,36 L1035,26 L1050,34 L1065,24 L1080,32 L1095,22 L1110,30 L1125,20 L1140,28 L1155,18 L1170,26 L1185,16 L1200,24 L1215,14 L1230,22 L1245,12 L1260,20 L1275,10 L1290,18 L1305,8 L1320,16 L1335,6 L1350,14 L1365,4 L1380,12 L1395,2 L1410,10 L1425,2 L1440,8 L1440,60 L0,60 Z"
          fill="#FFFFFF"
        />
      </svg>
    </section>
  );
}
