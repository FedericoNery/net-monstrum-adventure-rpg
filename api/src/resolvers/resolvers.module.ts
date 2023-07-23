import { Module } from '@nestjs/common';
import { ServicesModule } from 'src/service/services.module';
import { FooResolver } from './foo.resolver';
import { UsersResolver } from './users.resolver';
import { User, UserSchema } from 'src/models/User.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ServicesModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [],
  providers: [FooResolver, UsersResolver],
})
export class ResolversModule {}
