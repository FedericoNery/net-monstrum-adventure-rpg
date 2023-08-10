import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../models/User.model';
import { User } from '../schemas/user.schemas';
import { UsersService } from './users.service';
import { Digimon, DigimonSchema } from '../models/Digimon.model';
import { InitialPack, InitialPackSchema } from '../models/InitialPack.model';
import { InitialPackService } from './initialPack.service';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Digimon.name, schema: DigimonSchema },
      { name: InitialPack.name, schema: InitialPackSchema },
    ]),
  ],
  providers: [UsersService, InitialPackService, JwtService, AuthService],
  exports: [UsersService, InitialPackService, JwtService, AuthService],
})
export class ServicesModule {}
