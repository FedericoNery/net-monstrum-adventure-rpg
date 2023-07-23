import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field({ nullable: false })
  username: string;

  @Field({ nullable: false })
  password: string;
}

@InputType()
export class UserLoginInput {
  @Field({ nullable: false })
  username: string;

  @Field({ nullable: false })
  password: string;
}

@InputType()
export class CreateUserInput {
  @Field({ nullable: false })
  username: string;

  @Field({ nullable: false })
  password: string;
}
