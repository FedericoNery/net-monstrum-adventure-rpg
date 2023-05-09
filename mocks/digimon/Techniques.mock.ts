import { Technique } from "../../domain/digimon/Technique"

export class TechniquesMock {
    //UNIQUE TECHNIQUES
    static TECHNIQUE_GENERIC: Technique = new Technique(1)

    //LIST OF TECHNIQUES
    static TECHNIQUES_WITH_ONE_GENERIC: Array<Technique> = [this.TECHNIQUE_GENERIC]
}