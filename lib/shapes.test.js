const { Circle, Square, Triangle } = require("./shapes");

// circle
describe("Circle", () => {
  test("renders shape with fill color", () => {
    const exptSvg = `<circle cx="150" cy="150" fill="blue" /> `;
    const circle = new Circle();
    circle.setColor("blue");
    const actSvg = circle.render();
    expect(actSvg).toEqual(exptSvg);
  });
  test("should accept a fillcolor param", () => {
    const exptSvg = `<circle cx="150" cy="150" fill="green" />`;
    const circle = new Circle();
    circle.setColor("green");
    const actSvg = circle.render();
    expect(actSvg).toEqual(exptSvg);
  });
});

//square
describe("Square", () => {
  test("should render shape with fill color", () => {
    const exptSvg = `<rect x="150" y="150" fill="blue"/>`;
    const square = new Square();
    square.setColor("blue");
    const actSvg = square.render();
    expect(actSvg).toEqual(exptSvg);
  });
  test("should accept a fillcolor param", () => {
    const exptSvg = `<rect x="150" y="150" fill="green"/>`;
    const square = new Square();
    square.setColor("green");
    const actSvg = square.render();
    expect(actSvg).toEqual(exptSvg);
  });
});

//triangle
describe("Triangle", () => {
  test("should render shape with fill color", () => {
    const exptSvg = `<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`;
    const triangle = new Triangle();
    triangle.setColor("blue");
    const actSvg = triangle.render();
    expect(actSvg).toEqual(exptSvg);
  });
  test("should accept a fillcolor param", () => {
    const exptSvg = `<polygon points="150, 18 244, 182 56, 182" fill="green"/>`;
    const triangle = new Triangle();
    triangle.setColor("green");
    const actSvg = triangle.render();
    expect(actSvg).toEqual(exptSvg);
  });
});
