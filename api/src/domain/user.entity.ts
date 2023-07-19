import {
  Entity,
  ObjectIdColumn,
  Column,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import { Deck } from './deck.entity';

import bcrypt from 'bcrypt';

@Entity()
export class User {
  @ObjectIdColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  isActive: boolean;

  @Column()
  digiCoins: number;

  @OneToMany(() => Deck, (deck) => deck.user)
  decks: Deck[];

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
