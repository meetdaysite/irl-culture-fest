"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tiers = [
  {
    title: "FOUNDING PARTNER",
    body: "Title sponsor of the entire festival. Full brand integration across all 4 cities. First and most prominent partner recognised across all IRL Culture Fest touchpoints.",
    pillBg: "#FF2B2B",
    pillText: "#FFFFFF",
  },
  {
    title: "CO-CURATOR",
    body: "Partner on a specific subculture hub. Own a dedicated zone, co-programme it with us, and connect directly with that community's leaders and members.",
    pillBg: "#0D0D0D",
    pillText: "#FFFFFF",
  },
  {
    title: "BRAND ECOSYSTEM CHAMPION",
    body: "Brand presence at one or more city editions. Access to curated matchmaking sessions and activation space within the festival grounds.",
    pillBg: "#0D0D0D",
    pillText: "#FFFFFF",
  },
  {
    title: "COMMUNITY ENABLER",
    body: "Micro-partnership for brands looking to connect at a community level — product sampling, gifting, and grassroots collaborations with select super-hosts.",
    pillBg: "#FF2B2B",
    pillText: "#FFFFFF",
  },
];

export default function PartnershipTiers() {
  const [activeTierIndex, setActiveTierIndex] = useState<number | null>(null);

  return (
    <section
      id="partner-tiers"
      className="relative overflow-hidden"
      style={{ background: "#f2af29", paddingTop: 64, paddingBottom: 80 }}
    >
      <div
        className="mx-auto relative z-10 w-full"
        style={{ maxWidth: 1200, paddingLeft: 48, paddingRight: 48 }}
      >
        {/* Heading */}
        <h2
          className="font-display text-[#0D0D0D] leading-none mb-8 uppercase"
          style={{
            fontSize: "clamp(32px, 4.5vw, 64px)",
          }}
        >
          JOIN US AS A:
        </h2>

        {/* Small Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {tiers.map((tier, idx) => {
            const isActive = activeTierIndex === idx;
            return (
              <button
                key={idx}
                onMouseEnter={() => setActiveTierIndex(idx)}
                onMouseLeave={() => setActiveTierIndex(null)}
                className="border border-[#0D0D0D] rounded-xl py-5 px-6 font-body text-[14px] sm:text-base font-bold uppercase text-center cursor-pointer transition-all duration-200 select-none hover:scale-103 outline-none"
                style={{
                  boxShadow: isActive ? "4px 4px 0px 0px #0D0D0D" : "2px 2px 0px 0px #0D0D0D",
                  backgroundColor: isActive ? "#FF2B2B" : "#FFFFFF",
                  borderColor: "#0D0D0D",
                  color: isActive ? "#FFFFFF" : "#0D0D0D",
                }}
              >
                {tier.title}
              </button>
            );
          })}
        </div>

        {/* Popup description container below the cards */}
        <div className="relative w-full">
          <AnimatePresence>
            {activeTierIndex !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.98, transition: { duration: 0.08, ease: "easeOut" } }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="w-full bg-white rounded-[20px] p-6 sm:p-8 border border-[#0D0D0D] flex flex-col justify-start items-start"
                style={{
                  boxShadow: "6px 6px 0px 0px #0D0D0D",
                }}
              >
                {/* Pill */}
                <span
                  className="font-body text-[11px] uppercase font-bold rounded-full px-4 py-2"
                  style={{
                    background: tiers[activeTierIndex].pillBg,
                    color: tiers[activeTierIndex].pillText,
                  }}
                >
                  {tiers[activeTierIndex].title}
                </span>

                {/* Body */}
                <p className="font-body text-base text-[#333] leading-relaxed mt-5">
                  {tiers[activeTierIndex].body}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Torn Paper Divider → next section: PartnerTeam #FFFFFF */}
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
          fill="#f2af29"
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
