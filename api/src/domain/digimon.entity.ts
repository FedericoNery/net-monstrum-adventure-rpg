import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Digimon {
  @ObjectIdColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: Blob;

  @Column()
  url: string;

  @Column()
  level: string[];

  @Column()
  digiTypes: string[];

  @Column()
  attributes: string[];

  @Column()
  priorForms: string[];

  @Column()
  nextForms: string[];
}
