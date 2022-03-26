# Cadastro de carro

**Requisitos funcionais**
- [x]  Deve ser possível cadastrar um novo carro.
- [ ]  Deve ser possível listar todas as categorias.


**Regras de negócio**
- [x]  Não deve ser possível cadastrar um carro com uma placa já existente.
- [x]  O carro deve ser cadastrado por padrão com disponibilidade.
- [x]  O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**Requisitos funcionais**
- [ ]  Deve ser possível listar todos os carros disponíveis.
- [ ]  Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
- [ ]  Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- [ ]  Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**Regras de negócio**
- [ ]  O usuário não precisa estar autenticado no sistema.

# Cadastro de Especificação no carro

**Requisitos funcionais**
- [ ]  Deve ser possível cadastrar uma especificação para um carro.
- [ ]  Deve ser possível listar todas as especificações.
- [ ]  Deve ser possível listar todos os carros.


**Regras de negócio**
- [ ]  Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- [ ]  Não deve ser possível cadastrar uma especificação já existente par ao mesmo carro.
- [ ]  O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**Requisitos funcionais**
- [ ]  Deve ser possível cadastrar a imagem de um carro.
- [ ]  Deve ser possível listar todos os carros.

**Requisitos não funcionais**
- [ ]  Utilizar o multer para upload local dos arquivos


**Regras de negócio**
- [ ]  O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- [ ]  O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**Requisitos funcionais**
- [ ]  Deve ser possível cadastrar um aluguel.


**Regras de negócio**
- [ ]  O aluguel deve ter duração mínima de 24 horas.
- [ ]  Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- [ ]  Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
