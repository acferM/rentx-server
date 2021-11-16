import { Category } from '../../entities/Category';
import { ICategoriesRepository, ICategoryDTO } from '../ICategoriesRepository';

class InMemoryCategoriesRepository implements ICategoriesRepository {
  categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find(category => category.name === name);

    return category;
  }

  async list(): Promise<Category[]> {
    return this.categories;
  }

  async create(data: ICategoryDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, data);

    this.categories.push(category);
  }
}

export { InMemoryCategoriesRepository };
