export class Battle extends EntityBase {
    rivalActiveDigimon: Digimon;
    rivalBenchDigimons: [];

    myActiveDigimon: Digimon;
    myBenchDigimons: [];

    constructor(name: string) {
      this.name = name;
    }
   
  }