import { Accesorie } from "./Accesorie";
import { Body } from "./Body";
import { Hand } from "./Hand";
import { Helmet } from "./Helmet";

export class Equipment {
    helmet: Helmet;
    body: Body;
    leftHand: Hand;
    rightHand: Hand;
    accesorie1: Accesorie;
    accesorie2: Accesorie;

    constructor(helmet: Helmet, body: Body, leftHand: Hand, rightHand: Hand, accesorie1: Accesorie, accesorie2: Accesorie) {
        this.helmet = helmet;
        this.body = body;
        this.leftHand = leftHand;
        this.rightHand = rightHand;
        this.accesorie1 = accesorie1;
        this.accesorie2 = accesorie2;
    }

    setHelmet(helmet: Helmet) {
        this.helmet = helmet;
    }

    setBody(body: Body) {
        this.body = body;
    }

    setLeftHand(leftHand: Hand) {
        this.leftHand = leftHand;
    }

    setRightHand(rightHand: Hand) {
        this.rightHand = rightHand;
    }

    setAccesorie1(accesorie1: Accesorie) {
        this.accesorie1 = accesorie1;
    }

    setAccesorie2(accesorie2: Accesorie) {
        this.accesorie2 = accesorie2;
    }

    getStrenght() {

    }

    getDefense() {

    }

    getSpirit() {

    }
    
    getWisdom() {

    }

    getSpeed() {

    }

    getStatusResistance() {

    }

    getElementTolerances() {

    }

}