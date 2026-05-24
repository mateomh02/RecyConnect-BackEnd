import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('localities')
export class Locality {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column('decimal')
    latitud!: number;

    @Column('decimal')
    longitud!: number;
}