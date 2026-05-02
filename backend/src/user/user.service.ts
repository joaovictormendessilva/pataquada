import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserResponseDto } from './dtos/create-user-response.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { DigResponseDto } from './dtos/dig-response.dto';
import { DigDto } from './dtos/dig.dto';
import { UserEntity } from './entity/user.entity';
import { PRIZES } from './constants/prizes.constants';
import { TreasureEnum } from './enums/treasures.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
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
      energy: createdUser.energy,
      createdAt: createdUser.createdAt,
      updatedAt: createdUser.updatedAt,
    };

    return mappedUser;
  }

  async dig(dto: DigDto): Promise<DigResponseDto> {
    const user = await this.findUser(dto.userId);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado.');
    }

    if (user.energy === 0) {
      throw new BadRequestException('Você não possui mais energia.');
    }

    const remainingEnergy = user.energy - 1;

    await this.userRepository.update(user.id, {
      energy: remainingEnergy,
    });

    const treasure = this.rollTreasure();

    const mappedTreasure: DigResponseDto = {
      found: treasure.found,
      treasure: treasure.treasure,
      coinsEarned: treasure.coinsEarned,
      remainingEnergy,
    };

    return mappedTreasure;
  }

  private async findUser(id: number) {
    return await this.userRepository.findOne({
      where: {
        id,
      },
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
}
