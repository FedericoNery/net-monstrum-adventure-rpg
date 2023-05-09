import { DigimonInBattle } from "../../domain/battle/DigimonInBattle";
import { DigimonMock } from "../Digimon.mock";

export class DigimonInBattleMock {

    static getAgumonInBattle() {
        const agumon = DigimonMock.getAgumon()

        const agumonInBattle = new DigimonInBattle(agumon);
        return agumonInBattle

    }
}