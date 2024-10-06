# <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" /> Blogs API <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ar.md)

![Preview de la aplicación](./assets/blogs.png) ![Preview de la aplicación](./assets/blogs02.png)
![Preview de la aplicación](./assets/blogs03.png)

<details>
  <summary><h2>📜 Descripción</h2></summary>

  Este es un proyecto evaluativo desarrollado como parte del módulo de BackEnd del curso de Desarrollo Web de la Trybe. El proyecto consiste en una API simple, desarrollada al inicio de mis estudios, utilizando Node.js, Sequelize, Docker y la arquitectura MSC (Modelo, Servicio, Controlador). El objetivo del proyecto fue construir una API RESTful para la gestión de publicaciones de blogs, incluyendo autenticación y validación de usuarios.

</details>

<details>
  <summary><h2>🛠️ Funcionalidades</h2></summary>

  - **Autenticación de Usuarios:** Los usuarios pueden registrarse, iniciar sesión y obtener información de sus perfiles. La autenticación se realiza utilizando tokens JWT.
  - **Categorías de Publicaciones:** La API permite la creación y listado de categorías para organizar las publicaciones.
  - **CRUD de Publicaciones:** Los usuarios autenticados pueden crear, listar, actualizar y eliminar publicaciones.
  - **Arquitectura en Capas (MSC):** El proyecto sigue la arquitectura MSC, separando la lógica de negocio (services), la lógica de control (controllers) y la comunicación con la base de datos (models).
  - **Middlewares:** Utilizados para la validación de entradas y autenticación de rutas.

</details>

<details>
  <summary><h2>🔧 Tecnologías Utilizadas</h2></summary>

  - **Node.js:** Plataforma de desarrollo backend.
  - **Express:** Framework web para crear rutas y middlewares.
  - **Sequelize:** ORM utilizado para modelar e interactuar con la base de datos MySQL.
  - **MySQL:** Base de datos relacional.
  - **JWT (JSON Web Token):** Utilizado para la autenticación de usuarios.
  - **Docker:** Para la contenedorización de la aplicación, facilitando el entorno de desarrollo.
  - **Jest:** Framework de pruebas utilizado para garantizar la calidad del código.

</details>

<details>
  <summary><h2>📋 Requisitos</h2></summary>

  - **Node.js** versión 16.x
  - **Docker** y **Docker Compose**
  - **MySQL**

</details>

<details>
  <summary><h2>⚙️ Instalación</h2></summary>

  1. Clona el repositorio:
     ```bash
     git clone https://github.com/seu-usuario/blogs-api.git
     cd blogs-api
     ```

  2. Crea el archivo `.env` basado en `.env.example`:
     ```bash
     cp env.example .env
     ```

  3. Levanta los contenedores Docker:
     ```bash
     docker-compose up -d
     ```

  4. Ejecuta las migraciones y crea la base de datos:
     ```bash
     docker exec -it blogs_api /bin/sh
     npm run prestart
     ```

  5. Población de la base de datos con datos iniciales (si es necesario):
     ```bash
     npm run seed
     ```

</details>

<details>
  <summary><h2>📡 Rutas</h2></summary>

  La API tiene las siguientes rutas:

  ### Usuarios
  - `POST /login`: Autentica un usuario.
  - `POST /user`: Registra un nuevo usuario.
  - `GET /user`: Devuelve los usuarios registrados (necesita autenticación).
  - `GET /user/:id`: Devuelve el usuario según el ID (necesita autenticación).

  ### Categorías
  - `POST /categories`: Registra una nueva categoría (necesita autenticación).
  - `GET /categories`: Lista todas las categorías (necesita autenticación).

  ### Publicaciones
  - `POST /post`: Registra una nueva publicación (necesita autenticación).

</details>

<details>
  <summary><h2>📂 Estructura de Carpetas</h2></summary>

  - **/src**: Contiene todo el código fuente de la aplicación.
    - **/controllers**: Controladores de las rutas, responsables de recibir solicitudes y enviar respuestas.
    - **/middlewares**: Middlewares utilizados para la validación de datos y autenticación.
    - **/models**: Definiciones de las tablas e interacciones con la base de datos usando Sequelize.
    - **/services**: Contiene la lógica de negocio.

</details>

<details>
  <summary><h2>📜 Scripts</h2></summary>

  - `npm run prestart`: Crea la base de datos y ejecuta las migraciones.
  - `npm run seed`: Población de la base de datos con datos iniciales.
  - `npm run start`: Inicia la aplicación.
  - `npm run dev`: Inicia la aplicación en modo de desarrollo con `nodemon`.
  - `npm test`: Ejecuta las pruebas con Jest.

</details>

<details>
  <summary><h2>🐳 Docker</h2></summary>

  La aplicación está completamente contenedorizada con Docker. Para levantar el entorno, utiliza:

  ```bash
  docker-compose up -d
  docker exec -it blogs_api /bin/sh
  npm run prestart
  npm start
  ```

</details>

<details>
  <summary><h2>🔗 Otros Proyectos</h2></summary>

  - ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_es.md)
  - 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_es.md)
  - 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_es.md)

</details>