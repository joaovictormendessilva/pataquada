import { TreasureEnum } from '../enums/treasures.enum';

export const PRIZES = [
  { treasure: TreasureEnum.NONE, min: 0, max: 0, weight: 40 },
  { treasure: TreasureEnum.COMMON_COINS, min: 8, max: 15, weight: 30 },
  { treasure: TreasureEnum.SMALL_CHEST, min: 40, max: 65, weight: 17 },
  { treasure: TreasureEnum.MEDIUM_CHEST, min: 120, max: 180, weight: 10 },
  { treasure: TreasureEnum.PIRATE_CHEST, min: 400, max: 600, weight: 3 },
];
