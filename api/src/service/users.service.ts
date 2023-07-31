import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../models/User.model';
import { CreateUserDto, LoginInputUserDto } from '../dto/CreateUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async login(loginInputUserDto: LoginInputUserDto): Promise<User> {
    const loggedUser = new this.userModel();
    loggedUser.username = loginInputUserDto.username;
    loggedUser.password = loginInputUserDto.password;
    return loggedUser;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
