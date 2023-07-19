//class for shapes
class shape {
  constructor() {
    this.shapeColor = "";
  }
  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}
//Triangle/Polygon class
class Triangle extends shape {
  render() {
    return `
    <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`;
  }
}
//Circle class
class Circle extends shape {
  render() {
    return `
    <circle cx="150" cy="150" fill="${this.shapeColor}" />`;
  }
}
//Square class
class Square extends shape {
  render() {
    return `<rect x="150" y="150" fill="${this.shapeColor}">`;
  }
}

//exporting shapes so they can be used in cli function
module.exports = { Triangle, Circle, Square };
