import { IsNotEmpty, IsInt, Length, IsEmail } from "class-validator";

export class TouristForm {   
   

   @IsNotEmpty()
    name: string;
   
   @IsEmail() 
    email: string;

    @Length(3,8)
    password: string;

 
    contact: string;
    age:number;

   

    touristid:number;



}
