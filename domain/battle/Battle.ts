import { DigimonInBattle } from "./DigimonInBattle";

enum TURNS {
  RIVAL_TURN,
  MY_TURN,
}

export class Battle extends EntityBase {
    rivalActiveDigimon: DigimonInBattle;
    rivalBenchDigimons: Array<DigimonInBattle>;

    myActiveDigimon: DigimonInBattle;
    myBenchDigimons: Array<DigimonInBattle>;

    turnOrder: Array<TURNS>;


    constructor(name: string) {
      this.name = name;
    }
   
    recalculateTurns(){
      //Si se altera el atributo speed de alguno de los digimon
      //Regenerar el orden de los turnos y sobreescribirlo
    }
    
    executeTurn(){

    }
  }