import { Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,Query,UnauthorizedException,UseInterceptors,UsePipes,ValidationPipe,
} from '@nestjs/common';
import { Session, UploadedFile } from '@nestjs/common/decorators';
import { FileTypeValidator, MaxFileSizeValidator, ParseFilePipe } from '@nestjs/common/pipes';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AdminForm } from './adminform.dto';
import { AdminFormUpdate } from './adminformupdate.dto';
import { AdminService } from './adminservice.service';
import { OpenForm } from './openform.dto';
import { AgentService } from 'src/agent/agent.service';
import { AgentForm } from 'src/agent/agent.dto';
import { TouristForm } from 'src/tourist/tourist.dto';
import { TouristService } from 'src/tourist/tourist.service';

@Controller('/admin')
export class AdminController {
  OpneService: any;
  constructor(private adminService: AdminService,
              private agentService: AgentService,
              private touristService: TouristService) {}

  @Get ('/AdminView')
  AdminView():string{
     return this.adminService.getAdmin();
    }
  @Get ('/AccountView')
  AccountView():string{
       return this.adminService.getAccount();
      }
  
  @Get('/SearchEmployee/:id')
  getUserByID(@Param('id', ParseIntPipe) id: number): any {
    return this.adminService.AdminId(id);
  }
  @Get('/SearchAccount/:id')
  getAccountByID(@Param('id', ParseIntPipe) id: number): any {
    return this.adminService.AccountId(id);
  }


  @Get('/findTourist')
  getAdminByIDName(@Query() qry: any): any {
    return this.adminService.getAdminByIDName(qry);
  }

  @Get('/findAccount')
  getAccountByIDName(@Query() qry: any): any {
    return this.adminService.getAccountByIDName(qry);
  }
  @Post('/insertTourist')
@UsePipes(new ValidationPipe())
  insertUser(@Body() admindto: AdminForm): any {
    return this.adminService.insertUser(admindto);
  }
  @Post('/OpenAccount')
  @UsePipes(new ValidationPipe())
  OpenAccount(@Body() opendto: OpenForm): any {
      return this.adminService.OpenAccount(opendto);
    }

  @Put('/updateTourist/')
  @UsePipes(new ValidationPipe())
  updateUser(@Body('name') name: string, @Body('id') id: number): any {
    return this.adminService.updateUser(name, id);
  }


  @Put('/updateTourist/:id')
  @UsePipes(new ValidationPipe())
  updateTouristbyid(
    @Body() admindto: AdminFormUpdate,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.adminService.updateTouristbyid(admindto, id);
  }


@Put('/updateAccount/:id')
  @UsePipes(new ValidationPipe())
  updateAccountbyid(
    @Body() opendto: OpenForm,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.adminService.updateAccountbyid(opendto, id);
  }


  @Delete('/deleteTourist/:id')
  deleteTouristbyid(@Param('id', ParseIntPipe) id: number): any {
    return this.adminService.deleteTouristbyid(id);
   
  }


  @Delete('/deleteAccount/:id')
  deleteAccountbyid(@Param('id', ParseIntPipe) id: number): any {
    return this.adminService.deleteAccountbyid(id);
   
  }
  @Post('/signup')
  @UseInterceptors(FileInterceptor('tourism',
  {storage:diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
      cb(null,Date.now()+file.originalname)
    }
  })
  
  }))
  signup(@Body() admindto:AdminForm,@UploadedFile(  new ParseFilePipe({
    validators: [
      new MaxFileSizeValidator({ maxSize: 20000 }),
      new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
    ],
  }),) file: Express.Multer.File){
  
    admindto.tourism = file.filename;  
  
  return this.adminService.signup(admindto);
  console.log(file)
  }

  @Get('/signin')
async signin(@Session() session, @Body() admindto:AdminForm)
{
if(await this.adminService.signin(admindto))
{
  session.email = admindto.email;

  console.log(session.email);
  return {message:"success"};

}
else
{
  return {message:"invalid credentials"};
}
 
}

@Get('/signout')
signout(@Session() session)
{
  if(session.destroy())
  {
    return {message:"you are logged out"};
  }
  else
  {
    throw new UnauthorizedException("invalid actions");
  }
}
@Post("/sendemail")
async sendEmail(
  @Body('to') to: string,
  @Body('subject') subject: string,
  @Body('body') body: string,
): Promise<void> {
  await this.adminService.sendEmail(to, subject, body);
}
@Post('/insertAgent')
@UsePipes(new ValidationPipe())
  insertAgent(@Body() agentdto: AgentForm): any {
    return this.agentService.insertAgent(agentdto);
  }

  @Get('/findagentsbyadmin/:id')
  getAgentByAdminID(@Param('id', ParseIntPipe) id: number): any {
    return this.agentService.getAdminByAgentID(id);
  }

  @Get('/findadminbyagent/:id')
  getAdminByAgentID(@Param('id', ParseIntPipe) id: number): any {
    return this.agentService.getAdminByAgentID(id);
  } 
  @Post('/insertTourist')
@UsePipes(new ValidationPipe())
insertTourist(@Body() touristdto: TouristForm): any {
    return this.touristService.insertTourist(touristdto);
  }

  @Get('/findTouristsbyadmin/:id')
  findTouristsbyadmin(@Param('id', ParseIntPipe) id: number): any {
    return this.touristService.getAdminByTouristID(id);
  }
  @Get('/findadminbymanager/:id')
  getAdminByTouristID(@Param('id', ParseIntPipe) id: number): any {
    return this.touristService.getAdminByTouristID(id);
  } 

}
