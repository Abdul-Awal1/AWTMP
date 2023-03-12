import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AgentEntity } from "./agent.entity";





@Module({
imports: [TypeOrmModule.forFeature([AgentEntity])],
controllers: [],
providers: [],

})

export class AgentModule {}