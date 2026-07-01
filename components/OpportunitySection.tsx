"use client";

export default function OpportunitySection() {
  const lines = [
    { text: "CURATION IS THE", className: "text-white" },
    { text: "NEW CREATION.", className: "text-[#1A1A1A]" },
    { text: "BUT THE BRIDGE IS BROKEN.", className: "text-white" },
  ];

  return (
    <section
      id="opportunity"
      className="relative overflow-hidden"
      style={{ background: "#FF2D2D", paddingTop: 60, paddingBottom: 80 }}
    >
      <div
        className="mx-auto relative z-10"
        style={{ maxWidth: 1200, paddingLeft: 48, paddingRight: 48 }}
      >


        {/* Giant Quote */}
        <div style={{ marginBottom: 48 }}>
          {lines.map((line, i) => (
            <h2
              key={i}
              className={`font-display leading-tight ${line.className}`}
              style={{
                fontSize: "clamp(32px, 4.5vw, 64px)",
                lineHeight: 1.0,
                letterSpacing: "0.01em",
              }}
            >
              {line.text}
            </h2>
          ))}
        </div>

        {/* Floating Boxes for Body Text */}
        <div className="grid md:grid-cols-2" style={{ gap: 24 }}>
          {/* Box 1 */}
          <div
            className="relative rounded-2xl p-8 backdrop-blur-md overflow-hidden"
            style={{ background: "rgba(255, 255, 255, 0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <p className="font-body text-white text-base sm:text-lg leading-relaxed relative z-10">
              India is witnessing an unprecedented explosion of offline culture —
              from underground gig nights and rooftop raves to niche community
              meetups and wellness circles. Yet the builders behind these movements
              remain invisible.
            </p>
          </div>

          {/* Box 2 */}
          <div
            className="relative rounded-2xl p-8 backdrop-blur-md overflow-hidden"
            style={{ background: "rgba(255, 255, 255, 0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <p className="font-body text-white text-base sm:text-lg leading-relaxed relative z-10">
              The market needs a bridge between high-intent offline audiences and
              brands craving authentic connection. That bridge is the IRL Culture
              Fest — India&apos;s first platform to celebrate, monetize, and scale the
              offline economy.
            </p>
          </div>
        </div>
      </div>

      {/* Torn Paper Divider → next section: Solution #FFFFFF */}
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
        {/* Layer 2: Main foreground color (Solution BG #FFFFFF) */}
        <path
          d="M0,25 L15,18 L30,28 L45,16 L60,26 L75,14 L90,24 L105,12 L120,22 L135,14 L150,25 L165,16 L180,28 L195,18 L210,30 L225,20 L240,32 L255,22 L270,34 L285,24 L300,36 L315,26 L330,38 L345,28 L360,40 L375,30 L390,42 L405,32 L420,44 L435,34 L450,45 L465,35 L480,46 L495,36 L510,48 L525,38 L540,49 L555,39 L570,50 L585,40 L600,52 L615,42 L630,53 L645,43 L660,54 L675,44 L690,55 L705,45 L720,55 L735,46 L750,54 L765,44 L780,52 L795,42 L810,50 L825,40 L840,48 L855,38 L870,46 L885,36 L900,44 L915,34 L930,42 L945,32 L960,40 L975,30 L990,38 L1005,28 L1020,36 L1035,26 L1050,34 L1065,24 L1080,32 L1095,22 L1110,30 L1125,20 L1140,28 L1155,18 L1170,26 L1185,16 L1200,24 L1215,14 L1230,22 L1245,12 L1260,20 L1275,10 L1290,18 L1305,8 L1320,16 L1335,6 L1350,14 L1365,4 L1380,12 L1395,2 L1410,10 L1425,2 L1440,8 L1440,60 L0,60 Z"
          fill="#FFFFFF"
        />
      </svg>
    </section>
  );
}
