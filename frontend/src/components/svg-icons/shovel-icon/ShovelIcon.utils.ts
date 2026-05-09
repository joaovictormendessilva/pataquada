import { ParticleConfig, ShovelVariant } from "./ShovelIcon.types";

export const THEMES = {
  copper: {
    handle: ["#C98A4A", "#6B3D12"],
    blade: ["#D9D9D9", "#8A8A8A"],
    outline: "#4A2506",
    glow: "rgba(255,180,80,0.15)",
    gem: null,
  },
  iron: {
    handle: ["#9C6A3A", "#5A3314"],
    blade: ["#F7F7F7", "#777"],
    outline: "#2A1608",
    glow: "rgba(255,255,255,0.18)",
    gem: "#DDE6F5",
  },
  gold: {
    handle: ["#E7B52C", "#8A5A00"],
    blade: ["#FFF1A6", "#FFB700"],
    outline: "#6B3D12",
    glow: "rgba(255,210,60,0.35)",
    gem: "#FFF6CC",
  },
  diamond: {
    handle: ["#1CCAD8", "#0B6B74"],
    blade: ["#E8FFFF", "#57D8E5"],
    outline: "#06454B",
    glow: "rgba(80,255,255,0.4)",
    gem: "#A8FFFF",
  },
  obsidian: {
    handle: ["#6E4BFF", "#1B103F"],
    blade: ["#C8B7FF", "#2B1A5A"],
    outline: "#12081F",
    glow: "rgba(140,90,255,0.4)",
    gem: "#B46CFF",
  },
  galaxy: {
    handle: ["#FF4FD8", "#5A1EFF"],
    blade: ["#7CF7FF", "#6A00FF"],
    outline: "#12002E",
    glow: "rgba(255,0,255,0.45)",
    gem: "#FFFFFF",
  },
} as const;

export const PARTICLE_CONFIGS: Partial<Record<ShovelVariant, ParticleConfig>> = {
  diamond: {
    colors: ["#7CF7FF", "#A8FFFF", "#1CCAD8", "#57D8E5", "#E8FFFF"],
    glowColor: "rgba(80,255,255,",
    count: 18,
    speed: 0.38,
    sizeRange: [1.2, 2.8],
    orbitRadius: [28, 42],
  },
  obsidian: {
    colors: ["#6E4BFF", "#B46CFF", "#9B6BFF", "#C8B7FF", "#8855FF"],
    glowColor: "rgba(140,90,255,",
    count: 16,
    speed: 0.28,
    sizeRange: [1.4, 3.0],
    orbitRadius: [28, 42],
  },
  galaxy: {
    colors: ["#FF4FD8", "#7CF7FF", "#FF88F0", "#FFFFFF", "#6A00FF", "#FFB3F5"],
    glowColor: "rgba(255,0,255,",
    count: 22,
    speed: 0.45,
    sizeRange: [1.0, 2.5],
    orbitRadius: [26, 44],
  },
};
