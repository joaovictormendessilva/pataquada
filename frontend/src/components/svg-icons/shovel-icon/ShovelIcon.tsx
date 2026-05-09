import { useRef } from "react";
import { useParticles } from "./hooks/useParticles";
import { IconProps } from "./ShovelIcon.types";
import { PARTICLE_CONFIGS, THEMES } from "./ShovelIcon.utils";

export function ShovelIcon({ size = 48, variant = "iron" }: IconProps) {
  const theme = THEMES[variant];
  const particleCfg = PARTICLE_CONFIGS[variant];
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // canvas is 40% larger than the svg to give room for the orbit
  const canvasSize = Math.round(size * 1.8);

  useParticles(canvasRef as React.RefObject<HTMLCanvasElement>, particleCfg!, canvasSize);

  const svgEl = (
    <svg width={size} height={size} viewBox="0 0 160 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`handle-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={theme.handle[0]} />
          <stop offset="100%" stopColor={theme.handle[1]} />
        </linearGradient>

        <linearGradient id={`blade-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={theme.blade[0]} />
          <stop offset="100%" stopColor={theme.blade[1]} />
        </linearGradient>

        <filter id={`glow-${variant}`}>
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g transform="translate(10 5) rotate(38 80 80)">
        {/* PEGADOR */}
        <path
          d="M56 10 C56 -4 104 -4 104 10 V24 H56 Z"
          fill={`url(#handle-${variant})`}
          stroke={theme.outline}
          strokeWidth="6"
          strokeLinejoin="round"
        />

        {/* CABO */}
        <rect
          x="72"
          y="22"
          width="18"
          height="76"
          rx="9"
          fill={`url(#handle-${variant})`}
          stroke={theme.outline}
          strokeWidth="6"
        />

        {/* BRILHO CABO */}
        <rect x="77" y="28" width="4" height="62" rx="2" fill="rgba(255,255,255,0.2)" />

        {/* CONECTOR */}
        <rect
          x="62"
          y="92"
          width="38"
          height="20"
          rx="6"
          fill={theme.handle[0]}
          stroke={theme.outline}
          strokeWidth="5"
        />

        {/* PÁ */}
        {variant === "copper" ? (
          <>
            <path
              d="M34 108 H128 L116 136 C108 160 94 176 80 182 C66 176 52 160 44 136 Z"
              fill={`url(#handle-${variant})`}
              stroke={theme.outline}
              strokeWidth="6"
              strokeLinejoin="round"
            />
            <path d="M58 112V166" stroke="rgba(0,0,0,0.18)" strokeWidth="4" strokeLinecap="round" />
            <path d="M80 110V172" stroke="rgba(0,0,0,0.18)" strokeWidth="4" strokeLinecap="round" />
            <path d="M102 112V166" stroke="rgba(0,0,0,0.18)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="56" cy="122" r="3" fill="#3A1B08" />
            <circle cx="104" cy="122" r="3" fill="#3A1B08" />
            <path d="M72 142L66 152L74 162" stroke="rgba(0,0,0,0.22)" strokeWidth="3" strokeLinecap="round" />
          </>
        ) : (
          <>
            <path
              d="M34 108 H128 L116 136 C108 160 94 176 80 182 C66 176 52 160 44 136 Z"
              fill={`url(#blade-${variant})`}
              stroke={theme.outline}
              strokeWidth="6"
              strokeLinejoin="round"
              filter={`url(#glow-${variant})`}
            />
            <path d="M58 160 Q80 192 102 160" fill={theme.outline} opacity="0.18" />
            <path d="M52 116 L72 152" stroke="rgba(255,255,255,0.7)" strokeWidth="5" strokeLinecap="round" />
            <path d="M80 108V164" stroke="rgba(0,0,0,0.18)" strokeWidth="4" strokeLinecap="round" />
          </>
        )}

        {/* PONTA */}
        <path d="M58 160 Q80 192 102 160" fill={theme.outline} opacity="0.18" />

        {/* BRILHO */}
        <path d="M52 116 L72 152" stroke="rgba(255,255,255,0.7)" strokeWidth="5" strokeLinecap="round" />

        {/* LINHA CENTRAL */}
        <path d="M80 108V164" stroke="rgba(0,0,0,0.18)" strokeWidth="4" strokeLinecap="round" />

        {/* GEMA */}
        {theme.gem && (
          <>
            <polygon points="80,98 88,108 80,118 72,108" fill={theme.gem} stroke={theme.outline} strokeWidth="2" />
            <circle cx="80" cy="108" r="14" fill={theme.glow} />
          </>
        )}

        {/* REBITES */}
        <circle cx="70" cy="102" r="3" fill={theme.outline} />
        <circle cx="92" cy="102" r="3" fill={theme.outline} />
      </g>
    </svg>
  );

  // variants without particles render as before
  if (!particleCfg) return svgEl;

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
      }}
    >
      <canvas
        ref={canvasRef}
        width={canvasSize}
        height={canvasSize}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />
      {svgEl}
    </div>
  );
}
