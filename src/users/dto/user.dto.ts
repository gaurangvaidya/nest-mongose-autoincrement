import { Allow, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Email shoild be string' })
  @IsEmail({}, { message: 'Email should be valid' })
  @IsNotEmpty({ message: 'Email Should not be empty' })
  email: string;
  @Allow()
  posts: number;
}
