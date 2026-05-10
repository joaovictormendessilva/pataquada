import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './database/data-source';
import { UserModule } from './user/user.module';
import { WalletModule } from './wallet/wallet.module';
import { UserEnergyModule } from './user-energy/user-energy.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      ...dataSourceOptions,
      autoLoadEntities: true,
    }),

    UserModule,

    WalletModule,

    UserEnergyModule,
  ],
})
export class AppModule {}
