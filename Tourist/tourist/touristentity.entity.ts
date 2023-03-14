
import { AgentEntity } from 'src/Agent/agent.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';

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
  address: string;

  @Column()
  filename: string;
  @OneToOne(() => AgentEntity, agent=>agent.tourist)
   
  @JoinColumn()
  agents:AgentEntity

}