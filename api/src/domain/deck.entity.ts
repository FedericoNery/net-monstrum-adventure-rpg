import { Entity, Column, ManyToOne, ObjectIdColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Deck {
  @ObjectIdColumn()
  id: number;

  @Column()
  cardsIds: number[];

  @ManyToOne(() => Deck, (deck) => deck.user)
  user: User;
}
