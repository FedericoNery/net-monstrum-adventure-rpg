import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DigimonDocument = HydratedDocument<Digimon>;

@Schema()
export class Digimon {
  @Prop()
  name: string;

  @Prop()
  nickName: string;

  @Prop()
  strenght: number;

  @Prop()
  defense: number;

  @Prop()
  spirit: number;

  @Prop()
  wisdom: number;

  @Prop()
  speed: number;

  @Prop()
  healthPoints: number;

  @Prop()
  magicPoints: number;
}

export const DigimonSchema = SchemaFactory.createForClass(Digimon);
