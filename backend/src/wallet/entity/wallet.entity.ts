import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../../user/entity/user.entity';
import { DEFAULT_WALLET_VALUE } from '../constants/default-wallet-value.constants';

@Entity('wallets')
export class WalletEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: DEFAULT_WALLET_VALUE,
  })
  balance: number;

  @OneToOne(() => UserEntity, (user) => user.wallet)
  user: UserEntity;
}
