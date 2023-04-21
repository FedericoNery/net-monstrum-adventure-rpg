import { Digimon } from "../digimon/Digimon";
import { Effect } from "../digimon/Effect";
import { Technique } from "../digimon/Technique";
import { IAttack } from "./IAttack";
import { StatusDigimon } from "./StatusDigimon";

export class DigimonInBattle implements IAttack {
  digimon: Digimon;
  actualHealthPoints: number;
  actualMagicPoints: number;
  status: StatusDigimon;

  constructor(digimon: Digimon) {
    this.digimon = digimon;
    //HACER UN FEATURE FLAG PARA ACTIVAR o DESACTIVAR QUE LOS DIGIMON RESTABLEZCAN O NO SUS STATS
    this.actualHealthPoints = digimon.healthPoints;
    this.actualMagicPoints = digimon.magicPoints;
    this.status = new StatusDigimon();
  }

    physicalAttack(target: DigimonInBattle) {
    let damage = this.digimon.baseAttack + this.digimon.strenght - target.digimon.defense
    target.receiveAttack(damage > 0 ? damage * 1.3 : 0)
  }
    
      useTechnique(indexTechnique: number, target: DigimonInBattle) {
    let technique = this.digimon.techniques[indexTechnique]
    technique.applyOn(target)
  }
    
    
      magicalAttack(techniqueSelected: Technique, target: DigimonInBattle) {
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
    let powerTech = techniqueSelected.power;
    let factorSpirit = this.digimon.spirit < 3 * target.digimon.spirit ? 0.5 * (1 + this.digimon.spirit / target.digimon.spirit) : 2;
    let factorElementalDefense = 0;

    let enemyElementalDefense = target.digimon.elementTolerances.getToleranceByElementNumber(techniqueSelected.typeElement);
    if (enemyElementalDefense < 100) {
      factorElementalDefense = 4 - enemyElementalDefense * 0.03
    }

    if (enemyElementalDefense < 300) {
      factorElementalDefense = 1.25 - enemyElementalDefense * 0.0025;
    }
    else {
      factorElementalDefense = 0.65 - enemyElementalDefense * 0.0005;
    }

    let damage = powerTech * factorSpirit * factorElementalDefense;
    target.receiveAttack(damage);
  }
    
      receiveAttack(damage: number) {
    this.digimon.healthPoints -= damage;
  }

  isCriticalAttack() {//VER COMO APLICAR ESTO POR AHORA ES UN PORCENTAJE FIJO
    let numeroAleatorio = Math.random() * 100;
    return numeroAleatorio > 6.25;
  }

  applyCriticalDamage(damage: number){
    return damage * 2; // Al menos por ahora que duplique el ataque, habría que ver que otra regla podriamos aplicar
    //Prodriamos aplicar una regla que sea que el daaño critico sea entre 1.25 como base y 1.75 como limite
  }
    
      canApplyEffect(porcentageChance: number, effect: Effect) {

  }
    
      applyEffect(effect: Effect) {

  }
    
      cleanEffect(effect: Effect) {

  }

}