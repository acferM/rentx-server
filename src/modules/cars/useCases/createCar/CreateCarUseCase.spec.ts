import { InMemoryCarsRepository } from '@modules/cars/repositories/in-memory/InMemoryCarsRepository';
import { AppError } from '@shared/errors/AppError';

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

  it('Should not be able to create a car with existent license plate', async () => {
    await createCar.execute({
      name: 'Car1',
      description: 'Description Car1',
      daily_rate: 100,
      license_plate: 'abc1234',
      fine_amount: 60,
      brand: 'brand',
      category_id: 'category',
    });

    await expect(
      createCar.execute({
        name: 'Car2',
        description: 'Description Car2',
        daily_rate: 100,
        license_plate: 'abc1234',
        fine_amount: 60,
        brand: 'brand',
        category_id: 'category',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should be able to create with available true by default', async () => {
    const car = await createCar.execute({
      name: 'Name Car',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'abc1234',
      fine_amount: 60,
      brand: 'brand',
      category_id: 'category',
    });

    expect(car.available).toBe(true);
  });
});
