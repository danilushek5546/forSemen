import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity(({ name: 'characteristic' }))
export class Characteristic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    nullable: false,
  })
  name: string;
}