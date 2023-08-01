import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../models/User.model';
import { UsersSeederService } from './services/users.seeder.service';
import { DigimonsSeederService } from './services/digimons.seeder.service';
import { InitialPackSeederService } from './services/initialPack.seeder.service';
import { Digimon, DigimonSchema } from '../models/Digimon.model';
import { InitialPack, InitialPackSchema } from '../models/InitialPack.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Digimon.name, schema: DigimonSchema },
      { name: InitialPack.name, schema: InitialPackSchema },
    ]),
  ],
  providers: [
    UsersSeederService,
    DigimonsSeederService,
    InitialPackSeederService,
  ],
  exports: [
    UsersSeederService,
    DigimonsSeederService,
    InitialPackSeederService,
  ],
})
export class SeederModule {}
