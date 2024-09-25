# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> واجهة برمجة تطبيقات المدونات <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ar.md)

![لقطة شاشة التطبيق](./assets/blogs.png) ![لقطة شاشة التطبيق](./assets/blogs02.png)
![لقطة شاشة التطبيق](./assets/blogs03.png)

هذا مشروع تعليمي تم تطويره في وحدة الخلفية لدورة تطوير الويب في Trybe. المشروع هو واجهة برمجة تطبيقات بسيطة (API) تم تطويرها باستخدام Node.js وSequelize وDocker وهندسة MSC (نموذج - خدمة - وحدة تحكم). الهدف من المشروع هو إنشاء واجهة برمجة تطبيقات RESTful لإدارة المنشورات في المدونات، بما في ذلك مصادقة المستخدم والتحقق من البيانات.

## الميزات

- **مصادقة المستخدم**: يمكن للمستخدمين التسجيل وتسجيل الدخول والوصول إلى معلومات ملفهم الشخصي. يتم استخدام JSON Web Token (JWT) للمصادقة.
- **إدارة الفئات**: تسمح الواجهة بإنشاء الفئات وعرضها لتنظيم المنشورات.
- **عمليات CRUD للمنشورات**: يمكن للمستخدمين المصادق عليهم إنشاء وعرض وتحديث وحذف المنشورات في المدونات.
- **هندسة متعددة الطبقات (MSC)**: يتم اتباع نمط هندسة MSC في هذا المشروع، مما يعني فصل منطق العمل (الخدمات)، والمنطق التحكم (الوحدات التحكم)، والتفاعل مع قاعدة البيانات (النماذج).
- **الوسطاء (Middleware)**: تُستخدم للتحقق من البيانات والمصادقة على الوصول إلى المسارات.

## التقنيات المستخدمة

- **Node.js**: بيئة تشغيل لتطوير الخادم.
- **Express**: إطار عمل لإنشاء المسارات والوسطاء.
- **Sequelize**: ORM لإدارة قواعد البيانات والتفاعل مع MySQL.
- **MySQL**: قاعدة بيانات علائقية.
- **JWT (JSON Web Token)**: يتم استخدامه لمصادقة المستخدم.
- **Docker**: يُستخدم لتغليف التطبيق، مما يسهل إعداد بيئة التطوير.
- **Jest**: إطار لاختبار ضمان جودة الكود.

## المتطلبات

- **Node.js** إصدار 16.x
- **Docker** و **Docker Compose**
- **MySQL**

## التثبيت

1. نسخ هذا المستودع:
   ```bash
   git clone https://github.com/seu-usuario/blogs-api.git
   cd blogs-api
   ```

2. إنشاء ملف `.env` بناءً على `.env.example`:
   ```bash
   cp env.example .env
   ```

3. تشغيل حاويات Docker:
   ```bash
   docker-compose up -d
   ```

4. تشغيل الترحيلات وإنشاء قاعدة البيانات:
   ```bash
   docker exec -it blogs_api /bin/sh
   npm run prestart
   ```

5. (اختياري) ملء قاعدة البيانات بالبيانات الأولية:
   ```bash
   npm run seed
   ```

## المسارات

توفر الواجهة البرمجية (API) المسارات التالية:

### المستخدمون
- `POST /login`: مصادقة المستخدم.
- `POST /user`: تسجيل مستخدم جديد.
- `GET /user`: جلب قائمة المستخدمين المسجلين (يتطلب مصادقة).
- `GET /user/:id`: جلب المستخدم بناءً على المعرف (يتطلب مصادقة).

### الفئات
- `POST /categories`: تسجيل فئة جديدة (يتطلب مصادقة).
- `GET /categories`: عرض جميع الفئات (يتطلب مصادقة).

### منشورات المدونة
- `POST /post`: إنشاء منشور جديد (يتطلب مصادقة).

## هيكل المجلدات

- **/src**: يحتوي على كود المصدر للتطبيق.
  - **/controllers**: وحدات التحكم التي تتعامل مع الطلبات وإرسال الاستجابات.
  - **/middlewares**: الوسطاء للتحقق من البيانات والمصادقة.
  - **/models**: النماذج المستخدمة للتفاعل مع قاعدة البيانات باستخدام Sequelize.
  - **/services**: تحتوي على منطق الأعمال.

## السكربتات

- `npm run prestart`: إنشاء قاعدة البيانات وتشغيل الترحيلات.
- `npm run seed`: ملء قاعدة البيانات بالبيانات الأولية.
- `npm run start`: بدء تشغيل التطبيق.
- `npm run dev`: تشغيل التطبيق في وضع التطوير باستخدام `nodemon`.
- `npm test`: تشغيل الاختبارات باستخدام Jest.

## Docker

التطبيق مجهز بالكامل للاستخدام داخل حاوية Docker. لبدء البيئة، قم بتشغيل الأوامر التالية:

```bash
docker-compose up -d
docker exec -it blogs_api /bin/sh
npm run prestart
npm start
```

## مشاريع أخرى

- ⚽ [واجهة برمجة تطبيقات كرة القدم بـ TypeScript](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ar.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_ar.md)
- 🌶️ [تطبيق الوصفات](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ar.md)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_ar.md)
- 🏪 [متجر على الإنترنت للواجهة الأمامية](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ar.md)
- 👛 [منظم النفقات](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ar.md)
- 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ar.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ar.md)
