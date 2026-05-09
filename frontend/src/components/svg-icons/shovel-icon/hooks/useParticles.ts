import { useEffect } from "react";
import { Particle, ParticleConfig } from "../ShovelIcon.types";

export function useParticles(canvasRef: React.RefObject<HTMLCanvasElement>, cfg: ParticleConfig, canvasSize: number) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cx = canvasSize / 2;
    const cy = canvasSize / 2;

    const particles: Particle[] = Array.from({ length: cfg.count }, (_, i) => {
      const angle = (i / cfg.count) * Math.PI * 2 + Math.random() * 0.8;
      const r = cfg.orbitRadius[0] + Math.random() * (cfg.orbitRadius[1] - cfg.orbitRadius[0]);
      const speed = (cfg.speed + Math.random() * 0.2) * (Math.random() > 0.5 ? 1 : -1);
      const size = cfg.sizeRange[0] + Math.random() * (cfg.sizeRange[1] - cfg.sizeRange[0]);
      const color = cfg.colors[Math.floor(Math.random() * cfg.colors.length)];
      const phaseOffset = Math.random() * Math.PI * 2;
      const radialDrift = (Math.random() - 0.5) * 6;
      return { angle, r, speed, size, color, phaseOffset, radialDrift, life: Math.random() };
    });

    let rafId: number;

    function draw() {
      ctx!.clearRect(0, 0, canvasSize, canvasSize);

      for (const p of particles) {
        p.angle += p.speed * 0.018;
        p.life += 0.02;

        const wobble = Math.sin(p.life + p.phaseOffset) * 0.5 + 0.5;
        const radius = p.r + Math.sin(p.life * 0.7 + p.phaseOffset) * p.radialDrift;
        const alpha = 0.3 + wobble * 0.7;
        const size = p.size * (0.5 + wobble * 0.5);
        const px = cx + Math.cos(p.angle) * radius;
        const py = cy + Math.sin(p.angle) * radius;

        // glow halo
        const grad = ctx!.createRadialGradient(px, py, 0, px, py, size * 3);
        grad.addColorStop(0, cfg.glowColor + alpha * 0.6 + ")");
        grad.addColorStop(1, cfg.glowColor + "0)");
        ctx!.beginPath();
        ctx!.arc(px, py, size * 3, 0, Math.PI * 2);
        ctx!.fillStyle = grad;
        ctx!.fill();

        // core dot
        ctx!.beginPath();
        ctx!.arc(px, py, size, 0, Math.PI * 2);
        ctx!.fillStyle = p.color;
        ctx!.globalAlpha = alpha;
        ctx!.fill();
        ctx!.globalAlpha = 1;
      }

      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, [canvasRef, cfg, canvasSize]);
}
