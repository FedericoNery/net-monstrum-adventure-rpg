import { Digimon } from "./Digimon";

export interface IEvolutionable{
    evolveTo(digimon: Digimon): void;
}

//Cuando el digimon evolucione se agregan las stats base del siguiente digimon en el que evolucion