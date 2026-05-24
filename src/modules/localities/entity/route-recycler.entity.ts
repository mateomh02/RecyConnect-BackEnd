import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import { Locality } from './locality.entity';

@Entity({ name: 'routesRecyclers' })
export class RouteRecycler {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 100 })
    routeName!: string;

    @Column({ type: 'int' })
    locality_id!: number;

    @Column({ type: 'date' })
    day!: string;

    @Column({ type: 'time' })
    hour!: string;

    @Column({ type: 'int' })
    user_id!: number;

    @CreateDateColumn({ type: 'timestamp' })
    created_at!: Date;
    @ManyToOne(() => Locality, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'locality_id' })
    locality!: Locality;
}