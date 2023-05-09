import { EntityBase } from "../EntityBase";
import { DigimonInBattle } from "../battle/DigimonInBattle";
import { EffectTypes } from "./EffectTypes";
import { ElementEnum } from "./ElementEnum";

export class Technique extends EntityBase {
    name: string;
    description: number;
    type: number; //Physical or Magical
    level: number; // lv enabled ??? nivel en el que se desbloquea??
    magicPointsCost: number;
    accuracy: number;
    power: number;
    typeElement: ElementEnum;
    //elementType: ; //Elemento predominante 
    elementValue: number; // Valor elemento predominante
    //effect:   
    //EFECTO 


    // Set field in types -> 

    applyOn(target: DigimonInBattle){
        //Chequear si la precision es superior??
    }

    // Heal -> cura un digimon aliado
    // Auto Heal -> Se cura a si mismo
    heal(target: DigimonInBattle): void { //Crear formula
        let healPoints = target.digimon.stats.healthPoints * 0.2 + (this.power * 0.01);
        target.actualHealthPoints += healPoints;
    }

    // Heal Allies -> cura todos los digimons
    heal(targets: Array<DigimonInBattle>): void{ //Crear formula
        targets.forEach(x => {
            this.heal(x);
        })
    }

    // Revive -> revive un aliado 
    revive(target: DigimonInBattle): void{
        target.status.isKO = false;
        target.actualHealthPoints = 1;
    }

    // Revive All -> revive a todos los aliados
    revive(targets: Array<DigimonInBattle>): void{
        targets.forEach(x => {
            this.revive(x);
        })
    }

    // Cured -> quita efectos aplicados a si mismo
    cure(target: DigimonInBattle, effect: EffectTypes): void{
        if (effect == EffectTypes.CONFUSE){
            target.status.isConfused = false;
        }
        if (effect == EffectTypes.PARALYZE){
            target.status.isConfused = false;
        }
        if (effect == EffectTypes.POISON){
            target.status.isPoisoned = false;
        }
        if (effect == EffectTypes.SLEEP){
            target.status.isAsleep = false;
        }
        //VER QUE HACER CON KO, porque en realidad tendrias que usar Revive o revive usa cure??
    }
    cure(target: DigimonInBattle, effects: Array<EffectTypes>): void{
        effects.forEach(x => {
            this.cure(target, x)
        })
        //VER QUE HACER CON KO, porque en realidad tendrias que usar Revive o revive usa cure??
    }

    cure(targets: Array<DigimonInBattle>, effects: Array<EffectTypes>): void{
        targets.forEach(x => {
            this.cure(x, effects)
        })
        //VER QUE HACER CON KO, porque en realidad tendrias que usar Revive o revive usa cure??
    }
    // Cured Allies -> quita efectos a sus aliados

    


    // Multi ATK 2x ->
    // Multi ATK 3x ->
    // Multi ATK 4x ->
    // Drain Health Points -> del rival
    // Auto increment Speed -> Incrementa velocidad
    // Counter Attack -> incrementa contrataque ??
    
    // KO -> mata al rival??
    knockout(target: DigimonInBattle): void{
        target.status.isKO = true;
        target.actualHealthPoints = 0;
    }

    // Confuse -> confunde al rival
    confuse(target: DigimonInBattle): void{
        target.status.isConfused = true;
    }

    // Paralyze -> confunde al rival
    paralize(target: DigimonInBattle): void{
        target.status.isParalyzed = true;
    }

    // Poison -> confunde al rival
    poison(target: DigimonInBattle): void{
        target.status.isPoisoned = true;
    }

    // Sleep -> confunde al rival
    sleep(target: DigimonInBattle): void{
        target.status.isAsleep = true;
    }

    //DEBERIA TENER UNAS STATS DE RESISTENCIA EN BATALLA
    // Anti KO -> mata al rival??
    antiKO(target: DigimonInBattle, aumentCuantity: number): void{
        target.digimon.statusResistances.ko += aumentCuantity;
    }
    // Anti Confuse -> confunde al rival
    antiConfuse(target: DigimonInBattle, aumentCuantity: number): void{
        target.digimon.statusResistances.confuse += aumentCuantity;
    }
    // Anti Paralyze -> confunde al rival
    antiParalyze(target: DigimonInBattle, aumentCuantity: number): void{
        target.digimon.statusResistances.paralyze += aumentCuantity;
    }
    // Anti Poison -> confunde al rival
    antiPoison(target: DigimonInBattle, aumentCuantity: number): void{
        target.digimon.statusResistances.poison += aumentCuantity;
    }
    // Anti Sleep -> confunde al rival
    antiSleep(target: DigimonInBattle, aumentCuantity: number): void{
        target.digimon.statusResistances.sleep += aumentCuantity;
    }
}    