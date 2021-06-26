import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cars' })
@ObjectType()
export class Car {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  dailyPrice!: number;

  @Field()
  @Column()
  monthlyPrice!: number;

  @Field()
  @Column()
  mileAge!: string;

  @Field()
  @Column()
  gas!: string;

  @Field()
  @Column()
  gearType!: string;

  @Field()
  @Column()
  thumbnailUrl!: string;
}
