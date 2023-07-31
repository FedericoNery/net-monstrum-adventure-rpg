import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../models/User.model';

@Injectable()
export class UsersSeederService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async seed() {
    const dataToSeed = [
      { username: 'User 1', password: '12345' },
      { username: 'User 2', password: '12345' },
    ];

    try {
      // Utiliza el modelo para crear e insertar los datos en la base de datos.
      await this.userModel.create(dataToSeed);
      console.log('UserSeeder: Data seeding completed.');
    } catch (error) {
      console.error('UserSeeder: Data seeding failed.', error);
    }
  }
}
