import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Counter {
  @Prop()
  collectionName: string;
  @Prop()
  fieldName: string;
  @Prop({ default: 1 })
  sequence: number;
}
export const counterSchema = SchemaFactory.createForClass(Counter);
export type CounterDocument = HydratedDocument<Counter>;
counterSchema.index(
  { collectionName: 1, fieldName: 1 },
  { name: 'COLLECTION_FIELD' },
);
