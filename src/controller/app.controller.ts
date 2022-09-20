import { Controller, Get, Post, HttpCode } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('main')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get')
  @HttpCode(200)
  getHello(): { hello: string } {
    return this.appService.getHello();
  }

  @Post()
  postHello(): string {
    return this.appService.postHello();
  }
}
