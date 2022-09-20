import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity('user')
export class User {
  @ObjectIdColumn()
  user_id?: number;

  @Column('string')
  login?: string;

  @Column('string')
  firstName?: string;

  @Column('string')
  lastName?: string;
}
