"use client";

import { useEffect, useRef } from "react";

interface SilkProps {
  color?: string;
  backgroundColor?: string;
  speed?: number;
  density?: number;
}

export default function Silk({
  color = "#00d4ff",
  backgroundColor = "#0a0a0a",
  speed = 1,
  density = 1,
}: SilkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Parse hex color to RGB
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : { r: 0, g: 212, b: 255 };
    };

    const rgb = hexToRgb(color);

    // Particle class
    class Particle {
      x = 0;
      y = 0;
      vx = 0;
      vy = 0;
      life = 0;
      maxLife = 0;
      size = 0;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5 * speed;
        this.vy = (Math.random() - 0.5) * 0.5 * speed;
        this.life = 0;
        this.maxLife = 200 + Math.random() * 300;
        this.size = 1 + Math.random() * 2;
      }

      update() {
        // Smooth flowing motion using sine waves
        this.vx += Math.sin(this.y * 0.003 + this.life * 0.01) * 0.02 * speed;
        this.vy += Math.cos(this.x * 0.003 + this.life * 0.01) * 0.02 * speed;

        // Damping
        this.vx *= 0.99;
        this.vy *= 0.99;

        this.x += this.vx;
        this.y += this.vy;
        this.life++;

        if (
          this.life > this.maxLife ||
          this.x < -50 ||
          this.x > width + 50 ||
          this.y < -50 ||
          this.y > height + 50
        ) {
          this.reset();
        }
      }
    }

    // Create particles
    const particleCount = Math.floor(80 * density);
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Trail history
    const trailLength = 20;
    const trails: { x: number; y: number; alpha: number }[][] = particles.map(
      () => []
    );

    const animate = () => {
      // Fade effect for trails
      ctx.fillStyle = backgroundColor + "18"; // ~10% opacity
      ctx.fillRect(0, 0, width, height);

      particles.forEach((particle, i) => {
        particle.update();

        // Add to trail
        trails[i].push({ x: particle.x, y: particle.y, alpha: 1 });
        if (trails[i].length > trailLength) {
          trails[i].shift();
        }

        // Draw trail
        if (trails[i].length > 1) {
          for (let j = 1; j < trails[i].length; j++) {
            const alpha = (j / trails[i].length) * 0.3;
            const lifeRatio = 1 - particle.life / particle.maxLife;
            ctx.beginPath();
            ctx.moveTo(trails[i][j - 1].x, trails[i][j - 1].y);
            ctx.lineTo(trails[i][j].x, trails[i][j].y);
            ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha * lifeRatio})`;
            ctx.lineWidth = particle.size * (j / trails[i].length);
            ctx.stroke();
          }
        }

        // Draw particle glow
        const lifeRatio = 1 - particle.life / particle.maxLife;
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 4
        );
        gradient.addColorStop(
          0,
          `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.6 * lifeRatio})`
        );
        gradient.addColorStop(
          1,
          `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`
        );
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    // Initial fill
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [color, backgroundColor, speed, density]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
