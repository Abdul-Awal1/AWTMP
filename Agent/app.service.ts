import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';



@Injectable()
export class AppService {

  
  

  getHello(): string {
    return 'This is Lab Task 1!';
  }

  choose(): string{
    return 'It is your choice' ;
  }

  userid(id){
    console.log(id, "here")
    return id; 
  }

  userpass(pass){
    console.log(pass, "here")
    return pass;
}

 removeuser(removeuser){
   console.log(removeuser, "here")
   return removeuser;

}

adduser(adduser){
  console.log(adduser, "here")
  return adduser; 
}
} 
