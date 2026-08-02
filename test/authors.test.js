const test = require("node:test");
const assert = require("node:assert");
const request = require("supertest");

const app = require("../src/app");

test("GET /authors devuelve un arreglo", async () => {
    const response = await request(app).get("/authors");

    assert.strictEqual(response.statusCode, 200);
    assert.ok(Array.isArray(response.body));
});