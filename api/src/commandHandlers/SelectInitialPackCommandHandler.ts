import { Injectable } from '@nestjs/common';
import { InitialPackService } from '../service/initialPack.service';
import { UsersService } from '../service/users.service';
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
    const pack = await this.initialPackService.findById(payload.packId);
    const user = await this.usersService.findById(payload.userId);

    const listOfDigimonInBattle = [];
    pack.digimons.forEach((digimon) => {
      listOfDigimonInBattle.push(digimon.toDigimonInBattle());
    });

    user.teamDigimon = listOfDigimonInBattle;
    const userUpdated = this.usersService.updateOne(user);
    return userUpdated;
  }
}
