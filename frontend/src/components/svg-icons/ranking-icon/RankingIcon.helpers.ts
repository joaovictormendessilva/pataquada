import { RankingVariant } from "./RankingIcon.types";

export function rankToVariant(rank: number): RankingVariant {
  if (rank === 1) return "gold";
  if (rank === 2) return "silver";
  if (rank === 3) return "bronze";

  return "plain";
}
