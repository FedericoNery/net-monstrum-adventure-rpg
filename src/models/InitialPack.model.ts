import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Digimon } from './Digimon.model';

export type InitialPackDocument = HydratedDocument<InitialPack>;

@Schema()
export class InitialPack {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Digimon' }] })
  digimons: Digimon[];
}

export const InitialPackSchema = SchemaFactory.createForClass(InitialPack);
