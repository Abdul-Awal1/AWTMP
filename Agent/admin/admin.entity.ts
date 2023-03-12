
import { AgentEntity } from 'src/agent/agent.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity("admin")
export class AdminEntity{
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
    address: string;
    
    


  @OneToOne(() => AgentEntity, (agent) => agent.admin) 
  @JoinColumn() 
    agent: AgentEntity 

}