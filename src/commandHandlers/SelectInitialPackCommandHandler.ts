import { Injectable } from '@nestjs/common';
import { InitialPackService } from '../service/initialPack.service';
import { UsersService } from '../service/users.service';
import { User } from '../models/User.model';
import { DigimonBattle } from 'src/models/DigimonBattle.model';

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

    //TODO conviene guardar el object ID o directamente el objeto del digimon??
    const listOfPromises = pack.digimons.map(async (digimon) => {
      const digimonBattle = digimon.toDigimonInBattle();
      return digimonBattle;
    });

    const listOfDigimonInBattle = await Promise.all(listOfPromises);

    user.teamDigimon = listOfDigimonInBattle;
    user.save();
    return user;
/*     const userUpdated = await this.usersService.updateOne(user);
    return userUpdated; */
  }
}
