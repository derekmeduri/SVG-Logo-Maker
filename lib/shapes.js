//class for shapes
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

//Triangle/Polygon class
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
  }
}
//Circle class
class Circle extends Shape {
  render() {
    return `
    <circle cx="150" cy="100" r="75" fill="${this.color}" />`;
  }
}
//Square class
class Square extends Shape {
  render() {
    return `<rect x="150" y="150" width="150" height="150" fill="${this.color}">`;
  }
}

//exporting shapes so they can be used in cli function
module.exports = { Triangle, Circle, Square };
