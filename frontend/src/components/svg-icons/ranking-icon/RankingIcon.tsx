import { useRef } from "react";
import { useFlameAura } from "./hooks/useFlameAura";
import { IconProps, RankingVariant } from "./RankingIcon.types";
import { FLAME_CONFIGS, THEMES } from "./RankingIcon.utils";
import { rankToVariant } from "./RankingIcon.helpers";

export function RankingIcon({ size = 48, rank, variant }: IconProps) {
  const resolvedVariant: RankingVariant = variant ?? (rank != null ? rankToVariant(rank) : "plain");

  const theme = THEMES[resolvedVariant];

  const flameCfg = FLAME_CONFIGS[resolvedVariant];

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const canvasSize = Math.round(size * 2.3);

  useFlameAura(canvasRef as React.RefObject<HTMLCanvasElement>, flameCfg, canvasSize);

  const gradId = `rk-trophy-${resolvedVariant}`;

  const gradBaseId = `rk-base-${resolvedVariant}`;

  const filterId = `rk-glow-${resolvedVariant}`;

  const svgEl = (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={theme.trophy[0]} />

          <stop offset="100%" stopColor={theme.trophy[1]} />
        </linearGradient>

        <linearGradient id={gradBaseId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={theme.base[0]} />

          <stop offset="100%" stopColor={theme.base[1]} />
        </linearGradient>

        {theme.glow && (
          <filter id={filterId}>
            <feGaussianBlur stdDeviation="3" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />

              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>

      {/* Asa esquerda */}
      <path
        d="M42 30H24V48C24 62 16 72 8 76L14 62C22 58 28 50 28 42V30Z"
        fill={`url(#${gradId})`}
        stroke={theme.outline}
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Asa direita */}
      <path
        d="M86 30H104V48C104 62 112 72 120 76L114 62C106 58 100 50 100 42V30Z"
        fill={`url(#${gradId})`}
        stroke={theme.outline}
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Corpo */}
      <path
        d="M40 18H88V44C88 62 77 76 64 82C51 76 40 62 40 44V18Z"
        fill={`url(#${gradId})`}
        stroke={theme.outline}
        strokeWidth="8"
        strokeLinejoin="round"
        filter={theme.glow ? `url(#${filterId})` : undefined}
      />

      {/* Estrela */}
      {theme.starFill && (
        <path
          d="M64 34 L69 45 L82 46 L72 55 L75 68 L64 61 L53 68 L56 55 L46 46 L59 45 Z"
          fill={theme.starFill}
          stroke={theme.starStroke!}
          strokeWidth="3"
          strokeLinejoin="round"
        />
      )}

      {/* Base */}
      <path
        d="M50 84H78V96C78 104 72 110 64 110C56 110 50 104 50 96V84Z"
        fill={`url(#${gradBaseId})`}
        stroke={theme.outline}
        strokeWidth="6"
      />

      <rect
        x="38"
        y="108"
        width="52"
        height="12"
        rx="6"
        fill={`url(#${gradBaseId})`}
        stroke={theme.outline}
        strokeWidth="6"
      />
    </svg>
  );

  if (!flameCfg) return svgEl;

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
