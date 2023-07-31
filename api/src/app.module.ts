import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResolversModule } from './resolvers/resolvers.module';
import { SeederService } from './seeders/seeder.service';
import { UsersSeederService } from './seeders/services/users.seeder.service';

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
  providers: [AppService, SeederService, UsersSeederService],
})
export class AppModule {}
