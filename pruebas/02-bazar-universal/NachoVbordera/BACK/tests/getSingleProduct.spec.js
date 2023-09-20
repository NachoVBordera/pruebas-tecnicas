const app = require("../index");
const request = require("supertest");

describe("GET /api/items/:id", () => {
  const ID = 2;
  test("should return 200 status code", async () => {
    const response = await request(app).get(`/api/items/${ID}`);
    expect(response.statusCode).toBe(200);
  });
  test("should return an object", async () => {
    const response = await request(app).get(`/api/items/${ID}`);
    expect(response.body[0]).toBeInstanceOf(Object);
  });
  test("should resurn a single product matching with id", async () => {
    const response = await request(app).get(`/api/items/${ID}`);
    expect(response.body[0].id).toBe(ID);
  });
});
