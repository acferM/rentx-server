import { Category } from '../entities/Category';

interface ICategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create(data: ICategoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICategoryDTO };
