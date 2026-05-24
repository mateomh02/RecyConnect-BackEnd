import { Module } from '@nestjs/common';
import { LocalitiesService } from './localities.service';
import { LocalitiesController } from './localities.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Locality } from './entity/locality.entity';
import { RouteRecycler } from './entity/route-recycler.entity';
import { User } from '../users';

@Module({
  imports: [TypeOrmModule.forFeature([Locality, RouteRecycler, User])],
  providers: [LocalitiesService],
  controllers: [LocalitiesController]
})
export class LocalitiesModule { }
