import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DigimonBattleDocument = HydratedDocument<DigimonBattle>;

@Schema()
export class DigimonBattle {
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

export const DigimonBattleSchema = SchemaFactory.createForClass(DigimonBattle);
