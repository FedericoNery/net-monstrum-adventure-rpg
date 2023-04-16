import { EntityBase } from "../../EntityBase";
import { ElementTolerances } from "../../digimon/ElementTolerances";
import { StatusResistances } from "../../digimon/StatusResistances";

export abstract class ItemEquipment extends EntityBase{
    idDigimonAffinity: number;
    name: string;
    description: string;
    strenght: number;
    defense: number;
    spirit: number;
    wisdom: number;
    speed: number;
    statusResistances: StatusResistances;
    elementTolerances: ElementTolerances;
}