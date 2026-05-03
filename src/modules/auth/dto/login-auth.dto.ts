import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'

export class LoginAuthDto {
    @IsEmail({}, { message: 'El formato del correo es inválido' })
    email!: string

    @IsNotEmpty()
    @MinLength(8)
    password!: string;
}