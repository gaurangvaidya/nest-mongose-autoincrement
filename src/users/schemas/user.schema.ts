import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class User {
  @Prop()
  _id: number;
  @Prop()
  email: string;
  // @Prop()
  // posts: Post;
}
export const userSchema = SchemaFactory.createForClass(User);
export type UserDocument = HydratedDocument<User>;
