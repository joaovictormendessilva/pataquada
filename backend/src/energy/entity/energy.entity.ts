import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DEFAULT_ENERGY } from '../constants/default-energy.constants';
import { UserEntity } from '../../user/entity/user.entity';

@Entity('energies')
export class EnergyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: DEFAULT_ENERGY })
  energy: number;

  @OneToOne(() => UserEntity, (user) => user.energy)
  user: UserEntity;
}
