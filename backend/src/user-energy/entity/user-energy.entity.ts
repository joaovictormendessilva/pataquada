import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DEFAULT_USER_ENERGY } from '../constants/default-user-energy.constants';
import { UserEntity } from '../../user/entity/user.entity';

@Entity('user-energies')
export class UserEnergyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: DEFAULT_USER_ENERGY })
  energy: number;

  @OneToOne(() => UserEntity, (user) => user.userEnergy)
  user: UserEntity;
}
