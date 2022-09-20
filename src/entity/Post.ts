import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity('post')
export class PostData {
  @ObjectIdColumn()
  post_id?: number;

  @Column('date')
  created?: Date;

  @Column('string')
  description?: string;

  @Column('text')
  text?: string;
}
