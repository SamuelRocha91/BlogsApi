# <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" /> Blogs API <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" />

## 🌐 [![Португальский](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README.md) [![Испанский](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_es.md) [![Английский](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ch.md) [![عربي](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ar.md)

![Предварительный просмотр приложения](./assets/blogs.png) ![Предварительный просмотр приложения](./assets/blogs02.png)
![Предварительный просмотр приложения](./assets/blogs03.png)

<details>
  <summary><h2>📜 Описание</h2></summary>

  Это оценочный проект, разработанный в рамках модуля BackEnd курса веб-разработки от Trybe. Проект состоит из простого API, разработанного в начале моего обучения, с использованием Node.js, Sequelize, Docker и архитектуры MSC (Модель, Сервис, Контроллер). Цель проекта заключалась в создании RESTful API для управления публикациями в блогах, включая аутентификацию и валидацию пользователей.

</details>

<details>
  <summary><h2>🛠️ Функциональные возможности</h2></summary>

  - **Аутентификация пользователей:** Пользователи могут регистрироваться, входить в систему и получать информацию о своих профилях. Аутентификация осуществляется с помощью токенов JWT.
  - **Категории публикаций:** API позволяет создавать и отображать категории для организации публикаций.
  - **CRUD для публикаций:** Аутентифицированные пользователи могут создавать, отображать, обновлять и удалять публикации.
  - **Слойная архитектура (MSC):** Проект следует архитектуре MSC, разделяя бизнес-логику (сервисы), логику управления (контроллеры) и взаимодействие с базой данных (модели).
  - **Промежуточное ПО:** Используется для валидации вводимых данных и аутентификации маршрутов.

</details>

<details>
  <summary><h2>🔧 Используемые технологии</h2></summary>

  - **Node.js:** Платформа для разработки бэкенда.
  - **Express:** Веб-фреймворк для создания маршрутов и промежуточного ПО.
  - **Sequelize:** ORM, используемый для моделирования и взаимодействия с базой данных MySQL.
  - **MySQL:** Реляционная база данных.
  - **JWT (JSON Web Token):** Используется для аутентификации пользователей.
  - **Docker:** Для контейнеризации приложения, упрощая среду разработки.
  - **Jest:** Фреймворк для тестирования, используемый для обеспечения качества кода.

</details>

<details>
  <summary><h2>📋 Требования</h2></summary>

  - **Node.js** версия 16.x
  - **Docker** и **Docker Compose**
  - **MySQL**

</details>

<details>
  <summary><h2>⚙️ Установка</h2></summary>

  1. Клонируйте репозиторий:
     ```bash
     git clone git@github.com:SamuelRocha91/BlogsApi.git
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

  5. Заполните базу данных начальными данными (если необходимо):
     ```bash
     npm run seed
     ```

</details>

<details>
  <summary><h2>📡 Маршруты</h2></summary>

  API имеет следующие маршруты:

  ### Пользователи
  - `POST /login`: Аутентификация пользователя.
  - `POST /user`: Регистрация нового пользователя.
  - `GET /user`: Возвращает зарегистрированных пользователей (требуется аутентификация).
  - `GET /user/:id`: Возвращает пользователя по ID (требуется аутентификация).

  ### Категории
  - `POST /categories`: Регистрация новой категории (требуется аутентификация).
  - `GET /categories`: Список всех категорий (требуется аутентификация).

  ### Публикации
  - `POST /post`: Регистрация новой публикации (требуется аутентификация).

</details>

<details>
  <summary><h2>📂 Структура каталогов</h2></summary>

  - **/src**: Содержит весь исходный код приложения.
    - **/controllers**: Контроллеры маршрутов, отвечающие за получение запросов и отправку ответов.
    - **/middlewares**: Промежуточное ПО, используемое для валидации данных и аутентификации.
    - **/models**: Определения таблиц и взаимодействие с базой данных с использованием Sequelize.
    - **/services**: Содержит бизнес-логику.

</details>

<details>
  <summary><h2>📜 Скрипты</h2></summary>

  - `npm run prestart`: Создает базу данных и выполняет миграции.
  - `npm run seed`: Заполняет базу данных начальными данными.
  - `npm run start`: Запускает приложение.
  - `npm run dev`: Запускает приложение в режиме разработки с `nodemon`.
  - `npm test`: Выполняет тесты с помощью Jest.

</details>

<details>
  <summary><h2>🐳 Docker</h2></summary>

  Приложение полностью контейнеризовано с помощью Docker. Чтобы запустить окружение, используйте:

  ```bash
  docker-compose up -d
  docker exec -it blogs_api /bin/sh
  npm run prestart
  npm start
  ```

</details>

<details>
  <summary><h2>🔗 Другие проекты</h2></summary>

  - ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ru.md)
  - 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_ru.md)
  - 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ru.md)

</details>
