import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostData } from '../entity/Post';
import { Repository } from 'typeorm';

interface InterfacePost {
  created: Date;
  description: string;
  text: string;
}

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostData)
    private readonly postRepository: Repository<PostData>,
  ) {}
  async create(newPost: InterfacePost) {
    return this.postRepository.create(newPost);
  }
  async get() {
    return this.postRepository.find();
  }
}
