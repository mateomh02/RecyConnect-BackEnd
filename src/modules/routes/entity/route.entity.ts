import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Role } from './role.entity';

@Entity('routes')
export class Route {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 100, unique: true })
    path!: string;

    @Column({ type: 'varchar', length: 100, unique: true })
    component!: string;

    @Column({ type: 'varchar', length: 100, unique: true })
    name!: string;

    @ManyToMany(() => Role, (role) => role.routes)
    @JoinTable({
        name: 'roles_routes',
        joinColumn: { name: 'route_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
    })
    role!: Role[];
}