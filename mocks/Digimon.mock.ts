import { DigimonStatsBaseMock } from "./DigimonStatsBase.mock";
import { StatusResistanceMock } from "./StatusResistance.mock";
import { EquipmentMock } from "./equipment/Equipment.mock";
import { ElementTolerancesMock } from "./digimon/ElementTolerances.mock";
import { TechniquesMock } from "./digimon/Techniques.mock";
import { CategoriesEvolution } from "../domain/digimon/CategoryEvolution";
import { DigimonTypes } from "../domain/digimon/DigimonTypes";
import { Digimon } from "../domain/digimon/Digimon";

export class DigimonMock {

    static getAgumon() {
        const id = 1;
        const name = "Agumon";
        const nickName = "Agumon";
        const levelNumber = 1;
        const experience = 0;
        const categoryEvolution = CategoriesEvolution.ROOKIE;
        const type = DigimonTypes.VACCINE;
        const stats = DigimonStatsBaseMock.STATS_AGUMON;
        const statusResistance = StatusResistanceMock.STATUS_RESISTANCE_ALL_0;
        const equipment = EquipmentMock.EQUIPMENT_ALL_0;
        const elementTolerances = ElementTolerancesMock.ELEMENT_TOLERANCES_ALL_0;
        const techniques = TechniquesMock.TECHNIQUES_WITH_ONE_GENERIC;


        let agumon = new Digimon(
            id,
            name,
            nickName,
            levelNumber,
            experience,
            categoryEvolution,
            type,
            stats,
            statusResistance,
            equipment,
            elementTolerances,
            techniques
        );

        return agumon

    }
}