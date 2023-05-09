import { AccesorieMock } from "./Accesorie.mock";
import { HelmetMock } from "./Helmet.mock";
import { BodyMock } from "./Body.mock";
import { HandMock } from "./Hand.mock";
import { Equipment } from "../../domain/equipment/base/Equipment";

export class EquipmentMock {
    static EQUIPMENT_ALL_0: Equipment = new Equipment(
        HelmetMock.HELMET_ALL_0,
        BodyMock.BODY_ALL_0,
        HandMock.HAND_ALL_0,
        HandMock.HAND_ALL_0,
        AccesorieMock.ACCESORIE_ALL_0,
        AccesorieMock.ACCESORIE_ALL_0
    )
}