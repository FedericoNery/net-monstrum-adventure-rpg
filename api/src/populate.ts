import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SeederService } from './seeders/seeder.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const seederService = app.get(SeederService);
  await seederService.seed();
  await app.close();
}

bootstrap();
