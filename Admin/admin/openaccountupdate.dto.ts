import { IsNotEmpty, IsInt, Length } from "class-validator";

export class AccountFormUpdate {   
   
   @Length(3,8)
    username: string;




}