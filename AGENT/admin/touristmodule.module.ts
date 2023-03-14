import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TouristController } from "./tourist.controller"
import { TouristService } from "./touristservice.service"
import { TouristEntity } from "./touristentity.entity"
import { placeEntity } from "./place.entity";
import { MailerModule } from "@nestjs-modules/mailer";
import { AgentService } from "src/Agent/agent.service";
import { AgentEntity } from "src/Agent/agent.entity";


@Module({
imports:  [MailerModule.forRoot({
    transport: {
      host: 'smtp.gmail.com',
               port: 465,
               ignoreTLS: true,
               secure: true,
               auth: {
                   user: 'samiyashahidnidhi.aiub@gmail.com',
                   pass: 'iqpifxylngorieaq'
               },
              }
  }),



TypeOrmModule.forFeature([TouristEntity,placeEntity,AgentEntity])],
controllers: [TouristController],
providers: [TouristService,AgentService,AgentService],

})

export class TouristModule {}