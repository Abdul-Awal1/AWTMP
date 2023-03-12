import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AgentDto } from "./agent.dto";
import { AgentEntity } from "./agent.entity";
import * as bcrypt from 'bcrypt';
import { MailerService } from "@nestjs-modules/mailer/dist";


@Injectable()
export class AgentService {

    constructor(
        @InjectRepository(AgentEntity)
        private agentRepo : Repository<AgentEntity>,
        private mailerService: MailerService
        ){}

        
        getAgent(id):any {
            return this.agentRepo.findOneBy({ id });
        }

        getAgentByIDName(qry):any {
            return this.agentRepo.findOneBy({ id:qry.id,username:qry.username }); 
        }

        getallAgent():any { 
            return this.agentRepo.find();
        
        }


        insertAgent(agentdto : AgentDto):any {
        const agentinfo = new AgentEntity()
        agentinfo.username = agentdto.username;
        agentinfo.email = agentdto.email;
        agentinfo.password = agentdto.password;
        agentinfo.contact = agentdto.contact;
        agentinfo.packagename = agentdto.packagename;
       return this.agentRepo.save(agentinfo ); 
          }

  

          updateAgent(username: any,id: string | number):any {
             console.log(username+id);
            return this.agentRepo.update(id,{username:username});
                }

   
                deleteAgent(id):any {
    
    return this.agentRepo.delete(id);
}

async signup(agentdto) {
    const salt = await bcrypt.genSalt();
    const hassedpassed = await bcrypt.hash(agentdto.password, salt);
    agentdto.password= hassedpassed;
    return this.agentRepo.save(agentdto);
    }
    
async signin(agentdto){
        console.log(agentdto.password);
        
    const getdata= await this.agentRepo.findOneBy({email: agentdto.email});
    const matched= await bcrypt.compare( agentdto.password, getdata.password); 
    if(matched) { 
    return true;
    }
    else {
        return false;
    }
    
    }

    getCustomerByAgentID(id):any {
        return this.agentRepo.find({ 
                where: {id:id},
            relations: {
                customer: true,
            },
         });
    }


    

    async sendEmail(to: string, subject: string, body: string): Promise<void> {
        await this.mailerService.sendMail({
          to: to,
          subject: subject,
          text: body,
        });
      }

   

}