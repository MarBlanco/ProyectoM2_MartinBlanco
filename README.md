# API MiniBlog

API REST desarrollada con Node.js, Express y PostgreSQL para gestionar autores y publicaciones.

## Autor

- **Nombre:** Martín Blanco

## Descripción

API REST desarrollada como trabajo integrador del Módulo 2 de Henry.

Permite realizar operaciones CRUD sobre las entidades `authors` y `posts`, utilizando PostgreSQL como base de datos, documentación con Swagger/OpenAPI y pruebas automatizadas con Supertest.

## Requisitos

- Node.js
- PostgreSQL
- Git
- npm

## Estructura del proyecto

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

## Instalación

1. Clonar el repositorio.

```bash
git clone https://github.com/MarBlanco/ProyectoM2_MartinBlanco.git
```

2. Ingresar al proyecto.

```bash
cd ProyectoM2_MartinBlanco
```

3. Instalar dependencias.

```bash
npm install
```

## Configuración de la base de datos

1. Crear una base de datos llamada `miniblog`.

2. Ejecutar el script `setup.sql` para crear las tablas.

3. Ejecutar el script `seed.sql` para cargar los datos de ejemplo.


## Variables de entorno

Crear un archivo `.env` tomando como referencia el archivo `.env.example`.

Ejemplo:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tu_password
DB_NAME=miniblog
```

## Ejecutar la aplicación

Para iniciar el servidor, ejecutar:

```bash
npm start
```

Si todo está configurado correctamente, la API estará disponible en:

```
http://localhost:3000
```

## Ejecutar los tests

Para ejecutar las pruebas:

```bash
npm test
```

## Documentación de la API

La documentación está disponible mediante Swagger UI.

Con la aplicación en ejecución, ingresar a:

```
http://localhost:3000/api-docs
```

## Registro de uso de IA

Durante el desarrollo del proyecto se utilizó ChatGPT como herramienta de apoyo para:

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