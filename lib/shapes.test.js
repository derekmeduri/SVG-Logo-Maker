const { Cirlce, Square, Triangle } = require("./shapes");

// circle
describe("Circle", () => {
  test("renders correctly", () => {
    const shape = new Circle();
    var color = "Red";
    shape.setColor(color);
    expect(shape, render()).toEqual("");
  });
});

//square
describe("Square", () => {
  test("renders correctly", () => {
    const shape = new Square();
    var color = "Yellow";
    shape.setColor(color);
    expect(shape, render()).toEqual("");
  });
});

//triangle
describe("Circle", () => {
  test("renders correctly", () => {
    const shape = new Triangle();
    var color = "Blue";
    shape.setColor(color);
    expect(shape, render()).toEqual("");
  });
});
