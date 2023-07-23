import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { ResolversModule } from './resolvers/resolvers.module';
import { UsersService } from './service/users.service';
import { ServicesModule } from './service/services.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    MongooseModule.forRoot('mongodb://localhost:27017/digimon-db'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    ResolversModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
