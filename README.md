
# <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" /> Blogs API <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ar.md)

![Preview da aplicação](./assets/blogs.png) ![Preview da aplicação](./assets/blogs02.png)
![Preview da aplicação](./assets/blogs03.png)

<details>
  <summary><h2>📜 Descrição</h2></summary>

  Este é um projeto avaliativo desenvolvido como parte do módulo de BackEnd do curso de Desenvolvimento Web da Trybe. O projeto consiste em uma API simples, desenvolvida no início dos meus estudos, utilizando Node.js, Sequelize, Docker e a arquitetura MSC (Model, Service, Controller). O objetivo do projeto foi construir uma API RESTful para gerenciamento de posts de blog, incluindo autenticação e validação de usuários.

</details>

<details>
  <summary><h2>🛠️ Funcionalidades</h2></summary>

  - **Autenticação de Usuários:** Usuários podem se cadastrar, fazer login e obter informações de seus perfis. A autenticação é feita utilizando tokens JWT.
  - **Categorias de Postagens:** API permite a criação e a listagem de categorias para organizar os posts.
  - **CRUD de Posts:** Os usuários autenticados podem criar, listar, atualizar e deletar posts.
  - **Arquitetura em Camadas (MSC):** O projeto segue a arquitetura MSC, separando a lógica de negócio (services), a lógica de controle (controllers) e a comunicação com o banco de dados (models).
  - **Middlewares:** Utilizados para validação de entradas e autenticação de rotas.

</details>

<details>
  <summary><h2>🔧 Tecnologias Utilizadas</h2></summary>

  - **Node.js:** Plataforma de desenvolvimento backend.
  - **Express:** Framework web para criar rotas e middlewares.
  - **Sequelize:** ORM utilizado para modelar e interagir com o banco de dados MySQL.
  - **MySQL:** Banco de dados relacional.
  - **JWT (JSON Web Token):** Utilizado para autenticação de usuários.
  - **Docker:** Para containerização da aplicação, facilitando o ambiente de desenvolvimento.
  - **Jest:** Framework de testes utilizado para garantir a qualidade do código.

</details>

<details>
  <summary><h2>📋 Requisitos</h2></summary>

  - **Node.js** versão 16.x
  - **Docker** e **Docker Compose**
  - **MySQL**

</details>

<details>
  <summary><h2>⚙️ Instalação</h2></summary>

  1. Clone o repositório:
     ```bash
     git clone git@github.com:SamuelRocha91/BlogsApi.git
     cd blogs-api
     ```

  2. Crie o arquivo `.env` com base no `.env.example`:
     ```bash
     cp env.example .env
     ```

  3. Suba os containers Docker:
     ```bash
     docker-compose up -d
     ```

  4. Execute as migrações e crie o banco de dados:
     ```bash
     docker exec -it blogs_api /bin/sh
     npm run prestart
     ```

  5. Popule o banco de dados com dados iniciais (se necessário):
     ```bash
     npm run seed
     ```

</details>

<details>
  <summary><h2>📡 Rotas</h2></summary>

  A API possui as seguintes rotas:

  ### Usuários
  - `POST /login`: Autentica um usuário.
  - `POST /user`: Cadastra um novo usuário.
  - `GET /user`: Retorna os usuários cadastrados (necessita autenticação).
  - `GET /user/:id`: Retorna o usuário com base no ID (necessita autenticação).

  ### Categorias
  - `POST /categories`: Cadastra uma nova categoria (necessita autenticação).
  - `GET /categories`: Lista todas as categorias (necessita autenticação).

  ### Posts
  - `POST /post`: Cadastra um novo post (necessita autenticação).

</details>

<details>
  <summary><h2>📂 Estrutura de Pastas</h2></summary>

  - **/src**: Contém todo o código-fonte da aplicação.
    - **/controllers**: Controladores das rotas, responsáveis por receber requisições e enviar respostas.
    - **/middlewares**: Middlewares utilizados para validação de dados e autenticação.
    - **/models**: Definições das tabelas e interações com o banco de dados usando Sequelize.
    - **/services**: Contém a lógica de negócio.

</details>

<details>
  <summary><h2>📜 Scripts</h2></summary>

  - `npm run prestart`: Cria o banco de dados e executa as migrações.
  - `npm run seed`: Popula o banco de dados com dados iniciais.
  - `npm run start`: Inicia a aplicação.
  - `npm run dev`: Inicia a aplicação em modo de desenvolvimento com `nodemon`.
  - `npm test`: Executa os testes com o Jest.

</details>

<details>
  <summary><h2>🐳 Docker</h2></summary>

  A aplicação está completamente containerizada com Docker. Para subir o ambiente, utilize:

  ```bash
  docker-compose up -d
  docker exec -it blogs_api /bin/sh
  npm run prestart
  npm start
  ```

</details>

<details>
  <summary><h2>🔗 Outros Projetos</h2></summary>

  - ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube)
  - 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons)
  - 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith)

</details>
