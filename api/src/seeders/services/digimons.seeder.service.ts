import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Digimon, DigimonDocument } from '../../models/Digimon.model';
import { digimonsData } from '../data/digimons.data';

@Injectable()
export class DigimonsSeederService {
  constructor(
    @InjectModel(Digimon.name)
    private readonly digimonModel: Model<DigimonDocument>,
  ) {}

  async seed() {
    try {
      await this.digimonModel.create(digimonsData);
      console.log('DigimonSeeder: Data seeding completed.');
    } catch (error) {
      console.error('DigimonSeeder: Data seeding failed.', error);
    }
  }

  async drop() {
    try {
      await this.digimonModel.deleteMany({});
      console.log('DigimonSeeder: Data drop completed.');
    } catch (error) {
      console.error('DigimonSeeder: Data drop failed.', error);
    }
  }
}
