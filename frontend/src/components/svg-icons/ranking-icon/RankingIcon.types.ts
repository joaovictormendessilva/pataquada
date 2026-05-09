export type RankingVariant = "gold" | "silver" | "bronze" | "plain";

export type IconProps = {
  size?: number;
  rank?: number;
  variant?: RankingVariant;
};

export type FlameConfig = {
  particleCount: number;
  speed: number;
  sway: number;
  colorA: string;
  colorB: string;
  opacity: number;
};
