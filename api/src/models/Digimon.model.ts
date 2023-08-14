import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { DigimonBattle } from './DigimonBattle.model';

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

  toDigimonInBattle(): DigimonBattle {
    const digimonBattle = new DigimonBattle();
    digimonBattle.defense = this.defense;
    digimonBattle.healthPoints = this.healthPoints;
    digimonBattle.magicPoints = this.magicPoints;
    digimonBattle.name = this.name;
    digimonBattle.nickName = this.nickName;
    digimonBattle.speed = this.speed;
    digimonBattle.spirit = this.spirit;
    digimonBattle.strenght = this.strenght;
    digimonBattle.wisdom = this.wisdom;

    return digimonBattle;
  }
}

export const DigimonSchema = SchemaFactory.createForClass(Digimon);
