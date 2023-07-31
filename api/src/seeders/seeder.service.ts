import { Injectable } from '@nestjs/common';
import { UsersSeederService } from './services/users.seeder.service';

@Injectable()
export class SeederService {
  constructor(private readonly userService: UsersSeederService) {}

  async seed() {
    try {
      await this.userService.seed();
      console.log('Seeder: Data seeding completed.');
    } catch (error) {
      console.error('Seeder: Data seeding failed.', error);
    }
  }
}
