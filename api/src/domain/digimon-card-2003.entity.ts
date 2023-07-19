import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class DigimonCard2003 {
  @ObjectIdColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: Blob;

  @Column()
  attack: number;

  @Column()
  defense: number;

  @Column()
  color: string[];

  @Column()
  energy: string[];

  @Column()
  prize: number;

  @Column()
  evolution: DigimonCard2003;
}
