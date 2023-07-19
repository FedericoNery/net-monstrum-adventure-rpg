import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
/* import configuration from './config/configuration'; */

@Module({
  imports: [
    /* MongooseModule.forRoot('mongodb://localhost/nest'), */
    ConfigModule.forRoot({
      //envFilePath: '.development.env',
      //load: [configuration],
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      username: 'root',
      password: '',
      database: 'digimon-db',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
