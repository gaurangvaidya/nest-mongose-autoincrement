import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Counter, CounterDocument } from './schemas/counter.schema';

@Injectable()
export class CommonService {
  constructor(
    @InjectModel(Counter.name) private counterModel: Model<CounterDocument>,
  ) {}
  async incrementCounter(
    collectionName: string,
    fieldName: string,
  ): Promise<number> {
    const counter = await this.counterModel.findOneAndUpdate(
      { collectionName, fieldName },
      { $inc: { sequence: 1 } },
      { new: true },
    );
    if (!counter) {
      const newCounter = await this.counterModel.create({
        collectionName,
        fieldName,
      });
      return newCounter.sequence;
    }
    return counter.sequence;
  }
}
