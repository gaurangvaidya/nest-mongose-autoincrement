import { Body, Controller, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Posts } from './schemas/post.schema';

@Controller('post')
export class PostController {
  constructor(@InjectModel(Posts.name) private postModel: Model<Posts>) {}

  @Post()
  async creatPost(@Body() createPostDto: any) {
    await this.postModel.create(createPostDto);
  }
}
