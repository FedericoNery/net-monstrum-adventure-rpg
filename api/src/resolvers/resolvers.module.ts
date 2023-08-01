import { Module } from '@nestjs/common';
import { ServicesModule } from '../service/services.module';
import { FooResolver } from './foo.resolver';
import { UsersResolver } from './users.resolver';
import { User, UserSchema } from '../models/User.model';
import { MongooseModule } from '@nestjs/mongoose';
import { SeederModule } from '../seeders/seeder.module';
import { Digimon, DigimonSchema } from '../models/Digimon.model';
import { InitialPack, InitialPackSchema } from '../models/InitialPack.model';

@Module({
  imports: [
    ServicesModule,
    SeederModule,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Digimon.name, schema: DigimonSchema },
      { name: InitialPack.name, schema: InitialPackSchema },
    ]),
  ],
  controllers: [],
  providers: [FooResolver, UsersResolver],
})
export class ResolversModule {}
