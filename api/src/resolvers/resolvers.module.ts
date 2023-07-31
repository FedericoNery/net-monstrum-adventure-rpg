import { Module } from '@nestjs/common';
import { ServicesModule } from '../service/services.module';
import { FooResolver } from './foo.resolver';
import { UsersResolver } from './users.resolver';
import { User, UserSchema } from '../models/User.model';
import { MongooseModule } from '@nestjs/mongoose';
import { SeederModule } from '../seeders/seeder.module';

@Module({
  imports: [
    ServicesModule,
    SeederModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [],
  providers: [FooResolver, UsersResolver],
})
export class ResolversModule {}
