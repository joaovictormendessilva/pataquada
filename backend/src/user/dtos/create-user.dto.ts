import { IsEmail, IsString, MinLength } from 'class-validator';

const MIN_PASSWORD = 6;

export class CreateUserDto {
  @IsString({ message: 'Username é obrigatório!' })
  username: string;

  @IsString({ message: 'Primeiro nome é obrigatório!' })
  firstName: string;

  @IsString({ message: 'Ultimo nome é obrigatório!' })
  lastName: string;

  @IsEmail({}, { message: 'Insira um e-mail válido.' })
  email: string;

  @IsString({ message: 'Senha é obrigatória!' })
  @MinLength(MIN_PASSWORD, {
    message: `Senha deve conter no mínimo ${MIN_PASSWORD} caracteres.`,
  })
  password: string;
}
