import { AgentEntity } from 'src/agent/agent.entity';
import { TouristEntity } from 'src/tourist/tourist.entity';

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity("admin")
export class AdminEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  tourism:string;
  
  @OneToMany(() => AgentEntity, (agent) => agent.admin)
  agents: AgentEntity[]

  @OneToMany(() => TouristEntity, (tourist) => tourist.admin)
  tourists: AgentEntity[]


}