import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto } from './dto/post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('get')
  async getPost() {
    return await this.postService.get();
  }

  @Post('create')
  async createPost(@Body() newPost: PostDto) {
    return await this.postService.create(newPost);
  }
}
