const { Circle, Square, Triangle } = require("./shapes");

// circle
describe("Circle", () => {
  test("renders shape with fill color", () => {
    const shape = new Circle("SVG", "white", "blue");
    expect(shape.render()).toEqual(
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="150" fill="blue" > <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>'
    );
  });
});

//square
describe("Square", () => {
  test("renders shape with fill color", () => {
    const shape = new Square();
    expect(shape.render()).toEqual(
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="150" y="150" fill="blue"/> <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>'
    );
  });
});

//triangle
describe("Triangle", () => {
  test("renders shape with fill color", () => {
    const shape = new Triangle();
    expect(shape.render()).toEqual(
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="150, 18 244, 182 56, 182" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>'
    );
  });
});
