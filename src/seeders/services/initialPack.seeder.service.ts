import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  InitialPack,
  InitialPackDocument,
} from '../../models/InitialPack.model';
import { initialPacksData } from '../data/initialPack.data';

@Injectable()
export class InitialPackSeederService {
  constructor(
    @InjectModel(InitialPack.name)
    private readonly initialPackModel: Model<InitialPackDocument>,
  ) {}

  async seed() {
    try {
      await this.initialPackModel.create(initialPacksData);
      console.log('InitialPackSeeder: Data seeding completed.');
    } catch (error) {
      console.error('InitialPackSeeder: Data seeding failed.', error);
    }
  }

  async drop() {
    try {
      await this.initialPackModel.deleteMany({});
      console.log('InitialPackSeeder: Data drop completed.');
    } catch (error) {
      console.error('InitialPackSeeder: Data drop failed.', error);
    }
  }
}
