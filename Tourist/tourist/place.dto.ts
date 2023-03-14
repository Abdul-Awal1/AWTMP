import { IsNotEmpty, IsInt, Length, IsEmail } from "class-validator";

export class placeForm {   
   
   
   @IsNotEmpty()
    place: string;
   
  

    
}