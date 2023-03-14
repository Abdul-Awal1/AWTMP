import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("place")
export class placeEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  place: string;

  @Column()
  Feedback: string;
  
 
  
  
  
 
}