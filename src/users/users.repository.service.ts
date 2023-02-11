import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersRepositoryService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(createUserDto) {
    return this.userModel.create(createUserDto);
  }
}
