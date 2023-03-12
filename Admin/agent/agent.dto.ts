import { IsNotEmpty, IsInt, Length, IsEmail } from "class-validator";

export class AgentForm {   
   

   @IsNotEmpty()
    name: string;
   
   @IsEmail() 
    email: string;

    @Length(3,8)
    password: string;

 
   contact: string;
   packagename:string;

   adminid:number;



}
