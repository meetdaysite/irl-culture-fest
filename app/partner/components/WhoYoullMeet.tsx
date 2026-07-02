"use client";

import { motion } from "framer-motion";

export default function WhoYoullMeet() {
  return (
    <section
      id="partner-whoyoullmeet"
      className="relative overflow-hidden"
      style={{ background: "#0D0D0D", paddingTop: 96, paddingBottom: 156 }}
    >
      <div
        className="mx-auto relative z-10 w-full"
        style={{ maxWidth: 1200, paddingLeft: 48, paddingRight: 48 }}
      >
        {/* Heading */}
        <h2
          className="font-display text-white leading-none mb-4"
          style={{
            fontSize: "clamp(24px, 3.5vw, 40px)",
          }}
        >
          WHO IS IN THE ROOM?
        </h2>

        {/* Subheading */}
        <p className="font-body text-[17px] text-[#F5F0E8] max-w-3xl leading-relaxed mb-16 opacity-90">
          We bypass mass vanity metrics to focus exclusively on high-fidelity, high-leverage target layers.
        </p>

        {/* Two Large Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Slides from left */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            whileHover={{ y: -6 }}
            className="relative rounded-3xl p-6 sm:p-8 overflow-hidden flex flex-col justify-between"
            style={{ background: "#F5F0E8", minHeight: 250 }}
          >
            {/* Ghost Number */}
            <span
              className="absolute -bottom-6 -right-3 font-display text-[110px] opacity-[0.06] pointer-events-none select-none leading-none"
              style={{ color: "#0D0D0D" }}
            >
              01
            </span>

            <div className="relative z-10">
              {/* Pill */}
              <span
                className="inline-block font-body text-[11px] uppercase font-black rounded-full px-4 py-2"
                style={{ background: "#FF2B2B", color: "#FFFFFF" }}
              >
                150+ SUPER-HOSTS
              </span>
              {/* Body */}
              <p className="font-body text-sm sm:text-base text-[#333] leading-relaxed mt-6 max-w-sm">
                Subculture leaders and community founders representing thousands of hyper-active, loyal members.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Slides from right */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            whileHover={{ y: -6 }}
            className="relative rounded-3xl p-6 sm:p-8 overflow-hidden flex flex-col justify-between"
            style={{ background: "#FF2B2B", minHeight: 250 }}
          >
            {/* Ghost Number */}
            <span
              className="absolute -bottom-6 -right-3 font-display text-[110px] opacity-[0.06] pointer-events-none select-none leading-none text-white"
            >
              02
            </span>

            <div className="relative z-10">
              {/* Pill */}
              <span
                className="inline-block font-body text-[11px] uppercase font-black rounded-full px-4 py-2"
                style={{ background: "#f2af29", color: "#0D0D0D" }}
              >
                THE ECOSYSTEM ENABLERS
              </span>
              {/* Body */}
              <p className="font-body text-sm sm:text-base text-white leading-relaxed mt-6 max-w-sm">
                Platform builders, venue partners, booking agencies, and corporate sponsors shaping the experience economy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Torn Paper Divider → next section: WhatYouGet #0D0D0D */}
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
          fill="#0D0D0D"
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
