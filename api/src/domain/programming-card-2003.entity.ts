import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { Rule } from './rule.entity';

@Entity()
export class ProgrammingCard2003 {
  @ObjectIdColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: Blob;

  @Column()
  color: string[];

  @Column()
  prize: number;

  @Column()
  rules: Rule[];
}
