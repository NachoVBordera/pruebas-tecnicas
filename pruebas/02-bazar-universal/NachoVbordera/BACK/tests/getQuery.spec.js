const app = require("../app");
const request = require("supertest");

describe("GET /api/items/", () => {
  const QUERY = "i";
  test("should return 200 status code", async () => {
    const response = await request(app).get(`/api/items?q=${QUERY}`);
    expect(response.statusCode).toBe(200);
  });
  test("shuld return an Array", async () => {
    const response = await request(app).get(`/api/items?q=${QUERY}`);
    expect(response.body).toBeInstanceOf(Array);
  });
});
