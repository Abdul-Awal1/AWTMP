import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminController } from "./admin.controller"
import { AdminService } from "./adminservice.service"
import { AdminEntity } from "./adminentity.entity"
import { OpenAccountEntity } from "./OpenAccount.Entity";
import { MailerModule } from "@nestjs-modules/mailer";
import { AgentEntity } from "src/agent/agent.entity";
import { AgentService } from "src/agent/agent.service";
import { TouristService } from "src/tourist/tourist.service";
import { TouristEntity } from "src/tourist/tourist.entity";


@Module({
imports: [
    
    MailerModule.forRoot({
        transport: {
          host: 'smtp.gmail.com',
                   port: 465,
                   ignoreTLS: true,
                   secure: true,
                   auth: {
                       user: 'awalabdul.aiub@gmail.com',
                       pass: 'olxzskqxnzbnkhho'
                   },
                  }
      }),
      TypeOrmModule.forFeature([AdminEntity,AgentEntity,TouristEntity,OpenAccountEntity])],
controllers: [AdminController],
providers: [AdminService,AgentService,TouristService],

})

export class AdminModule {}