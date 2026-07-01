"use client";

import { motion } from "framer-motion";

const columns = [
  {
    title: "DIRECT MONETIZATION",
    body: "Brand partnerships, sponsored hubs, premium matchmaking sessions, and co-branded activations that convert culture into revenue for every stakeholder.",
  },
  {
    title: "CROSS-POLLINATION",
    body: "A melting pot where subcultures collide — wellness meets music, gaming meets food, art meets fitness — creating new creative formats and untapped business models.",
  },
  {
    title: "INSTITUTIONAL VALIDATION",
    body: "Industry-first awards, media spotlights, and official recognition that transforms grassroots community builders into credentialed culture leaders.",
  },
];

export default function ValueSection() {
  return (
    <section
      id="value"
      className="relative overflow-hidden"
      style={{ background: "#1A1A1A", paddingTop: 60, paddingBottom: 80 }}
    >
      <div
        className="mx-auto relative z-[2]"
        style={{ maxWidth: 1200, paddingLeft: 48, paddingRight: 48 }}
      >


        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-white"
          style={{
            fontSize: "clamp(32px, 4.5vw, 64px)",
            lineHeight: 1.0,
            letterSpacing: "0.01em",
            marginBottom: 48,
          }}
        >
          THE HIGH-VALUE EXCHANGE FOR IRL BUILDERS.
        </motion.h2>

        {/* 3 Columns with Dividers */}
        <div className="grid md:grid-cols-3 gap-0">
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className={`p-8 transition-colors hover:bg-white/5 cursor-default ${
                i < columns.length - 1 ? "md:border-r md:border-white/15" : ""
              }`}
            >
              <h3
                className="font-body font-bold uppercase tracking-wider text-white mb-4"
                style={{
                  fontSize: "clamp(14px, 1.6vw, 20px)",
                  letterSpacing: "0.03em",
                }}
              >
                {col.title}
              </h3>
              <p className="font-body text-white/70 text-sm leading-relaxed">
                {col.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Torn Paper Divider → next section: Team #F5F0E8 */}
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
