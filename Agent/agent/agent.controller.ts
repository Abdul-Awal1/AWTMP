import { Controller, Get, Param, ParseIntPipe, Post, UsePipes, Body, ValidationPipe, Put, Query, Delete, UseInterceptors, Session, UploadedFile, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator, UnauthorizedException, UseGuards} from "@nestjs/common";
import { AgentService } from "./agent.service";
import { AgentDto} from "./agent.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { CustomerDto } from "src/customer/customer.dto";
import { CustomerService } from "src/customer/customer.service";
import { SessionGuard } from "./agent.sessionGUARDS"; 
import { AdminService } from "src/admin/admin.service";
import { AdminDto } from "src/admin/admin.dto";  




@Controller('/agent')
export class AgentController {
  
    constructor(private AgentService : AgentService, private CustomerService: CustomerService, private AdminService: AdminService ) {} 

    @Get('/findagent/:id') 
    getAgent(@Param('id', ParseIntPipe) id: number): any {
      return this.AgentService.getAgent(id); 
    }

    @Get('/findagentbyquery')
  getAgentByIDName(@Query() qry: any): any {
    return this.AgentService.getAgentByIDName(qry); 
  }

  @Get('/findall')
  getallAgent(): any {
    return this.AgentService.getallAgent();
  }

 


  @Post('/insertAgent')
@UsePipes(new ValidationPipe())
  insertAgent(@Body() agentdto: AgentDto): any {
    return this.AgentService.insertAgent(agentdto); 
  }

  @Put('/updateAgent')
  @UsePipes(new ValidationPipe())
  uupdateAgent(@Body('username') username: string, @Body('id') id: number): any {
    return this.AgentService.updateAgent(username, id);
  }

  @Put('/updateAgent/:id') 
  @UseGuards(SessionGuard)
  @UsePipes(new ValidationPipe())
  updateAgent(@Session() session,@Body('username') username: string): any {
    console.log(session.email);
    return this.AgentService.updateAgent(username, session.email);
  }





  @Delete('/deleteAgent/:id')
  deleteAgent(@Param('id', ParseIntPipe) id: number): any {
    return this.AgentService.deleteAgent(id);
   
  }

  @Post('/signup')
@UseInterceptors(FileInterceptor('filename',
{storage:diskStorage({
  destination: './upload',
  filename: function (req, file, cb) {
    cb(null,Date.now()+file.originalname)
  }
})

}))


signup(@Body() agentdto : AgentDto, @UploadedFile(new ParseFilePipe({
  validators: [
    new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4  }),
    new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
  ],
}),) file: Express.Multer.File){

  agentdto.filename = file.filename;  

return this.AgentService.signup(agentdto); 
// console.log(file)
}

@Get('/signin')
async signin(@Session() session, @Body() agentdto : AgentDto) 

   {
    if(await this.AgentService.signin(agentdto))
   {
     session.email = agentdto.email;

     console.log(session.email);
     return {message:"Logged in successfully"};

  }
   else
  {
    return {message:"invalid credentials"};
  }
 
  }
@Get('/signout')
async signout(@Session() session)
{
  if(await session.destroy())
  {
    return {message:"logged out successfully!"};
  }
  else
  {
    throw new UnauthorizedException("invalid actions");
  }
}

@Post('/insertcustomer')
  @UsePipes(new ValidationPipe())
    insertCustmer(@Body() customerdto : CustomerDto): any {
      return this.CustomerService.insertCustomer(customerdto); 
    }

@Get('/findcustomerbyagent/:id')                                         //relationship
    getCustomerByAgentID(@Param('id', ParseIntPipe) id: number): any {
      return this.AgentService.getCustomerByAgentID(id); 

    }

@Get('/findagentbycustomer/:id')
    getAgentByCustomerID(@Param('id', ParseIntPipe) id: number): any {
      return this.CustomerService.getAgentByCustomerID(id);
    }

@Delete('/deletecustomer/:id')
  deleteCustomerbyid(@Param('id', ParseIntPipe) id: number): any {
    return this.CustomerService.deleteCustomerbyid(id); 
    
   
  }



@Post("sendemail")
async sendEmail(
  @Body('to') to: string,
  @Body('subject') subject: string,
  @Body('text') body: string,
): Promise<void> {
  await this.AgentService.sendEmail(to, subject, body);

}

@Get('/findadminbyagent/:id')
    getAdminByAgentID(@Param('id', ParseIntPipe) id: number): any {
      return this.AdminService.getAdminByAgentID(id); 

    }

    @Post('/insertadmin')
  @UsePipes(new ValidationPipe())
    insertadmin(@Body() admindto : AdminDto): any {
      return this.AdminService.insertadmin(admindto); 
    }

    @Delete('/deleteadmin/:id')
  deleteadminbyid(@Param('id', ParseIntPipe) id: number): any {
    return this.AdminService.deleteadminbyid(id); 
    
   
  }

  @Get('/findadmin/:id') 
    getAdmin(@Param('id', ParseIntPipe) id: number): any {
      return this.AdminService.getAdmin(id); 
    }

    @Get('/findalladmin')
    getallAdmin(): any {
      return this.AdminService.getallAdmin(); 
    }

    @Get('/findadminbyquery')
    getAdminByIDName(@Query() qry: any): any {
      return this.AdminService.getAdminByIDName(qry); 
    }






    


}


