export interface IAttack{
    physicalAttack(target: Digimon);
    useTechnique(indexTechnique: number, target: Digimon);
    magicalAttack(techniqueSelected: Technique, target: Digimon);
    receiveAttack(damage: number);
    isCriticalAttack();
    canApplyEffect(porcentageChance: number, effect: Effect);
    applyEffect(effect: Effect);
    cleanEffect(effect: Effect);
}