import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { Posts } from 'src/post/schemas/post.schema';

@Schema({})
export class User {
  @Prop()
  _id: number;
  @Prop()
  email: string;
  @Prop({ type: SchemaTypes.Number, ref: 'Posts' })
  posts: Posts;
}
export const userSchema = SchemaFactory.createForClass(User);
export type UserDocument = HydratedDocument<User>;
