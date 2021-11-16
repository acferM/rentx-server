import { AppError } from '../../../../errors/AppError';
import { InMemoryCategoriesRepository } from '../../repositories/in-memory/InMemoryCategoriesRepository';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let inMemoryCategoriesRepository: InMemoryCategoriesRepository;
let createCategoryUseCase: CreateCategoryUseCase;

describe('Create Category UseCase', () => {
  beforeEach(() => {
    inMemoryCategoriesRepository = new InMemoryCategoriesRepository();
    createCategoryUseCase = new CreateCategoryUseCase(
      inMemoryCategoriesRepository,
    );
  });

  it('Should be able to create a new category', async () => {
    await createCategoryUseCase.execute({
      name: 'Category Test',
      description: 'Category Description Test',
    });

    const categoryCreated = await inMemoryCategoriesRepository.findByName(
      'Category Test',
    );

    expect(categoryCreated).toHaveProperty('id');
  });

  it('Should not be able to create a new category with existent name', async () => {
    await createCategoryUseCase.execute({
      name: 'Category Test',
      description: 'Category Description Test',
    });

    await expect(
      createCategoryUseCase.execute({
        name: 'Category Test',
        description: 'Category Description Test',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
