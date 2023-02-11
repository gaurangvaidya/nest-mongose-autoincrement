import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonService } from './common.service';
import { Counter, counterSchema } from './schemas/counter.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Counter.name, schema: counterSchema }]),
  ],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
