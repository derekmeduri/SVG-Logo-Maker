const { Circle, Square, Triangle } = require("./shapes");

// circle
describe("Circle", () => {
  test("renders shape with fill color", () => {
    const shape = new Circle();
    expect(shape, render()).toEqual("");
  });
});

//square
describe("Square", () => {
  test("renders shape with fill color", () => {
    const shape = new Square();
    expect(shape, render()).toEqual("");
  });
});

//triangle
describe("Triangle", () => {
  test("renders shape with fill color", () => {
    const shape = new Triangle();
    expect(shape, render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
    );
  });
});
