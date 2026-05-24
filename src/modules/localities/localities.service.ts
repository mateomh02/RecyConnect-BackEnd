import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Locality } from './entity/locality.entity';
import { Repository } from 'typeorm';
import { RouteRecycler } from './entity/route-recycler.entity';
import { CreateRutaDto } from './dto/create-route.dto';
import { User } from '../users';

@Injectable()
export class LocalitiesService {
    constructor(
        @InjectRepository(Locality) private readonly localityRepository: Repository<Locality>,
        @InjectRepository(RouteRecycler) private readonly routeRepository: Repository<RouteRecycler>,
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) { }

    async findAll() {
        const localities = await this.localityRepository.find();
        return localities.map(locality => ({
            value: String(locality.id),
            label: locality.name,
        }));
    }

    async createRoute(createRutaDto: CreateRutaDto) {
        const fechaLimpia = createRutaDto.day.split('T')[0];
        const nuevaRuta = this.routeRepository.create({
            routeName: createRutaDto.routeName,
            locality_id: Number.parseInt(createRutaDto.zone, 10),
            day: fechaLimpia,
            hour: createRutaDto.hour,
            user_id: createRutaDto.idUser,
        });
        return await this.routeRepository.save(nuevaRuta);
    }

    async findRoutesByUser(userId: number, currentLat: number, currentLng: number) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        const whereCondition = user?.roleId === 1 ? {} : { user_id: userId };

        const routes = await this.routeRepository.find({
            where: whereCondition,
            relations: ['locality'],
        });

        const hoyBogota = new Date().toLocaleDateString('es-CO', {
            timeZone: 'America/Bogota',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).split('/').reverse().join('-');

        const mappedRoutes = routes.map(route => {
            const routeLat = Number(route.locality.latitud);
            const routeLng = Number(route.locality.longitud);

            const R = 6371;
            const dLat = (routeLat - currentLat) * (Math.PI / 180);
            const dLng = (routeLng - currentLng) * (Math.PI / 180);

            const a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(currentLat * (Math.PI / 180)) * Math.cos(routeLat * (Math.PI / 180)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);

            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distanciaKm = R * c;

            const status = route.day === hoyBogota ? 'URGENTE' : 'PROXIMO';

            return {
                id: route.id,
                routeName: route.routeName,
                day: route.day,
                hour: route.hour,
                distanciaKm: Number(distanciaKm.toFixed(2)), // Redondeado a 2 decimales para el Front
                status: status, // Aquí va el 'URGENTE' o 'PROXIMO'
                locality: {
                    id: route.locality.id,
                    name: route.locality.name,
                    latitud: routeLat,
                    longitud: routeLng
                }
            };
        });

        return mappedRoutes.sort((a, b) => a.distanciaKm - b.distanciaKm);
    }

    async removeRoute(id: number): Promise<{ message: string }> {
        const result = await this.routeRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`La ruta con el ID ${id} no fue encontrada`);
        }
        return {
            message: `La ruta con el ID ${id} fue eliminada exitosamente de Recy Connect`,
        };
    }
}
