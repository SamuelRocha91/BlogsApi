# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> Blogs API <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ar.md)

![Предварительный просмотр приложения](./assets/blogs.png) ![Предварительный просмотр приложения](./assets/blogs02.png)
![Предварительный просмотр приложения](./assets/blogs03.png)

Это учебный проект, разработанный в рамках модуля Backend курса веб-разработки Trybe. Проект представляет собой простое API, разработанное на начальном этапе моего обучения с использованием Node.js, Sequelize, Docker и архитектуры MSC (Модель, Сервис, Контроллер). Цель проекта заключалась в создании RESTful API для управления блог-постами, включая аутентификацию и проверку пользователей.

## Функционал

- **Аутентификация пользователей:** Пользователи могут регистрироваться, входить в систему и получать информацию о своих профилях. Аутентификация осуществляется с использованием JWT токенов.
- **Категории постов:** API позволяет создавать и отображать категории для организации постов.
- **CRUD для постов:** Аутентифицированные пользователи могут создавать, просматривать, обновлять и удалять посты.
- **Многоуровневая архитектура (MSC):** Проект следует архитектуре MSC, разделяя логику бизнес-уровня (сервисы), логику управления (контроллеры) и взаимодействие с базой данных (модели).
- **Мидлвары:** Используются для проверки данных и аутентификации маршрутов.

## Используемые технологии

- **Node.js:** Платформа для серверной разработки.
- **Express:** Веб-фреймворк для создания маршрутов и мидлваров.
- **Sequelize:** ORM для моделирования и взаимодействия с базой данных MySQL.
- **MySQL:** Реляционная база данных.
- **JWT (JSON Web Token):** Используется для аутентификации пользователей.
- **Docker:** Для контейнеризации приложения, что упрощает настройку среды разработки.
- **Jest:** Фреймворк для тестирования, используемый для обеспечения качества кода.

## Требования

- **Node.js** версия 16.x
- **Docker** и **Docker Compose**
- **MySQL**

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/seu-usuario/blogs-api.git
   cd blogs-api
   ```

2. Создайте файл `.env` на основе `.env.example`:
   ```bash
   cp env.example .env
   ```

3. Запустите контейнеры Docker:
   ```bash
   docker-compose up -d
   ```

4. Выполните миграции и создайте базу данных:
   ```bash
   docker exec -it blogs_api /bin/sh
   npm run prestart
   ```

5. Заполните базу данных начальными данными (при необходимости):
   ```bash
   npm run seed
   ```

## Маршруты

API содержит следующие маршруты:

### Пользователи
- `POST /login`: Аутентифицирует пользователя.
- `POST /user`: Регистрирует нового пользователя.
- `GET /user`: Возвращает зарегистрированных пользователей (требуется аутентификация).
- `GET /user/:id`: Возвращает пользователя по ID (требуется аутентификация).

### Категории
- `POST /categories`: Регистрирует новую категорию (требуется аутентификация).
- `GET /categories`: Отображает список всех категорий (требуется аутентификация).

### Посты
- `POST /post`: Создает новый пост (требуется аутентификация).

## Структура папок

- **/src**: Содержит исходный код приложения.
  - **/controllers**: Контроллеры маршрутов, отвечающие за получение запросов и отправку ответов.
  - **/middlewares**: Мидлвары для проверки данных и аутентификации.
  - **/models**: Определения таблиц и взаимодействие с базой данных через Sequelize.
  - **/services**: Содержит бизнес-логику.

## Скрипты

- `npm run prestart`: Создает базу данных и выполняет миграции.
- `npm run seed`: Заполняет базу данных начальными данными.
- `npm run start`: Запускает приложение.
- `npm run dev`: Запускает приложение в режиме разработки с использованием `nodemon`.
- `npm test`: Запускает тесты с использованием Jest.

## Docker

Приложение полностью контейнеризовано с использованием Docker. Для запуска среды используйте:

```bash
docker-compose up -d
docker exec -it blogs_api /bin/sh
npm run prestart
npm start
```

## Другие проекты

- ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ru.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_ru.md)
- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ru.md)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_ru.md)
- 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ru.md)
- 👛 [Expense organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ru.md)
- 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ru.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ru.md)

