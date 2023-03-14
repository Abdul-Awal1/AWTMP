import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Session,
  UnauthorizedException,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer/interceptors';
import { placeForm } from './place.dto';
import { TouristForm } from './touristform.dto';
import { TouristFormUpdate } from './touristformupdate.dto';
import { TouristService } from './touristservice.service';
import { diskStorage } from 'multer';
import { AgentService } from 'src/Agent/agent.service';
import { AgentForm } from 'src/Agent/agent.dto';

@Controller('/tourist')
export class TouristController {
  constructor(private touristService: TouristService,
              private agentService: AgentService) {}

  @Get('/getall')
  getTourist(): any {
    return this.touristService.getIndex();
  }
  
  @Get('/finduser/:id')
  getUserByID(@Param('id', ParseIntPipe) id: number): any {
    return this.touristService.getUserByID(id);
  }

  @Get('/finduser')
  getUserByIDName(@Query() qry: any): any {
    return this.touristService.getUserByIDName(qry);
  }
  @Post('/insertuser')
@UsePipes(new ValidationPipe())
  insertuser(@Body() touristformdto: TouristForm): any {
    return this.touristService.insertuser(touristformdto);
  }

  @Put('/updateuser/')
  @UsePipes(new ValidationPipe())
  updateUser(@Body('name') name: string, @Body('id') id: number): any {
    return this.touristService.updateUser(name, id);
  }

  @Put('/updateuser/:id')
  @UsePipes(new ValidationPipe())
  updateUserbyid(
    @Body() touristformdto: TouristFormUpdate,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.touristService.updateUserbyid(touristformdto, id);
  }

  @Delete('/deleteuser/:id')
  deleteUserbyid(@Param('id', ParseIntPipe) id: number): any {
    return this.touristService.deleteUserbyid(id);
   
  }
  @Post('/insertplace')
  @UsePipes(new ValidationPipe())
  insertplace(@Body() placedto: placeForm): any {
    return this.touristService.insertplace(placedto);
  }
  @Put('/updateplace/')
  @UsePipes(new ValidationPipe())
  updateplace(@Body('place') place: string, @Body('id') id: number): any {
    return this.touristService.updateplace(place, id);
  }
  @Put('/updateplace/:id')
  @UsePipes(new ValidationPipe())
  updateplacebyid(
    @Body() placedto: placeForm,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.touristService.updateplacebyid(placedto, id);
  }

  @Delete('/deleteplace/:id')
  deleteplacebyid(@Param('id', ParseIntPipe) id: number): any {
    return this.touristService.deleteplacebyid(id);
   
  }

  @Put('/updateFeedback/')
  @UsePipes(new ValidationPipe())
  updateFeedback(@Body('Feedback') Feedback: string, @Body('id') id: number): any {
    return this.touristService.updateFeedback(Feedback, id);
  }
  @Put('/updateFeedback/:id')
  @UsePipes(new ValidationPipe())
  updateFeedbackbyid(
    @Body() placedto: placeForm,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.touristService.updateFeedbackbyid(placedto, id);
  }
  


  @Post('/insertmanager')
  @UsePipes(new ValidationPipe())
    insertManager(@Body() agentdto: AgentForm): any {
      return this.agentService.insertAgent(agentdto);
    }
   
    @Get('/findmanagersbyadmin/:id')
    getAgentByTouristID(@Param('id', ParseIntPipe) id: number): any {
      return this.touristService.getAgentByTouristID(id);

    }

    @Get('/findadminbymanager/:id')
    getAdminByManagerID(@Param('id', ParseIntPipe) id: number): any {
      return this.agentService.getTouristByAgentID(id);
    }
 
  
  @Post('/signup')
  @UseInterceptors(FileInterceptor('filename',
  {storage:diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
      cb(null,Date.now()+file.originalname)
    }
  })
  
  }))
  signup(@Body() touristformdto:TouristForm,@UploadedFile(  new ParseFilePipe({
    validators: [
      new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 2 }),
      new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
    ],
  }),) file: Express.Multer.File){
  
    touristformdto.filename = file.filename;  
  
  return this.touristService.signup(touristformdto);
  
  }
  @Get('/signin')
  async signin(@Session() session, @Body() touristformdto:TouristForm)
  {
  if(await this.touristService.signin(touristformdto))
  {
    session.email = touristformdto.email;
  
    console.log(session.email);
    return {message:"success"};
  
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
      return {message:"you are logged out"};
    }
    else
    {
      throw new UnauthorizedException("invalid actions");
    }
  }

  @Post("sendemail")
async sendEmail(
  @Body('to') to: string,
  @Body('subject') subject: string,
  @Body('body') body: string,
): Promise<void> {
  await this.touristService.sendEmail(to, subject, body);
}


}



