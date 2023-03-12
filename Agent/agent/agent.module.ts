import {  Module } from "@nestjs/common";
import { AgentController } from './agent.controller';
import { AgentService } from './agent.service';
import { AgentEntity } from "./agent.entity"; 
import { TypeOrmModule } from "@nestjs/typeorm"; 
import { CustomerService } from "src/customer/customer.service";
import { CustomerEntity } from "src/customer/customer.entity";
import { MailerModule } from "@nestjs-modules/mailer/dist";
import { AdminService } from "src/admin/admin.service";
import { AdminEntity } from "src/admin/admin.entity"; 


@Module({

    imports: [
      MailerModule.forRoot({
        transport: {
          host: 'smtp.gmail.com',
                   port:465,
                   ignoreTLS: true,
                   secure: true,
                   auth: {
                       user: 'nahinrock69@gmail.com',
                       pass: 'luzdbaxxebejwvjx'
                   },
                  }
      }),
      
      
      
      
      
  TypeOrmModule.forFeature([AgentEntity, CustomerEntity, AdminEntity])], 
  controllers: [AgentController],
  providers: [AgentService, CustomerService, AdminService], 

})
export class AgentModule {} 