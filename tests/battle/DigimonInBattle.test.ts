import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import { DigimonInBattle } from "../../domain/battle/DigimonInBattle";
import { DigimonInBattleMock } from "../../mocks/battle/DigimonInBattle.mock";

var expect = _chai.expect;
@suite class DigimonInBattleUnitTests {
    allie: DigimonInBattle;
    enemy: DigimonInBattle;

    before() {
        this.allie = DigimonInBattleMock.getAgumonInBattle();
        this.enemy = DigimonInBattleMock.getAgumonInBattle();
    }

    @test 'should do something when call a method'() {
        const strenghtAllie = this.allie.digimon.stats.strenght;
        const baseAttackAllie = this.allie.digimon.categoryEvolution.baseAttack;
        const healthPointsEnemy = this.enemy.actualHealthPoints;
        const defenseEnemy = this.enemy.digimon.stats.defense;

        const damage = strenghtAllie + baseAttackAllie - defenseEnemy

        const expectedResult = healthPointsEnemy - damage
        this.allie.physicalAttack(this.enemy)
        expect(this.enemy.actualHealthPoints).to.equal(expectedResult);
    }

}