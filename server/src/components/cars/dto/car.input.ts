import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewCarInput {
  @Field()
  name!: string;

  @Field(() => Int)
  @Max(1500)
  @Min(10)
  dailyPrice!: number;

  @Field(() => Int)
  @Max(200000)
  @Min(1500)
  monthlyPrice!: number;

  @Field()
  mileAge!: string;

  @Field()
  gas!: string;

  @Field()
  gearType!: string;

  @Field()
  thumbnailUrl!: string;
}
