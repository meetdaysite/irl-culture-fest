"use client";

import { useEffect, useRef } from "react";

export default function ConfettiPop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const colors = ["#FF2B2B", "#f2af29", "#1A1A1A", "#FFFFFF"];
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      r: number;
      d: number;
      rotation: number;
      rotationSpeed: number;
    }> = [];

    // Burst 150 particles from center-middle
    const particleCount = 150;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: width / 2,
        y: height * 0.45,
        vx: (Math.random() - 0.5) * 18,
        vy: (Math.random() - 0.7) * 20 - 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        r: Math.random() * 6 + 4,
        d: Math.random() * 150 + 100,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
      });
    }

    let opacity = 1.0;
    const gravity = 0.45;
    const friction = 0.97;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      let alive = false;
      particles.forEach((p) => {
        p.vx *= friction;
        p.vy += gravity;
        p.vy *= friction;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        if (p.y < height + 20) {
          alive = true;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = opacity;
        ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
        ctx.restore();
      });

      opacity -= 0.008;

      if (alive && opacity > 0) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100] w-full h-full"
    />
  );
}
