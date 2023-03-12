import { Body, Controller, Delete, Get, Param, Post, Put, Query, Patch } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  choose(){
    return this.appService.choose();
  }

  @Post("/getuser/:id&:name")
  getuser(@Param() params) : string{
    return "The id is" + params.id + "the name is" + params.name; 
  }

  @Post("/insertuser/:uname&:pass")
  insertuser(@Param() params) : string{
    return "The user name  is" + params.uname + "the password is" + params.pass; 
  }

  @Delete("/deleteuser/:uname")
  deleteuser(@Param() params) : string{
    return "the deleted name is" + params.uname; 
  }

  @Put("/updateuser/:uname&:pass")
  updateuser(@Param() params) : string{
    return "The updated user name  is" + params.uname + "the updated password is" + params.pass; 
  }

  @Post("/id")
  userid(@Body() body : string){
    console.log(body)
    return this.appService.userid(body);
  }

  @Get("pass")
  userpass(@Body() body : string){
    console.log(body)
    return this.appService.userpass(body);
  }

  @Patch("zayeed")
  patchuser(@Query("main") main : string){
    console.log(main);
    return [{username:'zayeed', email: 'xyz@gmail.com'}]; 
  }

  @Delete("removeuser")
  removeuser(@Query("removeuser") removeuser : string) { 
    console.log(removeuser);
    return [{username:'okay', email: 'any@gmail.com'}]; 
  }

  @Post("adduser")
  adduser(@Query("add") add : string) {
      console.log(add);
      return [{ username: 'no', email: 'no@gmail.com' }];


}
}