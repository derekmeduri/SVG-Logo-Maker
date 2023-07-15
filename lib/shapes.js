class Shape {
  constructor(text, textColor, shapeColor) {
    (this.text = text),
      (this.textColor = textColor),
      (this.shapeColor = shapeColor);
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<polygon fill="${this.color}">`;
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<circle fill="${this.color}">`;
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<rect fill="${this.color}">`;
  }
}

module.exports = { Triangle, Circle, Square };
