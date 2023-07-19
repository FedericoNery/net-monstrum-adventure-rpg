import { Entity, ObjectIdColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Rule {
  @ObjectIdColumn()
  id: number;

  @Column()
  target: number;

  @Column()
  from: string;

  @Column()
  quantity: string;

  @Column()
  action: string;
}
