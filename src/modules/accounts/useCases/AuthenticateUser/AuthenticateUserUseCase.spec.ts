import { AppError } from '../../../../errors/AppError';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { InMemoryUsersRepository } from '../../repositories/in-memory/InMemoryUsersRepository';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let inMemoryUsersRepository: IUsersRepository;
let createUserUseCase: CreateUserUseCase;
let authenticateUserUseCase: AuthenticateUserUseCase;

describe('Authenticate User', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
    authenticateUserUseCase = new AuthenticateUserUseCase(
      inMemoryUsersRepository,
    );
  });

  it('Should be able to authenticate', async () => {
    const user: ICreateUserDTO = {
      driver_license: '000123',
      email: 'user@teste.com',
      password: '1234',
      name: 'User Test',
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('token');
    expect(result).toHaveProperty('user');
  });

  it('Should not be able to authenticate a non-existing user', async () => {
    await expect(
      authenticateUserUseCase.execute({
        email: 'false@email.com',
        password: '1234',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to authenticate with incorrect password', async () => {
    const user: ICreateUserDTO = {
      driver_license: '000123',
      email: 'user@teste.com',
      password: '1234',
      name: 'User Test',
    };

    await createUserUseCase.execute(user);

    await expect(
      authenticateUserUseCase.execute({
        email: user.email,
        password: 'wrong-password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to authenticate with incorrect email', async () => {
    const user: ICreateUserDTO = {
      driver_license: '000123',
      email: 'user@teste.com',
      password: '1234',
      name: 'User Test',
    };

    await createUserUseCase.execute(user);

    await expect(
      authenticateUserUseCase.execute({
        email: 'wrong@email.com',
        password: user.password,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
