import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration, DatabaseModule } from '@/core';
import { UsersModule } from '@/modules/users/users.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { RoutesModule } from './modules/routes/routes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true
    }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    RoutesModule
  ],
})

export class AppModule { }
