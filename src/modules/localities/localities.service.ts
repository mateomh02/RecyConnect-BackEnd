import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Locality } from './entity/locality.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LocalitiesService {
    constructor(@InjectRepository(Locality) private readonly localityRepository: Repository<Locality>) { }

    async findAll() {
        const localities = await this.localityRepository.find();
        return localities.map(locality => ({
            value: locality.id,
            label: locality.name,
        }));
    }
}
