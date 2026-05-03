import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../users';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoutesService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }


  async checkRoutesById(idUser: number) {
    const user = await this.userRepository.findOne({
      where: { id: Number(idUser) },
      relations: {
        role: {
          routes: true
        }
      }
    });
    return user?.role.routes
  }

}
