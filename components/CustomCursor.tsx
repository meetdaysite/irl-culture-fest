"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [onRedBg, setOnRedBg] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { stiffness: 150, damping: 18, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);

    if (window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Detect if cursor is over a red or dark background
      const target = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      if (target) {
        let isRed = false;
        let current: HTMLElement | null = target;
        while (current && current !== document.body) {
          const bg = window.getComputedStyle(current).backgroundColor;
          if (
            bg === "rgb(255, 43, 43)" ||
            bg === "rgba(255, 43, 43, 1)" ||
            bg.replace(/\s+/g, "") === "rgb(255,43,43)"
          ) {
            isRed = true;
            break;
          }
          current = current.parentElement;
        }
        setOnRedBg(isRed);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[data-cursor-grow]")
      ) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const relatedTarget = e.relatedTarget as HTMLElement | null;
      if (relatedTarget) {
        if (
          relatedTarget.tagName === "BUTTON" ||
          relatedTarget.tagName === "A" ||
          relatedTarget.closest("button") ||
          relatedTarget.closest("a") ||
          relatedTarget.closest("[data-cursor-grow]")
        ) {
          return;
        }
      }

      setIsHovered(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseX, mouseY]);

  if (!isMounted) return null;
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  const cursorColor = onRedBg ? "#f2af29" : "#FF2B2B";

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed w-[10px] h-[10px] rounded-full pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          left: -5,
          top: -5,
          zIndex: 99999,
          backgroundColor: cursorColor,
        }}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />

      {/* Outer Ring */}
      <motion.div
        className="fixed w-[36px] h-[36px] border-2 rounded-full pointer-events-none bg-transparent"
        style={{
          x: springX,
          y: springY,
          left: -18,
          top: -18,
          zIndex: 99998,
          borderColor: cursorColor,
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          backgroundColor: isHovered
            ? onRedBg
              ? "rgba(242, 175, 41, 0.15)"
              : "rgba(255, 43, 43, 0.15)"
            : "rgba(255, 43, 43, 0)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
    </>
  );
}
