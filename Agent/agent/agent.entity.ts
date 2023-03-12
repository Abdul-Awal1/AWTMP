
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from "typeorm";
import { CustomerEntity } from "src/customer/customer.entity"; 
import { AdminEntity } from "src/admin/admin.entity";

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

  @Column()
  filename : string; 

  @OneToMany(() => CustomerEntity, (customer) => customer.agent)
  customer: CustomerEntity[]
  @OneToOne (() => AdminEntity, (admin) => admin.agent) 
  admin: AdminEntity[] 


}