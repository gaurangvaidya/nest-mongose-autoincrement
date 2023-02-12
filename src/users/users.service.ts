import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICommonResponse } from 'src/common/types';
import { sentResponse } from 'src/utility/responseFunctions';
import { CreateUserDto } from './dto/user.dto';
import { User } from './schemas/user.schema';
import { UsersRepositoryService } from './users.repository.service';

@Injectable()
export class UsersService {
  constructor(private usersRepositoryService: UsersRepositoryService) {}

  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<ICommonResponse<User>> {
    const user = await this.usersRepositoryService.createUser(createUserDto);
    return sentResponse(user, HttpStatus.CREATED, 'User Created');
  }
  async getUser(id: number): Promise<ICommonResponse<User>> {
    const user = await this.usersRepositoryService.findUserById(id);
    if (!user) {
      throw new NotFoundException('User Not Found', 'Not Found');
    }
    return sentResponse(user, HttpStatus.OK);
  }
}
