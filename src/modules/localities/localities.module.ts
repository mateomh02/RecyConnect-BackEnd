import { Module } from '@nestjs/common';
import { LocalitiesService } from './localities.service';
import { LocalitiesController } from './localities.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Locality } from './entity/locality.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Locality])],
  providers: [LocalitiesService],
  controllers: [LocalitiesController]
})
export class LocalitiesModule { }
