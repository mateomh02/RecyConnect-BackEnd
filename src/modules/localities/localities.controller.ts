import { Body, Controller, Delete, Get, Param, ParseFloatPipe, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { LocalitiesService } from './localities.service';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { CreateRutaDto } from './dto/create-route.dto';

@UseGuards(JwtAuthGuard)
@Controller('localities')
export class LocalitiesController {
    constructor(private readonly localitiesService: LocalitiesService) { }
    @Get()
    findAll() {
        return this.localitiesService.findAll();
    }

    @Post('route-new')
    async crearRutaReciclador(@Body() createRutaDto: CreateRutaDto) {
        return await this.localitiesService.createRoute(createRutaDto);
    }

    @Get('user-routes/:userId') // Endpoint: GET http://localhost:3000/localities/user-routes/1?lat=4.60&lng=-74.07
    async obtenerRutasPorUsuario(
        @Param('userId', ParseIntPipe) userId: number,
        @Query('lat', ParseFloatPipe) lat: number,
        @Query('lng', ParseFloatPipe) lng: number
    ) {
        return await this.localitiesService.findRoutesByUser(userId, lat, lng);
    }

    @Delete('route/:id') // Endpoint: DELETE http://localhost:3000/localities/route/12
    async eliminarRuta(@Param('id', ParseIntPipe) id: number) {
        return await this.localitiesService.removeRoute(id);
    }
}
