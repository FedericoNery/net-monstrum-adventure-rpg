import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InitialPack, InitialPackDocument } from '../models/InitialPack.model';

@Injectable()
export class InitialPackService {
  constructor(
    @InjectModel(InitialPack.name)
    private initialPackModel: Model<InitialPackDocument>,
  ) {}

  async findAll(): Promise<InitialPack[]> {
    //TIENE QUE IR EL NOMBRE DEL CAMPO AL POPULAR
    return this.initialPackModel.find().populate('digimons').exec();
  }
}
