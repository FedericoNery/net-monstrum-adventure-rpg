import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserDto } from 'src/dto/CreateUser.dto';
import {
  CreateUserInput,
  User,
  UserLoginInput,
} from 'src/schemas/user.schemas';
import { UsersService } from 'src/service/users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Mutation((returns) => User)
  async login(@Args('userLoginInput') userLoginInput: UserLoginInput) {
    return this.usersService.login(userLoginInput);
  }

  @Query(() => [User])
  async users() {
    const users = await this.usersService.findAll();
    return users;
  }

  @Mutation((returns) => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    const createUserDto: CreateUserDto = {
      username: createUserInput.username,
      password: createUserInput.password,
    };

    return this.usersService.create(createUserDto);
  }
}
