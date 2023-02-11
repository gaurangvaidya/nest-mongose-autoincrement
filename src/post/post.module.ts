import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';
import { User } from 'src/users/schemas/user.schema';
import { Posts, postSchema } from './schemas/post.schema';
import { PostController } from './post.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        imports: [CommonModule],
        name: Posts.name,
        useFactory: async function (commonService: CommonService) {
          postSchema.pre('save', async function (next) {
            await commonService.incrementCounter<Posts>(
              Posts.name,
              '_id',
              this,
            );
          });
          return postSchema;
        },
        inject: [CommonService],
      },
    ]),
  ],
  controllers: [PostController],
})
export class PostModule {}
