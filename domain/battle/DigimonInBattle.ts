import { Digimon } from "../digimon/Digimon";
import { StatusDigimon } from "./StatusDigimon";

export class DigimonInBattle {
    digimon: Digimon;
    actualHealthPoints: number;
    actualMagicPoints: number;
    status: StatusDigimon;

    constructor(digimon: Digimon) {
        this.digimon = digimon;
        this.actualHealthPoints = digimon.healthPoints;
        this.actualMagicPoints = digimon.magicPoints;
        this.status = new StatusDigimon();
    }
}