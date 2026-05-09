import { useEffect } from "react";
import { FlameConfig } from "../RankingIcon.types";

export function useFlameAura(
  canvasRef: React.RefObject<HTMLCanvasElement>,
  cfg: FlameConfig | undefined,
  canvasSize: number,
) {
  useEffect(() => {
    if (!cfg) return;

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const lines = Array.from({ length: cfg.particleCount }, () => ({
      x: canvasSize / 2 + (Math.random() - 0.5) * 26,

      y: canvasSize * 0.42 + Math.random() * 12,

      length: 12 + Math.random() * 18,

      speed: 0.15 + Math.random() * 0.25,

      alpha: 0.15 + Math.random() * cfg.opacity,

      sway: Math.random() * Math.PI * 2,
    }));

    let rafId: number;

    function draw() {
      ctx!.clearRect(0, 0, canvasSize, canvasSize);

      const t = performance.now() / 1000;

      for (const l of lines) {
        l.y -= l.speed;

        if (l.y < canvasSize * 0.34) {
          l.y = canvasSize * 0.42 + Math.random() * 10;

          l.x = canvasSize / 2 + (Math.random() - 0.5) * 24;
        }

        const offsetX = Math.sin(t * 1.8 + l.sway) * 4;

        const x = l.x + offsetX;

        const grad = ctx!.createLinearGradient(x, l.y, x, l.y + l.length);

        grad.addColorStop(0, `rgba(${cfg.colorA},0)`);

        grad.addColorStop(0.5, `rgba(${cfg.colorB},${l.alpha})`);

        grad.addColorStop(1, `rgba(${cfg.colorA},0)`);

        ctx!.beginPath();

        ctx!.moveTo(x, l.y);

        ctx!.quadraticCurveTo(
          x + Math.sin(t * 2 + l.sway) * 3,

          l.y + l.length * 0.5,

          x,
          l.y + l.length,
        );

        ctx!.strokeStyle = grad;

        ctx!.lineWidth = 1.3;

        ctx!.lineCap = "round";

        ctx!.stroke();
      }

      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(rafId);
  }, [canvasRef, cfg, canvasSize]);
}
