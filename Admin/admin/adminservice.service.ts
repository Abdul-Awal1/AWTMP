import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminEntity } from "./adminentity.entity";
import { AdminForm } from "./adminform.dto";
import { AdminFormUpdate } from "./adminformupdate.dto";
import { OpenAccountEntity } from "./OpenAccount.Entity";
import { OpenForm } from "./openform.dto";
import * as bcrypt from 'bcrypt';
import { MailerService } from "@nestjs-modules/mailer";


@Injectable()
export class AdminService {
  getAdminByTouristID(id: number): any {
    throw new Error('Method not implemented.');
  }

    constructor(
        @InjectRepository(AdminEntity)
     

        private adminRepo: Repository<AdminEntity>,
        @InjectRepository(OpenAccountEntity)
     

        private AccountRepo: Repository<OpenAccountEntity>,
        private mailerService: MailerService,
      ) {}

      

getAdmin():any { 
    return this.adminRepo.find();


}

getAccount():any { 
    return this.AccountRepo.find();


}
AdminId(id):any {
    return this.adminRepo.findOneBy({ id });
}

AccountId(id):any {
    return this.AccountRepo.findOneBy({ id });
}



getAdminByIDName(qry):any {
    return this.adminRepo.findOneBy({ id:qry.id,name:qry.name });
}
getAccountByIDName(qry):any {
    return this.AccountRepo.findOneBy({ id:qry.id,username:qry.name });
}

OpenAccount(opendto:OpenForm):any {
    const openaccount = new OpenAccountEntity()
    openaccount.username = opendto.username;
     openaccount.pass = opendto.pass;
     
       return this.AccountRepo.save(openaccount);
      }
insertUser(admindto:AdminForm):any {
    const adminaccount = new AdminEntity()
    adminaccount.name = admindto.name;
    adminaccount.email = admindto.email;
    adminaccount.password = admindto.password;
  
   return this.adminRepo.save(adminaccount);
      }

      updateTouristId(name,id):any {
    console.log(name+id);
    return this.adminRepo.update(id,{name:name});
    }
    updateUser(name,id):any {
        console.log(name+id);
        return this.adminRepo.update(id,{name:name});
        }

updateTouristbyid(admindto:AdminFormUpdate,id):any {
    return this.adminRepo.update(id,admindto);
       }

       
updateAccountbyid(opendto:OpenForm,id):any {
    return this.AccountRepo.update(id,opendto);
       }


    deleteTouristbyid(id):any {
    
        return this.adminRepo.delete(id);
    }
    
    deleteAccountbyid(id):any {
    
        return this.AccountRepo.delete(id);
    }
    async signup(admindto) {
        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(admindto.password, salt);
        admindto.password= hassedpassed;
        return this.adminRepo.save(admindto);
        }
    async signin(admindto){
        console.log(admindto.password);
    const tdata= await this.adminRepo.findOneBy({email: admindto.email});
    const isMatch= await bcrypt.compare(admindto.password, tdata.password);
   
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

      getAgentsByAdminID(id):any {
        return this.adminRepo.find({ 
                where: {id:id},
            relations: {
                agents: true,
            },
         });
    }

}