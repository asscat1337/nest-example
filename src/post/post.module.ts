import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostData } from '../entity/Post';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostData])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
