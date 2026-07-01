"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colour: string;
  opacity: number;
  origX: number;
  origY: number;
}

const COLOURS = ["#FF2D2D", "#FF6B35", "#FFD600", "#8FFB2B", "#BF5FFF", "#00C2FF"];

export default function FloatingDots() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle Resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track Mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Initialize 450 Dots
    const dotsCount = 450;
    const dots: Dot[] = [];
    const width = canvas.width;
    const height = canvas.height;

    for (let i = 0; i < dotsCount; i++) {
      const rx = Math.random() * width;
      const ry = Math.random() * height;
      dots.push({
        x: rx,
        y: ry,
        vx: (Math.random() * 0.8 - 0.4),
        vy: (Math.random() * 0.8 - 0.4),
        radius: Math.random() * 2 + 1.2, // 1.2 to 3.2
        colour: COLOURS[Math.floor(Math.random() * COLOURS.length)],
        opacity: Math.random() * 0.3 + 0.25, // 0.25 to 0.55
        origX: rx,
        origY: ry,
      });
    }

    let animationFrameId: number;

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;

      dots.forEach((dot) => {
        // Normal Drift
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off canvas edges
        if (dot.x - dot.radius < 0) {
          dot.x = dot.radius;
          dot.vx *= -1;
        } else if (dot.x + dot.radius > canvas.width) {
          dot.x = canvas.width - dot.radius;
          dot.vx *= -1;
        }

        if (dot.y - dot.radius < 0) {
          dot.y = dot.radius;
          dot.vy *= -1;
        } else if (dot.y + dot.radius > canvas.height) {
          dot.y = canvas.height - dot.radius;
          dot.vy *= -1;
        }

        // Cursor Repulsion
        if (mouse) {
          const dx = dot.x - mouse.x;
          const dy = dot.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 150;

          if (dist < repelRadius && dist > 0) {
            const force = (repelRadius - dist) / repelRadius;
            dot.x += (dx / dist) * force * 15;
            dot.y += (dy / dist) * force * 15;
          }
        }

        // Lazily pull back to original coordinates
        const dxOrig = dot.origX - dot.x;
        const dyOrig = dot.origY - dot.y;
        
        dot.vx += dxOrig * 0.00008;
        dot.vy += dyOrig * 0.00008;

        // Slight noise/jitter to keep them moving
        dot.vx += (Math.random() * 0.08 - 0.04);
        dot.vy += (Math.random() * 0.08 - 0.04);

        // Apply friction to prevent extreme velocities
        dot.vx *= 0.98;
        dot.vy *= 0.98;

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = dot.colour;
        ctx.globalAlpha = dot.opacity;
        ctx.fill();
      });

      // Reset globalAlpha
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none select-none"
      style={{ zIndex: 1 }}
    />
  );
}
