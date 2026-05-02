import { IsNumber } from 'class-validator';

export class DigDto {
  @IsNumber({}, { message: 'ID do usuário deve ser um número.' })
  userId: number;
}
