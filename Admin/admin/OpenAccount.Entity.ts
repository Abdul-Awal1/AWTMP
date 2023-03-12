import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("OpenAccount")
export class OpenAccountEntity{
 
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  username: string;

  @Column()
  pass: string;


  
    

 
}