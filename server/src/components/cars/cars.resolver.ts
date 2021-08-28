import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { NewCarInput } from './dto/car.input';
import { Car } from './entities/cars.entity';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query(() => [Car])
  public async cars(): Promise<Car[]> {
    try {
      return await this.carsService.getAllCars();
    } catch (error) {
      throw error;
    }
  }

  @Mutation(() => Car)
  public async addCar(@Args('payload') payload: NewCarInput): Promise<Car> {
    try {
      return await this.carsService.addCar(payload);
    } catch (error) {
      throw error;
    }
  }
}
