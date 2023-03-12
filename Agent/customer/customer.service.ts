import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerDto } from "./customer.dto";
import { CustomerEntity } from "./customer.entity";




@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(CustomerEntity)
        private customerRepo: Repository<CustomerEntity>,
      ) {}


insertCustomer(agentdto:CustomerDto):any {
    
   return this.customerRepo.save(agentdto);
      }
      getAgentByCustomerID(id):any {
        return this.customerRepo.find({ 
                where: {id:id},
            relations: {
                agent: true,
            },
         });
    }

    deleteCustomerbyid(id):any {
    
        return this.customerRepo.delete(id);
    }

}