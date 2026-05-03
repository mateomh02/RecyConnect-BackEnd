import { Controller, Get, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { RoutesService } from './routes.service';

@UseGuards(JwtAuthGuard)
@Controller('routes')
export class RoutesController {

    constructor(private readonly routesService: RoutesService) { }

    @Get()
    async routesByUser(@Query('userId', ParseIntPipe) userId: number) {
        return await this.routesService.checkRoutesById(userId)
    }

}
