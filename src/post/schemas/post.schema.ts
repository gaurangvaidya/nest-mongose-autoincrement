import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';

@Schema()
export class Posts {
  @Prop({ type: SchemaTypes.Number })
  _id: number;
  @Prop()
  postName: string;
}
export const postSchema = SchemaFactory.createForClass(Posts);
export type PostDocument = HydratedDocument<Posts>;
