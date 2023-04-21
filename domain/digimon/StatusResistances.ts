export class StatusResistances{
    poison: number;
    paralyze: number;
    confuse: number;
    sleep: number;
    ko: number; // KO resistance ver de quitar
    
    constructor(
        poison: number,
        paralyze: number,
        confuse: number,
        sleep: number,
        ko: number
    ){
        this.poison = poison;
        this.paralyze = paralyze;
        this.confuse = confuse;
        this.sleep = sleep;
        this.ko = ko;
    }
}