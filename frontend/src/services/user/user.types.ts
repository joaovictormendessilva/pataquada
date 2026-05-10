export interface IDigParams {
  userId: number;
}

export interface IDigResponseDto {
  remainingEnergy: number;
  found: boolean;
  coinsEarned: number;
  treasure: string | null;
}
