import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration, DatabaseModule } from '@/core';
import { UsersModule } from '@/modules/users/users.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { RoutesModule } from './modules/routes/routes.module';
import { LocalitiesModule } from './modules/localities/localities.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true
    }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    RoutesModule,
    LocalitiesModule
  ],
})

export class AppModule { }
