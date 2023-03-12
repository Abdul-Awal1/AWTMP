import { IsNotEmpty, Length, IsEmail } from "class-validator";

export class CustomerDto {   
   

    @IsEmail()
    email : string;

    @IsNotEmpty(({ message: "Enter a valid packagename" })) 
    packagename : string; 
    
     @IsNotEmpty()
    contact : string; 

      


   @IsNotEmpty({message: "password cannot be empty"} )
    @Length(5,8)
    password: string;

    @IsNotEmpty() 
    username :  string; 
    

    agentid : number;



}