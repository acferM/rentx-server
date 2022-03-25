import { v4 as uuid } from 'uuid';

import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';

import { ICarsRepository } from '../ICarsRepository';

class InMemoryCarsRepository implements ICarsRepository {
  cars: Car[] = [];

  async create(data: ICreateCarDTO): Promise<void> {
    const car = new Car();

    Object.assign(car, { id: uuid(), ...data });
  }
}

export { InMemoryCarsRepository };
