import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminDto } from "./admin.dto";
import { AdminEntity } from "./admin.entity";




@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(AdminEntity)
        private adminRepo: Repository<AdminEntity>,
      ) {}


insertadmin(agentdto:AdminDto):any {
    
   return this.adminRepo.save(agentdto);
      }
      getAdminByAgentID(id):any {
        return this.adminRepo.find({ 
                where: {id:id},
            relations: {
                agent: true,
            },
         });
    }

    deleteadminbyid(id):any {
    
        return this.adminRepo.delete(id);
    }

    getAdmin(id):any {
        return this.adminRepo.findOneBy({ id });
    }

    getallAdmin():any { 
        return this.adminRepo.find();  
    
    }

    getAdminByIDName(qry):any {
        return this.adminRepo.findOneBy({ id:qry.id,username:qry.username }); 
    }

}