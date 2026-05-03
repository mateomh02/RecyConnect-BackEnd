import { Role } from '@/modules/routes/entity/role.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
} from 'typeorm';


@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ type: 'varchar', length: 100 })
    name!: string;

    @Column({ type: 'varchar', length: 150, unique: true })
    email!: string;

    @Column({ type: 'varchar', length: 255, select: false })
    password!: string;

    @Column({ name: 'role_id' })
    roleId!: number;

    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn({ name: 'role_id' })
    role!: Role;
}