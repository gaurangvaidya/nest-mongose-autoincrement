import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CountersModule } from './counters/counters.module';
import { CommonModule } from './common/common.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './post/post.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AllExceptionFilter } from './common/exceptionfilter/allexceptionfilter.filter';

@Module({
  imports: [
    UsersModule,
    CountersModule,
    CommonModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.juweczz.mongodb.net/?retryWrites=true&w=majority',
      { dbName: 'counterTest' },
    ),
    PostModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
  ],
})
export class AppModule {}
