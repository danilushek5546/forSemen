import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany } from 'typeorm';

import { Characteristic } from '../characteristic/Characteristic.entity';

@Entity(({ name: 'product' }))
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  price: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  description: string;

  @Column({
    type: "real",
    nullable: false,
    default: 0,
  })
  rating: number;

  @Column({
    type: "varchar",
    nullable: true,
  })
  image?: string;

  @ManyToMany(() => Characteristic, { cascade: true })
  @JoinTable({
    name: 'product_characteristic',
    joinColumn: {
      name: 'product_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'characteristic_id',
      referencedColumnName: 'id',
    },
  })
  characteristics: Characteristic[];
}