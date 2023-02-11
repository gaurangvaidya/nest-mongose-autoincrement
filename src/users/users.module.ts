import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepositoryService } from './users.repository.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './schemas/user.schema';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        imports: [CommonModule],
        useFactory: (commonService: CommonService) => {
          userSchema.pre('save', async function () {
            console.log(this);
            await commonService.incrementCounter<User>(User.name, '_id', this);
          });
          return userSchema;
        },
        inject: [CommonService],
      },
    ]),
  ],
  providers: [UsersService, UsersRepositoryService],
  controllers: [UsersController],
})
export class UsersModule {}
