import { EntityBase } from "../EntityBase";
import { Digimon } from "./Digimon";

//PARA SELECCIONAR LOS DIGIMON INICIALES
export class DigimonPack extends EntityBase{
    digimons: Array<Digimon>;
    name: string;
    description: string;

    constructor(id: number, name: string, description: string, digimons: Array<Digimon>){
        super(id)
        this.description = description;
        this.name = name;
        this.digimons = digimons;
    }

}