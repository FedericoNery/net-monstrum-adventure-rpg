 class CategoryEvolution {
    name: string;
    //Determinado por la categoria de evolución, es un dato a guardar???  60 Rookie 100 Champion 160 Definitive 240 Mega    130 - 160 - 200 - 240 - 320 - 400 
    baseAttack: number;
    
    constructor(name: string, baseAttack: number){
        this.name = name;
        this.baseAttack = baseAttack;
    }

}

export class CategoriesEvolution {
    static BABY: CategoryEvolution = new CategoryEvolution("Baby", 1);
    static BABY_IN_TRAINING: CategoryEvolution = new CategoryEvolution("Baby", 20);
    static ROOKIE: CategoryEvolution = new CategoryEvolution("Rookie", 60);
    static CHAMPION: CategoryEvolution = new CategoryEvolution("Champion", 100);
    static DEFINITIVE: CategoryEvolution = new CategoryEvolution("Definitive", 160);
    static MEGA: CategoryEvolution = new CategoryEvolution("Mega", 240);
}

export default CategoriesEvolution


