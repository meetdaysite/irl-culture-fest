"use client";

import { motion } from "framer-motion";
import DecorativeStar from "@/components/DecorativeStar";

const advisors = [
  {
    name: "Startupnews.fyi",
    role: "Strategic Growth Partner",
    description: "Amplifying the festival's reach into India's founder and investor ecosystem.",
  },
  {
    name: "fotello",
    role: "Intelligent Proptech & Space Utilization Advisor",
    description: "Optimizing physical venue design and space monetization across all three cities.",
  },
  {
    name: "Quranium",
    role: "Ecosystem Security & Infrastructure Partner",
    description: "Securing the digital and on-ground infrastructure powering the festival backbone.",
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative overflow-hidden"
      style={{ background: "#F5F0E8", paddingTop: 80, paddingBottom: 140 }}
    >
      {/* Decorative stars */}
      <DecorativeStar size={150} color="#FF2B2B" opacity={0.06} top="-20px" left="6%" spin spinDuration={45} />
      <DecorativeStar size={90}  color="#f2af29" opacity={0.07} top="30%" right="4%" rotate={28} />
      <DecorativeStar size={120} color="#1A1A1A" opacity={0.05} bottom="10%" left="3%" spin spinDuration={32} />
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
          ✦ LEADERSHIP &amp; ADVISORY
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-[#1A1A1A] tracking-tight leading-none mb-16"
          style={{ fontSize: "clamp(32px, 4.5vw, 56px)", letterSpacing: "0.01em" }}
        >
          Organized by the{" "}
          <span className="text-[#FF2B2B]">Offline Pioneers.</span>
        </motion.h2>

        {/* Director card — full width spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden border-2 border-[#1A1A1A] mb-16"
          style={{ boxShadow: "6px 6px 0px #1A1A1A" }}
        >
          {/* Yellow name block */}
          <div className="lg:col-span-4 bg-[#f2af29] p-8 flex flex-col justify-between">
            <div>
              <span className="block font-body text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A] opacity-60 mb-3">
                Festival Director &amp; Founder
              </span>
              <h3 className="font-display text-[26px] sm:text-[30px] font-black text-[#1A1A1A] leading-tight mb-1">
                Gagaan Singh Nagi
              </h3>
              <span className="font-body text-[12px] font-semibold text-[#1A1A1A] opacity-70 uppercase tracking-wider">
                Meetday
              </span>
            </div>
            {/* Decorative dot grid */}
            <div className="mt-8 flex gap-2 flex-wrap">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#1A1A1A] opacity-20"
                />
              ))}
            </div>
          </div>

          {/* Bio block */}
          <div className="lg:col-span-8 bg-[#1A1A1A] p-8 flex flex-col justify-center">
            <p className="font-body text-white text-base sm:text-lg leading-relaxed opacity-90 mb-6">
              20+ years navigating marketing, experiential strategy, and massive event ecosystems.
              Driving the host-centric, micro-entrepreneur operational framework across India.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Experiential Strategy", "Host-Centric Ops", "Event Ecosystems", "Marketing"].map((tag) => (
                <span
                  key={tag}
                  className="font-body text-[11px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full border border-white/20 text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Advisory section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="font-display text-[#1A1A1A] text-[22px] sm:text-[26px] font-black leading-tight mb-2">
            Strategic Growth &amp; Infrastructure Advisory
          </h3>
          <p className="font-body text-[#555] text-sm sm:text-base leading-relaxed max-w-2xl">
            Supported by industry leaders at the absolute intersection of tech, media, and real-world property layer integration.
          </p>
        </motion.div>

        {/* Advisor cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advisors.map((advisor, i) => (
            <motion.div
              key={advisor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ scale: 1.03, rotate: 0 }}
              className="rounded-2xl p-6 border-2 border-[#1A1A1A] bg-white flex flex-col gap-3"
              style={{
                boxShadow: "4px 4px 0px #1A1A1A",
                rotate: `${[-1.5, 1.5, -1][i % 3]}deg`,
              }}
            >
              <span className="block font-body text-[9px] uppercase font-bold tracking-widest text-[#FF2B2B] opacity-80">
                {advisor.role}
              </span>
              <h4 className="font-display text-[20px] sm:text-[22px] font-black text-[#1A1A1A] leading-tight">
                {advisor.name}
              </h4>
              <p className="font-body text-[13px] sm:text-[14px] text-[#555] leading-relaxed">
                {advisor.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Torn Paper Divider → PassesSection */}
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
          fill="#0D0D0D"
        />
      </svg>
    </section>
  );
}
