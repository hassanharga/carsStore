import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewCarInput } from './dto/car.input';
import { Car } from './entities/cars.entity';

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}

  public async getAllCars(): Promise<Car[]> {
    return await this.carRepository.find({}).catch(() => {
      // console.error('error[getAllCars.service]', err);
      throw new InternalServerErrorException();
    });
  }

  public async addCar(payload: NewCarInput): Promise<Car> {
    const car = this.carRepository.create(payload);
    return await this.carRepository.save(car).catch(() => {
      // console.error('error[getAllCars.service]', err);
      throw new InternalServerErrorException();
    });
  }
}
