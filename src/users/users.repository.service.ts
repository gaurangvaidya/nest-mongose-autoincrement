import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateUserDto } from './dto/user.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersRepositoryService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userModel.create({
      email: createUserDto.email,
      posts: createUserDto.posts,
    });
  }
  async findUserById(id: number) {
    return this.userModel.findById(id).populate('posts');
  }
}
