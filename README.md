# MiniBlog API

API REST desarrollada con **Node.js, Express y PostgreSQL** para gestionar autores y publicaciones.

**Proyecto Integrador — Módulo 2 de Henry**

**Autor:** Martín Blanco

---

## 🚀 Demo en producción

- **API:** [https://proyectom2martinblanco-production.up.railway.app](https://proyectom2martinblanco-production.up.railway.app)
- **Swagger UI:** [https://proyectom2martinblanco-production.up.railway.app/api-docs](https://proyectom2martinblanco-production.up.railway.app/api-docs)

---

## 📋 Descripción

API REST desarrollada como trabajo integrador del Módulo 2 de Henry.

Permite realizar operaciones **CRUD** sobre las entidades `authors` y `posts`, utilizando PostgreSQL como base de datos, documentación con Swagger/OpenAPI y pruebas automatizadas con Supertest.

---

## 🛠️ Tecnologías utilizadas

- Node.js
- Express.js
- PostgreSQL
- Swagger UI (OpenAPI 3.0)
- Supertest

---

## ✨ Funcionalidades

- CRUD completo de `Authors`
- CRUD completo de `Posts`
- Validaciones de datos
- Manejo centralizado de errores
- Persistencia con PostgreSQL
- Tests automatizados con Supertest
- Documentación interactiva con Swagger UI
- Deploy en Railway

---

## 📁 Estructura del proyecto

```text
ProyectoM2_MartinBlanco/
├── src/
│   ├── app.js                 # Configuración de Express
│   ├── index.js               # Punto de entrada de la aplicación
│   ├── config/
│   │   └── db.js              # Conexión a PostgreSQL
│   ├── docs/
│   │   └── swagger.js         # Configuración de Swagger
│   ├── middlewares/
│   │   └── errorHandler.js    # Middleware global de errores
│   ├── routes/
│   │   ├── authorsRoutes.js   # Rutas de autores
│   │   └── postsRoutes.js     # Rutas de posts
│   └── services/
│       ├── authorsService.js  # Lógica y consultas de autores
│       └── postsService.js    # Lógica y consultas de posts
├── sql/
│   ├── setup.sql              # Creación de tablas
│   └── seed.sql               # Datos iniciales
├── test/
│   └── api.test.js            # Pruebas con Supertest
├── docs/
│   └── openapi.yaml           # Documentación OpenAPI
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/MarBlanco/ProyectoM2_MartinBlanco.git
```

### 2. Ingresar al proyecto

```bash
cd ProyectoM2_MartinBlanco
```

### 3. Instalar las dependencias

```bash
npm install
```

---

## 🗄️ Configuración de la base de datos

1. Crear una base de datos llamada `miniblog`.
2. Ejecutar el script `sql/setup.sql` para crear las tablas.
3. Ejecutar el script `sql/seed.sql` para cargar los datos iniciales.

---

## 🔐 Variables de entorno

Crear un archivo `.env` tomando como referencia el archivo `.env.example`.

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tu_password
DB_NAME=miniblog
```

---

## ▶️ Ejecutar la aplicación

Para iniciar el servidor:

```bash
npm start
```

La API estará disponible en:

```text
http://localhost:3000
```

---

## 🧪 Ejecutar los tests

```bash
npm test
```

Los tests automatizados utilizan **Node Test** y **Supertest**.

---

## 📚 Documentación de la API

La API cuenta con documentación interactiva mediante **Swagger UI**.

### Entorno local

```text
http://localhost:3000/api-docs
```

### Entorno de producción

[https://proyectom2martinblanco-production.up.railway.app/api-docs](https://proyectom2martinblanco-production.up.railway.app/api-docs)

---

## 🔗 Endpoints

### Authors

| Método | Endpoint       | Descripción               |
| ------ | -------------- | ------------------------- |
| GET    | `/authors`     | Obtener todos los autores |
| POST   | `/authors`     | Crear un nuevo autor      |
| GET    | `/authors/:id` | Obtener un autor por ID   |
| PUT    | `/authors/:id` | Actualizar un autor       |
| DELETE | `/authors/:id` | Eliminar un autor         |

### Posts

| Método | Endpoint                  | Descripción                   |
| ------ | ------------------------- | ----------------------------- |
| GET    | `/posts`                  | Obtener todos los posts       |
| POST   | `/posts`                  | Crear un nuevo post           |
| GET    | `/posts/:id`              | Obtener un post por ID        |
| PUT    | `/posts/:id`              | Actualizar un post            |
| DELETE | `/posts/:id`              | Eliminar un post              |
| GET    | `/posts/author/:authorId` | Obtener los posts de un autor |

---

## 🚂 Deployment en Railway

La aplicación fue desplegada en Railway utilizando un servicio para la API y una base de datos PostgreSQL.

### URL de producción

```text
https://proyectom2martinblanco-production.up.railway.app
```

### Variables de entorno

En Railway se utiliza:

```env
DATABASE_URL=${{Postgres.DATABASE_URL}}
```

### Inicialización de la base de datos

Una vez creada la base de datos en Railway, se ejecutaron los scripts:

- `sql/setup.sql` para crear las tablas.
- `sql/seed.sql` para cargar los datos iniciales.

---

## 🤖 Registro de uso de IA

Durante el desarrollo del proyecto se utilizó **ChatGPT** como herramienta de apoyo para:

- Comprender conceptos de Express, PostgreSQL y consultas SQL.
- Resolver dudas durante la implementación de los endpoints CRUD.
- Revisar y corregir errores en el código.
- Elaborar la documentación del proyecto (README y Swagger/OpenAPI).

Todas las respuestas fueron analizadas, adaptadas y verificadas antes de incorporarlas al proyecto.

### Ejemplos de prompts utilizados

**Prompt 1**

> Estoy conectando mi proyecto de Express con PostgreSQL y necesito reemplazar los datos en memoria por consultas SQL. ¿Podés explicarme paso a paso cómo hacerlo sin cambiar la estructura del proyecto?

**Prompt 2**

> Ya tengo funcionando mi API, pero quiero manejar mejor los errores. ¿Cómo puedo agregar un middleware global de errores en Express para devolver respuestas HTTP correctas cuando ocurre un problema?