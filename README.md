# api-node-postgres

Desenvolvi esse projeto para pôr em prática minhas habilidades de integração do Frontend ao Backend, assim como conexão à um banco de dados relacional.  
Essa aplicação serve como API consumida pelo Front dessa aplicação: https://github.com/allbertuu/react-postgres

## Sobre o projeto
A aplicação prática deste estudo me permitiu:
- Criar uma API em Node e Express
- Conectar uma API feita em Node ao banco de dados do PostgreSQL

## Stack utilizada ⚙
  
**Back-end:** 
<img align="center" alt="Node.js badge" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
<img align="center" alt="Express.js badge" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">

**Banco de dados**:
<img align="center" alt="PostgreSQL badge" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white">

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/allbertuu/api-node-postgres
```

Entre no diretório do projeto

```bash
  cd api-node-postgres
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```

## Documentação da API

#### Retorna todos os itens

```http
  GET /
```

#### Retorna um item

```http
  GET /merchants/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do mercador que você quer |

## Autor(es) 🙎🏻‍♂️

- Instagram - [@albert.vny](https://www.instagram.com/albert.vny/?hl=pt-br)
- [Meu portfólio website](https://portfolio-allbertuu.vercel.app/)
- [LinkedIn](https://www.linkedin.com/in/albertov-albuquerque/)
- [Frontend Mentor](https://www.frontendmentor.io/profile/allbertuu)

## Feedback

Se você tiver algum feedback, por favor me deixe saber por meio de albertovinicius3@gmail.com

