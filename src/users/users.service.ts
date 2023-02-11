import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/user.dto';
import { User } from './schemas/user.schema';
import { UsersRepositoryService } from './users.repository.service';

@Injectable()
export class UsersService {
  constructor(private usersRepositoryService: UsersRepositoryService) {}

  async createUser(createUserDto: CreateUserDto) {
    const user = await this.usersRepositoryService.createUser(createUserDto);
    return {
      data: user,
    };
  }
}
