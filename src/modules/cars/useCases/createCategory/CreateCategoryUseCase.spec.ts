import { InMemoryCategoriesRepository } from '@modules/cars/repositories/in-memory/InMemoryCategoriesRepository';
import { AppError } from '@shared/errors/AppError';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let inMemoryCategoriesRepository: InMemoryCategoriesRepository;
let createCategory: CreateCategoryUseCase;

describe('Create Category UseCase', () => {
  beforeEach(() => {
    inMemoryCategoriesRepository = new InMemoryCategoriesRepository();
    createCategory = new CreateCategoryUseCase(inMemoryCategoriesRepository);
  });

  it('Should be able to create a new category', async () => {
    await createCategory.execute({
      name: 'Category Test',
      description: 'Category Description Test',
    });

    const categoryCreated = await inMemoryCategoriesRepository.findByName(
      'Category Test',
    );

    expect(categoryCreated).toHaveProperty('id');
  });

  it('Should not be able to create a new category with existent name', async () => {
    await createCategory.execute({
      name: 'Category Test',
      description: 'Category Description Test',
    });

    await expect(
      createCategory.execute({
        name: 'Category Test',
        description: 'Category Description Test',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
