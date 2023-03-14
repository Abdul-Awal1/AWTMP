import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { placeForm } from "./place.dto";
import { placeEntity } from "./place.entity";
import { TouristEntity } from "./touristentity.entity";
import { TouristForm } from "./touristform.dto";
import { TouristFormUpdate } from "./touristformupdate.dto";
import * as bcrypt from 'bcrypt';
import { MailerService } from "@nestjs-modules/mailer";


@Injectable()
export class TouristService 
  {
  getAgentByTouristID(id: number): any {
    throw new Error('Method not implemented.');
  }
  
  
    constructor(
        @InjectRepository(TouristEntity)
        private touristRepo: Repository<TouristEntity>,
        @InjectRepository(placeEntity)
        private placeRepo:Repository<placeEntity>,
        private mailerService: MailerService

      ) {}

getIndex():any { 
    return this.touristRepo.find();

}
getUserByID(id):any {
    return this.touristRepo.findOneBy({ id });
}

getUserByIDName(qry):any {
    return this.touristRepo.findOneBy({ id:qry.id,name:qry.name });
}

insertuser(touristformdto:TouristForm):any {
    const touristaccount = new TouristEntity()
    touristaccount.name = touristformdto.name;
    touristaccount.email = touristformdto.email;
    touristaccount.password = touristformdto.password;
    touristaccount.address = touristformdto.address;
   return this.touristRepo.save(touristaccount);
      }

updateUser(name,id):any {
    console.log(name+id);
    return this.touristRepo.update(id,{name:name});
    }
updateUserbyid(touristformdto:TouristFormUpdate,id):any {
    return this.touristRepo.update(id,touristformdto);
       }
    deleteUserbyid(id):any {
    
        return this.touristRepo.delete(id);
    }
    
    insertplace(placedto:placeForm):any {
        const tplace = new placeEntity()
        tplace.place = placedto.place;
        tplace.Feedback = placedto.place;
        return this.placeRepo.save (tplace);
          }

          updateplace(place,id):any {
            console.log(place+id);
            return this.placeRepo.update(id,{place:place});
            }
        updateplacebyid(placedto:placeForm,id):any {
            return this.placeRepo.update(id,placedto);
               }
               deleteplacebyid(id):any {
    
                return this.placeRepo.delete(id);
            }
            
                   
                
         async signup(touristformdto) {
            const salt = await bcrypt.genSalt();
            const hassedpassed = await bcrypt.hash(touristformdto.password, salt);
            touristformdto.password= hassedpassed;
            return this.touristRepo.save(touristformdto);
            }
            
            async signin(touristformdto){
                console.log(touristformdto.password);
            const tdata= await this.touristRepo.findOneBy({email: touristformdto.email});
            const isMatch= await bcrypt.compare(touristformdto.password, tdata.password);
           
            if(isMatch) {
            return 1;
            }
             else {
                return 0;
            }
        
            }

            
            async sendEmail(to: string, subject: string, body: string): Promise<void> {
                await this.mailerService.sendMail({
                  to: to,
                  subject: subject,
                  html: body,
                });
              }    
            
            
                  

}