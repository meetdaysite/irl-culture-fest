"use client";

export default function OpportunitySection() {
  const lines = [
    { text: "CURATION IS THE", className: "text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl" },
    { text: "NEW CREATION.", className: "gradient-text-red-orange text-3xl sm:text-5xl md:text-6xl lg:text-7xl" },
    { text: "BUT THE BRIDGE IS BROKEN.", className: "text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl" },
  ];

  return (
    <section
      id="opportunity"
      className="relative py-12 sm:py-16 px-8 overflow-visible"
      style={{ background: "#0D0D0D" }}
    >
      {/* Diagonal Section Divider */}
      <div
        className="absolute -top-[40px] left-0 right-0 h-[60px] pointer-events-none z-[1]"
        style={{
          backgroundColor: "#0D0D0D",
          clipPath: "polygon(0 0, 100% 40px, 100% 60px, 0 60px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Label */}
        <p
          className="font-body text-[#F5F0E8]/60 mb-16"
          style={{
            fontSize: "clamp(10px, 1vw, 12px)",
            letterSpacing: "0.18em",
          }}
        >
          The Macro Opportunity ————
        </p>

        {/* Giant Quote */}
        <div className="mb-16">
          {lines.map((line, i) => (
            <h2
              key={i}
              className={`font-display leading-tight ${line.className}`}
              style={{
                fontSize: "clamp(40px, 6vw, 88px)",
                lineHeight: 0.95,
                letterSpacing: "0.01em",
              }}
            >
              {line.text}
            </h2>
          ))}
        </div>

        {/* Floating Boxes for Body Text */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Box 1 */}
          <div
            className="relative rounded-2xl p-8 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden"
            style={{ background: "rgba(20, 20, 20, 0.6)" }}
          >
            {/* Soft Ambient Red Glow behind text */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#FF2D2D]/10 rounded-full blur-2xl pointer-events-none" />
            
            <p className="font-body text-[#F5F0E8] text-base sm:text-lg leading-relaxed relative z-10">
              India is witnessing an unprecedented explosion of offline culture —
              from underground gig nights and rooftop raves to niche community
              meetups and wellness circles. Yet the builders behind these movements
              remain invisible.
            </p>
          </div>

          {/* Box 2 */}
          <div
            className="relative rounded-2xl p-8 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden"
            style={{ background: "rgba(20, 20, 20, 0.6)" }}
          >
            {/* Soft Ambient Purple Glow behind text */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#6700a2]/15 rounded-full blur-2xl pointer-events-none" />

            <p className="font-body text-[#F5F0E8] text-base sm:text-lg leading-relaxed relative z-10">
              The market needs a bridge between high-intent offline audiences and
              brands craving authentic connection. That bridge is the IRL Culture
              Fest — India&apos;s first platform to celebrate, monetize, and scale the
              offline economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
