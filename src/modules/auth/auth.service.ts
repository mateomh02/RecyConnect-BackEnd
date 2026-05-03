import { forwardRef, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginAuthDto, RegisterAuthDto } from '@/modules/auth';
import { UsersService } from '@/modules/users/users.service';
import { hash, verify } from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(@Inject(forwardRef(() => UsersService)) private readonly usersService: UsersService, private readonly jwtAuthService: JwtService) { }

  async register(userObject: RegisterAuthDto) {
    const { password } = userObject
    const cleanToHash = await hash(password)
    userObject = { ...userObject, password: cleanToHash }
    return await this.usersService.createUser(userObject)
  }

  async login(userObject: LoginAuthDto) {
    const { email, password } = userObject
    const dataUserBd = await this.usersService.findOneByEmail(email)

    const checkPassword = await verify(dataUserBd.password, password)
    if (!checkPassword) throw new UnauthorizedException('Contraseña incorrecta')

    const payload = { id: dataUserBd.id, name: dataUserBd.name }
    const token = this.jwtAuthService.sign(payload)
    const data = {
      user: dataUserBd,
      token
    }
    return data
  }
}
