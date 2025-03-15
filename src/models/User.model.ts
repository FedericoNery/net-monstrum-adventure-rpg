import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { DigimonBattle } from './DigimonBattle.model';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends Document {
  @Prop()
  username: string;

  @Prop()
  password: string;

  /*
  TODO Ver si conviene guardar el objeto dentro del user o directamente guardarlo en otro documento
  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: 'DigimonBattle' }],
  })
  teamDigimon: DigimonBattle[]; */
  @Prop()
  teamDigimon: DigimonBattle[];
}

export const UserSchema = SchemaFactory.createForClass(User);
