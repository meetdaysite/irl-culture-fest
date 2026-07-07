"use client";

import { motion } from "framer-motion";

const brands = [
  "Google",
  "Microsoft",
  "Meta",
  "Intel",
  "Samsung",
  "Nestlé",
  "HUL",
  "P&G",
  "Volkswagen",
  "Suzuki",
];

export default function PartnersCollaborators() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden"
      style={{ background: "#0D0D0D", paddingTop: 80, paddingBottom: 140 }}
    >
      <div
        className="mx-auto relative z-10"
        style={{ maxWidth: 1200, paddingLeft: 48, paddingRight: 48 }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body font-bold text-xs sm:text-sm uppercase tracking-wider text-[#FF2B2B] mb-3"
        >
          ✦ PARTNERS &amp; COLLABORATORS
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-white tracking-tight leading-none mb-16"
          style={{ fontSize: "clamp(32px, 4.5vw, 56px)", letterSpacing: "0.01em" }}
        >
          The Collaborative{" "}
          <span className="text-[#f2af29]">Ecosystem.</span>
        </motion.h2>

        {/* Presented By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-6"
        >
          <span className="block font-body text-[10px] uppercase font-bold tracking-widest text-white/40 mb-6">
            Presented By
          </span>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-5 bg-[#1A1A1A] border-2 border-white/10 rounded-2xl px-8 py-6 cursor-pointer"
              style={{ boxShadow: "4px 4px 0px #FF2B2B" }}
            >
              <div className="w-10 h-10 rounded-full bg-[#FF2B2B] flex items-center justify-center flex-shrink-0">
                <span className="font-display text-white font-black text-sm">M</span>
              </div>
              <div>
                <span className="font-display text-white text-2xl sm:text-3xl font-black tracking-wide">
                  meetday.ai
                </span>
                <p className="font-body text-white/50 text-xs mt-0.5 leading-tight">
                  The definitive infrastructure for host-first community layers.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-14" />

        {/* Ecosystem Alliances */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="block font-body text-[10px] uppercase font-bold tracking-widest text-white/40 mb-8">
            Ecosystem Alliances
          </span>
          <div
            className="w-full border-2 border-dashed border-white/15 rounded-2xl flex items-center justify-center py-16 px-8"
            style={{ minHeight: "140px" }}
          >
            <p className="font-body text-white/30 text-sm uppercase tracking-widest text-center">
              Logo will be added later
            </p>
          </div>
        </motion.div>

        {/* Past Global Brand Collaborators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="block font-body text-[10px] uppercase font-bold tracking-widest text-white/40 mb-3">
            Past Global Brand Collaborators Ecosystem
          </span>
          <p className="font-body text-white/50 text-sm leading-relaxed mb-10 max-w-2xl">
            Our leadership team has consistently built and delivered high-impact programs for global giants:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {brands.map((brand, i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.06, borderColor: "rgba(255,255,255,0.3)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center justify-center border border-white/10 rounded-xl py-5 bg-white/5 cursor-pointer transition-colors"
              >
                <span className="font-display text-white text-sm sm:text-base font-black tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
                  {brand}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Torn Paper Divider → PassesSection (dark bg) */}
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
        />
        <path
          d="M0,25 L15,18 L30,28 L45,16 L60,26 L75,14 L90,24 L105,12 L120,22 L135,14 L150,25 L165,16 L180,28 L195,18 L210,30 L225,20 L240,32 L255,22 L270,34 L285,24 L300,36 L315,26 L330,38 L345,28 L360,40 L375,30 L390,42 L405,32 L420,44 L435,34 L450,45 L465,35 L480,46 L495,36 L510,48 L525,38 L540,49 L555,39 L570,50 L585,40 L600,52 L615,42 L630,53 L645,43 L660,54 L675,44 L690,55 L705,45 L720,55 L735,46 L750,54 L765,44 L780,52 L795,42 L810,50 L825,40 L840,48 L855,38 L870,46 L885,36 L900,44 L915,34 L930,42 L945,32 L960,40 L975,30 L990,38 L1005,28 L1020,36 L1035,26 L1050,34 L1065,24 L1080,32 L1095,22 L1110,30 L1125,20 L1140,28 L1155,18 L1170,26 L1185,16 L1200,24 L1215,14 L1230,22 L1245,12 L1260,20 L1275,10 L1290,18 L1305,8 L1320,16 L1335,6 L1350,14 L1365,4 L1380,12 L1395,2 L1410,10 L1425,2 L1440,8 L1440,60 L0,60 Z"
          fill="#F5F0E8"
        />
      </svg>
    </section>
  );
}
