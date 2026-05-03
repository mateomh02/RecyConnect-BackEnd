import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm';
import type { Relation } from 'typeorm';
import { Route } from './route.entity';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'rol_name', type: 'varchar', length: 50, unique: true })
  rolName!: string;

  @OneToMany('User', 'role')
  users!: Relation<any[]>;

  @ManyToMany(() => Route, (route) => route.role)
  routes!: Route[];
}