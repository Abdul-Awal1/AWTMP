import { IsEmail, IsNotEmpty,  Length } from "class-validator";

export class AgentDto {

    
     
    // @IsNotEmpty() 
    @IsEmail()
    email : string;

    @IsNotEmpty(({ message: "Enter a valid packagename" })) 
    packagename : string; 
    
     @IsNotEmpty()
    contact : string; 

      


//    @IsNotEmpty({message: "password cannot be empty"} )
    @Length(5,8)
    password: string;

    @IsNotEmpty() 
    username :  string; 
    filename : string;

   
}
    



    





    
    
