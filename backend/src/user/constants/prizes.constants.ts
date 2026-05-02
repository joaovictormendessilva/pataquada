import { TreasureEnum } from '../enums/treasures.enum';

export const PRIZES = [
  { treasure: TreasureEnum.NONE, coins: 0, weight: 40 },
  { treasure: TreasureEnum.COMMON_COINS, coins: 10, weight: 30 },
  { treasure: TreasureEnum.SMALL_CHEST, coins: 50, weight: 17 },
  { treasure: TreasureEnum.MEDIUM_CHEST, coins: 150, weight: 10 },
  { treasure: TreasureEnum.PIRATE_CHEST, coins: 500, weight: 3 },
];
