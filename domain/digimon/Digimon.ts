import { EntityBase } from "../EntityBase";
import { Equipment } from "../equipment/base/Equipment";
import { CategoriesEvolution } from "./CategoryEvolution";
import { DigimonStatsBase } from "./DigimonStatsBase";
import { DigimonTypes } from "./DigimonTypes";
import { ElementTolerances } from "./ElementTolerances";
import { IEvolutionable } from "./IEvolutionable";
import { ITrainable } from "./ITrainable";
import { StatusResistances } from "./StatusResistances";
import { Technique } from "./Technique";
export class Digimon extends EntityBase implements ITrainable, IEvolutionable {
  name: string;
  nickName: string; //Apodo del digimon??
  levelNumber: number;
  experience: number;

  categoryEvolution: CategoriesEvolution; // Novato Campeon Definitivo Mega etc
  type: DigimonTypes; // Vacuna, Virus o Data
  stats: DigimonStatsBase;
  statusResistances: StatusResistances;
  equipment: Equipment;
  elementTolerances: ElementTolerances;
  techniques: Array<Technique>;

  constructor(
    id: number,
    name: string,
    nickName: string,
    levelNumber: number,
    experience: number,
    categoryEvolution: CategoriesEvolution,
    type: DigimonTypes,
    stats: DigimonStatsBase,
    statusResistance: StatusResistances,
    equipment: Equipment,
    elementTolerances: ElementTolerances,
    techniques: Array<Technique>,
  ) {
    super(id);
    this.name = name;
    this.nickName = nickName;
    this.levelNumber = levelNumber;
    this.experience = experience;
    this.categoryEvolution = categoryEvolution;
    this.type = type;
    this.stats = stats;
    this.statusResistances = statusResistance;
    this.equipment = equipment;
    this.elementTolerances = elementTolerances;
    this.techniques = techniques;
  }

  addExperience(experience: number) {

  }

  trainPhysicalAttackDamage(physicalAttackDamage: number) {
    
  }

  trainPhysicalDeffenseDamage(physicalDeffenseDamage: number) {

  }

  trainMagicalAttackDamage(magicalAttackDamage: number) {

  }

  trainMagicalDeffenseDamage(magicalDeffenseDamage: number) {

  }

  trainSpeed(speed: number) {

  }

  loadHability() { //Cargar una técnica??? un movimiento algo??

  }

  evolveTo(digimon: Digimon) {

  }


}