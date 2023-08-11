import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from '../dto/CreateUser.dto';
import {
  CreateUserInput,
  CreatedUserOutput,
  SelectInitialPackInput,
  User,
} from '../schemas/user.schemas';
import { UsersService } from '../service/users.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User])
  async users() {
    const users = await this.usersService.findAll();
    return users;
  }

  @Mutation((returns) => CreatedUserOutput)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<CreatedUserOutput> {
    const createUserDto: CreateUserDto = {
      username: createUserInput.username,
      password: createUserInput.password,
      digimons: [],
    };

    return this.usersService.create(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => String)
  async selectInitialPack(
    @Context() context,
    @Args('selectInitialPackInput')
    selectInitialPackInput: SelectInitialPackInput,
  ) {
    const { req } = context;

    if (req.user) {
      const { sub } = req.user;
    }
    return 'Session not available';
/*
    console.log(req);
    if (req.session) {
      console.log(req.session);
      if (!req.session.visits) {
        req.session.visits = 1;
      } else {
        req.session.visits += 1;
      }
      return `Number of visits: ${req.session.visits}`;
    }
    return 'Session not available'; */
  }
}
