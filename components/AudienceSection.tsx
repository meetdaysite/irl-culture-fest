"use client";

import { motion } from "framer-motion";

export default function AudienceSection() {
  return (
    <section
      id="audience"
      className="relative py-12 sm:py-16 px-8 overflow-hidden"
      style={{ background: "#2A1A2E" }}
    >
      {/* Decorative Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { top: "10%", left: "5%", color: "#FF2D2D", size: 6 },
          { top: "20%", right: "8%", color: "#8FFB2B", size: 4 },
          { top: "45%", left: "3%", color: "#FFD600", size: 5 },
          { top: "60%", right: "12%", color: "#6700a2", size: 8 },
          { top: "80%", left: "15%", color: "#00C2FF", size: 4 },
          { top: "75%", right: "5%", color: "#FF2B2B", size: 6 },
          { top: "30%", left: "50%", color: "#FF2D2D", size: 3 },
          { top: "55%", left: "85%", color: "#8FFB2B", size: 5 },
          { top: "15%", left: "70%", color: "#FFD600", size: 4 },
          { top: "90%", left: "40%", color: "#6700a2", size: 3 },
        ].map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: dot.top,
              left: dot.left,
              right: (dot as { right?: string }).right,
              width: dot.size,
              height: dot.size,
              background: dot.color,
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label text-[#6700a2]/60 font-[family-name:var(--font-space-grotesk)] mb-6"
        >
          Target Audience ————
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-archivo-black)] text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4"
        >
          WHO IS IN THE ROOM?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-[family-name:var(--font-space-grotesk)] text-[#F5F0E8]/80 text-base sm:text-lg max-w-2xl mb-16 leading-relaxed"
        >
          We bypass mass vanity metrics to focus exclusively on high-fidelity,
          high-leverage target layers.
        </motion.p>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-2xl p-8 sm:p-10 overflow-hidden"
            style={{ background: "#F5F0E8" }}
          >
            {/* Ghost Number */}
            <span className="absolute top-2 right-4 font-[family-name:var(--font-archivo-black)] text-[100px] sm:text-[140px] leading-none text-[#0D0D0D] opacity-[0.06] pointer-events-none select-none">
              01
            </span>
            <div className="relative z-10">
              <span className="inline-block font-[family-name:var(--font-space-grotesk)] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6 bg-[#8FFB2B] text-[#0D0D0D]">
                150+ SUPER-HOSTS
              </span>
              <p className="font-[family-name:var(--font-space-grotesk)] text-[#333] text-base leading-relaxed">
                Subculture leaders and community founders representing thousands
                of hyper-active, loyal members.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative rounded-2xl p-8 sm:p-10 overflow-hidden"
            style={{ background: "#FF2D2D" }}
          >
            {/* Ghost Number */}
            <span className="absolute top-2 right-4 font-[family-name:var(--font-archivo-black)] text-[100px] sm:text-[140px] leading-none text-white opacity-[0.15] pointer-events-none select-none">
              02
            </span>
            <div className="relative z-10">
              <span className="inline-block font-[family-name:var(--font-space-grotesk)] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6 bg-[#FFD600] text-[#0D0D0D]">
                ECOSYSTEM ENABLERS
              </span>
              <p className="font-[family-name:var(--font-space-grotesk)] text-white text-base leading-relaxed">
                Platform builders, venue partners, booking agencies, and
                corporate sponsors shaping the experience economy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
