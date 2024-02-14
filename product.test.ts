import product from "./product";

describe("There is a product", () => {
  test("it has a name", () => {
    expect(product.name).toBe("book");
  });

  test("it has a price", () => {
    expect(product.price).toBe(15);
  });
});
