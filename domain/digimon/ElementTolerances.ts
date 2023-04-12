export class ElementTolerances {
    /**
Tolerances - Tolerances are the defense aginst elemental based attack. The
higher the tolerance for an element (ex: fire), the lower the
damage from an attack that is based on that element (fire).
 */
    //Podriamos hacerlo dinamico o algo mas aceptable para agregar más tolerancias si es necesario
    fire: number;
    water: number;
    ice: number;
    wind: number;
    thunder: number;
    machine: number;
    dark: number;

    constructor(fire: number, water: number, ice: number, wind: number, thunder: number, machine: number, dark: number) {
        this.fire = fire;
        this.water = water;
        this.ice = ice;
        this.wind = wind;
        this.thunder = thunder;
        this.machine = machine;
        this.dark = dark;
    }

    getToleranceByElementNumber(elementNumber: number) {
        switch (elementNumber) {
            case 1:
                return this.fire;
            case 2:
                return this.water;
            case 3:
                return this.ice;
            case 4:
                return this.wind;
            case 5:
                return this.thunder;
            case 6:
                return this.machine;
            case 7:
                return this.dark;
            default://THROWEAR EXCEPCION
                return 0;
        }
    }
}