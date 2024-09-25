# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> Blogs API <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ar.md)

![Vista previa de la aplicación](./assets/blogs.png) ![Vista previa de la aplicación](./assets/blogs02.png)
![Vista previa de la aplicación](./assets/blogs03.png)

Este es un proyecto evaluativo desarrollado como parte del módulo de BackEnd del curso de Desarrollo Web de Trybe. El proyecto consiste en una API simple, desarrollada al inicio de mis estudios, utilizando Node.js, Sequelize, Docker y la arquitectura MSC (Modelo, Servicio, Controlador). El objetivo del proyecto fue construir una API RESTful para la gestión de publicaciones de blogs, incluyendo autenticación y validación de usuarios.

## Funcionalidades

- **Autenticación de Usuarios:** Los usuarios pueden registrarse, iniciar sesión y obtener información de sus perfiles. La autenticación se realiza utilizando tokens JWT.
- **Categorías de Publicaciones:** La API permite la creación y el listado de categorías para organizar las publicaciones.
- **CRUD de Publicaciones:** Los usuarios autenticados pueden crear, listar, actualizar y eliminar publicaciones.
- **Arquitectura en Capas (MSC):** El proyecto sigue la arquitectura MSC, separando la lógica de negocio (servicios), la lógica de control (controladores) y la comunicación con la base de datos (modelos).
- **Middlewares:** Utilizados para la validación de entradas y la autenticación de rutas.

## Tecnologías Utilizadas

- **Node.js:** Plataforma de desarrollo backend.
- **Express:** Framework web para crear rutas y middlewares.
- **Sequelize:** ORM utilizado para modelar e interactuar con la base de datos MySQL.
- **MySQL:** Base de datos relacional.
- **JWT (JSON Web Token):** Utilizado para la autenticación de usuarios.
- **Docker:** Para la contenerización de la aplicación, facilitando el entorno de desarrollo.
- **Jest:** Framework de pruebas utilizado para garantizar la calidad del código.

## Requisitos

- **Node.js** versión 16.x
- **Docker** y **Docker Compose**
- **MySQL**

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/seu-usuario/blogs-api.git
   cd blogs-api
   ```

2. Crea el archivo `.env` basado en `.env.example`:
   ```bash
   cp env.example .env
   ```

3. Levanta los contenedores de Docker:
   ```bash
   docker-compose up -d
   ```

4. Ejecuta las migraciones y crea la base de datos:
   ```bash
   docker exec -it blogs_api /bin/sh
   npm run prestart
   ```

5. Pobla la base de datos con datos iniciales (si es necesario):
   ```bash
   npm run seed
   ```

## Rutas

La API posee las siguientes rutas:

### Usuarios
- `POST /login`: Autentica a un usuario.
- `POST /user`: Registra a un nuevo usuario.
- `GET /user`: Retorna los usuarios registrados (requiere autenticación).
- `GET /user/:id`: Retorna el usuario por ID (requiere autenticación).

### Categorías
- `POST /categories`: Registra una nueva categoría (requiere autenticación).
- `GET /categories`: Lista todas las categorías (requiere autenticación).

### Publicaciones
- `POST /post`: Registra una nueva publicación (requiere autenticación).

## Estructura de Carpetas

- **/src**: Contiene todo el código fuente de la aplicación.
  - **/controllers**: Controladores de las rutas, responsables de recibir peticiones y enviar respuestas.
  - **/middlewares**: Middlewares utilizados para la validación de datos y autenticación.
  - **/models**: Definiciones de las tablas e interacciones con la base de datos usando Sequelize.
  - **/services**: Contiene la lógica de negocio.

## Scripts

- `npm run prestart`: Crea la base de datos y ejecuta las migraciones.
- `npm run seed`: Pobla la base de datos con datos iniciales.
- `npm run start`: Inicia la aplicación.
- `npm run dev`: Inicia la aplicación en modo de desarrollo con `nodemon`.
- `npm test`: Ejecuta las pruebas con Jest.

## Docker

La aplicación está completamente contenerizada con Docker. Para levantar el entorno, utiliza:

```bash
docker-compose up -d
docker exec -it blogs_api /bin/sh
npm run prestart
npm start
```

## Otros proyectos

- ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_es.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_es.md)
- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_es.md)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_es.md)
- 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_es.md)
- 👛 [Expense organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_es.md)
- 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_es.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_es.md)
