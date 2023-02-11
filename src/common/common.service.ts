import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { Counter, CounterDocument } from './schemas/counter.schema';

@Injectable()
export class CommonService {
  constructor(
    @InjectModel(Counter.name) private counterModel: Model<CounterDocument>,
  ) {}
  async incrementCounter<T>(
    collectionName: string,
    fieldName: string,
    document: HydratedDocument<T>,
  ): Promise<void> {
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
      document[fieldName] = newCounter.sequence;
    } else {
      document[fieldName] = counter.sequence;
    }
  }
}
