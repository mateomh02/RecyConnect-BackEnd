import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto, UsersService } from '@/modules/users';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Post()
    async createUser(@Body() newUser: CreateUserDto) {
        return await this.usersService.createUser(newUser)
    }


    @Get()
    async findAll() {
        return this.usersService.findAllUsers()
    }
}