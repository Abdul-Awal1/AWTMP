import { IsNotEmpty, IsInt, Length, IsEmail } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";

export class TouristForm {   
   
  


   @IsNotEmpty()
    name: string;
   
    @IsEmail() 
    email: string;

    @Length(3,8)
    password: string;

 
    address: string;

    
    filename: string;
 



}



