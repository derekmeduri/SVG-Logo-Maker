//class for shapes
class Shape {
  constructor(text, textColor, shapeColor) {
    (this.text = text),
      (this.textColor = textColor),
      (this.shapeColor = shapeColor);
  }
}
//Triangle/Polygon class
class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  }
  render() {
    return `
    <polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
  }
}
//Circle class
class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `
    <circle cx="150" cy="150" fill="${this.color}" />`;
  }
}
//Square class
class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<rect x="150" y="150" fill="${this.color}">`;
  }
}

//exporting shapes so they can be used in cli function
module.exports = { Triangle, Circle, Square };
