import { Injectable } from '@nestjs/common';
import { InitialPackService } from 'src/service/initialPack.service';
import { UsersService } from 'src/service/users.service';
import { User } from '../models/User.model';

interface SelectInitialPackCommandHandlerInputDto {
  packId: string;
  userId: string;
}

@Injectable()
export class SelectInitialPackCommandHandler {
  constructor(
    private usersService: UsersService,
    private initialPackService: InitialPackService,
  ) {}

  async execute(
    payload: SelectInitialPackCommandHandlerInputDto,
  ): Promise<User> {
    const pack = this.initialPackService.findById({ _id: payload.packId });
    const user = this.usersService.findById({ _id: payload.userId });
    user.
    return;
  }
}
