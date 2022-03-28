import { InMemoryCarsRepository } from '@modules/cars/repositories/in-memory/InMemoryCarsRepository';

import { ListCarsUseCase } from './ListCarsUseCase';

let inMemoryCarsRepository: InMemoryCarsRepository;
let listCars: ListCarsUseCase;

describe('List Cars', () => {
  beforeEach(() => {
    inMemoryCarsRepository = new InMemoryCarsRepository();
    listCars = new ListCarsUseCase(inMemoryCarsRepository);
  });

  it('Should be able to list all available cars', async () => {
    const car = await inMemoryCarsRepository.create({
      name: 'Car1',
      description: 'Car description',
      daily_rate: 110,
      license_plate: 'DEF-1234',
      fine_amount: 40,
      brand: 'Car_brand',
      category_id: 'category_id',
    });

    const cars = await listCars.execute({});

    expect(cars).toEqual([car]);
  });

  it('Should be able to list all available cars by brand', async () => {
    const car1 = await inMemoryCarsRepository.create({
      name: 'Car1',
      description: 'Car description',
      daily_rate: 110,
      license_plate: 'DEF-1234',
      fine_amount: 40,
      brand: 'Car_brand',
      category_id: 'category_id',
    });

    await inMemoryCarsRepository.create({
      name: 'Car2',
      description: 'Car description',
      daily_rate: 110,
      license_plate: 'DEF-1234',
      fine_amount: 40,
      brand: 'Car_brand2',
      category_id: 'category_id',
    });

    const cars = await listCars.execute({
      brand: 'Car_brand',
    });

    expect(cars).toEqual([car1]);
  });

  it('Should be able to list all available cars by name', async () => {
    const car1 = await inMemoryCarsRepository.create({
      name: 'Car1',
      description: 'Car description',
      daily_rate: 110,
      license_plate: 'DEF-1234',
      fine_amount: 40,
      brand: 'Car_brand',
      category_id: 'category_id',
    });

    await inMemoryCarsRepository.create({
      name: 'Car2',
      description: 'Car description',
      daily_rate: 110,
      license_plate: 'DEF-1234',
      fine_amount: 40,
      brand: 'Car_brand',
      category_id: 'category_id',
    });

    const cars = await listCars.execute({
      name: 'Car1',
    });

    expect(cars).toEqual([car1]);
  });

  it('Should be able to list all available cars by category', async () => {
    const car1 = await inMemoryCarsRepository.create({
      name: 'Car1',
      description: 'Car description',
      daily_rate: 110,
      license_plate: 'DEF-1234',
      fine_amount: 40,
      brand: 'Car_brand',
      category_id: '12345',
    });

    await inMemoryCarsRepository.create({
      name: 'Car2',
      description: 'Car description',
      daily_rate: 110,
      license_plate: 'DEF-1234',
      fine_amount: 40,
      brand: 'Car_brand',
      category_id: '67890',
    });

    const cars = await listCars.execute({
      category_id: '12345',
    });

    expect(cars).toEqual([car1]);
  });
});
