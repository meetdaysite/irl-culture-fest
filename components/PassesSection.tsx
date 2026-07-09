"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DecorativeStar from "@/components/DecorativeStar";

const allAccessPass = {
  title: "All Access Pass",
  price: "₹9,999",
  taxes: "Plus Taxes",
  bestFor: "Corporate Leaders, Agency Executives, & Enterprise Enablers",
  inclusions: [
    "Main Conference",
    "Expo Access",
    "VIP Networking Lounge",
    "VIP Networking Dinner",
  ],
  headerBg: "linear-gradient(135deg, #f2af29 0%, #e09a10 100%)",
  headerText: "#1A1A1A",
};

const otherPasses = [
  {
    title: "Community Leader Pass",
    price: "₹3,999",
    taxes: "Plus Taxes",
    bestFor: "Micro-curators, Subculture Leaders, & Active Hosts",
    inclusions: [
      "Main Conference",
      "Expo Access",
      "Grant Pool Consideration",
    ],
    headerBg: "linear-gradient(135deg, #1A1A1A 0%, #2d2d2d 100%)",
    headerText: "#FFFFFF",
  },
  {
    title: "Live Pitching & Fest Pass",
    price: "₹6,999",
    taxes: "Plus Taxes",
    bestFor: "Curators seeking live brand funding.",
    inclusions: [
      "Live Pitching Sandbox Entry",
      "Main Conference",
      "Expo Access",
    ],
    headerBg: "linear-gradient(135deg, #FF2B2B 0%, #cc1f1f 100%)",
    headerText: "#FFFFFF",
  },
  {
    title: "Brand Pass",
    price: "₹4,499",
    taxes: "Plus Taxes",
    bestFor: "Brand Managers, D2C Founders, & Creative Directors",
    inclusions: [
      "Main Conference",
      "Expo Access",
      "Post-Event Insights Playbook",
    ],
    headerBg: "linear-gradient(135deg, #f2af29 0%, #e09a10 100%)",
    headerText: "#1A1A1A",
  },
  {
    title: "Ecosystem Pass",
    price: "₹4,499",
    taxes: "Plus Taxes",
    bestFor: "Ecosystem Builders, Enablers, & Community Partners",
    inclusions: [
      "Main Conference",
      "Expo Access",
      "Ecosystem Lounge Access",
    ],
    headerBg: "linear-gradient(135deg, #FF2B2B 0%, #cc1f1f 100%)",
    headerText: "#FFFFFF",
  },
  {
    title: "Networking Dinner",
    price: "₹5,999",
    taxes: "Plus Taxes",
    bestFor: "Micro-curators, Subculture Heads & Hosts",
    inclusions: [
      "An exclusive invite to a highly curated networking dinner.",
    ],
    headerBg: "linear-gradient(135deg, #f2af29 0%, #e09a10 100%)",
    headerText: "#1A1A1A",
  },
  {
    title: "Expo Booth",
    price: "₹29,999",
    taxes: "Space Cost",
    bestFor: "D2C Brands & Tactile Lifestyle Curators",
    inclusions: [
      "10x10 sq.ft. dedicated space with the required infrastructure.",
    ],
    headerBg: "linear-gradient(135deg, #1A1A1A 0%, #2d2d2d 100%)",
    headerText: "#FFFFFF",
  },
];

/* ── Shared ticket card component ── */
function TicketCard({
  pass,
  isHovered,
  onEnter,
  onLeave,
  large = false,
}: {
  pass: typeof allAccessPass;
  isHovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
  large?: boolean;
}) {
  return (
    <motion.div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      animate={{ scale: isHovered ? 1.04 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="select-none cursor-pointer w-full h-full rounded-2xl"
      style={{
        boxShadow: isHovered
          ? "0 20px 40px rgba(0,0,0,0.25)"
          : "4px 6px 0px rgba(0,0,0,0.2)",
      }}
    >
      <div
        className="relative w-full h-full rounded-2xl overflow-visible flex flex-col"
        style={{
          border: "2.5px solid #1A1A1A",
          background: pass.headerBg,
          color: pass.headerText,
        }}
      >
        {/* TOP: coloured header */}
        <div
          className={`relative px-4 rounded-t-[14px] flex-shrink-0 ${large ? "pt-6 pb-6" : "pt-3 pb-3"}`}
        >
          <h3
            className="font-display font-black uppercase leading-tight"
            style={{
              fontSize: large ? "clamp(22px, 2.2vw, 32px)" : "clamp(12px, 1vw, 14px)",
              color: pass.headerText,
              letterSpacing: "0.02em",
            }}
          >
            {pass.title}
          </h3>
        </div>

        {/* TEAR LINE */}
        <div className="relative flex items-center" style={{ background: "transparent" }}>
          {large && (
            <>
              <div
                className="absolute -left-6 w-12 h-12 rounded-full z-10"
                style={{ background: "#F5F0E8" }}
              />
              <div
                className="absolute -right-6 w-12 h-12 rounded-full z-10"
                style={{ background: "#F5F0E8" }}
              />
            </>
          )}
          <div
            className="w-full border-t-[3px] border-dashed mx-4"
            style={{ borderColor: pass.headerText, opacity: 0.5 }}
          />
        </div>

        {/* BOTTOM: body */}
        <div className={`rounded-b-[14px] flex-1 flex flex-col ${large ? "px-5 pt-4 pb-5" : "px-4 pt-3 pb-3"}`}>
          {/* Price */}
          <div className="flex items-baseline gap-2 mb-2">
            <span
              className="font-display font-black leading-none"
              style={{
                fontSize: large ? "clamp(32px, 3.5vw, 44px)" : "18px",
                color: pass.headerText,
              }}
            >
              {pass.price}
            </span>
            <span
              className="font-body text-[8px] uppercase font-bold tracking-widest"
              style={{ color: pass.headerText === "#1A1A1A" ? "#FF2B2B" : "#f2af29" }}
            >
              {pass.taxes}
            </span>
          </div>

          {/* Best for */}
          <div className="mb-2">
            <span
              className="font-body text-[8px] uppercase font-black tracking-wider"
              style={{ color: pass.headerText, opacity: 0.7 }}
            >
              For:{" "}
            </span>
            <span
              className="font-body uppercase font-bold tracking-wide leading-snug"
              style={{
                fontSize: large ? "11px" : "9px",
                color: pass.headerText,
              }}
            >
              {pass.bestFor}
            </span>
          </div>

          {/* Divider */}
          <div
            className="border-t mb-3"
            style={{ borderColor: pass.headerText, opacity: 0.15 }}
          />

          {/* Inclusions */}
          <div>
            <span
              className="block font-body text-[9px] uppercase font-black tracking-wider mb-2"
              style={{ color: pass.headerText === "#1A1A1A" ? "#FF2B2B" : "#f2af29" }}
            >
              Included:
            </span>
            <ul className={large ? "space-y-1.5" : "space-y-1"}>
              {pass.inclusions.map((inc) => (
                <li
                  key={inc}
                  className="flex items-start gap-2 font-body leading-tight"
                  style={{
                    fontSize: large ? "13px" : "11px",
                    color: pass.headerText,
                  }}
                >
                  <span className="flex-shrink-0 w-4 h-4 rounded bg-[#22c55e] flex items-center justify-center mt-px">
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path
                        d="M1 3.5L3.5 6L8 1"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {inc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main section ── */
export default function PassesSection() {
  const [hoveredMain, setHoveredMain] = useState(false);
  const [hoveredOther, setHoveredOther] = useState<number | null>(null);

  return (
    <section
      id="passes"
      className="relative overflow-hidden"
      style={{ background: "#F5F0E8", paddingTop: 80, paddingBottom: 140 }}
    >
      {/* Decorative stars */}
      <DecorativeStar size={140} color="#FF2B2B" opacity={0.06} top="40px" right="6%" spin spinDuration={38} />
      <DecorativeStar size={80} color="#f2af29" opacity={0.07} top="40%" left="2%" rotate={42} />
      <DecorativeStar size={110} color="#1A1A1A" opacity={0.05} bottom="20%" right="4%" spin spinDuration={44} />
      <div
        className="mx-auto relative z-10"
        style={{ maxWidth: 1280, paddingLeft: 48, paddingRight: 48 }}
      >
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block font-body text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border-2 border-[#FF2B2B] text-[#FF2B2B] mb-3"
        >
          ✦ PASSES &amp; ACCESS
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-[#1A1A1A] tracking-tight leading-none mb-14"
          style={{ fontSize: "clamp(32px, 4.5vw, 56px)", letterSpacing: "0.01em" }}
        >
          Choose Your{" "}
          <span className="text-[#FF2B2B]">Access Level.</span>
        </motion.h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* LEFT: All Access Pass — large */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 h-full"
          >
            <TicketCard
              pass={allAccessPass}
              isHovered={hoveredMain}
              onEnter={() => setHoveredMain(true)}
              onLeave={() => setHoveredMain(false)}
              large
            />
          </motion.div>

          {/* RIGHT: 3×2 grid of other passes (6 smaller cards, narrower format) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 h-full">
            {otherPasses.map((pass, i) => (
              <motion.div
                key={pass.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="h-full"
              >
                <TicketCard
                  pass={pass}
                  isHovered={hoveredOther === i}
                  onEnter={() => setHoveredOther(i)}
                  onLeave={() => setHoveredOther(null)}
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Torn Paper Divider → Footer */}
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
          fill="#FF2B2B"
        />
      </svg>
    </section>
  );
}
