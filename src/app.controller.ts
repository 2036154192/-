import { Controller, Get, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";

@ApiTags("公用接口")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @UseGuards(AuthGuard("jwt"))
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}


