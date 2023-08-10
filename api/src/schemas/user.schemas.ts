import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field({ nullable: false })
  username: string;

  @Field({ nullable: false })
  password: string;
}

@ObjectType()
export class CreatedUserOutput {
  @Field({ nullable: false })
  id: string;

  @Field({ nullable: false })
  username: string;
}

@InputType()
export class CreateUserInput {
  @Field({ nullable: false })
  username: string;

  @Field({ nullable: false })
  password: string;
}

/* @InputType()
export class SelectInitialPackInput{
  @Field({ nullable: false })
  username: string;

  @Field({ nullable: false })
  packId: ObjectId;
} */
