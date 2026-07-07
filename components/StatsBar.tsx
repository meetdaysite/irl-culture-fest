"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const statsData: Array<{
  target?: number;
  suffix: string;
  label: string;
  isNumeric: boolean;
  text?: string;
}> = [
  { target: 600, suffix: "+", label: "Verified IRL Communities", isNumeric: true },
  { target: 400, suffix: "+", label: "Consumer Brands & Enablers", isNumeric: true },
  { target: 10, suffix: "M+", label: "Combined Hyper-Local Reach", isNumeric: true },
];

function CountUp({ target, suffix = "", inView }: { target: number; suffix?: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1500; // 1.5s
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing: ease-out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      const currentCount = Math.floor(easeProgress * target);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, target]);

  return <>{count}{suffix}</>;
}

export default function StatsBar() {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden w-full"
      style={{ background: "#FF2B2B", paddingTop: 32, paddingBottom: 92 }}
    >
      <div className="w-full px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 gap-y-6 gap-x-4 md:flex md:flex-row md:items-center md:justify-evenly text-center">
          {statsData.map((stat, index) => (
            <div key={index} className="relative flex flex-col items-center justify-center md:flex-1">
              <div className="flex flex-col items-center">
                {/* Number/Date */}
                <span className="font-display text-[42px] leading-tight text-white">
                  {stat.isNumeric ? (
                    <CountUp target={stat.target || 0} suffix={stat.suffix} inView={inView} />
                  ) : (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      {stat.text}
                    </motion.span>
                  )}
                </span>
                {/* Label */}
                <span
                  className="font-body text-[12px] uppercase font-medium mt-1"
                  style={{ letterSpacing: "0.14em", color: "rgba(255, 255, 255, 0.7)" }}
                >
                  {stat.label}
                </span>
              </div>
              {/* Divider (visible only on desktop and not after the last item) */}
              {index < statsData.length - 1 && (
                <div
                  className="hidden md:block bg-white/25 absolute right-0 top-1/2 -translate-y-1/2"
                  style={{ width: "1px", height: "40px" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Torn Paper Divider → next section: GallerySection #FFFFFF */}
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
          fill="#FF2B2B"
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
