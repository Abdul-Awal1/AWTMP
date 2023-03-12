import { IsNotEmpty, Length, IsEmail } from "class-validator";

export class AdminDto {   
   

    @IsEmail()
    email : string;

    @IsNotEmpty() 
    address : string; 
    
     @IsNotEmpty()
    contact : string; 

      


   @IsNotEmpty({message: "password cannot be empty"} )
    @Length(5,8)
    password: string;

    @IsNotEmpty() 
    username :  string; 
    

    adminid : number;



}