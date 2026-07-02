"use client";

import { motion } from "framer-motion";

const columns = [
  {
    title: "DIRECT MONETIZATION",
    body: "Immediate access to brand sponsorships and shared physical resources to ensure financial viability.",
  },
  {
    title: "CROSS-POLLINATION",
    body: "Collaborating with peer communities to cross-expose subcultures to premium audiences.",
  },
  {
    title: "INSTITUTIONAL VALIDATION",
    body: "Securing your position as an official founding pioneer of India's offline cultural movement.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const colVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function WhatYouGet() {
  return (
    <section
      id="partner-whatyouget"
      className="relative overflow-hidden"
      style={{ background: "#F5F0E8", paddingTop: 96, paddingBottom: 156 }}
    >
      <div
        className="mx-auto relative z-10 w-full"
        style={{ maxWidth: 1200, paddingLeft: 48, paddingRight: 48 }}
      >
        {/* Heading */}
        <h2
          className="font-display text-[#0D0D0D] leading-none mb-16"
          style={{
            fontSize: "clamp(24px, 3.5vw, 40px)",
          }}
        >
          THE HIGH-VALUE EXCHANGE FOR IRL BUILDERS.
        </h2>

        {/* 3 Columns with Dividers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0"
        >
          {columns.map((col, i) => (
            <motion.div
              key={i}
              variants={colVariants}
              className="flex flex-col md:px-8 first:pl-0 last:pr-0 relative"
            >
              <h3 className="font-display text-[#0D0D0D] text-xl tracking-wider mb-4">
                {col.title}
              </h3>
              <p className="font-body text-[15px] leading-relaxed text-[#444]">
                {col.body}
              </p>

              {/* 1px White vertical divider (desktop only, placed on the right of Col 1 and Col 2) */}
              {i < columns.length - 1 && (
                <div
                  className="hidden md:block bg-[#0D0D0D]/10 absolute right-0 top-0 bottom-0"
                  style={{ width: "1px" }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Torn Paper Divider → next section: PartnershipTiers #f2af29 */}
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
          fill="#F5F0E8"
          transform="translate(0, -3)"
        />
        <path
          d="M0,25 L15,18 L30,28 L45,16 L60,26 L75,14 L90,24 L105,12 L120,22 L135,14 L150,25 L165,16 L180,28 L195,18 L210,30 L225,20 L240,32 L255,22 L270,34 L285,24 L300,36 L315,26 L330,38 L345,28 L360,40 L375,30 L390,42 L405,32 L420,44 L435,34 L450,45 L465,35 L480,46 L495,36 L510,48 L525,38 L540,49 L555,39 L570,50 L585,40 L600,52 L615,42 L630,53 L645,43 L660,54 L675,44 L690,55 L705,45 L720,55 L735,46 L750,54 L765,44 L780,52 L795,42 L810,50 L825,40 L840,48 L855,38 L870,46 L885,36 L900,44 L915,34 L930,42 L945,32 L960,40 L975,30 L990,38 L1005,28 L1020,36 L1035,26 L1050,34 L1065,24 L1080,32 L1095,22 L1110,30 L1125,20 L1140,28 L1155,18 L1170,26 L1185,16 L1200,24 L1215,14 L1230,22 L1245,12 L1260,20 L1275,10 L1290,18 L1305,8 L1320,16 L1335,6 L1350,14 L1365,4 L1380,12 L1395,2 L1410,10 L1425,2 L1440,8 L1440,60 L0,60 Z"
          fill="#f2af29"
        />
      </svg>
    </section>
  );
}
