# <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" /> واجهة برمجة تطبيقات المدونات <img src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" alt="Node Logo" width="52" height="30" />

## 🌐 [![البرتغالية](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README.md) [![الإسبانية](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_es.md) [![الإنجليزية](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_en.md) [![الروسية](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ru.md) [![الصينية](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ar.md)

![معاينة التطبيق](./assets/blogs.png) ![معاينة التطبيق](./assets/blogs02.png)
![معاينة التطبيق](./assets/blogs03.png)

<details>
  <summary><h2>📜 الوصف</h2></summary>

  هذا مشروع تقييم كجزء من دورة تطوير الويب في Trybe، في وحدة الواجهة الخلفية. يتكون المشروع من واجهة برمجة تطبيقات بسيطة، تم تطويرها خلال مراحل تعلمي الأولى، باستخدام Node.js وSequelize وDocker وMSC (نموذج، خدمة، وحدة تحكم) كهيكل. الهدف من المشروع هو إنشاء واجهة برمجة تطبيقات RESTful لإدارة المنشورات في المدونات، بما في ذلك مصادقة المستخدم والتحقق.

</details>

<details>
  <summary><h2>🛠️ الميزات</h2></summary>

  - **مصادقة المستخدم:** يمكن للمستخدمين التسجيل وتسجيل الدخول والحصول على معلومات ملفاتهم الشخصية. يتم تنفيذ المصادقة من خلال رموز JWT.
  - **فئات المنشورات:** تتيح واجهة برمجة التطبيقات إنشاء وعرض الفئات لتنظيم المنشورات.
  - **عمليات CRUD للمنشورات:** يمكن للمستخدمين المصادق عليهم إنشاء وعرض وتحديث وحذف المنشورات.
  - **الهيكل الطبقي (MSC):** يتبع المشروع هيكل MSC، حيث يتم فصل منطق العمل (الخدمات) ومنطق الإدارة (وحدات التحكم) والتفاعل مع قاعدة البيانات (النماذج).
  - **الوسطاء:** للتحقق من بيانات الإدخال والتحقق من صحة المسارات.

</details>

<details>
  <summary><h2>🔧 التقنيات المستخدمة</h2></summary>

  - **Node.js:** منصة تطوير الواجهة الخلفية.
  - **Express:** إطار العمل لإنشاء المسارات والوسطاء.
  - **Sequelize:** ORM لتعريف النماذج والتفاعل مع قاعدة بيانات MySQL.
  - **MySQL:** قاعدة بيانات علائقية.
  - **JWT (JSON Web Token):** لمصادقة المستخدم.
  - **Docker:** لتغليف التطبيقات وتبسيط بيئة التطوير.
  - **Jest:** إطار العمل للاختبار لضمان جودة الكود.

</details>

<details>
  <summary><h2>📋 المتطلبات</h2></summary>

  - **Node.js** الإصدار 16.x
  - **Docker** و **Docker Compose**
  - **MySQL**

</details>

<details>
  <summary><h2>⚙️ التثبيت</h2></summary>

  1. استنساخ مستودع الكود:
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

  4. تنفيذ الهجرات وإنشاء قاعدة البيانات:
     ```bash
     docker exec -it blogs_api /bin/sh
     npm run prestart
     ```

  5. ملء البيانات الأولية في قاعدة البيانات (إذا لزم الأمر):
     ```bash
     npm run seed
     ```

</details>

<details>
  <summary><h2>📡 المسارات</h2></summary>

  تحتوي واجهة برمجة التطبيقات على المسارات التالية:

  ### المستخدم
  - `POST /login`：مصادقة المستخدم.
  - `POST /user`：تسجيل مستخدم جديد.
  - `GET /user`：إرجاع المستخدمين المسجلين (يتطلب المصادقة).
  - `GET /user/:id`：إرجاع المستخدم حسب المعرف (يتطلب المصادقة).

  ### الفئات
  - `POST /categories`：تسجيل فئة جديدة (يتطلب المصادقة).
  - `GET /categories`：إرجاع قائمة بجميع الفئات (يتطلب المصادقة).

  ### المنشورات
  - `POST /post`：تسجيل منشور جديد (يتطلب المصادقة).

</details>

<details>
  <summary><h2>📂 هيكل المجلدات</h2></summary>

  - **/src**: يحتوي على كل التعليمات البرمجية المصدرية للتطبيق.
    - **/controllers**: وحدات التحكم الخاصة بالمستخدم التي تعالج الطلبات وترد على الاستجابات.
    - **/middlewares**: الوسطاء للتحقق من البيانات والتحقق من صحة المستخدمين.
    - **/models**: تعريف الجداول باستخدام Sequelize والتفاعل مع قاعدة البيانات.
    - **/services**: يحتوي على منطق العمل.

</details>

<details>
  <summary><h2>📜 النصوص</h2></summary>

  - `npm run prestart`：إنشاء قاعدة البيانات وتنفيذ الهجرات.
  - `npm run seed`：ملء البيانات الأولية في قاعدة البيانات.
  - `npm run start`：بدء التطبيق.
  - `npm run dev`：بدء التطبيق في وضع التطوير باستخدام `nodemon`.
  - `npm test`：تنفيذ الاختبارات باستخدام Jest.

</details>

<details>
  <summary><h2>🐳 Docker</h2></summary>

  يتم تغليف التطبيق بالكامل بواسطة حاويات Docker. لتشغيل البيئة، استخدم:

  ```bash
  docker-compose up -d
  docker exec -it blogs_api /bin/sh
  npm run prestart
  npm start
  ```

</details>

<details>
  <summary><h2>🔗 مشاريع أخرى</h2></summary>

  - ⚽ [واجهة برمجة تطبيقات كرة القدم بتنسيق Typescript](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ar.md)
  - 🐉 [تجارب وتنانين](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_ar.md)
  - 🗡️ [تجربة سميث](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ar.md)

</details>
