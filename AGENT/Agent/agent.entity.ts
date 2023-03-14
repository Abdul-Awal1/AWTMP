
import { TouristEntity } from 'src/admin/touristentity.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';

@Entity("agent")
export class AgentEntity{
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

  @OneToOne(() => TouristEntity, tourist=>tourist.agents)
   
    @JoinColumn()
    tourist: TouristEntity
   

}