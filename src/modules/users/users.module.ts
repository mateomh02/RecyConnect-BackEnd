import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/modules/users';
import { UsersController } from './users.controller';
import { UsersService } from '@/modules/users/users.service';
import { Role } from '../routes/entity/role.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role]),
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule { }
