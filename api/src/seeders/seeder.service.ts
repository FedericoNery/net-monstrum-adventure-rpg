import { Injectable } from '@nestjs/common';
import { DigimonsSeederService } from './services/digimons.seeder.service';
import { InitialPackSeederService } from './services/initialPack.seeder.service';
import { UsersSeederService } from './services/users.seeder.service';

@Injectable()
export class SeederService {
  constructor(
    private readonly userService: UsersSeederService,
    private readonly digimonsService: DigimonsSeederService,
    private readonly initialPackService: InitialPackSeederService,
  ) {}

  async seed() {
    try {
      await this.userService.seed();
      await this.digimonsService.seed();
      await this.initialPackService.seed();
      console.log('Seeder: Data seeding completed.');
    } catch (error) {
      console.error('Seeder: Data seeding failed.', error);
    }
  }

  async drop() {
    try {
      await this.userService.drop();
      await this.digimonsService.drop();
      await this.initialPackService.drop();
      console.log('Seeder: Data Droped completed.');
    } catch (error) {
      console.error('Seeder: Data Droped failed.', error);
    }
  }
}
