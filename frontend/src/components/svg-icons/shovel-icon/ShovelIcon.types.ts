export type ShovelVariant = "copper" | "iron" | "gold" | "diamond" | "obsidian" | "galaxy";

export type IconProps = {
  size?: number;
  variant?: ShovelVariant;
};

export type ParticleConfig = {
  colors: string[];
  glowColor: string;
  count: number;
  speed: number;
  sizeRange: [number, number];
  orbitRadius: [number, number];
};
export type Particle = {
  angle: number;
  r: number;
  speed: number;
  size: number;
  color: string;
  phaseOffset: number;
  radialDrift: number;
  life: number;
};
