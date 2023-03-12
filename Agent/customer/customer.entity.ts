
import { AgentEntity } from 'src/agent/agent.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity("customer")
export class CustomerEntity{
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
    
    


  @ManyToOne(() => AgentEntity, (agent) => agent.customer) 
    agent: AgentEntity

}