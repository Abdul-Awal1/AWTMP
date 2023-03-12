import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgentController } from './agent/agent.controller';
import { AgentModule } from './agent/agent.module';
import { AgentService } from './agent/agent.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CustomerModule } from './customer/customer.module';
import { AdminModule } from './admin/admin.module';







@Module({
  imports: [ AgentModule, CustomerModule, AdminModule,  TypeOrmModule.forRoot(
    { type: 'postgres',
     host: 'localhost' ,
     port: 5432,
     username: 'postgres',
     password: 'zayeednahin34',
     database: 'AgentDB',  
     autoLoadEntities: true,
     synchronize: true,
   }, 
 
   ),],
  controllers: [],
  providers: [], 
  
})
export class AppModule {}



