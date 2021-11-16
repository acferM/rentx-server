import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

class InMemoryUsersRepository implements IUsersRepository {
  users: User[] = [];

  async findById(id: string): Promise<User> {
    const user = this.users.find(user => user.id === id);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email);

    return user;
  }

  async create(data: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, data);

    this.users.push(user);
  }
}

export { InMemoryUsersRepository };
