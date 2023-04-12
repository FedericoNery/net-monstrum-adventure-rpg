export interface ITrainable{
    trainPhysicalAttackDamage(physicalAttackDamage: number): void;
  
    trainPhysicalDeffenseDamage(physicalDeffenseDamage: number): void;
  
    trainMagicalAttackDamage(magicalAttackDamage: number): void;
    
    trainMagicalDeffenseDamage(magicalDeffenseDamage: number): void;
  
    trainSpeed(speed: number): void;
}