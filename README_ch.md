# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> 博客 API <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ar.md)

![应用程序预览](./assets/blogs.png) ![应用程序预览](./assets/blogs02.png)
![应用程序预览](./assets/blogs03.png)

这是一个学习项目，开发于Trybe Web开发课程的后端模块中。该项目是一个使用Node.js、Sequelize、Docker和MSC架构（模型-服务-控制器）开发的简单API。项目的目标是创建一个管理博客帖子的RESTful API，包括用户认证和验证。

## 功能

- **用户认证**：用户可以注册、登录并获取其个人资料信息。通过JWT令牌进行身份验证。
- **文章分类**：API允许创建和查看分类，以组织博客文章。
- **文章的CRUD**：认证用户可以创建、查看、更新和删除博客文章。
- **多层架构（MSC）**：该项目遵循MSC架构，将业务逻辑（服务）、控制逻辑（控制器）和数据库交互（模型）分离。
- **中间件**：用于验证数据和路由认证。

## 使用的技术

- **Node.js**：用于服务器端开发的平台。
- **Express**：用于创建路由和中间件的Web框架。
- **Sequelize**：用于建模和与MySQL数据库交互的ORM。
- **MySQL**：关系型数据库。
- **JWT (JSON Web Token)**：用于用户认证。
- **Docker**：用于应用容器化，简化开发环境配置。
- **Jest**：用于代码质量保证的测试框架。

## 要求

- **Node.js** 16.x版本
- **Docker** 和 **Docker Compose**
- **MySQL**

## 安装

1. 克隆此仓库：
   ```bash
   git clone https://github.com/seu-usuario/blogs-api.git
   cd blogs-api
   ```

2. 根据 `.env.example` 创建 `.env` 文件：
   ```bash
   cp env.example .env
   ```

3. 启动Docker容器：
   ```bash
   docker-compose up -d
   ```

4. 运行迁移并创建数据库：
   ```bash
   docker exec -it blogs_api /bin/sh
   npm run prestart
   ```

5. （可选）用种子数据填充数据库：
   ```bash
   npm run seed
   ```

## 路由

API提供了以下路由：

### 用户
- `POST /login`：认证用户。
- `POST /user`：注册新用户。
- `GET /user`：返回已注册的用户（需要认证）。
- `GET /user/:id`：根据ID返回用户（需要认证）。

### 分类
- `POST /categories`：注册新分类（需要认证）。
- `GET /categories`：显示所有分类（需要认证）。

### 博客文章
- `POST /post`：创建新文章（需要认证）。

## 文件夹结构

- **/src**：包含应用的源代码。
  - **/controllers**：处理路由的控制器，负责接收请求和发送响应。
  - **/middlewares**：用于数据验证和路由认证的中间件。
  - **/models**：使用Sequelize定义表结构并与数据库交互。
  - **/services**：包含业务逻辑。

## 脚本

- `npm run prestart`：创建数据库并运行迁移。
- `npm run seed`：用种子数据填充数据库。
- `npm run start`：启动应用。
- `npm run dev`：使用 `nodemon` 启动开发模式下的应用。
- `npm test`：使用Jest运行测试。

## Docker

该应用已完全容器化，使用Docker进行开发。要启动环境，请运行：

```bash
docker-compose up -d
docker exec -it blogs_api /bin/sh
npm run prestart
npm start
```

## 其他项目

- ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ch.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_ch.md)
- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ch.md)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_ch.md)
- 🏪 [FrontEnd Online Store](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ch.md)
- 👛 [Expense organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ch.md)
- 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ch.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ch.md)


