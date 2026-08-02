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
            bio: "Creado por Supertest"
        });

    assert.strictEqual(response.statusCode, 201);
    assert.strictEqual(response.body.name, "Autor Test");
});