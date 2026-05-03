import { Body, Controller, Post } from '@nestjs/common';
import { LoginAuthDto, RegisterAuthDto } from './dto';
import { AuthService } from '@/modules/auth/auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authServices: AuthService) { }

    @Post('register')
    async registerUser(@Body() userObject: RegisterAuthDto) {
        return await this.authServices.register(userObject)
    }


    @Post('login')
    async loginUser(@Body() userObject: LoginAuthDto) {
        return await this.authServices.login(userObject)
    }
}
