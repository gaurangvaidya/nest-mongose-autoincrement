import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ICommonResponse } from 'src/common/types';
import { CreateUserDto } from './dto/user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<ICommonResponse<User>> {
    return this.userService.createUser(createUserDto);
  }
  @Get('/:id')
  async getUser(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<ICommonResponse<User>> {
    return this.userService.getUser(id);
  }
}
