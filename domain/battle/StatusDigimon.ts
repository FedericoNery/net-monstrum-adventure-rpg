export class StatusDigimon{
    isParalyzed: boolean;
    isConfused: boolean;
    isAsleep: boolean;
    isPoisoned: boolean;
    isKO: boolean; 
    //VER SI REALMENTE SIRVE ESTA PROP, PORQUE HABRIA QUE CONSULTAR LA VIDA DEL DIGIMON

    constructor(
        isParalyzed: boolean = false,
        isConfused: boolean = false,
        isAsleep: boolean = false,
        isPoisoned: boolean = false,
        isKO: boolean = false,
    ){
        this.isParalyzed = isParalyzed;
        this.isConfused = isConfused;
        this.isAsleep = isAsleep;
        this.isPoisoned = isPoisoned;
        this.isKO = isKO;
    }
}