import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users';
import { Route } from './entity/route.entity';
import { Role } from './entity/role.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role, Route]),
  ],
  providers: [RoutesService],
  controllers: [RoutesController]
})
export class RoutesModule { }
