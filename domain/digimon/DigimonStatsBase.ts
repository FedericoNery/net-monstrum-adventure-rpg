export class DigimonStatsBase {
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

    healthPoints: number;
    magicPoints: number;

    constructor(strenght: number, defense: number, spirit: number, wisdom: number, speed: number, healthPoints: number, magicPoints: number){
        this.strenght = strenght;
        this.defense = defense;
        this.spirit = spirit;
        this.wisdom = wisdom;
        this.speed = speed;
        this.healthPoints = healthPoints;
        this.magicPoints = magicPoints;
    }
}