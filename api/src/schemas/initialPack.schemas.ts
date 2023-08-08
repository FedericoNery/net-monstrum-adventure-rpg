import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { type } from 'os';

@ObjectType()
class Digimon {
  @Field()
  name: string;

  @Field()
  nickName: string;

  @Field()
  strenght: number;

  @Field()
  defense: number;

  @Field()
  spirit: number;

  @Field()
  wisdom: number;

  @Field()
  speed: number;

  @Field()
  healthPoints: number;

  @Field()
  magicPoints: number;
}

@ObjectType()
export class InitialPack {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [Digimon])
  digimons: Digimon[];
}
