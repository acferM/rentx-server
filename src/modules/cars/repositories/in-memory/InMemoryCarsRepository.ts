import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { IFindAvailableDTO } from '@modules/cars/dtos/IFindAvailableDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';

import { ICarsRepository } from '../ICarsRepository';

class InMemoryCarsRepository implements ICarsRepository {
  cars: Car[] = [];

  async create(data: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, { ...data });

    this.cars.push(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find(car => car.license_plate === license_plate);
  }

  async findAvailable({
    category_id,
    brand,
    name,
  }: IFindAvailableDTO): Promise<Car[]> {
    let cars = this.cars.filter(car => car.available);

    if (category_id) {
      cars = cars.filter(car => car.category_id === category_id);
    }

    if (brand) {
      cars = cars.filter(car => car.brand === brand);
    }

    if (name) {
      cars = cars.filter(car => car.name === name);
    }

    return cars;
  }
}

export { InMemoryCarsRepository };
