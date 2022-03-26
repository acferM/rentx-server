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

    const cars = await listCars.execute();

    expect(cars).toEqual([car]);
  });

  it('Should be able to list all available cars by name', () => {});
});
