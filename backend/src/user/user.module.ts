import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletEntity } from '../wallet/entity/wallet.entity';
import { UserEntity } from './entity/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { EnergyEntity } from '../energy/entity/energy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, WalletEntity, EnergyEntity])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
