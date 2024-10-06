
# <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" /> Blogs API <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ar.md)

![Application Preview](./assets/blogs.png) ![Application Preview](./assets/blogs02.png)
![Application Preview](./assets/blogs03.png)

<details>
  <summary><h2>📜 Description</h2></summary>

  This is an evaluative project developed as part of the BackEnd module of the Trybe Web Development course. The project consists of a simple API, developed at the beginning of my studies, using Node.js, Sequelize, Docker, and the MSC (Model, Service, Controller) architecture. The project's objective was to build a RESTful API for managing blog posts, including user authentication and validation.

</details>

<details>
  <summary><h2>🛠️ Features</h2></summary>

  - **User Authentication:** Users can register, log in, and obtain information about their profiles. Authentication is done using JWT tokens.
  - **Post Categories:** The API allows for the creation and listing of categories to organize posts.
  - **Post CRUD:** Authenticated users can create, list, update, and delete posts.
  - **Layered Architecture (MSC):** The project follows the MSC architecture, separating business logic (services), control logic (controllers), and communication with the database (models).
  - **Middlewares:** Used for input validation and route authentication.

</details>

<details>
  <summary><h2>🔧 Technologies Used</h2></summary>

  - **Node.js:** Backend development platform.
  - **Express:** Web framework for creating routes and middlewares.
  - **Sequelize:** ORM used to model and interact with the MySQL database.
  - **MySQL:** Relational database.
  - **JWT (JSON Web Token):** Used for user authentication.
  - **Docker:** For containerizing the application, facilitating the development environment.
  - **Jest:** Testing framework used to ensure code quality.

</details>

<details>
  <summary><h2>📋 Requirements</h2></summary>

  - **Node.js** version 16.x
  - **Docker** and **Docker Compose**
  - **MySQL**

</details>

<details>
  <summary><h2>⚙️ Installation</h2></summary>

  1. Clone the repository:
     ```bash
     git clone https://github.com/your-username/blogs-api.git
     cd blogs-api
     ```

  2. Create the `.env` file based on `.env.example`:
     ```bash
     cp env.example .env
     ```

  3. Start the Docker containers:
     ```bash
     docker-compose up -d
     ```

  4. Run the migrations and create the database:
     ```bash
     docker exec -it blogs_api /bin/sh
     npm run prestart
     ```

  5. Populate the database with initial data (if necessary):
     ```bash
     npm run seed
     ```

</details>

<details>
  <summary><h2>📡 Routes</h2></summary>

  The API has the following routes:

  ### Users
  - `POST /login`: Authenticates a user.
  - `POST /user`: Registers a new user.
  - `GET /user`: Returns registered users (requires authentication).
  - `GET /user/:id`: Returns the user based on ID (requires authentication).

  ### Categories
  - `POST /categories`: Registers a new category (requires authentication).
  - `GET /categories`: Lists all categories (requires authentication).

  ### Posts
  - `POST /post`: Registers a new post (requires authentication).

</details>

<details>
  <summary><h2>📂 Folder Structure</h2></summary>

  - **/src**: Contains all the source code of the application.
    - **/controllers**: Route controllers responsible for receiving requests and sending responses.
    - **/middlewares**: Middlewares used for data validation and authentication.
    - **/models**: Definitions of tables and interactions with the database using Sequelize.
    - **/services**: Contains the business logic.

</details>

<details>
  <summary><h2>📜 Scripts</h2></summary>

  - `npm run prestart`: Creates the database and runs the migrations.
  - `npm run seed`: Populates the database with initial data.
  - `npm run start`: Starts the application.
  - `npm run dev`: Starts the application in development mode with `nodemon`.
  - `npm test`: Runs tests with Jest.

</details>

<details>
  <summary><h2>🐳 Docker</h2></summary>

  The application is fully containerized with Docker. To start the environment, use:

  ```bash
  docker-compose up -d
  docker exec -it blogs_api /bin/sh
  npm run prestart
  npm start
  ```

</details>

<details>
  <summary><h2>🔗 Other Projects</h2></summary>

  - ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_en.md)
  - 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_en.md)
  - 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_en.md)

</details>