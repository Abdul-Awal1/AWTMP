import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AgentForm } from "./agent.dto";
import { AgentEntity } from "./agent.entity";





@Injectable()
export class AgentService {
    constructor(
        @InjectRepository(AgentEntity)
        private agentRepo: Repository<AgentEntity>,
      ) {}


insertAgent(touristformdto:AgentForm):any {
    
   return this.agentRepo.save(touristformdto);
      }
      getTouristByAgentID(id):any {
        return this.agentRepo.find({ 
                where: {id:id},
            relations: {
                tourist: true,
            },
         });
    }

}