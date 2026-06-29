"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Gagaan",
    org: "IRL Culture Fest",
    initials: "G",
    accentColor: "#FF2D2D",
  },
  {
    name: "Tumul",
    org: "IRL Culture Fest",
    initials: "T",
    accentColor: "#FF6B35",
  },
  {
    name: "Madhur",
    org: "IRL Culture Fest",
    initials: "M",
    accentColor: "#FFD600",
  },
  {
    name: "Vanshikaa",
    org: "IRL Culture Fest",
    initials: "V",
    accentColor: "#8FFB2B",
  },
  {
    name: "Aaquib",
    org: "IRL Culture Fest",
    initials: "A",
    accentColor: "#BF5FFF",
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-24 sm:py-32 px-6"
      style={{ background: "#F5F0E8" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label text-[#FF2D2D] font-[family-name:var(--font-space-grotesk)] mb-6"
        >
          The Team ————
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-abril-fatface)] text-3xl sm:text-4xl md:text-5xl text-[#0D0D0D] leading-tight mb-3"
        >
          TEAM BUILDING THE IRL CULTURE FEST.
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-[family-name:var(--font-space-grotesk)] text-[#555] text-base sm:text-lg mb-16"
        >
          20+ years curating experiences with 100+ global brands.
        </motion.p>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center text-center group cursor-default"
            >
              {/* Avatar */}
              <div
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center mb-4 transition-shadow duration-300"
                style={{
                  background: "#ddd",
                  border: `4px solid ${member.accentColor}`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 25px ${member.accentColor}80`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <span className="font-[family-name:var(--font-abril-fatface)] text-2xl sm:text-3xl text-[#555]">
                  {member.initials}
                </span>
              </div>

              {/* Name & Org */}
              <h3 className="font-[family-name:var(--font-abril-fatface)] text-lg text-[#0D0D0D]">
                {member.name}
              </h3>
              <p className="font-[family-name:var(--font-space-grotesk)] text-[#FF2D2D] text-sm">
                {member.org}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
