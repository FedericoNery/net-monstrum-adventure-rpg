import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import { DigimonInBattle } from 'domain/battle/DigimonInBattle';
import { mock, instance } from 'ts-mockito';
_chai.should();

@suite class DigimonInBattleUnitTests {

    before() {
        this.digimonInBattle = new DigimonInBattle();
    }

    @test 'should do something when call a method'() {

    }

}