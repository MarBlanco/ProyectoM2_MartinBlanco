const test = require("node:test");
const assert = require("node:assert");
const request = require("supertest");

const app = require("../src/app");

test("GET /authors devuelve un arreglo", async () => {
    const response = await request(app).get("/authors");

    assert.strictEqual(response.statusCode, 200);
    assert.ok(Array.isArray(response.body));
});

test("POST /authors crea un autor", async () => {
    const response = await request(app)
        .post("/authors")
        .send({
            name: "Autor Test",
            email: `autor${Date.now()}@test.com`,
            bio: "Creado por Supertest",
        });

    assert.strictEqual(response.statusCode, 201);
    assert.strictEqual(response.body.name, "Autor Test");
});

test("POST /posts crea un post", async () => {
    const response = await request(app)
        .post("/posts")
        .send({
            title: `Post ${Date.now()}`,
            content: "Contenido creado por Supertest",
            author_id: 1,
        });

    assert.strictEqual(response.statusCode, 201);
    assert.strictEqual(response.body.author_id, 1);
});

test("DELETE /authors/:id devuelve 404 si el autor no existe", async () => {
    const response = await request(app).delete("/authors/999999");

    assert.strictEqual(response.statusCode, 404);
});