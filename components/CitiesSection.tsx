"use client";

import { motion } from "framer-motion";

const cities = [
  {
    name: "DELHI",
    state: "National Capital",
    blurb:
      "Home to India's most eclectic underground scene — from Hauz Khas speakeasies to Mehrauli art collectives, Delhi's IRL culture pulses through its heritage and hustle.",
  },
  {
    name: "MUMBAI",
    state: "Maharashtra",
    blurb:
      "Where Bollywood meets the indie circuit — Mumbai's community builders run everything from sunrise raves at Juhu to stand-up comedy cellars in Bandra.",
  },
  {
    name: "BANGALORE",
    state: "Karnataka",
    blurb:
      "India's unofficial capital of community-led culture — from Koramangala jam sessions to Indiranagar board-game nights, this city breathes IRL.",
  },
  {
    name: "PUNE",
    state: "Maharashtra",
    blurb:
      "A rising force in India's cultural revolution — Pune's college energy, FC Road café culture, and Kothrud creative studios make it a hotbed for new-wave community building.",
  },
];

export default function CitiesSection() {
  return (
    <section
      id="cities"
      className="relative overflow-hidden"
      style={{ background: "#FF2B2B", paddingTop: 60, paddingBottom: 140 }}
    >
      {/* Decorative Star Burst */}
      <div className="star-burst pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M100 0L120 80L200 100L120 120L100 200L80 120L0 100L80 80L100 0Z"
            stroke="#FFFFFF"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M100 20L115 85L180 100L115 115L100 180L85 115L20 100L85 85L100 20Z"
            stroke="#FFFFFF"
            strokeWidth="0.5"
            fill="none"
            opacity="0.2"
          />
        </svg>
      </div>

      <div
        className="mx-auto relative z-10"
        style={{ maxWidth: 1200, paddingLeft: 48, paddingRight: 48 }}
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-white text-center"
          style={{
            fontSize: "clamp(32px, 4.5vw, 64px)",
            lineHeight: 1.0,
            letterSpacing: "0.01em",
            marginBottom: 12,
          }}
        >
          4 CITIES. ONE MOVEMENT.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-white/80 text-lg text-center"
          style={{ marginBottom: 48 }}
        >
          November 2026
        </motion.p>

        {/* City Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 24 }}>
          {cities.map((city, i) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 * i }}
              className="flip-card h-[280px]"
            >
              <div className="flip-card-inner w-full h-full">
                {/* Front */}
                <div className="flip-card-front bg-[#f2af29] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center w-full h-full">
                  <h3
                    className="font-display text-[#1A1A1A] mb-1"
                    style={{
                      fontSize: "clamp(14px, 1.6vw, 20px)",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {city.name}
                  </h3>
                  <p className="font-body text-[#1A1A1A]/70 text-sm mb-4">
                    {city.state}
                  </p>
                  <span className="inline-block font-body text-[12px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#1A1A1A] text-[#f2af29]">
                    Coming Nov 2026
                  </span>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-[#1A1A1A] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center w-full h-full">
                  <h4
                    className="font-display text-[#f2af29] mb-3"
                    style={{
                      fontSize: "clamp(14px, 1.6vw, 20px)",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {city.name}
                  </h4>
                  <p className="font-body text-white/80 text-sm text-center leading-relaxed">
                    {city.blurb}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Torn Paper Divider → next section: Value #1A1A1A */}
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
        {/* Layer 2: Main foreground color (Team BG #F5F0E8) */}
        <path
          d="M0,25 L15,18 L30,28 L45,16 L60,26 L75,14 L90,24 L105,12 L120,22 L135,14 L150,25 L165,16 L180,28 L195,18 L210,30 L225,20 L240,32 L255,22 L270,34 L285,24 L300,36 L315,26 L330,38 L345,28 L360,40 L375,30 L390,42 L405,32 L420,44 L435,34 L450,45 L465,35 L480,46 L495,36 L510,48 L525,38 L540,49 L555,39 L570,50 L585,40 L600,52 L615,42 L630,53 L645,43 L660,54 L675,44 L690,55 L705,45 L720,55 L735,46 L750,54 L765,44 L780,52 L795,42 L810,50 L825,40 L840,48 L855,38 L870,46 L885,36 L900,44 L915,34 L930,42 L945,32 L960,40 L975,30 L990,38 L1005,28 L1020,36 L1035,26 L1050,34 L1065,24 L1080,32 L1095,22 L1110,30 L1125,20 L1140,28 L1155,18 L1170,26 L1185,16 L1200,24 L1215,14 L1230,22 L1245,12 L1260,20 L1275,10 L1290,18 L1305,8 L1320,16 L1335,6 L1350,14 L1365,4 L1380,12 L1395,2 L1410,10 L1425,2 L1440,8 L1440,60 L0,60 Z"
          fill="#F5F0E8"
        />
      </svg>
    </section>
  );
}
