import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { WalletEntity } from '../../wallet/entity/wallet.entity';
import { UserEnergyEntity } from '../../user-energy/entity/user-energy.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToOne(() => WalletEntity, (wallet) => wallet.user, { cascade: true })
  @JoinColumn()
  wallet: WalletEntity = new WalletEntity();

  @OneToOne(() => UserEnergyEntity, (userEnergy) => userEnergy.user, {
    cascade: true,
  })
  @JoinColumn()
  userEnergy: UserEnergyEntity = new UserEnergyEntity();
}
