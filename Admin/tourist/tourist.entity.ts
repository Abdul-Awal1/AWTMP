import { AdminEntity } from 'src/admin/adminentity.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity("tourist")
export class TouristEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  contact: string;

  @Column()
  age: number;

  @ManyToOne(() => AdminEntity, (admin) => admin.tourists)
    admin: AdminEntity

}