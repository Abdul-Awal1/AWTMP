import { AdminEntity } from 'src/admin/adminentity.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity("agent")
export class AgentEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  contact: string;

  @Column()
  packagename: string;

 

  @ManyToOne(() => AdminEntity, (admin) => admin.agents)
    admin: AdminEntity

}