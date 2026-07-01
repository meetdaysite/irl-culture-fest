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
      className="relative py-12 sm:py-16 px-8 overflow-visible"
      style={{ background: "#6700a2" }}
    >
      {/* Diagonal Section Divider */}
      <div
        className="absolute -top-[40px] left-0 right-0 h-[60px] pointer-events-none z-[1]"
        style={{
          backgroundColor: "#6700a2",
          clipPath: "polygon(0 0, 100% 40px, 100% 60px, 0 60px)",
        }}
      />

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
            stroke="#DCDCDC"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M100 20L115 85L180 100L115 115L100 180L85 115L20 100L85 85L100 20Z"
            stroke="#DCDCDC"
            strokeWidth="0.5"
            fill="none"
            opacity="0.2"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-white text-center mb-3"
          style={{
            fontSize: "clamp(40px, 6vw, 88px)",
            lineHeight: 0.95,
            letterSpacing: "0.01em",
          }}
        >
          4 CITIES. ONE MOVEMENT.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-white/80 text-lg text-center mb-16"
        >
          November 2026
        </motion.p>

        {/* City Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="flip-card-front bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center w-full h-full">
                  <h3
                    className="font-display text-[#0D0D0D] mb-1"
                    style={{
                      fontSize: "clamp(18px, 2.2vw, 26px)",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {city.name}
                  </h3>
                  <p className="font-body text-gray-400 text-sm mb-4">
                    {city.state}
                  </p>
                  <span className="inline-block font-body text-[12px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FF2D2D] text-white">
                    Coming Nov 2026
                  </span>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-[#0D0D0D] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center w-full h-full">
                  <h4
                    className="font-display text-[#FF2D2D] mb-3"
                    style={{
                      fontSize: "clamp(18px, 2.2vw, 26px)",
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
    </section>
  );
}
