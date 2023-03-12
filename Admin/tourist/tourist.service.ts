import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TouristForm } from "./tourist.dto";
import { TouristEntity } from "./tourist.entity";




@Injectable()
export class TouristService {
    constructor(
        @InjectRepository(TouristEntity)
        private touristRepo: Repository<TouristEntity>,
      ) {}


insertTourist(admindto:TouristForm):any {
    
   return this.touristRepo.save(admindto);
      }
      getAdminByTouristID(id):any {
        return this.touristRepo.find({ 
                where: {id:id},
            relations: {
                admin: true,
            },
         });
    }

}