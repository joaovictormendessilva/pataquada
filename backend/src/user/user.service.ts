import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { FindOptionsRelations, Repository } from 'typeorm';
import { EnergyEntity } from '../energy/entity/energy.entity';
import { WalletEntity } from '../wallet/entity/wallet.entity';
import { PRIZES } from './constants/prizes.constants';
import { CreateUserResponseDto } from './dtos/create-user-response.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { DigResponseDto } from './dtos/dig-response.dto';
import { DigDto } from './dtos/dig.dto';
import { UserEntity } from './entity/user.entity';
import { TreasureEnum } from './enums/treasures.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,

    @InjectRepository(WalletEntity)
    private readonly walletRepository: Repository<WalletEntity>,

    @InjectRepository(EnergyEntity)
    private readonly energyEntity: Repository<EnergyEntity>,
  ) {}

  async create(dto: CreateUserDto): Promise<CreateUserResponseDto> {
    dto.password = await bcrypt.hash(dto.password, 10);

    const user = this.userRepository.create(dto);

    const createdUser = await this.userRepository.save(user);

    const mappedUser: CreateUserResponseDto = {
      id: createdUser.id,
      username: createdUser.username,
      firstName: createdUser.firstName,
      lastName: createdUser.lastName,
      email: createdUser.email,
      createdAt: createdUser.createdAt,
      updatedAt: createdUser.updatedAt,
    };

    return mappedUser;
  }

  async dig(dto: DigDto): Promise<DigResponseDto> {
    const user = await this.findUserAndRelations(dto.userId, {
      energy: true,
      wallet: true,
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado.');
    }

    if (user.energy.energy === 0) {
      throw new BadRequestException('Você não possui mais energia.');
    }

    const remainingEnergy = user.energy.energy - 1;

    await this.energyEntity.update(user.energy.id, {
      energy: remainingEnergy,
    });

    const treasure = this.rollTreasure();

    if (treasure.found) {
      await this.incrementWallet(user.wallet.id, treasure.coinsEarned);
    }

    const mappedTreasure: DigResponseDto = {
      found: treasure.found,
      treasure: treasure.treasure,
      coinsEarned: treasure.coinsEarned,
      remainingEnergy,
    };

    return mappedTreasure;
  }

  private async findUserAndRelations(
    userId: number,
    relations: FindOptionsRelations<UserEntity>,
  ) {
    return await this.userRepository.findOne({
      where: {
        id: userId,
      },
      relations,
    });
  }

  private rollTreasure(): Omit<DigResponseDto, 'remainingEnergy'> {
    const totalWeight = PRIZES.reduce((sum, p) => sum + p.weight, 0);
    const roll = Math.random() * totalWeight;

    let accumulated = 0;
    for (const prize of PRIZES) {
      accumulated += prize.weight;

      if (roll < accumulated) {
        const coinsEarned = this.rollCoins(prize.min, prize.max);

        return {
          found: prize.treasure !== TreasureEnum.NONE,
          treasure: prize.treasure,
          coinsEarned,
        };
      }
    }

    return { found: false, treasure: TreasureEnum.NONE, coinsEarned: 0 };
  }

  private rollCoins(min: number, max: number): number {
    const raw = Math.random() * (max - min) + min;
    return Math.round(raw * 100) / 100;
  }

  private async incrementWallet(
    id: number,
    coinsEarned: number,
  ): Promise<void> {
    await this.walletRepository.increment({ id }, 'balance', coinsEarned);
  }
}
