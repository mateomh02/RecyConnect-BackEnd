import { Repository } from 'typeorm';
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, User } from '@/modules/users';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

  async createUser(user: CreateUserDto) {
    const existingUser = await this.userRepository.findOne({
      where: { email: user.email }
    })

    if (existingUser) {
      throw new ConflictException('El correo electrónico ya está registrado')
    }

    const newUser = this.userRepository.create(user)
    await this.userRepository.save(newUser)
  }

  async findOneByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { email },
      relations: {
        role: true,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        roleId: true
      }
    });

    if (!user) {
      throw new NotFoundException(`El usuario con email ${email} no fue encontrado`);
    }

    return structuredClone(user);
  }

  async findAllUsers() {
    return this.userRepository.find()
  }
}
