import { IsNotEmpty, IsInt, Length, IsEmail } from "class-validator";

export class OpenForm {   
   
     @IsNotEmpty()
    username: string;
   


    @Length(3,8)
    pass: string;
   
    
  



}