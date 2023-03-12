import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TouristEntity } from "./tourist.entity";






@Module({
imports: [TypeOrmModule.forFeature([TouristEntity])],
controllers: [],
providers: [],

})

export class TouristModule {}