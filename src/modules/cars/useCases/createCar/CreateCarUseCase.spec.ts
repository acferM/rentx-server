import { InMemoryCarsRepository } from '@modules/cars/repositories/in-memory/InMemoryCarsRepository';

import { CreateCarUseCase } from './CreateCarUseCase';

let inMemoryCarsRepository: InMemoryCarsRepository;
let createCar: CreateCarUseCase;

describe('Create Car', () => {
  beforeEach(() => {
    inMemoryCarsRepository = new InMemoryCarsRepository();
    createCar = new CreateCarUseCase(inMemoryCarsRepository);
  });

  it('Should be able to create a new car', async () => {
    await createCar.execute({
      name: 'Name Car',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'abc1234',
      fine_amount: 60,
      brand: 'brand',
      category_id: 'category',
    });
  });
});
