import usecases from "../src/usecases/getAllBooks.usecase";

describe("All books usecases", () => {
  it("should get all books", () => {
    const response = usecases.getAllbooksUseCase();
    expect(typeof response).toBe("object");
    expect(response.length).toBe(13);
  });
});
