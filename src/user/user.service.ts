import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/User';
import {Repository } from 'typeorm';

interface UserInterface {
  firstName: string;
  lastName: string;
  login: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(newUser: UserInterface): Promise<User> {
    return this.userRepository.save(newUser);
  }
  get(user_id: any): Promise<User> {
    return this.userRepository.findOne(user_id);
  }
  getAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }
}
