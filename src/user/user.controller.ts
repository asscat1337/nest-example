import { Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('getAll')
  getAllUser() {
    return this.userService.getAllUser();
  }

  @Get('getUser/:userId')
  async getCurrent(@Req() request) {
    const userId = request.params.userId;
    return await this.userService.get(userId);
  }

  @Post('create')
  createUser(@Req() request) {
    const body = request.body;
    return this.userService.create(body);
  }
}
