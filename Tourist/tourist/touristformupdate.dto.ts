import { IsNotEmpty, IsInt, Length } from "class-validator";

export class TouristFormUpdate {   
   
   @Length(3,8)
    name: string;



}