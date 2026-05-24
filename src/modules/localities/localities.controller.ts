import { Controller, Get, UseGuards } from '@nestjs/common';
import { LocalitiesService } from './localities.service';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';

@UseGuards(JwtAuthGuard)
@Controller('localities')
export class LocalitiesController {
    constructor(private readonly localitiesService: LocalitiesService) { }
    @Get()
    findAll() {
        return this.localitiesService.findAll();
    }
}
