import CategoryEvolution from "./CategoryEvolution"

export class Digimon extends EntityBase {
    name: string;
    nickName: string; //Apodo del digimon??
    levelNumber: number;
    experience: number;
    baseAttack: number;//Determinado por la categoria de evolución, es un dato a guardar???  60 Rookie 100 Champion 160 Definitive 240 Mega    130 - 160 - 200 - 240 - 320 - 400 
    physicalAttackDamage: number;
    physicalDeffenseDamage: number;
    magicalAttackDamage: number;
    magicalDeffenseDamage: number;
    speed: number;
    categoryEvolution: CategoryEvolution; // Novato Campeon Definitivo Mega etc
    type: string; // Vacuna, Virus o Data

    healthPoints: number;
    magicPoints: number;

    poisonResistance: number;
    paralyzeResistance: number;
    confuseResistance: number;
    sleepResistance: number;
    koResistance: number; // KO resistance ver de quitar


    helmet: ;
    body: ;
    leftHand: ;
    rightHand: ;
    accesorie1: ;
    accesorie2: ;

    //name: string;
/*     STR - Deal more physical damage
    DEF - Take less physical damage
    SPR - Deal more magical damage (and affects hit % of magic attacks)
    WIS - Take less magical damage
    SPD - Affects hit % of physical attacks
    FIRE/WATER/ICE/WIND/THUNDER/MACHINE/DARK - Take less damage from attacks of those elements. */

    constructor(name: string) {
      this.name = name;
    }
   
    physical_attack(target: Digimon){
      
    }

    magical_attack(technique_selected: Technique, target: Digimon) {
      let damage = 
      return "Hello, " + this.greeting;
    }

    receiveAttack(damage: number){

    }

    canApplyEffect(porcentageChance: number, effect: Effect){

    }

    applyEffect(effect: Effect){

    }

    cleanEffect(effect: Effect){

    }

    addExperience(experience: number){

    }

    trainPhysicalAttackDamage(physicalAttackDamage: number){

    }
    
    trainPhysicalDeffenseDamage(physicalDeffenseDamage: number){

    }

    trainMagicalAttackDamage(magicalAttackDamage: number){

    }
    trainMagicalDeffenseDamage(magicalDeffenseDamage: number){

    }
    
    trainSpeed(speed: number){

    }

    loadHability(){ //Cargar una técnica??? un movimiento algo??

    }

    setHelmet(){

    }

    setBody(){

    }

    setLeftHand(){

    }

    setRightHand(){

    }

    setAccesorie1(){

    }

    setAccesorie2(){

    }
    body: ;
    leftHand: ;
    rightHand: ;
    accesorie1: ;
    accesorie2: ;
    /*
    FORMULAS DE CALCULO DE DAÑO  
    Damage=P*FS*FD

P:Power tech
FS:Factor spirit
FD:Factor elemental defense
SPI: Own spirit
SPIE: Enemy spirit
DEFE: Enemy elemental defense

FS=IF(SPI<3*SPIE;0,5*(1+SPI/SPIE);2)
FS value is between 0.5 and 2
FS takes its maximum value for SPI is triple or more the SPIE

FD=IF(DEFE<100;4-DEFE*0,03;IF(DEFE<300;1,25-DEFE*0,0025;0,65-DEFE*0,0005))
FD value is between 4 and 1 for SPIE <100
FD value is between 1 and 0.5 for SPIE <300
    */



  }