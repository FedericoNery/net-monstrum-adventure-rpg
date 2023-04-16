import CategoryEvolution from "./CategoryEvolution"
import { EntityBase } from "../EntityBase";
import { Technique } from "./Technique";
import { Equipment } from "../equipment/base/Equipment";
import { ElementTolerances } from "./ElementTolerances";
import { ITrainable } from "./ITrainable";
import { StatusResistances } from "./StatusResistances";
import { DigimonTypes } from "./DigimonTypes";
export class Digimon extends EntityBase implements ITrainable {
  name: string;
  nickName: string; //Apodo del digimon??
  levelNumber: number;
  experience: number;
  baseAttack: number;//Determinado por la categoria de evolución, es un dato a guardar???  60 Rookie 100 Champion 160 Definitive 240 Mega    130 - 160 - 200 - 240 - 320 - 400 
  /*
  Strength - This stat determines the damage your Digimon will do to an enemy
with his physical attack. Physical attacks are attack performed
with the command "Fight". Some magic attacks are also physical. They
are marked with a red triangle icon.
  */
  strenght: number;
  /**
   * Defense - This stat determines how much damage your Digimon will receive from
an enemy's physical attack.
   */
  defense: number;
  /**
   * Spirit - This stat determines the damage your Digimon will do to an enemy with
his magic attack. Magic attacks are techniques marked with a blue
triangle icon.

   */
  spirit: number;
  /**
   * Wisdom - This stat determines how much damage your Digimon will receive from
an enemy's magic attack. The higher this stat is, the higher are the
chances that your Digimon will evade an enemy's magic attack. With
this stat higher, chances that your magic attack will be successful
are higher, as well. Wisdom also determines how much HP will be
healed with a healing technique.

   */
  wisdom: number;
  /*
  Speed - This stat determines whether your Digimon's physical attack will be
successful or not. It also determines the chances of evading an
enemy's physical attack. With a high speed you'll be able to perform
two actions in a row.
*/
  speed: number;
  /**
   *  * 
* @param name Charisma - This stat tells you how popular your Digimon is. It determines if
other Tamers will Digimon battle, or card battle you, or if they
won't do anything at all.
HABRIA QUE AGREGAR CHARISMA ??? DONDE PODRIA INFLUIR
   */
  categoryEvolution: CategoryEvolution; // Novato Campeon Definitivo Mega etc
  type: DigimonTypes; // Vacuna, Virus o Data

  healthPoints: number;
  magicPoints: number;


  statusResistances: StatusResistances;
  equipment: Equipment;
  elementTolerances: ElementTolerances;
  //name: string;
  /*     STR - Deal more physical damage
      DEF - Take less physical damage
      SPR - Deal more magical damage (and affects hit % of magic attacks)
      WIS - Take less magical damage
      SPD - Affects hit % of physical attacks
      FIRE/WATER/ICE/WIND/THUNDER/MACHINE/DARK - Take less damage from attacks of those elements. */
  techniques: Array<Technique>;

  constructor(name: string) {
    this.name = name;
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

  
}