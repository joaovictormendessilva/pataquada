import { FlameConfig, RankingVariant } from "./RankingIcon.types";

export const THEMES = {
  gold: {
    trophy: ["#FFE27A", "#FF9F1C"],
    base: ["#B56A2D", "#6B3D12"],
    outline: "#6B3D12",
    starFill: "#FFF5C2",
    starStroke: "#B17800",
    glow: true,
  },

  silver: {
    trophy: ["#F0F0F0", "#9E9E9E"],
    base: ["#7A7A7A", "#3A3A3A"],
    outline: "#555555",
    starFill: "#FFFFFF",
    starStroke: "#888888",
    glow: true,
  },

  bronze: {
    trophy: ["#E8A060", "#8B4513"],
    base: ["#7A3B10", "#3A1A06"],
    outline: "#5A2A06",
    starFill: "#FFD5A0",
    starStroke: "#8B4513",
    glow: false,
  },

  plain: {
    trophy: ["#8A8A8A", "#444444"],
    base: ["#555555", "#222222"],
    outline: "#333333",
    starFill: null,
    starStroke: null,
    glow: false,
  },
} as const;

export const FLAME_CONFIGS: Partial<Record<RankingVariant, FlameConfig>> = {
  gold: {
    particleCount: 10,
    speed: 0.25,
    sway: 4,

    colorA: "255,240,120",
    colorB: "255,180,0",

    opacity: 0.35,
  },

  silver: {
    particleCount: 8,
    speed: 0.18,
    sway: 3,

    colorA: "255,255,255",
    colorB: "190,190,210",

    opacity: 0.22,
  },
};
